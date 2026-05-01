"use client";

import { type Realm } from "@/lib/realms";
import { cn } from "@/lib/utils";

interface AtmospherePanelProps {
  realm: Realm | null;
}

export function AtmospherePanel({ realm }: AtmospherePanelProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border/50",
        "bg-gradient-to-br from-card/80 via-card/60 to-card/80",
        "backdrop-blur-sm transition-all duration-700",
        realm ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      {/* Decorative mist elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-mist" />
        <div
          className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-mist"
          style={{ animationDelay: "-4s" }}
        />
      </div>

      {realm && (
        <div className="relative z-10 p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl" role="img" aria-hidden="true">
              {realm.icon}
            </span>
            <h4 className="text-xl font-medium text-foreground">{realm.name}</h4>
          </div>
          <p className="text-muted-foreground leading-relaxed text-pretty max-w-2xl">
            {realm.atmosphere}
          </p>
        </div>
      )}
    </div>
  );
}
