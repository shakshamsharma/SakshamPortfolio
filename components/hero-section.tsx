"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { personal, typingRoles } from "@/data/portfolio";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import { EASE_OUT_EXPO } from "@/lib/utils";

export function HeroSection() {
  const typed = useTypingEffect(typingRoles);
  // Prevent hydration mismatch: don't render dynamic typing content until mounted
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden pt-20"
    >
      {/* Single, very subtle radial glow centred behind the avatar — the only bg effect */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle 600px at 50% 38%, rgba(139,92,246,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="container flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center pb-20 pt-12 text-center">

        {/* ── Profile picture ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
          className="relative z-10 mb-[-2.5rem]"
        >
          {/* Avatar ring */}
          <div
            className="relative size-36 rounded-full sm:size-44"
            style={{
              padding: "2.5px",
              background: "linear-gradient(135deg, rgba(139,92,246,0.8) 0%, rgba(59,130,246,0.4) 100%)",
              boxShadow:
                "0 0 0 1px rgba(139,92,246,0.25), " +
                "0 0 40px -8px rgba(139,92,246,0.5), " +
                "0 32px 64px -24px rgba(0,0,0,0.9)",
            }}
          >
            <div className="size-full overflow-hidden rounded-full bg-black">
              <Image
                src={personal.profileImage}
                alt={personal.name}
                fill
                priority
                sizes="176px"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* "Open to work" badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4, type: "spring" }}
            className="absolute -bottom-1 -right-1 flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-black/90 px-2.5 py-1 text-[10px] font-semibold text-emerald-400 backdrop-blur-sm"
          >
            <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
            Open to work
          </motion.div>
        </motion.div>

        {/* ── Hero card ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT_EXPO }}
          className="w-full max-w-2xl"
        >
          {/* Gradient border */}
          <div
            className="relative rounded-2xl p-px"
            style={{
              background:
                "linear-gradient(135deg, rgba(139,92,246,0.4) 0%, rgba(255,255,255,0.06) 50%, rgba(139,92,246,0.08) 100%)",
            }}
          >
            {/* Glass surface */}
            <div
              className="relative overflow-hidden rounded-2xl px-8 pb-9 pt-14 sm:px-12"
              style={{
                background: "rgba(8,8,12,0.85)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
              }}
            >
              {/* Hello badge */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.45 }}
                className="relative mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/8 px-4 py-1.5 text-xs font-semibold tracking-wider text-violet-300"
              >
                <Sparkles className="size-3.5" />
                Hello, I&apos;m
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.5 }}
                className="relative text-balance text-5xl font-extrabold leading-tight tracking-tight sm:text-7xl"
              >
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #c4b5fd 0%, #ffffff 50%, #93c5fd 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Saksham
                </span>{" "}
                <span className="text-white/85">Sharma</span>
              </motion.h1>

              {/* Title */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.45 }}
                className="relative mt-3 text-sm font-medium tracking-wide text-white/45 sm:text-base"
              >
                {personal.title}
              </motion.p>

              {/* Typing role pill */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.48, duration: 0.45 }}
                className="relative mx-auto mt-4 inline-flex h-8 items-center gap-2 rounded-full border border-white/8 bg-white/4 px-5 text-sm font-medium text-white/60"
              >
                <span className="size-1.5 rounded-full bg-violet-400/70" />
                <span suppressHydrationWarning>{mounted ? (typed || personal.tagline) : personal.tagline}</span>
                {mounted && <span className="animate-pulse text-violet-400" aria-hidden="true">|</span>}
              </motion.div>

              {/* Divider */}
              <div className="mx-auto mt-7 mb-7 h-px w-24 bg-gradient-to-r from-transparent via-white/12 to-transparent" />

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.56, duration: 0.45 }}
                className="relative flex flex-wrap justify-center gap-3"
              >
                <Button
                  asChild
                  className="h-10 rounded-full px-6 text-xs font-semibold transition-all duration-200 hover:scale-105 hover:brightness-110"
                >
                  <a href={personal.resumePath} target="_blank" rel="noreferrer">
                    <ExternalLink className="size-3.5" />
                    View Resume
                  </a>
                </Button>

                {[
                  { href: personal.resumePath, download: true,  label: "Download CV", Icon: Download },
                  { href: personal.github,     download: false, label: "GitHub",      Icon: Github   },
                  { href: personal.linkedin,   download: false, label: "LinkedIn",    Icon: Linkedin },
                ].map(({ href, download, label, Icon }) => (
                  <Button
                    key={label}
                    asChild
                    variant="secondary"
                    className="h-10 rounded-full border-white/10 bg-white/4 px-5 text-xs font-semibold text-white/80 transition-all duration-200 hover:scale-105 hover:border-white/20 hover:bg-white/8 hover:text-white"
                  >
                    {download ? (
                      <a href={href} download>
                        <Icon className="size-3.5" />
                        {label}
                      </a>
                    ) : (
                      <a href={href} target="_blank" rel="noreferrer">
                        <Icon className="size-3.5" />
                        {label}
                      </a>
                    )}
                  </Button>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          aria-label="Scroll to About section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          className="mt-10 grid size-9 place-items-center rounded-full border border-white/10 bg-white/4 text-white/35 transition-all hover:border-violet-500/35 hover:text-white/70"
        >
          <ArrowDown className="size-4 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
