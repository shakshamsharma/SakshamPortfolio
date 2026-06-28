"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Code2, Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems, personal } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/* ── Active section detection ───────────────────────────────── */
function useActiveSection() {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const ids = navItems.map((item) => item.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}

/* ── Navbar ─────────────────────────────────────────────────── */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3"
    >
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-xl border transition-all duration-300",
          scrolled
            ? "h-[3.25rem] border-white/12 bg-[#030712]/85 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.95)] backdrop-blur-2xl"
            : "h-14 border-white/8 bg-[#030712]/55 backdrop-blur-xl sm:h-16"
        )}
        style={{ padding: "0 1rem" }}
      >
        {/* Logo */}
        <Link
          href="#home"
          className="group flex items-center gap-2.5 transition-opacity hover:opacity-80"
          onClick={() => setOpen(false)}
        >
          <span className="relative grid size-9 place-items-center overflow-hidden rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30 transition-all group-hover:ring-primary/60">
            <Code2 className="size-5" />
            <span className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </span>
          <span className="hidden text-sm font-bold tracking-tight text-white sm:inline">
            {personal.name.split(" ")[0]}
            <span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "animated-underline relative rounded-lg px-3 py-2 text-xs font-semibold tracking-wide transition-all duration-200",
                  isActive
                    ? "text-white"
                    : "text-white/55 hover:bg-white/6 hover:text-white/90"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-active"
                    className="absolute inset-0 rounded-lg bg-white/8 ring-1 ring-primary/30"
                    transition={{ type: "spring", stiffness: 380, damping: 36 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Right actions — no theme toggle */}
        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="hidden h-8 rounded-lg px-4 text-xs font-semibold shadow-[0_0_18px_-6px_rgba(139,92,246,0.8)] transition-all hover:scale-105 hover:shadow-[0_0_24px_-4px_rgba(139,92,246,1)] sm:inline-flex"
          >
            <a href={personal.resumePath} download>
              Resume
              <Download className="size-3" />
            </a>
          </Button>
          <Button
            variant="secondary"
            size="icon"
            aria-label="Open navigation"
            className="size-9 rounded-lg border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {open ? <X className="size-4" /> : <Menu className="size-4" />}
              </motion.span>
            </AnimatePresence>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-xl border border-white/10 bg-[#030712]/95 p-2 backdrop-blur-2xl lg:hidden"
          >
            {navItems.map((item, index) => {
              const isActive = active === item.href;
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold transition-all",
                      isActive
                        ? "bg-primary/15 text-primary ring-1 ring-primary/25"
                        : "text-white/60 hover:bg-white/6 hover:text-white"
                    )}
                  >
                    {isActive && (
                      <span className="size-1.5 rounded-full bg-primary" />
                    )}
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
