"use client";

import { useEffect, useState } from "react";

export default function BackgroundGlow() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Cursor Follower Glow */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px] transition-transform duration-300 ease-out opacity-20 hidden md:block"
        style={{
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(6, 182, 212, 0.15) 50%, transparent 70%)",
          transform: `translate(${mousePosition.x - 250}px, ${mousePosition.y - 250}px)`,
        }}
      />

      {/* Ambient Top Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-indigo-600/15 rounded-full blur-[140px]" />
      
      {/* Ambient Side Accent Glows */}
      <div className="absolute top-[35%] -left-48 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[130px]" />
      <div className="absolute top-[65%] -right-48 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-10 left-1/3 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[150px]" />

      {/* Fine Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 mask-radial" />
    </div>
  );
}

