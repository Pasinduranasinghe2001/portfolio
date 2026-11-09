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
  GraduationCap,
  Award,
  Satellite,
  FileCode,
} from "lucide-react";

export default function BentoSection() {
  const [activeTab, setActiveTab] = useState<"spring" | "webrtc">("spring");
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulatedResponse, setSimulatedResponse] = useState<string | null>(null);

  const runSimulation = () => {
    setIsSimulating(true);
    setSimulatedResponse(null);
    setTimeout(() => {
      setIsSimulating(false);
      if (activeTab === "spring") {
        setSimulatedResponse(
          JSON.stringify(
            {
              status: 201,
              entity: "EquipmentRequest",
              requestId: "REQ-2026-9841",
              approvalStage: "PENDING_FACULTY_HEAD",
              allocatedStore: "Lab 04 - Electronics",
              timestamp: new Date().toISOString(),
            },
            null,
            2
          )
        );
      } else {
        setSimulatedResponse(
          JSON.stringify(
            {
              event: "ROOM_PEER_CONNECTED",
              roomId: "conf-uofj-882",
              peerId: "peer_webrtc_912",
              codec: "VP9 / Opus Audio",
              latency: "16.4ms",
              iceState: "connected",
            },
            null,
            2
          )
        );
      }
    }, 600);
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Academic &amp; Technical Foundation</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
          Engineering Philosophy &amp; Research
        </h2>
        <p className="text-zinc-400 max-w-xl text-sm sm:text-base">
          Combining rigorous computer engineering fundamentals with hands-on
          full-stack application development and deep-learning research.
        </p>
      </div>

      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {/* Bento 1: Large Academic & Research Card (2 Cols) */}
        <div className="md:col-span-2 rounded-3xl bg-zinc-950/70 border border-zinc-800/80 p-6 sm:p-8 backdrop-blur-xl hover:border-zinc-700/80 transition-all flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="p-2.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                <Satellite className="w-5 h-5" />
              </span>
              <span className="text-xs font-mono text-purple-400 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                Undergraduate Research
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
              {portfolioData.research.title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              {portfolioData.research.description}
            </p>

            <div className="space-y-2 mb-6">
              {portfolioData.research.keyPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-900">
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              <span>Dept. of Computer Engineering, University of Jaffna</span>
            </div>

            <a
              href={portfolioData.research.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
            >
              <span>View Research Repo &rarr;</span>
            </a>
          </div>
        </div>

        {/* Bento 2: Memberships & Academic Credentials */}
        <div className="rounded-3xl bg-zinc-950/70 border border-zinc-800/80 p-6 backdrop-blur-xl hover:border-zinc-700/80 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Award className="w-5 h-5" />
              </span>
              <span className="text-xs font-mono text-zinc-500">Affiliations</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Professional Memberships
            </h3>
            <p className="text-zinc-400 text-xs mb-6">
              Active engineering community engagement and professional standards.
            </p>
          </div>

          <div className="space-y-3">
            {portfolioData.memberships.map((m) => (
              <div
                key={m.organization}
                className="p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800/60 text-xs"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-white">
                    {m.organization}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] text-indigo-300 font-mono">
                    {m.badge}
                  </span>
                </div>
                <div className="text-[11px] text-zinc-400">{m.role}</div>
                <div className="text-[10px] text-emerald-400 mt-1">
                  ● {m.status}
                </div>
              </div>
            ))}

            <div className="p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800/60 text-xs">
              <div className="font-semibold text-white mb-1">
                G.C.E. Advanced Level
              </div>
              <div className="text-[11px] text-zinc-400">
                Physical Science (Combined Maths, Physics, Chemistry: 3B)
              </div>
              <div className="text-[10px] text-zinc-500 mt-1">
                AMCC Balangoda
              </div>
            </div>
          </div>
        </div>

        {/* Bento 3: Interactive Code & Architecture Sandbox (2 Cols) */}
        <div className="md:col-span-2 rounded-3xl bg-zinc-950/70 border border-zinc-800/80 p-6 backdrop-blur-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-zinc-500" />
                  {activeTab === "spring"
                    ? "EquipmentController.java"
                    : "webrtc-signaling.js"}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab("spring")}
                  className={`px-2.5 py-1 text-xs rounded-lg font-mono transition-colors cursor-pointer ${
                    activeTab === "spring"
                      ? "bg-zinc-800 text-white"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  Spring Boot REST
                </button>
                <button
                  onClick={() => setActiveTab("webrtc")}
                  className={`px-2.5 py-1 text-xs rounded-lg font-mono transition-colors cursor-pointer ${
                    activeTab === "webrtc"
                      ? "bg-zinc-800 text-white"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  WebRTC Socket.IO
                </button>
              </div>
            </div>

            {/* Code Content */}
            <pre className="font-mono text-xs sm:text-[13px] text-zinc-300 leading-relaxed overflow-x-auto p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/50 mb-4">
              {activeTab === "spring" ? (
                <code>
                  <span className="text-purple-400">@RestController</span>
                  {"\n"}<span className="text-purple-400">@RequestMapping</span>(<span className="text-emerald-300">&quot;/api/v1/equipments&quot;</span>)
                  {"\n"}<span className="text-indigo-400">public class</span> <span className="text-amber-300">EquipmentController</span> &#123;
                  {"\n"}  <span className="text-purple-400">@PostMapping</span>(<span className="text-emerald-300">&quot;/request&quot;</span>)
                  {"\n"}  <span className="text-indigo-400">public</span> ResponseEntity&lt;EquipmentResponse&gt; createRequest(
                  {"\n"}      <span className="text-purple-400">@Valid @RequestBody</span> EquipmentRequestDTO dto) &#123;
                  {"\n"}    EquipmentRequest saved = service.submitRequest(dto);
                  {"\n"}    <span className="text-indigo-400">return</span> ResponseEntity.status(HttpStatus.CREATED).body(saved);
                  {"\n"}  &#125;
                  {"\n"}&#125;
                </code>
              ) : (
                <code>
                  io.on(<span className="text-emerald-300">&quot;connection&quot;</span>, (socket) =&gt; &#123;
                  {"\n"}  socket.on(<span className="text-emerald-300">&quot;join-room&quot;</span>, (&#123; roomId, peerId &#125;) =&gt; &#123;
                  {"\n"}    socket.join(roomId);
                  {"\n"}    socket.to(roomId).emit(<span className="text-emerald-300">&quot;peer-connected&quot;</span>, &#123; peerId &#125;);
                  {"\n"}  &#125;);
                  {"\n"}  socket.on(<span className="text-emerald-300">&quot;offer-signal&quot;</span>, (payload) =&gt; &#123;
                  {"\n"}    io.to(payload.targetPeer).emit(<span className="text-emerald-300">&quot;receive-offer&quot;</span>, payload);
                  {"\n"}  &#125;);
                  {"\n"}&#125;);
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
                {activeTab === "spring"
                  ? "EQuipHub Backend Demo"
                  : "WebRTC Signaling Engine"}
              </span>
            </div>

            {simulatedResponse && (
              <div className="mt-3 p-3 rounded-xl bg-zinc-900 border border-emerald-500/30 text-emerald-400 font-mono text-xs animate-in fade-in duration-200">
                <div className="flex items-center gap-1.5 mb-1 text-emerald-300 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>200 OK • Payload Executed:</span>
                </div>
                <pre className="text-[11px] text-zinc-300">{simulatedResponse}</pre>
              </div>
            )}
          </div>
        </div>

        {/* Bento 4: Fast Facts & Academic Metrics */}
        <div className="rounded-3xl bg-zinc-950/70 border border-zinc-800/80 p-6 backdrop-blur-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <CheckCircle2 className="w-5 h-5" />
              </span>
              <span className="text-xs font-mono text-zinc-500">Summary</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Engineering Profile
            </h3>
            <p className="text-zinc-400 text-xs mb-4">
              Academic highlights &amp; project delivery milestones.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {portfolioData.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800/60"
              >
                <div className="text-xl sm:text-2xl font-extrabold text-white font-mono bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
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
