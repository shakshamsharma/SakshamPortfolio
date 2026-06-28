"use client";

import { motion } from "framer-motion";
import { Briefcase, CalendarDays, ExternalLink, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { experiences } from "@/data/portfolio";
import { EASE_OUT_EXPO } from "@/lib/utils";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE_OUT_EXPO } },
};

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 sm:py-16">
      <div className="container">
        <p className="section-label">
          <Briefcase className="size-3.5" />
          Experience &amp; Training
        </p>
        <h2 className="section-title mb-2">Professional Journey</h2>
        <p className="mb-10 text-sm text-white/50">Training, internships, and hands-on work</p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative"
        >
          {/* Vertical timeline line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent md:block" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((item, index) => (
              <motion.div
                key={item.company}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline connector dot (md+) */}
                <div className="absolute -left-[1.85rem] top-6 hidden size-3.5 rounded-full bg-primary shadow-[0_0_14px_rgba(139,92,246,0.9)] ring-2 ring-[#03040b] md:block" />

                {/* Experience card */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:border-primary/35 hover:shadow-[0_8px_50px_-20px_rgba(139,92,246,0.7)]"
                >
                  {/* Inner glow */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/6 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Top accent line */}
                  <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Duration badge */}
                  <div className="relative mb-5 flex items-center gap-2 text-xs font-semibold text-primary">
                    <div className="flex size-7 items-center justify-center rounded-md bg-primary/15 ring-1 ring-primary/25">
                      <CalendarDays className="size-3.5" />
                    </div>
                    {item.duration}
                  </div>

                  {/* Company & role */}
                  <div className="relative">
                    <h3 className="text-lg font-bold text-white">{item.company}</h3>
                    <p className="mt-1 text-sm font-semibold text-primary/80">{item.role}</p>
                    <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-white/45">
                      <MapPin className="size-3" />
                      {item.location}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="relative my-4 h-px bg-gradient-to-r from-white/10 to-transparent" />

                  {/* Description */}
                  <p className="relative text-sm leading-6 text-white/60">{item.description}</p>

                  {/* Tech badges */}
                  <div className="relative mt-5 flex flex-wrap gap-1.5">
                    {item.technologies.slice(0, 8).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-medium text-white/60 transition-colors hover:border-primary/30 hover:text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link button */}
                  {item.link ? (
                    <Button
                      asChild
                      variant="secondary"
                      size="sm"
                      className="relative mt-5 h-8 rounded-lg border-white/10 bg-white/5 px-4 text-xs font-semibold text-white/80 transition-all hover:border-primary/30 hover:bg-primary/10 hover:text-white"
                    >
                      <a href={item.link} target="_blank" rel="noreferrer">
                        <ExternalLink className="size-3" />
                        View Project
                      </a>
                    </Button>
                  ) : null}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
