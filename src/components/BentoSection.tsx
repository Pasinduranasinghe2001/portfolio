"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Code2,
  Cpu,
  Layers,
  Terminal,
  Play,
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  Server,
  Database,
  Globe,
} from "lucide-react";

export default function BentoSection() {
  const [activeTab, setActiveTab] = useState<"api" | "model">("api");
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulatedResponse, setSimulatedResponse] = useState<string | null>(null);

  const runSimulation = () => {
    setIsSimulating(true);
    setSimulatedResponse(null);
    setTimeout(() => {
      setIsSimulating(false);
      setSimulatedResponse(
        JSON.stringify(
          {
            status: 200,
            message: "Telemetry event verified and indexed",
            latency: "14.2ms",
            region: "iad1",
            cache: "HIT",
          },
          null,
          2
        )
      );
    }, 600);
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Core Competence</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
          Engineered for Performance &amp; Scale
        </h2>
        <p className="text-zinc-400 max-w-xl text-sm sm:text-base">
          From micro-optimized browser rendering to fault-tolerant distributed
          backends, I build systems built to last.
        </p>
      </div>

      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {/* Bento 1: Large Philosophy & Architecture Card (2 Cols) */}
        <div className="md:col-span-2 rounded-3xl bg-zinc-950/70 border border-zinc-800/80 p-6 sm:p-8 backdrop-blur-xl hover:border-zinc-700/80 transition-all flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="p-2.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                <Code2 className="w-5 h-5" />
              </span>
              <span className="text-xs font-mono text-zinc-500 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800">
                Architecture First
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
              Clean Abstractions &amp; Zero-Downtime Reliability
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              I treat frontend and backend not as separate silos, but as a
              coherent pipeline. Whether optimizing React hydration lifecycles or
              designing event-driven microservices with Go and Kafka, my focus is
              predictable latency, clean developer experience, and maintainable
              codebases.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-zinc-900">
            <div className="flex items-center gap-2.5 text-xs text-zinc-300">
              <Zap className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Sub-50ms TTFB Optimization</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-zinc-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Strict Type-Safety &amp; Contracts</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-zinc-300">
              <Cpu className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Stateless Horizontally Scalable</span>
            </div>
          </div>
        </div>

        {/* Bento 2: Full-Stack Lifecycle Pipeline */}
        <div className="rounded-3xl bg-zinc-950/70 border border-zinc-800/80 p-6 backdrop-blur-xl hover:border-zinc-700/80 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Layers className="w-5 h-5" />
              </span>
              <span className="text-xs font-mono text-zinc-500">Pipeline</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">The Stack Flow</h3>
            <p className="text-zinc-400 text-xs mb-6">
              How data travels securely and instantaneously from client to edge.
            </p>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/60 text-xs text-zinc-300">
              <Globe className="w-4 h-4 text-cyan-400" />
              <div className="flex-1">
                <p className="font-semibold text-white">Edge &amp; Frontend</p>
                <p className="text-[10px] text-zinc-500">Next.js 15, React 19, Vercel Edge</p>
              </div>
            </div>
            <div className="flex items-center gap-2 justify-center text-zinc-600 text-xs">
              &darr;
            </div>
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/60 text-xs text-zinc-300">
              <Server className="w-4 h-4 text-indigo-400" />
              <div className="flex-1">
                <p className="font-semibold text-white">API Services &amp; Jobs</p>
                <p className="text-[10px] text-zinc-500">Node.js, Go Microservices, Kafka</p>
              </div>
            </div>
            <div className="flex items-center gap-2 justify-center text-zinc-600 text-xs">
              &darr;
            </div>
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/60 text-xs text-zinc-300">
              <Database className="w-4 h-4 text-purple-400" />
              <div className="flex-1">
                <p className="font-semibold text-white">Data Persistence</p>
                <p className="text-[10px] text-zinc-500">PostgreSQL, Redis Cache, S3</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bento 3: Interactive Code / API Sandbox (2 Cols) */}
        <div className="md:col-span-2 rounded-3xl bg-zinc-950/70 border border-zinc-800/80 p-6 backdrop-blur-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-zinc-500" />
                  telemetry-service.ts
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab("api")}
                  className={`px-2.5 py-1 text-xs rounded-lg font-mono transition-colors ${
                    activeTab === "api"
                      ? "bg-zinc-800 text-white"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  Endpoint
                </button>
                <button
                  onClick={() => setActiveTab("model")}
                  className={`px-2.5 py-1 text-xs rounded-lg font-mono transition-colors ${
                    activeTab === "model"
                      ? "bg-zinc-800 text-white"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  Type Schema
                </button>
              </div>
            </div>

            {/* Code Content */}
            <pre className="font-mono text-xs sm:text-[13px] text-zinc-300 leading-relaxed overflow-x-auto p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/50 mb-4">
              {activeTab === "api" ? (
                <code>
                  <span className="text-indigo-400">export async function</span>{" "}
                  <span className="text-cyan-300">POST</span>(
                  <span className="text-amber-300">req</span>: Request) &#123;
                  {"\n"}  <span className="text-indigo-400">const</span> payload ={" "}
                  <span className="text-indigo-400">await</span> req.json();
                  {"\n"}  <span className="text-zinc-500">// Distributed idempotent verification</span>
                  {"\n"}  <span className="text-indigo-400">const</span> cached ={" "}
                  <span className="text-indigo-400">await</span> redis.get(payload.id);
                  {"\n"}  <span className="text-indigo-400">if</span> (cached) &#123;
                  {"\n"}    <span className="text-indigo-400">return</span> NextResponse.json(&#123; cached:{" "}
                  <span className="text-amber-400">true</span> &#125;);
                  {"\n"}  &#125;
                  {"\n"}  <span className="text-indigo-400">await</span> queue.publish(
                  <span className="text-emerald-300">&quot;events.stream&quot;</span>, payload);
                  {"\n"}  <span className="text-indigo-400">return</span> NextResponse.json(&#123; status:{" "}
                  <span className="text-purple-300">200</span>, ok:{" "}
                  <span className="text-amber-400">true</span> &#125;);
                  {"\n"}&#125;
                </code>
              ) : (
                <code>
                  <span className="text-indigo-400">export interface</span>{" "}
                  <span className="text-amber-300">TelemetryEvent</span> &#123;
                  {"\n"}  id: <span className="text-cyan-300">string</span>;
                  {"\n"}  timestamp: <span className="text-cyan-300">number</span>;
                  {"\n"}  service: <span className="text-cyan-300">&quot;auth&quot; | &quot;billing&quot; | &quot;edge&quot;</span>;
                  {"\n"}  latencyMs: <span className="text-cyan-300">number</span>;
                  {"\n"}  metadata: <span className="text-cyan-300">Record&lt;string, unknown&gt;</span>;
                  {"\n"}&#125;
                </code>
              )}
            </pre>
          </div>

          {/* Interactive Simulation Trigger */}
          <div className="pt-2">
            <div className="flex items-center justify-between">
              <button
                onClick={runSimulation}
                disabled={isSimulating}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors disabled:opacity-50 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5" />
                <span>{isSimulating ? "Executing..." : "Simulate Payload"}</span>
              </button>

              <span className="text-[11px] font-mono text-zinc-500">
                Next.js Route Handler Demo
              </span>
            </div>

            {simulatedResponse && (
              <div className="mt-3 p-3 rounded-xl bg-zinc-900 border border-emerald-500/30 text-emerald-400 font-mono text-xs animate-in fade-in duration-200">
                <div className="flex items-center gap-1.5 mb-1 text-emerald-300 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>200 OK • Live Result:</span>
                </div>
                <pre className="text-[11px] text-zinc-300">{simulatedResponse}</pre>
              </div>
            )}
          </div>
        </div>

        {/* Bento 4: Production Numbers & Stats */}
        <div className="rounded-3xl bg-zinc-950/70 border border-zinc-800/80 p-6 backdrop-blur-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <CheckCircle2 className="w-5 h-5" />
              </span>
              <span className="text-xs font-mono text-zinc-500">Metrics</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Proven Track Record</h3>
            <p className="text-zinc-400 text-xs mb-4">
              Tangible numbers from production deployments.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {portfolioData.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800/60"
              >
                <div className="text-2xl font-extrabold text-white font-mono bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-[11px] font-medium text-zinc-300 mt-1">
                  {stat.label}
                </div>
                <div className="text-[10px] text-zinc-500">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
