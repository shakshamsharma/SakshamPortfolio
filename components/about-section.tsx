"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Sparkles, Target } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";
import { Button } from "@/components/ui/button";
import { personal, stats } from "@/data/portfolio";
import { EASE_OUT_EXPO } from "@/lib/utils";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT_EXPO } },
};

export function AboutSection() {
  return (
    <section id="about" className="py-14 sm:py-20">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid items-start gap-10 lg:grid-cols-[1fr_1.15fr]"
        >
          {/* ── Left column ── */}
          <motion.div variants={itemVariants}>
            <p className="section-label">
              <Sparkles className="size-3.5" />
              About Me
            </p>
            <h2 className="section-title mb-6">
              Crafting Scalable Systems<br />
              <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                in the Cloud
              </span>
            </h2>

            <p className="max-w-xl text-sm leading-7 text-white/65">{personal.introduction}</p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/65">{personal.goal}</p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                {
                  icon: GraduationCap,
                  title: "B.Tech in Computer Science",
                  sub: "Lovely Professional University",
                },
                {
                  icon: MapPin,
                  title: personal.location,
                  sub: "Available for opportunities",
                },
              ].map((card) => (
                <motion.div
                  key={card.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-primary/35 hover:bg-white/[0.06] hover:shadow-[0_0_30px_-16px_rgba(139,92,246,0.8)]"
                >
                  <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/20 transition-all group-hover:bg-primary/25 group-hover:ring-primary/40">
                    <card.icon className="size-4.5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{card.title}</p>
                    <p className="mt-0.5 text-xs text-white/50">{card.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="mt-7 flex flex-wrap gap-3">
              <Button
                asChild
                className="h-10 rounded-full px-6 text-xs font-semibold shadow-[0_0_22px_-8px_rgba(139,92,246,0.8)] transition-all hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,1)]"
              >
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="h-10 rounded-full border-white/12 bg-white/5 px-6 text-xs font-semibold text-white/85 transition-all hover:scale-105 hover:border-white/25 hover:bg-white/10"
              >
                <a href="#projects">
                  <Target className="size-3.5" />
                  View Projects
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* ── Right column: stat cards ── */}
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.04, y: -4 }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] p-6 text-center transition-all duration-300 hover:border-primary/35 hover:shadow-[0_0_40px_-20px_rgba(139,92,246,0.9)]"
              >
                {/* Background glow on hover */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon circle */}
                <div className="relative mx-auto mb-4 grid size-12 place-items-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/20">
                  <span className="text-base font-bold">+</span>
                  {/* Animated ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full ring-1 ring-primary/40"
                    animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.5 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>

                <p className="relative text-4xl font-extrabold tracking-tight text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="relative mt-3 text-xs leading-5 text-white/55">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
