"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, FolderGit2, Github, Sparkles } from "lucide-react";
import { MouseEvent } from "react";
import { ProjectThumbnail } from "@/components/project-thumbnail";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";
import type { Project } from "@/types/portfolio";

/* ── Accent colors ─────────────────────────────────────────── */
const accentStyles: Record<string, { border: string; shadow: string; badge: string }> = {
  cyan: {
    border: "hover:border-cyan-500/40",
    shadow: "hover:shadow-[0_4px_60px_-20px_rgba(34,211,238,0.5),0_0_0_1px_rgba(34,211,238,0.12)]",
    badge: "bg-cyan-950/70 text-cyan-300 border-cyan-500/25",
  },
  violet: {
    border: "hover:border-violet-500/40",
    shadow: "hover:shadow-[0_4px_60px_-20px_rgba(139,92,246,0.55),0_0_0_1px_rgba(139,92,246,0.12)]",
    badge: "bg-violet-950/70 text-violet-300 border-violet-500/25",
  },
  emerald: {
    border: "hover:border-emerald-500/40",
    shadow: "hover:shadow-[0_4px_60px_-20px_rgba(52,211,153,0.5),0_0_0_1px_rgba(52,211,153,0.12)]",
    badge: "bg-emerald-950/70 text-emerald-300 border-emerald-500/25",
  },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [6, -6]), { stiffness: 180, damping: 24 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-6, 6]), { stiffness: 180, damping: 24 });

  function handleMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  const ac = accentStyles[project.accent];

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="group"
    >
      {/* Gradient border wrapper */}
      <div
        className={`relative rounded-xl p-px transition-all duration-300 ${ac.border} ${ac.shadow}`}
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
          borderRadius: "0.75rem",
        }}
      >
        <div className="relative h-full overflow-hidden rounded-xl bg-[#080c15]/95 transition-all duration-300">
          {/* Thumbnail illustration */}
          <ProjectThumbnail project={project} />

          {/* Card content */}
          <div className="p-6">
            {/* Tags row */}
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${ac.badge}`}>
                {project.subtitle}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-white transition-colors group-hover:text-white/95">
              {project.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-sm leading-6 text-white/55">{project.description}</p>

            {/* Feature list */}
            <ul className="mt-4 grid gap-1.5 text-sm">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2.5 text-white/50">
                  <span className="mt-[7px] size-1 shrink-0 rounded-full bg-primary/70" />
                  <span className="leading-6">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Tech stack */}
            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/8 bg-white/4 px-2 py-0.5 text-[11px] font-medium text-white/55 transition-colors hover:border-white/20 hover:text-white/75"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="my-5 h-px bg-gradient-to-r from-white/8 via-white/5 to-transparent" />

            {/* Action buttons */}
            <div className="flex flex-wrap gap-2.5">
              <Button
                asChild
                variant="secondary"
                size="sm"
                className="h-8 rounded-lg border-white/10 bg-white/5 px-4 text-xs font-semibold text-white/80 transition-all hover:scale-105 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Github className="size-3.5" />
                  GitHub
                </a>
              </Button>
              {project.demo ? (
                <Button
                  asChild
                  size="sm"
                  className="h-8 rounded-lg px-4 text-xs font-semibold shadow-[0_0_16px_-5px_rgba(139,92,246,0.8)] transition-all hover:scale-105"
                >
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <ExternalLink className="size-3.5" />
                    Live Demo
                  </a>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12 sm:py-16">
      <div className="container">
        <p className="section-label">
          <FolderGit2 className="size-3.5" />
          Featured Projects
        </p>
        <h2 className="section-title mb-2">
          Things I&apos;ve Built
        </h2>
        <p className="mb-10 text-sm text-white/50">
          End-to-end cloud-native projects with real-world impact
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
