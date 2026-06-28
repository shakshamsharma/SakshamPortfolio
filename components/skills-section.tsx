"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Layers, Sparkles } from "lucide-react";
import { skillCategories } from "@/data/portfolio";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-12 sm:py-16">
      <div className="container">
        <p className="section-label">
          <Layers className="size-3.5" />
          Skills
        </p>
        <h2 className="section-title mb-2">Technical Expertise</h2>
        <p className="mb-8 text-sm text-white/50">Technologies I work with daily</p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 lg:grid-cols-4"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className={category.skills.length > 5 ? "lg:col-span-2" : undefined}
            >
              {/* Category card */}
              <div className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-primary/35 hover:shadow-[0_0_50px_-24px_rgba(139,92,246,0.85)]">
                {/* Hover gradient glow */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Category header */}
                <div className="relative mb-5 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white">{category.title}</h3>
                  <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-white/40">
                    {category.skills.length} tools
                  </span>
                </div>

                <div className="relative grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -5, scale: 1.06 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="group/skill flex min-h-[5rem] flex-col items-center justify-center gap-2 rounded-lg border border-white/0 p-2 transition-all duration-200 hover:border-primary/30 hover:bg-primary/8 hover:shadow-[0_0_20px_-8px_rgba(139,92,246,0.7)]"
                    >
                      {/* Icon with subtle float */}
                      <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{
                          duration: 3 + skillIndex * 0.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: skillIndex * 0.3,
                        }}
                      >
                        {skill.iconUrl ? (
                          <Image
                            src={skill.iconUrl}
                            alt={`${skill.name} logo`}
                            width={32}
                            height={32}
                            unoptimized
                            className="size-8 object-contain drop-shadow-sm transition-all duration-200 group-hover/skill:drop-shadow-[0_0_6px_rgba(139,92,246,0.6)]"
                          />
                        ) : null}
                      </motion.div>
                      <span className="max-w-full truncate text-center text-[11px] font-semibold text-white/65 transition-colors group-hover/skill:text-white/90">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
