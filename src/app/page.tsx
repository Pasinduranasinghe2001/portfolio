import BackgroundGlow from "@/components/BackgroundGlow";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoSection from "@/components/BentoSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#09090b] text-zinc-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Dynamic Background Aura and Grids */}
      <BackgroundGlow />

      {/* Floating Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10 flex-1">
        <Hero />
        <BentoSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
