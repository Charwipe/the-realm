"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { type Realm, realms } from "@/lib/realms";
import { cn } from "@/lib/utils";

// Map realm IDs to their positions in the 2x3 grid layout of the illustration
const realmPositions: Record<string, { x: number; y: number; width: number; height: number }> = {
  "ocean-of-being": { x: 0, y: 0, width: 33.33, height: 50 },
  "theatre-of-perception": { x: 33.33, y: 0, width: 33.33, height: 50 },
  "forge-of-thought": { x: 66.66, y: 0, width: 33.34, height: 50 },
  "field-of-emotion": { x: 0, y: 50, width: 33.33, height: 50 },
  "path-of-action": { x: 33.33, y: 50, width: 33.33, height: 50 },
  "mountain-of-meaning": { x: 66.66, y: 50, width: 33.34, height: 50 },
};

// Magical color themes for each realm
const realmColors: Record<string, { glow: string; accent: string }> = {
  "ocean-of-being": { glow: "from-cyan-500/30 via-blue-400/20 to-indigo-500/30", accent: "border-cyan-400/50" },
  "theatre-of-perception": { glow: "from-purple-500/30 via-fuchsia-400/20 to-pink-500/30", accent: "border-purple-400/50" },
  "forge-of-thought": { glow: "from-amber-500/30 via-orange-400/20 to-red-500/30", accent: "border-amber-400/50" },
  "field-of-emotion": { glow: "from-rose-500/30 via-pink-400/20 to-red-500/30", accent: "border-rose-400/50" },
  "path-of-action": { glow: "from-emerald-500/30 via-teal-400/20 to-cyan-500/30", accent: "border-emerald-400/50" },
  "mountain-of-meaning": { glow: "from-slate-400/30 via-zinc-300/20 to-stone-400/30", accent: "border-slate-400/50" },
};

export function RealmMap() {
  const router = useRouter();
  const [hoveredRealm, setHoveredRealm] = useState<Realm | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent, realm: Realm) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setTooltipPosition({ x, y });
    setHoveredRealm(realm);
  };

  const handleMouseLeave = () => {
    setHoveredRealm(null);
  };

  const handleClick = (realm: Realm) => {
    router.push(`/realms/${realm.id}`);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto" ref={containerRef}>
      {/* Main illustration */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
        {/* Soft vignette overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-background/20 via-transparent to-background/40" />
        
        <Image
          src="/realm-landing.jpg"
          alt="The Realm - An interactive map of inner experience showing six mystical realms"
          width={1456}
          height={816}
          className="w-full h-auto"
          priority
        />

        {/* Interactive overlay regions */}
        <div className="absolute inset-0 z-20">
          {realms.map((realm) => {
            const pos = realmPositions[realm.id];
            const colors = realmColors[realm.id];
            const isHovered = hoveredRealm?.id === realm.id;

            return (
              <button
                key={realm.id}
                className={cn(
                  "absolute transition-all duration-500 cursor-pointer group"
                )}
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  width: `${pos.width}%`,
                  height: `${pos.height}%`,
                }}
                onMouseMove={(e) => handleMouseMove(e, realm)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(realm)}
                aria-label={`Explore ${realm.name}`}
              >
                {/* Magical glow effect on hover */}
                <div
                  className={cn(
                    "absolute inset-0 transition-all duration-700 rounded-lg",
                    "opacity-0 blur-xl",
                    isHovered && "opacity-100",
                    `bg-gradient-radial ${colors.glow}`
                  )}
                  style={{
                    background: isHovered 
                      ? `radial-gradient(ellipse at center, ${
                          realm.id === "ocean-of-being" ? "rgba(34, 211, 238, 0.25)" :
                          realm.id === "theatre-of-perception" ? "rgba(192, 132, 252, 0.25)" :
                          realm.id === "forge-of-thought" ? "rgba(251, 191, 36, 0.25)" :
                          realm.id === "field-of-emotion" ? "rgba(251, 113, 133, 0.25)" :
                          realm.id === "path-of-action" ? "rgba(52, 211, 153, 0.25)" :
                          "rgba(148, 163, 184, 0.25)"
                        } 0%, transparent 70%)`
                      : "none"
                  }}
                />

                {/* Soft inner glow border */}
                <div
                  className={cn(
                    "absolute inset-2 rounded-xl transition-all duration-500",
                    "border-2 border-transparent",
                    isHovered && cn("border-opacity-60", colors.accent),
                    isHovered && "shadow-inner"
                  )}
                  style={{
                    boxShadow: isHovered 
                      ? `inset 0 0 30px ${
                          realm.id === "ocean-of-being" ? "rgba(34, 211, 238, 0.15)" :
                          realm.id === "theatre-of-perception" ? "rgba(192, 132, 252, 0.15)" :
                          realm.id === "forge-of-thought" ? "rgba(251, 191, 36, 0.15)" :
                          realm.id === "field-of-emotion" ? "rgba(251, 113, 133, 0.15)" :
                          realm.id === "path-of-action" ? "rgba(52, 211, 153, 0.15)" :
                          "rgba(148, 163, 184, 0.15)"
                        }`
                      : "none"
                  }}
                />

                {/* Mystical particle effect on hover - small floating dots */}
                {isHovered && (
                  <div className="absolute inset-0 overflow-hidden rounded-xl">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 rounded-full animate-float opacity-60"
                        style={{
                          left: `${20 + i * 12}%`,
                          top: `${30 + (i % 3) * 20}%`,
                          animationDelay: `${i * 0.3}s`,
                          animationDuration: `${3 + i * 0.5}s`,
                          backgroundColor: realm.id === "ocean-of-being" ? "rgb(34, 211, 238)" :
                            realm.id === "theatre-of-perception" ? "rgb(192, 132, 252)" :
                            realm.id === "forge-of-thought" ? "rgb(251, 191, 36)" :
                            realm.id === "field-of-emotion" ? "rgb(251, 113, 133)" :
                            realm.id === "path-of-action" ? "rgb(52, 211, 153)" :
                            "rgb(148, 163, 184)"
                        }}
                      />
                    ))}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Floating tooltip card on hover */}
        {hoveredRealm && (
          <div
            className={cn(
              "absolute z-30 pointer-events-none",
              "transform -translate-x-1/2 -translate-y-full",
              "transition-all duration-300 ease-out"
            )}
            style={{
              left: Math.max(140, Math.min(tooltipPosition.x, containerRef.current ? containerRef.current.offsetWidth - 140 : tooltipPosition.x)),
              top: Math.max(120, tooltipPosition.y - 20),
            }}
          >
            <div 
              className="relative rounded-2xl p-5 w-64 border backdrop-blur-md"
              style={{
                background: `linear-gradient(135deg, 
                  ${hoveredRealm.id === "ocean-of-being" ? "rgba(8, 47, 73, 0.9), rgba(30, 58, 95, 0.85)" :
                    hoveredRealm.id === "theatre-of-perception" ? "rgba(59, 21, 63, 0.9), rgba(74, 29, 75, 0.85)" :
                    hoveredRealm.id === "forge-of-thought" ? "rgba(69, 35, 13, 0.9), rgba(87, 45, 20, 0.85)" :
                    hoveredRealm.id === "field-of-emotion" ? "rgba(76, 25, 46, 0.9), rgba(87, 35, 52, 0.85)" :
                    hoveredRealm.id === "path-of-action" ? "rgba(13, 59, 52, 0.9), rgba(20, 75, 65, 0.85)" :
                    "rgba(30, 35, 45, 0.9), rgba(40, 45, 55, 0.85)"
                  })`,
                borderColor: hoveredRealm.id === "ocean-of-being" ? "rgba(34, 211, 238, 0.3)" :
                  hoveredRealm.id === "theatre-of-perception" ? "rgba(192, 132, 252, 0.3)" :
                  hoveredRealm.id === "forge-of-thought" ? "rgba(251, 191, 36, 0.3)" :
                  hoveredRealm.id === "field-of-emotion" ? "rgba(251, 113, 133, 0.3)" :
                  hoveredRealm.id === "path-of-action" ? "rgba(52, 211, 153, 0.3)" :
                  "rgba(148, 163, 184, 0.3)"
              }}
            >
              {/* Soft outer glow */}
              <div 
                className="absolute -inset-1 -z-10 rounded-2xl blur-xl opacity-50"
                style={{
                  background: hoveredRealm.id === "ocean-of-being" ? "rgba(34, 211, 238, 0.2)" :
                    hoveredRealm.id === "theatre-of-perception" ? "rgba(192, 132, 252, 0.2)" :
                    hoveredRealm.id === "forge-of-thought" ? "rgba(251, 191, 36, 0.2)" :
                    hoveredRealm.id === "field-of-emotion" ? "rgba(251, 113, 133, 0.2)" :
                    hoveredRealm.id === "path-of-action" ? "rgba(52, 211, 153, 0.2)" :
                    "rgba(148, 163, 184, 0.2)"
                }}
              />

              <div className="flex items-start gap-3">
                <span className="text-3xl" role="img" aria-hidden="true">
                  {hoveredRealm.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-foreground text-base leading-tight">
                    {hoveredRealm.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                    {hoveredRealm.description}
                  </p>
                </div>
              </div>

              {/* Click to enter prompt */}
              <div className="mt-4 pt-3 border-t border-foreground/10">
                <p 
                  className="text-xs font-medium tracking-wide text-center"
                  style={{
                    color: hoveredRealm.id === "ocean-of-being" ? "rgb(34, 211, 238)" :
                      hoveredRealm.id === "theatre-of-perception" ? "rgb(192, 132, 252)" :
                      hoveredRealm.id === "forge-of-thought" ? "rgb(251, 191, 36)" :
                      hoveredRealm.id === "field-of-emotion" ? "rgb(251, 113, 133)" :
                      hoveredRealm.id === "path-of-action" ? "rgb(52, 211, 153)" :
                      "rgb(148, 163, 184)"
                  }}
                >
                  Click to enter
                </p>
              </div>

              {/* Arrow pointer */}
              <div 
                className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-4 h-4 rotate-45 border-r border-b backdrop-blur-md"
                style={{
                  background: hoveredRealm.id === "ocean-of-being" ? "rgba(30, 58, 95, 0.9)" :
                    hoveredRealm.id === "theatre-of-perception" ? "rgba(74, 29, 75, 0.9)" :
                    hoveredRealm.id === "forge-of-thought" ? "rgba(87, 45, 20, 0.9)" :
                    hoveredRealm.id === "field-of-emotion" ? "rgba(87, 35, 52, 0.9)" :
                    hoveredRealm.id === "path-of-action" ? "rgba(20, 75, 65, 0.9)" :
                    "rgba(40, 45, 55, 0.9)",
                  borderColor: hoveredRealm.id === "ocean-of-being" ? "rgba(34, 211, 238, 0.3)" :
                    hoveredRealm.id === "theatre-of-perception" ? "rgba(192, 132, 252, 0.3)" :
                    hoveredRealm.id === "forge-of-thought" ? "rgba(251, 191, 36, 0.3)" :
                    hoveredRealm.id === "field-of-emotion" ? "rgba(251, 113, 133, 0.3)" :
                    hoveredRealm.id === "path-of-action" ? "rgba(52, 211, 153, 0.3)" :
                    "rgba(148, 163, 184, 0.3)"
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Realm indicator dots below image */}
      <div className="mt-6 flex items-center justify-center gap-3">
        {realms.map((realm) => {
          const isActive = hoveredRealm?.id === realm.id;
          return (
            <div
              key={realm.id}
              className={cn(
                "rounded-full transition-all duration-500",
                isActive ? "w-8 h-2" : "w-2 h-2"
              )}
              style={{
                backgroundColor: isActive 
                  ? (realm.id === "ocean-of-being" ? "rgb(34, 211, 238)" :
                     realm.id === "theatre-of-perception" ? "rgb(192, 132, 252)" :
                     realm.id === "forge-of-thought" ? "rgb(251, 191, 36)" :
                     realm.id === "field-of-emotion" ? "rgb(251, 113, 133)" :
                     realm.id === "path-of-action" ? "rgb(52, 211, 153)" :
                     "rgb(148, 163, 184)")
                  : "rgba(148, 163, 184, 0.3)",
                boxShadow: isActive 
                  ? `0 0 12px ${
                      realm.id === "ocean-of-being" ? "rgba(34, 211, 238, 0.5)" :
                      realm.id === "theatre-of-perception" ? "rgba(192, 132, 252, 0.5)" :
                      realm.id === "forge-of-thought" ? "rgba(251, 191, 36, 0.5)" :
                      realm.id === "field-of-emotion" ? "rgba(251, 113, 133, 0.5)" :
                      realm.id === "path-of-action" ? "rgba(52, 211, 153, 0.5)" :
                      "rgba(148, 163, 184, 0.5)"
                    }`
                  : "none"
              }}
              title={realm.name}
            />
          );
        })}
      </div>

    </div>
  );
}
