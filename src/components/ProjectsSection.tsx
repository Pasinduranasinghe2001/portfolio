"use client";

import { useState } from "react";
import { portfolioData, Project } from "@/data/portfolioData";
import { GithubIcon } from "@/components/SocialIcons";
import {
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  FolderGit2,
} from "lucide-react";

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Full-Stack", "Frontend", "Backend / AI", "DevOps & Cloud"];

  const filteredProjects =
    activeCategory === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-400 mb-3">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Selected Works</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
          Production Systems &amp; Web Applications
        </h2>
        <p className="text-zinc-400 max-w-xl text-sm sm:text-base">
          A showcase of mission-critical platforms, developer tooling, and modern
          web interfaces built with precision.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-white text-zinc-950 font-semibold shadow-md shadow-white/10 scale-102"
                  : "bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project: Project) => (
          <div
            key={project.id}
            className="group relative rounded-3xl bg-zinc-950/70 border border-zinc-800/80 overflow-hidden backdrop-blur-xl flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/5 hover:-translate-y-1"
          >
            {/* Visual Header / Simulated Window */}
            <div
              className={`relative h-48 w-full bg-gradient-to-br ${project.gradient} border-b border-zinc-800/70 p-5 flex flex-col justify-between overflow-hidden`}
            >
              {/* Abstract decorative graphic elements */}
              <div className="absolute inset-0 bg-grid-pattern opacity-40" />
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />

              {/* Top controls in mockup */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>

                <div className="flex items-center gap-2">
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-indigo-500/30 border border-indigo-400/40 text-[10px] font-semibold text-indigo-200">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                  <span className="px-2.5 py-0.5 rounded-full bg-zinc-900/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Title inside card preview */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-300/90 font-medium line-clamp-1 mt-0.5">
                  {project.subtitle}
                </p>
              </div>
            </div>

            {/* Project Details Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Impact metric if present */}
                {project.metrics && (
                  <div className="flex items-start gap-2 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs mb-5">
                    <TrendingUp className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{project.metrics}</span>
                  </div>
                )}

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-900">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Source Code</span>
                </a>

                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white text-white hover:text-zinc-950 transition-all duration-200"
                >
                  <span>Live Preview</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
