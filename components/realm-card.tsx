"use client";

import { type Realm } from "@/lib/realms";
import { cn } from "@/lib/utils";

interface RealmCardProps {
  realm: Realm;
  isSelected: boolean;
  onClick: () => void;
}

export function RealmCard({ realm, isSelected, onClick }: RealmCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative w-full text-left rounded-2xl p-6 transition-all duration-500",
        "bg-gradient-to-br",
        realm.gradient,
        "border border-border/50 hover:border-primary/50",
        "hover:shadow-[0_0_40px_rgba(100,200,220,0.15)]",
        "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background",
        isSelected && "border-primary/70 shadow-[0_0_50px_rgba(100,200,220,0.2)]"
      )}
    >
      {/* Glow effect on hover */}
      <div
        className={cn(
          "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500",
          "bg-gradient-to-br from-primary/10 via-transparent to-accent/10",
          "group-hover:opacity-100",
          isSelected && "opacity-100"
        )}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3
              className={cn(
                "text-lg font-medium text-foreground/90 transition-colors duration-300",
                "group-hover:text-foreground",
                isSelected && "text-foreground"
              )}
            >
              {realm.name}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {realm.description}
            </p>
          </div>
          <span
            className={cn(
              "text-2xl opacity-60 transition-all duration-500",
              "group-hover:opacity-100 group-hover:scale-110",
              isSelected && "opacity-100 scale-110"
            )}
            role="img"
            aria-hidden="true"
          >
            {realm.icon}
          </span>
        </div>
      </div>

      {/* Subtle animated border glow */}
      <div
        className={cn(
          "absolute inset-0 -z-10 rounded-2xl opacity-0 blur-xl transition-opacity duration-700",
          "bg-gradient-to-br from-primary/20 to-accent/20",
          "group-hover:opacity-50",
          isSelected && "opacity-60 animate-pulse-glow"
        )}
      />
    </button>
  );
}
