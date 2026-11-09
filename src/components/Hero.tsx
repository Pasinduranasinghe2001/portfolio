"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import {
  ArrowRight,
  Copy,
  Check,
  FileDown,
  Clock,
  MapPin,
  Sparkles,
  GraduationCap,
  Award,
  Layers,
  Code2,
  Mail,
  Phone,
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
    <section className="relative pt-32 sm:pt-36 pb-16 md:pb-24 px-4 sm:px-6 max-w-6xl mx-auto flex flex-col items-center">
      {/* Top Floating Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-md shadow-inner text-xs text-zinc-300 mb-8 hover:border-zinc-700 transition-colors">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        <span className="font-medium text-zinc-200">
          Computer Engineering Undergraduate &bull; University of Jaffna
        </span>
        <span className="text-zinc-600 hidden sm:inline">|</span>
        <span className="text-indigo-400 font-medium hidden sm:inline">
          IEEE Student Member
        </span>
      </div>

      {/* Main Hero Container: Split Profile Card & Headline */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
        {/* Left Column: Headline and Bio (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-300 bg-clip-text text-transparent">
              {portfolioData.personal.name}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 font-medium leading-relaxed mb-4">
            Computer Engineering Undergraduate &amp; Full-Stack Software Engineer
          </p>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-8 max-w-xl">
            {portfolioData.personal.bio}
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full mb-8">
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-semibold text-sm shadow-xl shadow-indigo-500/20 transition-all duration-200 hover:scale-102 cursor-pointer"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV</span>
            </a>

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
          </div>

          {/* Social and Quick Contact Links */}
          <div className="flex flex-wrap items-center gap-4 text-zinc-400">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:text-white hover:border-zinc-700 transition-colors text-xs font-medium"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:text-white hover:border-zinc-700 transition-colors text-xs font-medium"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:text-white hover:border-zinc-700 transition-colors text-xs font-medium"
            >
              <Mail className="w-4 h-4 text-indigo-400" />
              <span>{portfolioData.personal.email}</span>
            </a>

            <a
              href={`tel:${portfolioData.personal.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:text-white hover:border-zinc-700 transition-colors text-xs font-medium"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>{portfolioData.personal.phone}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Prominent Portrait Photo Card (5 Cols) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group w-full max-w-[340px] sm:max-w-[370px]">
            {/* Subtle Gradient Glow Ring behind portrait */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-indigo-500 via-cyan-400 to-purple-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-500" />

            {/* Portrait Card */}
            <div className="relative rounded-3xl bg-zinc-950 border border-zinc-800/90 overflow-hidden shadow-2xl">
              <div className="relative h-[410px] w-full overflow-hidden bg-zinc-900">
                <Image
                  src={portfolioData.personal.image}
                  alt={portfolioData.personal.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top group-hover:scale-103 transition-transform duration-500"
                />
                {/* Subtle vignette gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                {/* Floating Badge on Image: Seeking Internship */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-950/85 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-[11px] font-semibold shadow-lg">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Intern Candidate</span>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-4 bg-zinc-950/90 border-t border-zinc-800/80">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-indigo-400" />
                    <span className="text-xs font-semibold text-white">
                      Faculty of Engineering
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded-full border border-zinc-800">
                    Univ. of Jaffna
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span className="flex items-center gap-1 text-[11px]">
                    <Award className="w-3.5 h-3.5 text-cyan-400" />
                    IEEE &amp; IESL Member
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400">
                    Expected 2027
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Interactive Live Stats Card */}
      <div className="w-full max-w-4xl bg-zinc-950/70 border border-zinc-800/80 rounded-2xl p-4 sm:p-6 backdrop-blur-xl shadow-2xl">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800/60 text-left">
          {/* Item 1 */}
          <div className="p-2">
            <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Location</span>
            </div>
            <p className="text-sm font-semibold text-zinc-200">
              {portfolioData.personal.location}
            </p>
            <p className="text-[11px] text-zinc-500">Available for Internships</p>
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
              <Code2 className="w-3.5 h-3.5 text-purple-400" />
              <span>Key Languages</span>
            </div>
            <p className="text-sm font-semibold text-zinc-200">Java &bull; JS &bull; Python</p>
            <p className="text-[11px] text-zinc-500">Spring Boot &amp; Node.js</p>
          </div>

          {/* Item 4 */}
          <div className="p-2 pt-4 sm:pt-2 sm:pl-4">
            <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Research</span>
            </div>
            <p className="text-sm font-semibold text-zinc-200">Deep Learning</p>
            <p className="text-[11px] text-emerald-400 font-mono">Satellite Looting</p>
          </div>
        </div>
      </div>
    </section>
  );
}
