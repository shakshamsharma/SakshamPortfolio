"use client";

import { motion } from "framer-motion";
import type { Project } from "@/types/portfolio";
import { cn } from "@/lib/utils";

/* ── SmartCampus SVG – AI face recognition ─────────────────── */
function SmartCampusSVG() {
  return (
    <svg viewBox="0 0 480 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 size-full">
      {/* Background grid */}
      <defs>
        <pattern id="sc-grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M 28 0 L 0 0 0 28" fill="none" stroke="rgba(34,211,238,0.12)" strokeWidth="0.7" />
        </pattern>
        <radialGradient id="sc-glow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0c1a2e" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sc-scan" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="480" height="240" fill="#060f1e" />
      <rect width="480" height="240" fill="url(#sc-grid)" />
      <rect width="480" height="240" fill="url(#sc-glow)" />

      {/* Face outline */}
      <g transform="translate(240,118)">
        {/* Face oval */}
        <ellipse cx="0" cy="-8" rx="44" ry="54" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="4 3" fill="rgba(34,211,238,0.04)" />
        {/* Eyes */}
        <ellipse cx="-15" cy="-18" rx="7" ry="5" fill="rgba(34,211,238,0.15)" stroke="#22d3ee" strokeWidth="1" />
        <circle cx="-15" cy="-18" r="2.5" fill="#22d3ee" />
        <ellipse cx="15" cy="-18" rx="7" ry="5" fill="rgba(34,211,238,0.15)" stroke="#22d3ee" strokeWidth="1" />
        <circle cx="15" cy="-18" r="2.5" fill="#22d3ee" />
        {/* Nose */}
        <path d="M-4 -8 Q0 2 4 -8" stroke="rgba(34,211,238,0.5)" strokeWidth="1" fill="none" />
        {/* Mouth */}
        <path d="M-12 12 Q0 20 12 12" stroke="#22d3ee" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        {/* Scan lines */}
        <motion.rect
          x="-55" y="-62" width="110" height="2" fill="url(#sc-scan)"
          animate={{ y: [-62, 52, -62] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        {/* Corner brackets */}
        {[[-58,-65],[58,-65],[-58,65],[58,65]].map(([cx, cy], i) => (
          <g key={i} transform={`translate(${cx},${cy})`}>
            <path
              d={i % 2 === 0
                ? `M0,10 L0,0 L${i < 2 ? 10 : -10},0`
                : `M0,10 L0,0 L${i < 2 ? -10 : 10},0`}
              stroke="#22d3ee" strokeWidth="2" fill="none" strokeLinecap="round"
              style={{ transform: `${cy > 0 ? "scaleY(-1)" : ""}` }}
            />
          </g>
        ))}
        {/* Data points floating around face */}
        {[[-75,-30],[-75,10],[75,-30],[75,10]].map(([dx,dy],i) => (
          <motion.circle key={i} cx={dx} cy={dy} r="2.5" fill="#22d3ee" opacity="0.7"
            animate={{ opacity:[0.3,1,0.3], scale:[0.8,1.2,0.8] }}
            transition={{ duration:2+i*0.3, repeat:Infinity, ease:"easeInOut", delay:i*0.5 }}
          />
        ))}
      </g>

      {/* Connection lines to nodes */}
      {[[60,40],[420,40],[60,200],[420,200]].map(([nx,ny],i) => (
        <g key={i}>
          <motion.line x1="240" y1="118" x2={nx} y2={ny} stroke="rgba(34,211,238,0.25)" strokeWidth="0.8"
            animate={{ opacity:[0.15,0.5,0.15] }}
            transition={{ duration:2.5, repeat:Infinity, delay:i*0.4 }}
          />
          <motion.circle cx={nx} cy={ny} r="5" fill="rgba(34,211,238,0.15)" stroke="#22d3ee" strokeWidth="1"
            animate={{ scale:[1,1.4,1] }}
            transition={{ duration:2.5, repeat:Infinity, delay:i*0.4 }}
          />
        </g>
      ))}

      {/* Top-left label */}
      <text x="16" y="28" fill="rgba(34,211,238,0.7)" fontSize="9" fontFamily="monospace" fontWeight="600">AI FACE RECOGNITION</text>
      <text x="16" y="42" fill="rgba(34,211,238,0.4)" fontSize="8" fontFamily="monospace">SMARTCAMPUS v2.0</text>

      {/* Accuracy meter */}
      <rect x="16" y="194" width="80" height="28" rx="5" fill="rgba(0,0,0,0.4)" stroke="rgba(34,211,238,0.2)" strokeWidth="1" />
      <text x="24" y="206" fill="rgba(34,211,238,0.5)" fontSize="7" fontFamily="monospace">ACCURACY</text>
      <text x="24" y="218" fill="#22d3ee" fontSize="11" fontFamily="monospace" fontWeight="700">98.4%</text>

      {/* Status chips */}
      <rect x="360" y="194" width="100" height="28" rx="5" fill="rgba(0,0,0,0.4)" stroke="rgba(34,211,238,0.2)" strokeWidth="1" />
      <circle cx="373" cy="208" r="3" fill="#22d3ee">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <text x="381" y="212" fill="rgba(34,211,238,0.9)" fontSize="8" fontFamily="monospace" fontWeight="600">LIVE SCAN</text>
    </svg>
  );
}

/* ── IncidentPilot SVG – Cloud infra, alerts, AI ────────────── */
function IncidentPilotSVG() {
  return (
    <svg viewBox="0 0 480 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 size-full">
      <defs>
        <pattern id="ip-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(167,139,250,0.1)" strokeWidth="0.6" />
        </pattern>
        <radialGradient id="ip-glow" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#0c0814" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="480" height="240" fill="#0b0914" />
      <rect width="480" height="240" fill="url(#ip-grid)" />
      <rect width="480" height="240" fill="url(#ip-glow)" />

      {/* Central AI brain node */}
      <g transform="translate(240,122)">
        <motion.circle cx="0" cy="0" r="36" fill="rgba(139,92,246,0.12)" stroke="rgba(139,92,246,0.5)" strokeWidth="1.5"
          animate={{ scale:[1,1.06,1] }}
          transition={{ duration:3, repeat:Infinity, ease:"easeInOut" }}
        />
        <motion.circle cx="0" cy="0" r="26" fill="rgba(139,92,246,0.2)" stroke="rgba(139,92,246,0.7)" strokeWidth="1"
          animate={{ rotate:360 }}
          transition={{ duration:20, repeat:Infinity, ease:"linear" }}
        />
        {/* Brain icon paths */}
        <text x="-10" y="6" fill="#a78bfa" fontSize="20">🤖</text>
      </g>

      {/* Cloud nodes */}
      {[
        { cx:80, cy:65, label:"EC2", color:"#818cf8" },
        { cx:400, cy:65, label:"RDS", color:"#34d399" },
        { cx:80, cy:178, label:"S3", color:"#f59e0b" },
        { cx:400, cy:178, label:"SNS", color:"#f87171" },
      ].map((n) => (
        <g key={n.label} transform={`translate(${n.cx},${n.cy})`}>
          <motion.circle cx="0" cy="0" r="22" fill="rgba(0,0,0,0.5)" stroke={n.color} strokeWidth="1.2"
            animate={{ opacity:[0.6,1,0.6] }}
            transition={{ duration:2.5, repeat:Infinity, ease:"easeInOut" }}
          />
          <text x="-12" y="5" fill={n.color} fontSize="9" fontFamily="monospace" fontWeight="700">{n.label}</text>
          {/* Connection to center */}
          <motion.line x1="0" y1="0" x2={240-n.cx} y2={122-n.cy} stroke={n.color} strokeWidth="0.8" strokeOpacity="0.3"
            animate={{ strokeOpacity:[0.15,0.5,0.15] }}
            transition={{ duration:2, repeat:Infinity }}
          />
        </g>
      ))}

      {/* Alert pulse indicators */}
      {[
        { x:150, y:48, severity:"HIGH", color:"#f87171" },
        { x:296, y:48, severity:"MED", color:"#f59e0b" },
      ].map((alert) => (
        <g key={alert.severity} transform={`translate(${alert.x},${alert.y})`}>
          <motion.rect x="-24" y="-10" width="48" height="20" rx="4" fill="rgba(0,0,0,0.6)" stroke={alert.color} strokeWidth="1"
            animate={{ opacity:[0.7,1,0.7] }}
            transition={{ duration:1.5, repeat:Infinity }}
          />
          <circle cx="-16" cy="0" r="3" fill={alert.color}>
            <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite" />
          </circle>
          <text x="-8" y="4" fill={alert.color} fontSize="7.5" fontFamily="monospace" fontWeight="700">{alert.severity}</text>
        </g>
      ))}

      {/* Log stream */}
      <rect x="300" y="155" width="140" height="70" rx="6" fill="rgba(0,0,0,0.45)" stroke="rgba(139,92,246,0.2)" strokeWidth="1" />
      {["[WARN] CPU > 85%", "[ERR] DB timeout", "[INFO] Auto-scale", "[OK] Resolved"].map((line, i) => (
        <motion.text key={i} x="308" y={168+i*13} fill={["#f59e0b","#f87171","#a78bfa","#34d399"][i]} fontSize="7" fontFamily="monospace"
          animate={{ opacity:[0,1,1,0] }}
          transition={{ duration:4, delay:i*0.8, repeat:Infinity }}
        >{line}</motion.text>
      ))}

      {/* Labels */}
      <text x="16" y="22" fill="rgba(167,139,250,0.8)" fontSize="9" fontFamily="monospace" fontWeight="700">INCIDENTPILOT AI</text>
      <text x="16" y="35" fill="rgba(167,139,250,0.4)" fontSize="7.5" fontFamily="monospace">LLM-DRIVEN INCIDENT ANALYSIS</text>
    </svg>
  );
}

/* ── CloudShareX SVG – Cloud storage & file transfer ─────────── */
function CloudShareXSVG() {
  return (
    <svg viewBox="0 0 480 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 size-full">
      <defs>
        <pattern id="cs-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(52,211,153,0.1)" strokeWidth="0.6" />
        </pattern>
        <radialGradient id="cs-glow" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#059669" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#020f0a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cs-bar" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      <rect width="480" height="240" fill="#030d0a" />
      <rect width="480" height="240" fill="url(#cs-grid)" />
      <rect width="480" height="240" fill="url(#cs-glow)" />

      {/* Central cloud icon */}
      <g transform="translate(240,95)">
        {/* Cloud shape */}
        <path d="M-45,12 Q-55,-5 -36,-18 Q-38,-38 -16,-40 Q-4,-55 18,-48 Q32,-60 48,-44 Q62,-42 58,-22 Q72,-10 65,12 Z"
          fill="rgba(52,211,153,0.12)" stroke="#34d399" strokeWidth="1.5" />
        {/* Upload arrow */}
        <motion.g animate={{ y:[-4,0,-4] }} transition={{ duration:2, repeat:Infinity, ease:"easeInOut" }}>
          <path d="M8,-5 L0,-18 L-8,-5" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <line x1="0" y1="-18" x2="0" y2="6" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
        </motion.g>
      </g>

      {/* File nodes on left */}
      {["PDF","MP4","ZIP","PNG"].map((ext, i) => (
        <g key={ext} transform={`translate(72,${55+i*42})`}>
          <rect x="-22" y="-12" width="44" height="24" rx="4" fill="rgba(0,0,0,0.5)" stroke="rgba(52,211,153,0.3)" strokeWidth="1" />
          <text x="-14" y="4" fill="#34d399" fontSize="8.5" fontFamily="monospace" fontWeight="700">.{ext}</text>
          {/* Transfer line */}
          <motion.line x1="22" y1="0" x2={165} y2={20-i*42+95} stroke="rgba(52,211,153,0.3)" strokeWidth="1" strokeDasharray="4 3"
            animate={{ strokeDashoffset:[0,-14] }}
            transition={{ duration:1.2+i*0.2, repeat:Infinity, ease:"linear" }}
          />
          {/* Packet dot */}
          <motion.circle cx="0" cy="0" r="3.5" fill="#34d399"
            animate={{ cx:[22,160], opacity:[0,1,1,0] }}
            transition={{ duration:1.8+i*0.3, repeat:Infinity, delay:i*0.45, ease:"easeInOut" }}
          />
        </g>
      ))}

      {/* AWS services on right */}
      {[
        { label:"S3 Bucket", y:65, color:"#f59e0b" },
        { label:"CloudFront", y:115, color:"#60a5fa" },
        { label:"IAM Auth", y:165, color:"#a78bfa" },
      ].map((svc) => (
        <g key={svc.label} transform={`translate(390,${svc.y})`}>
          <rect x="-40" y="-14" width="80" height="28" rx="6" fill="rgba(0,0,0,0.5)" stroke={svc.color} strokeWidth="1" />
          <text x="-28" y="5" fill={svc.color} fontSize="8" fontFamily="monospace" fontWeight="600">{svc.label}</text>
          <circle cx="-33" cy="0" r="3" fill={svc.color} opacity="0.8" />
        </g>
      ))}

      {/* Transfer speed indicator */}
      <rect x="176" y="168" width="130" height="48" rx="7" fill="rgba(0,0,0,0.45)" stroke="rgba(52,211,153,0.2)" strokeWidth="1" />
      <text x="186" y="184" fill="rgba(52,211,153,0.5)" fontSize="7.5" fontFamily="monospace">TRANSFER SPEED</text>
      {/* Speed bar */}
      <rect x="186" y="191" width="110" height="7" rx="3.5" fill="rgba(52,211,153,0.1)" />
      <motion.rect x="186" y="191" height="7" rx="3.5" fill="url(#cs-bar)"
        animate={{ width:[20,88,110,60,110] }}
        transition={{ duration:4, repeat:Infinity, ease:"easeInOut" }}
      />
      <text x="186" y="208" fill="#34d399" fontSize="9" fontFamily="monospace" fontWeight="700">4.2 GB/s</text>

      {/* Labels */}
      <text x="16" y="22" fill="rgba(52,211,153,0.8)" fontSize="9" fontFamily="monospace" fontWeight="700">CLOUDSHAREX</text>
      <text x="16" y="35" fill="rgba(52,211,153,0.4)" fontSize="7.5" fontFamily="monospace">DISTRIBUTED FILE PLATFORM • AWS</text>
    </svg>
  );
}

/* ── Accent palette ─────────────────────────────────────────── */
const accents = {
  cyan: {
    wrap: "from-cyan-950 via-[#051820] to-[#030f1a]",
    badge: "border-cyan-500/30 text-cyan-400 bg-cyan-950/60",
    line: "from-cyan-500 to-sky-500",
  },
  violet: {
    wrap: "from-violet-950 via-[#0e0918] to-[#080612]",
    badge: "border-violet-500/30 text-violet-400 bg-violet-950/60",
    line: "from-violet-500 to-fuchsia-500",
  },
  emerald: {
    wrap: "from-emerald-950 via-[#051a10] to-[#020e08]",
    badge: "border-emerald-500/30 text-emerald-400 bg-emerald-950/60",
    line: "from-emerald-500 to-teal-500",
  },
};

const IllustrationMap: Record<string, React.FC> = {
  SmartCampus: SmartCampusSVG,
  "IncidentPilot AI": IncidentPilotSVG,
  CloudShareX: CloudShareXSVG,
};

export function ProjectThumbnail({ project }: { project: { title: string; subtitle: string; period: string; accent: "cyan" | "violet" | "emerald" } }) {
  const style = accents[project.accent];
  const Illustration = IllustrationMap[project.title] ?? SmartCampusSVG;

  return (
    <div className={cn("relative aspect-[16/10] overflow-hidden rounded-t-xl bg-gradient-to-br", style.wrap)}>
      {/* Custom SVG illustration */}
      <Illustration />

      {/* Gradient overlay to blend with card */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#08090e] via-transparent to-transparent opacity-60" />

      {/* Period badge */}
      <div className={cn(
        "absolute left-4 top-4 rounded-full border px-3 py-1 text-[10px] font-bold tracking-wider backdrop-blur-sm",
        style.badge
      )}>
        {project.period}
      </div>

      {/* Accent line at bottom */}
      <div className={cn("absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r", style.line, "opacity-40")} />
    </div>
  );
}
