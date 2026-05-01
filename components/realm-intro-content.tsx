"use client";

import { type Realm } from "@/lib/realms";

interface RealmIntroContentProps {
  realm: Realm;
}

// Realm-specific color configurations
const realmColors: Record<string, { 
  primary: string; 
  glow: string; 
  gradient: string;
  border: string;
}> = {
  "ocean-of-being": { 
    primary: "rgb(34, 211, 238)", 
    glow: "rgba(34, 211, 238, 0.3)",
    gradient: "from-cyan-950 via-blue-950 to-indigo-950",
    border: "rgba(34, 211, 238, 0.2)"
  },
  "theatre-of-perception": { 
    primary: "rgb(192, 132, 252)", 
    glow: "rgba(192, 132, 252, 0.3)",
    gradient: "from-purple-950 via-fuchsia-950 to-pink-950",
    border: "rgba(192, 132, 252, 0.2)"
  },
  "forge-of-thought": { 
    primary: "rgb(251, 191, 36)", 
    glow: "rgba(251, 191, 36, 0.3)",
    gradient: "from-amber-950 via-orange-950 to-red-950",
    border: "rgba(251, 191, 36, 0.2)"
  },
  "field-of-emotion": { 
    primary: "rgb(251, 113, 133)", 
    glow: "rgba(251, 113, 133, 0.3)",
    gradient: "from-rose-950 via-pink-950 to-red-950",
    border: "rgba(251, 113, 133, 0.2)"
  },
  "path-of-action": { 
    primary: "rgb(52, 211, 153)", 
    glow: "rgba(52, 211, 153, 0.3)",
    gradient: "from-emerald-950 via-teal-950 to-cyan-950",
    border: "rgba(52, 211, 153, 0.2)"
  },
  "mountain-of-meaning": { 
    primary: "rgb(148, 163, 184)", 
    glow: "rgba(148, 163, 184, 0.3)",
    gradient: "from-slate-950 via-zinc-950 to-stone-950",
    border: "rgba(148, 163, 184, 0.2)"
  },
};

export function RealmIntroContent({ realm }: RealmIntroContentProps) {
  const colors = realmColors[realm.id] || realmColors["ocean-of-being"];

  return (
    <div className={`min-h-screen bg-gradient-to-b ${colors.gradient}`}>
      {/* Atmospheric background glow */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 30%, ${colors.glow} 0%, transparent 60%)`
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        {/* Icon */}
        <div 
          className="text-7xl mb-6 animate-float"
          style={{
            filter: `drop-shadow(0 0 30px ${colors.glow})`
          }}
        >
          {realm.icon}
        </div>

        {/* Title */}
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-light text-center mb-4 tracking-wide"
          style={{ color: colors.primary }}
        >
          {realm.name}
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mb-12">
          {realm.description}
        </p>

        {/* Atmosphere text */}
        <div 
          className="max-w-3xl mx-auto p-8 rounded-2xl border backdrop-blur-sm mb-12"
          style={{
            borderColor: colors.border,
            backgroundColor: "rgba(0, 0, 0, 0.3)"
          }}
        >
          <p className="text-foreground/90 text-center leading-relaxed italic text-lg">
            {realm.atmosphere}
          </p>
        </div>

        {/* Psychological framing cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl w-full">
          {/* Ground Layer */}
          <div 
            className="p-6 rounded-xl border backdrop-blur-sm"
            style={{
              borderColor: colors.border,
              backgroundColor: "rgba(0, 0, 0, 0.2)"
            }}
          >
            <h3 
              className="text-sm font-medium uppercase tracking-wider mb-3"
              style={{ color: colors.primary }}
            >
              Ground Layer
            </h3>
            <p className="text-foreground/80 text-sm leading-relaxed">
              {realm.groundLayer}
            </p>
          </div>

          {/* Common Struggles */}
          <div 
            className="p-6 rounded-xl border backdrop-blur-sm"
            style={{
              borderColor: colors.border,
              backgroundColor: "rgba(0, 0, 0, 0.2)"
            }}
          >
            <h3 
              className="text-sm font-medium uppercase tracking-wider mb-3"
              style={{ color: colors.primary }}
            >
              Common Struggles
            </h3>
            <ul className="text-foreground/80 text-sm leading-relaxed space-y-1">
              {realm.problems.map((problem, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span style={{ color: colors.primary }}>·</span>
                  {problem}
                </li>
              ))}
            </ul>
          </div>

          {/* Core Insight */}
          <div 
            className="p-6 rounded-xl border backdrop-blur-sm"
            style={{
              borderColor: colors.border,
              backgroundColor: "rgba(0, 0, 0, 0.2)"
            }}
          >
            <h3 
              className="text-sm font-medium uppercase tracking-wider mb-3"
              style={{ color: colors.primary }}
            >
              Core Insight
            </h3>
            <p className="text-foreground/80 text-sm leading-relaxed">
              {realm.insights}
            </p>
          </div>
        </div>

        {/* Placeholder for future illustration */}
        <div 
          className="mt-16 w-full max-w-4xl aspect-video rounded-2xl border-2 border-dashed flex items-center justify-center"
          style={{
            borderColor: colors.border,
            backgroundColor: "rgba(0, 0, 0, 0.2)"
          }}
        >
          <p className="text-muted-foreground text-sm">
            Realm illustration will appear here
          </p>
        </div>

        {/* Begin journey button - for future AI integration */}
        <button
          className="mt-12 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: colors.primary,
            color: "rgb(10, 10, 20)",
            boxShadow: `0 0 30px ${colors.glow}`
          }}
        >
          Begin Your Journey
        </button>
      </div>
    </div>
  );
}
