"use client";

import { portfolioData } from "@/data/portfolioData";
import {
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  BookOpen,
  Award,
  Users,
} from "lucide-react";

export default function ExperienceSection() {
  const journeyMilestones = [
    {
      id: "uofj-degree",
      title: "B.Sc. (Hons) in Computer Engineering",
      institution: "University of Jaffna, Faculty of Engineering",
      location: "Ariviyalnagar, Kilinochchi / Sri Lanka",
      period: "2023 – Present (Expected 2027)",
      type: "Degree Program",
      icon: "degree",
      description:
        "Comprehensive 4-year engineering curriculum covering low-level computer architecture, advanced algorithms, distributed software engineering, and artificial intelligence.",
      achievements: [
        "Rigorous coursework in Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Computer Networks, and Operating Systems.",
        "Developing undergraduate research on Deep Learning-based Satellite Imagery Analysis for illicit excavation detection.",
        "Active member of IEEE Student Branch and Institution of Engineers, Sri Lanka (IESL).",
      ],
      technologies: ["Java", "Python", "C/C++", "Spring Boot", "MySQL", "MongoDB", "Linux"],
    },
    {
      id: "equiphub-project",
      title: "Full-Stack Engineer & Team Collaborator – EQuipHub",
      institution: "Faculty Engineering Software Project",
      location: "University of Jaffna",
      period: "2024",
      type: "Team Project",
      icon: "team",
      description:
        "Collaborated within a 5-member engineering team to design and implement a production-grade equipment management and request approval system.",
      achievements: [
        "Engineered RESTful API microservices in Spring Boot for equipment reservations, status updates, and user privileges.",
        "Integrated dual-database architecture leveraging MongoDB for flexible request schema and MySQL for transactional user records.",
        "Employed Git & GitHub team workflows with pull request reviews, feature branching, and conflict resolution.",
      ],
      technologies: ["Spring Boot", "React", "MongoDB", "MySQL", "REST APIs", "Git"],
    },
    {
      id: "research-role",
      title: "Undergraduate Researcher – Deep Learning & Satellite Imagery",
      institution: "Department of Computer Engineering",
      location: "University of Jaffna",
      period: "2025 – Present",
      type: "Research Project",
      icon: "research",
      description:
        "Investigating novel deep learning pipelines for detecting archaeological looting using multi-temporal satellite imagery with limited observations.",
      achievements: [
        "Benchmarking multi-temporal frame fusion (K = 1, 2, 3, 5, 8) against DAFA-LS monthly satellite time series.",
        "Evaluating classification and segmentation accuracy across Precision, Recall, F1-score, ROC-AUC, IoU, and mAP.",
        "Supervised by Department Senior Lecturers Dr. U. Thanuja & Dr. (Mrs.) J. Jananie.",
      ],
      technologies: ["Python", "PyTorch", "Computer Vision", "Deep Learning", "NumPy", "OpenCV"],
    },
    {
      id: "amcc-al",
      title: "G.C.E. Advanced Level – Physical Science Stream",
      institution: "R/ Ananda Maithreya Central College (AMCC)",
      location: "Balangoda, Sri Lanka",
      period: "Completed 2021",
      type: "High School / College",
      icon: "school",
      description:
        "Excelled in the highly competitive state Advanced Level examination in Physical Science, gaining direct admission to the Faculty of Engineering, University of Jaffna.",
      achievements: [
        "Physics: B | Chemistry: B | Combined Mathematics: B",
        "Demonstrated strong mathematical foundations, analytical thinking, and physics problem-solving abilities.",
      ],
      technologies: ["Combined Mathematics", "Physics", "Chemistry"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400 mb-3">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Academic Milestones &amp; Experience</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
          Education &amp; Engineering Experience
        </h2>
        <p className="text-zinc-400 max-w-xl text-sm sm:text-base">
          Proven history of academic excellence, team software projects, and research
          in computer engineering.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l border-zinc-800/80 space-y-12">
        {journeyMilestones.map((exp) => (
          <div key={exp.id} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-indigo-500 group-hover:scale-125 group-hover:border-cyan-400 transition-all duration-300 shadow-md shadow-indigo-500/30">
              <div className="w-1.5 h-1.5 rounded-full bg-white mx-auto mt-0.5" />
            </div>

            {/* Card */}
            <div className="rounded-3xl bg-zinc-950/70 border border-zinc-800/80 p-6 sm:p-8 backdrop-blur-xl hover:border-zinc-700 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-zinc-800/70 mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2.5 text-xs text-zinc-400 mt-1">
                    <span className="font-semibold text-zinc-200">
                      {exp.institution}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-zinc-500" />
                      {exp.location}
                    </span>
                    <span>&bull;</span>
                    <span className="px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="space-y-2 mb-6">
                {exp.achievements.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-900">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-zinc-900/80 border border-zinc-800 text-[11px] font-mono text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
