"use client";

import { useState } from "react";
import { portfolioData, SkillCategory } from "@/data/portfolioData";
import {
  Code,
  Layout,
  Server,
  Database,
  Cloud,
  CheckCircle,
  Cpu,
  Sparkles,
} from "lucide-react";

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case "Server":
        return <Server className="w-5 h-5 text-indigo-400" />;
      case "Database":
        return <Database className="w-5 h-5 text-purple-400" />;
      case "Cloud":
        return <Cloud className="w-5 h-5 text-emerald-400" />;
      default:
        return <Cpu className="w-5 h-5 text-indigo-400" />;
    }
  };

  const displayedCategories =
    selectedCategory === "All"
      ? portfolioData.skills
      : portfolioData.skills.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-medium text-purple-400 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Technical Arsenal</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
          Skills &amp; Technology Stack
        </h2>
        <p className="text-zinc-400 max-w-xl text-sm sm:text-base">
          Battle-tested libraries, frameworks, and infrastructure tools I leverage
          to build resilient, scalable software.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              selectedCategory === "All"
                ? "bg-white text-zinc-950 font-semibold shadow-md shadow-white/10"
                : "bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800/80"
            }`}
          >
            All Disciplines
          </button>
          {portfolioData.skills.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setSelectedCategory(cat.category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.category
                  ? "bg-white text-zinc-950 font-semibold shadow-md shadow-white/10"
                  : "bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800/80"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedCategories.map((group: SkillCategory) => (
          <div
            key={group.category}
            className="rounded-3xl bg-zinc-950/70 border border-zinc-800/80 p-6 sm:p-7 backdrop-blur-xl hover:border-zinc-700 transition-all duration-300"
          >
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800/70 mb-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-zinc-900 border border-zinc-800">
                  {getCategoryIcon(group.iconName)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {group.category}
                  </h3>
                  <p className="text-xs text-zinc-500 font-mono">
                    {group.skills.length} core competencies
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`p-3 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                    skill.highlight
                      ? "bg-indigo-950/20 border-indigo-500/30 text-white shadow-sm"
                      : "bg-zinc-900/50 border-zinc-800/70 text-zinc-300 hover:border-zinc-700"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle
                      className={`w-4 h-4 shrink-0 ${
                        skill.highlight ? "text-indigo-400" : "text-zinc-500"
                      }`}
                    />
                    <span className="text-xs font-medium">{skill.name}</span>
                  </div>

                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                      skill.level === "Advanced"
                        ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                        : "bg-zinc-800 text-zinc-400"
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
