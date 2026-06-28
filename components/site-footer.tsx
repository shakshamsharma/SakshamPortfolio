import { Code2, Heart } from "lucide-react";
import Link from "next/link";
import { navItems, personal, socialLinks } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-black/40 pt-10 pb-6">
      {/* Top gradient accent */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(139,92,246,0.06),transparent_60%)]" />

      <div className="container relative">
        {/* Main footer grid */}
        <div className="grid gap-8 md:grid-cols-[1fr_auto_auto] md:items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="grid size-9 place-items-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/25">
                <Code2 className="size-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">{personal.name}</p>
                <p className="text-xs text-white/40">Cloud &amp; DevOps Engineer</p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-xs leading-5 text-white/40">
              Building scalable cloud infrastructure and intelligent backend systems.
              Always learning, always shipping.
            </p>
            {/* Social icons */}
            <div className="mt-5 flex items-center gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  aria-label={link.label}
                  className="group grid size-9 place-items-center rounded-xl border border-white/10 bg-white/4 text-white/45 transition-all duration-200 hover:-translate-y-1 hover:border-primary/35 hover:bg-primary/12 hover:text-primary hover:shadow-[0_0_16px_-4px_rgba(139,92,246,0.7)]"
                >
                  <link.icon className="size-4 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/30">Navigation</p>
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-2 text-xs font-medium text-white/45 transition-colors hover:text-white/90"
                >
                  <span className="size-1 rounded-full bg-white/20 transition-colors group-hover:bg-primary" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/30">Contact</p>
            <div className="grid gap-2">
              <a
                href={`mailto:${personal.email}`}
                className="text-xs font-medium text-white/45 transition-colors hover:text-white/90"
              >
                {personal.email}
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-white/45 transition-colors hover:text-white/90"
              >
                linkedin.com/in/shakshamm
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-white/45 transition-colors hover:text-white/90"
              >
                github.com/shakshamsharma
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-2 border-t border-white/6 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-white/30">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1.5 text-[11px] text-white/25">
            Built with Next.js, Tailwind CSS &amp; Framer Motion
            <Heart className="size-3 text-primary/60" />
          </p>
        </div>
      </div>
    </footer>
  );
}
