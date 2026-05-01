"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { type Realm, realms } from "@/lib/realms";
import { cn } from "@/lib/utils";

interface RealmMapProps {
  onRealmSelect: (realm: Realm | null) => void;
  selectedRealm: Realm | null;
}

// Map realm IDs to their positions in the 2x3 grid layout of the illustration
const realmPositions: Record<string, { x: number; y: number; width: number; height: number }> = {
  "ocean-of-being": { x: 0, y: 0, width: 33.33, height: 50 },
  "theatre-of-perception": { x: 33.33, y: 0, width: 33.33, height: 50 },
  "forge-of-thought": { x: 66.66, y: 0, width: 33.34, height: 50 },
  "field-of-emotion": { x: 0, y: 50, width: 33.33, height: 50 },
  "path-of-action": { x: 33.33, y: 50, width: 33.33, height: 50 },
  "mountain-of-meaning": { x: 66.66, y: 50, width: 33.34, height: 50 },
};

export function RealmMap({ onRealmSelect, selectedRealm }: RealmMapProps) {
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
    onRealmSelect(selectedRealm?.id === realm.id ? null : realm);
  };

  const activeRealm = hoveredRealm || selectedRealm;

  return (
    <div className="relative w-full max-w-5xl mx-auto" ref={containerRef}>
      {/* Main illustration */}
      <div className="relative rounded-2xl overflow-hidden border border-border/30 shadow-2xl shadow-primary/10">
        <Image
          src="/realm-landing.jpg"
          alt="The Realm - An interactive map of inner experience showing six mystical realms"
          width={1456}
          height={816}
          className="w-full h-auto"
          priority
        />

        {/* Interactive overlay regions */}
        <div className="absolute inset-0">
          {realms.map((realm) => {
            const pos = realmPositions[realm.id];
            const isHovered = hoveredRealm?.id === realm.id;
            const isSelected = selectedRealm?.id === realm.id;

            return (
              <button
                key={realm.id}
                className={cn(
                  "absolute transition-all duration-300 cursor-pointer",
                  "hover:bg-primary/10 hover:backdrop-blur-[2px]",
                  "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-inset",
                  isHovered && "bg-primary/10 backdrop-blur-[2px]",
                  isSelected && "bg-primary/15 ring-2 ring-primary/40 ring-inset"
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
                {/* Glow border on hover/select */}
                <div
                  className={cn(
                    "absolute inset-0 border-2 transition-all duration-300",
                    "border-transparent",
                    isHovered && "border-primary/40",
                    isSelected && "border-primary/60"
                  )}
                />

                {/* Corner accents when active */}
                {(isHovered || isSelected) && (
                  <>
                    <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary/60" />
                    <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary/60" />
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary/60" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary/60" />
                  </>
                )}
              </button>
            );
          })}
        </div>

        {/* Floating tooltip card on hover */}
        {hoveredRealm && (
          <div
            className={cn(
              "absolute z-20 pointer-events-none",
              "transform -translate-x-1/2 -translate-y-full",
              "transition-opacity duration-200"
            )}
            style={{
              left: Math.max(120, Math.min(tooltipPosition.x, containerRef.current ? containerRef.current.offsetWidth - 120 : tooltipPosition.x)),
              top: Math.max(100, tooltipPosition.y - 16),
            }}
          >
            <div className="relative bg-card/95 backdrop-blur-md border border-border/50 rounded-xl p-4 shadow-xl shadow-black/30 w-56">
              {/* Glow effect */}
              <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-xl opacity-50" />

              <div className="flex items-start gap-3">
                <span className="text-2xl" role="img" aria-hidden="true">
                  {hoveredRealm.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-foreground text-sm leading-tight">
                    {hoveredRealm.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {hoveredRealm.description}
                  </p>
                </div>
              </div>

              {/* Arrow pointer */}
              <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-4 h-4 bg-card/95 border-r border-b border-border/50 rotate-45" />
            </div>
          </div>
        )}
      </div>

      {/* Realm indicator bar below image */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {realms.map((realm) => {
          const isActive = activeRealm?.id === realm.id;
          return (
            <div
              key={realm.id}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                isActive ? "bg-primary w-6" : "bg-muted-foreground/30"
              )}
              title={realm.name}
            />
          );
        })}
      </div>

      {/* Currently selected realm name */}
      {activeRealm && (
        <div className="mt-3 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="mr-2">{activeRealm.icon}</span>
            <span className="text-foreground font-medium">{activeRealm.name}</span>
          </p>
        </div>
      )}
    </div>
  );
}
