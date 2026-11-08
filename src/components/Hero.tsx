"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/SocialIcons";
import {
  ArrowRight,
  Copy,
  Check,
  FileText,
  Clock,
  MapPin,
  Sparkles,
  Layers,
  Cpu,
} from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 sm:pt-40 pb-16 md:pb-24 px-4 sm:px-6 max-w-6xl mx-auto flex flex-col items-center text-center">
      {/* Top Floating Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-md shadow-inner text-xs text-zinc-300 mb-6 hover:border-zinc-700 transition-colors">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        <span className="font-medium text-zinc-200">
          Full-Stack Architect &amp; Product Engineer
        </span>
        <span className="text-zinc-600">|</span>
        <span className="text-indigo-400 font-medium hidden sm:inline">
          Open to Opportunities
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1] mb-6">
        Architecting resilient systems.{" "}
        <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-300 bg-clip-text text-transparent">
          Crafting fluid experiences.
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed mb-10">
        Hi, I&apos;m{" "}
        <span className="text-zinc-100 font-semibold">
          {portfolioData.personal.name}
        </span>
        . I specialize in designing scalable cloud backends and high-performance,
        accessible web applications that scale seamlessly.
      </p>

      {/* Action CTA Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 w-full max-w-md sm:max-w-none mb-12">
        <a
          href="#projects"
          className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 transition-all duration-200 shadow-xl shadow-white/5 hover:scale-102 cursor-pointer"
        >
          <span>Explore Projects</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>

        <button
          onClick={handleCopyEmail}
          className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700 font-medium text-sm transition-all duration-200 cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 font-medium">Email Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-zinc-400" />
              <span>Copy Email</span>
            </>
          )}
        </button>

        <a
          href="#contact"
          className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-indigo-600/10 hover:bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 hover:border-indigo-500/50 font-medium text-sm transition-all duration-200"
        >
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span>Hire Me</span>
        </a>
      </div>

      {/* Social / Fast Links */}
      <div className="flex items-center gap-4 text-zinc-400 mb-14">
        <a
          href={portfolioData.personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-zinc-900/70 border border-zinc-800 hover:text-white hover:border-zinc-700 transition-colors"
          aria-label="GitHub Profile"
        >
          <GithubIcon className="w-4 h-4" />
        </a>
        <a
          href={portfolioData.personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-zinc-900/70 border border-zinc-800 hover:text-white hover:border-zinc-700 transition-colors"
          aria-label="LinkedIn Profile"
        >
          <LinkedinIcon className="w-4 h-4" />
        </a>
        <a
          href={portfolioData.personal.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-zinc-900/70 border border-zinc-800 hover:text-white hover:border-zinc-700 transition-colors"
          aria-label="Twitter Profile"
        >
          <TwitterIcon className="w-4 h-4" />
        </a>
        <a
          href={portfolioData.personal.resumeUrl}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-900/70 border border-zinc-800 hover:text-white hover:border-zinc-700 text-xs font-medium transition-colors"
        >
          <FileText className="w-3.5 h-3.5 text-zinc-400" />
          <span>Resume</span>
        </a>
      </div>

      {/* Floating Interactive Live Info Card */}
      <div className="w-full max-w-4xl bg-zinc-950/70 border border-zinc-800/80 rounded-2xl p-4 sm:p-6 backdrop-blur-xl shadow-2xl">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800/60 text-left">
          {/* Item 1 */}
          <div className="p-2">
            <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Location</span>
            </div>
            <p className="text-sm font-semibold text-zinc-200">
              {portfolioData.personal.location.split("/")[0]}
            </p>
            <p className="text-[11px] text-zinc-500">Available worldwide</p>
          </div>

          {/* Item 2 */}
          <div className="p-2 sm:pl-4">
            <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              <span>Local Time</span>
            </div>
            <p className="text-sm font-semibold font-mono text-zinc-200">
              {time || "Loading..."}
            </p>
            <p className="text-[11px] text-zinc-500">
              {portfolioData.personal.timezone}
            </p>
          </div>

          {/* Item 3 */}
          <div className="p-2 pt-4 sm:pt-2 sm:pl-4">
            <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
              <Layers className="w-3.5 h-3.5 text-purple-400" />
              <span>Core Stack</span>
            </div>
            <p className="text-sm font-semibold text-zinc-200">Next.js &bull; Go</p>
            <p className="text-[11px] text-zinc-500">TypeScript &amp; PostgreSQL</p>
          </div>

          {/* Item 4 */}
          <div className="p-2 pt-4 sm:pt-2 sm:pl-4">
            <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
              <Cpu className="w-3.5 h-3.5 text-emerald-400" />
              <span>Current Focus</span>
            </div>
            <p className="text-sm font-semibold text-zinc-200">AI Agents &amp; Cloud</p>
            <p className="text-[11px] text-emerald-400 font-mono">● System Online</p>
          </div>
        </div>
      </div>
    </section>
  );
}
