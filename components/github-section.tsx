"use client";

import { motion } from "framer-motion";
import { BookMarked, Github, GitPullRequest, Star, Users, Activity } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { personal } from "@/data/portfolio";
import { EASE_OUT_EXPO } from "@/lib/utils";

/* ── Contribution graph ──────────────────────────────────────── */
const WEEKS = 52;
const DAYS = 7;
// Deterministic but varied contribution pattern
const graphData = Array.from({ length: WEEKS * DAYS }, (_, i) => {
  const week = Math.floor(i / DAYS);
  const day = i % DAYS;
  const seed = (week * 13 + day * 7) % 17;
  const base = seed < 5 ? 0 : seed < 9 ? 1 : seed < 13 ? 2 : seed < 16 ? 3 : 4;
  return base;
});

const intensityColors = [
  "bg-white/6",
  "bg-emerald-900/80",
  "bg-emerald-600/80",
  "bg-emerald-400/90",
  "bg-emerald-300",
];

const statsRows = [
  { label: "Repositories", value: "12+", icon: BookMarked },
  { label: "Stars Earned", value: "15+", icon: Star },
  { label: "Contributions", value: "600+", icon: GitPullRequest },
  { label: "Followers", value: "50+", icon: Users },
];

const languageRows = [
  { name: "Python", value: 45.2, color: "#3b82f6" },
  { name: "JavaScript", value: 20.1, color: "#facc15" },
  { name: "Shell", value: 15.3, color: "#34d399" },
  { name: "HTML", value: 10.5, color: "#f97316" },
  { name: "Other", value: 8.9, color: "#a78bfa" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT_EXPO } },
};

export function GitHubSection() {
  return (
    <section id="github" className="py-12 sm:py-16">
      <div className="container">
        <p className="section-label">
          <Activity className="size-3.5" />
          GitHub Statistics
        </p>
        <h2 className="section-title mb-2">GitHub Overview</h2>
        <p className="mb-10 text-sm text-white/50">Open source activity and contributions</p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 lg:grid-cols-[1fr_1fr_1.6fr_1fr]"
        >
          {/* ── Profile card ── */}
          <motion.div variants={itemVariants}>
            <div className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_40px_-20px_rgba(139,92,246,0.7)]">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative mb-4 flex items-center gap-3">
                <div className="relative size-12 overflow-hidden rounded-full border border-white/15 shadow-[0_0_16px_-4px_rgba(139,92,246,0.6)]">
                  <Image src={personal.profileImage} alt={personal.name} fill sizes="48px" className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">@{personal.githubUsername}</p>
                  <p className="text-xs text-white/50">Cloud &amp; backend builder</p>
                </div>
              </div>

              <p className="relative text-xs leading-5 text-white/55">
                Passionate about building scalable cloud solutions and automation with Python, AWS, and Docker.
              </p>

              <Button
                asChild
                className="relative mt-5 h-9 w-full rounded-lg text-xs font-semibold shadow-[0_0_20px_-8px_rgba(139,92,246,0.8)] transition-all hover:scale-105"
              >
                <a href={personal.github} target="_blank" rel="noreferrer">
                  <Github className="size-3.5" />
                  GitHub Profile
                </a>
              </Button>
            </div>
          </motion.div>

          {/* ── Stats card ── */}
          <motion.div variants={itemVariants}>
            <div className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_40px_-20px_rgba(139,92,246,0.7)]">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <h3 className="relative mb-5 text-sm font-bold text-white">Overall Stats</h3>
              <div className="relative grid gap-3">
                {statsRows.map((row) => (
                  <div key={row.label} className="flex items-center justify-between gap-2 rounded-lg border border-white/6 bg-white/3 px-3 py-2.5 transition-all hover:border-white/12">
                    <span className="inline-flex items-center gap-2 text-xs text-white/55">
                      <div className="grid size-6 place-items-center rounded-md bg-primary/15">
                        <row.icon className="size-3.5 text-primary" />
                      </div>
                      {row.label}
                    </span>
                    <span className="text-sm font-bold text-white">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Contribution graph ── */}
          <motion.div variants={itemVariants}>
            <div className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:border-emerald-500/25 hover:shadow-[0_0_40px_-20px_rgba(52,211,153,0.4)]">
              <h3 className="mb-4 text-sm font-bold text-white">Contribution Activity</h3>

              {/* Month labels */}
              <div className="mb-2 flex justify-between px-0.5 text-[9px] text-white/35 font-medium">
                {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>

              {/* Graph grid (52 weeks × 7 days) */}
              <div className="grid gap-px" style={{ gridTemplateColumns: `repeat(${WEEKS}, 1fr)` }}>
                {Array.from({ length: WEEKS }, (_, w) => (
                  <div key={w} className="grid gap-px">
                    {Array.from({ length: DAYS }, (_, d) => {
                      const level = graphData[w * DAYS + d];
                      return (
                        <motion.div
                          key={d}
                          className={`aspect-square rounded-[2px] ${intensityColors[level]}`}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: (w * DAYS + d) * 0.0012, duration: 0.2 }}
                          title={`Level ${level}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-3 flex items-center gap-1.5 text-[9px] text-white/35">
                <span>Less</span>
                {intensityColors.map((c, i) => (
                  <div key={i} className={`size-2.5 rounded-sm ${c}`} />
                ))}
                <span>More</span>
              </div>
            </div>
          </motion.div>

          {/* ── Top languages ── */}
          <motion.div variants={itemVariants}>
            <div className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_40px_-20px_rgba(139,92,246,0.7)]">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <h3 className="relative mb-5 text-sm font-bold text-white">Top Languages</h3>

              {/* Donut chart */}
              <div className="relative mx-auto mb-5 size-28">
                <svg viewBox="0 0 120 120" className="size-full -rotate-90">
                  {(() => {
                    let offset = 0;
                    const r = 46;
                    const circ = 2 * Math.PI * r;
                    return languageRows.map((row) => {
                      const dash = (row.value / 100) * circ;
                      const el = (
                        <motion.circle
                          key={row.name}
                          cx="60" cy="60" r={r}
                          fill="none"
                          stroke={row.color}
                          strokeWidth="14"
                          strokeDasharray={`${dash} ${circ}`}
                          strokeDashoffset={-offset}
                          strokeLinecap="butt"
                          initial={{ strokeDasharray: "0 999" }}
                          whileInView={{ strokeDasharray: `${dash} ${circ}` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + languageRows.indexOf(row) * 0.1, ease: "easeOut" }}
                        />
                      );
                      offset += dash;
                      return el;
                    });
                  })()}
                </svg>
                {/* Center label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[10px] text-white/40 font-medium">LANG</span>
                  <span className="text-base font-extrabold text-white">5</span>
                </div>
              </div>

              {/* Language rows */}
              <div className="relative grid gap-2">
                {languageRows.map((row) => (
                  <div key={row.name} className="flex items-center justify-between gap-3 text-xs">
                    <span className="inline-flex items-center gap-2 text-white/60">
                      <span className="size-2 rounded-full shrink-0" style={{ background: row.color }} />
                      {row.name}
                    </span>
                    <div className="flex items-center gap-2">
                      {/* Mini bar */}
                      <div className="h-1 w-12 rounded-full bg-white/8">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: row.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${row.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                        />
                      </div>
                      <span className="w-9 text-right font-semibold text-white/80">{row.value}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
