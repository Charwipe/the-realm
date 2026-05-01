"use client";

import { useState } from "react";
import { realms, type Realm } from "@/lib/realms";
import { RealmMap } from "@/components/realm-map";
import { AtmospherePanel } from "@/components/atmosphere-panel";
import { RealmInput } from "@/components/realm-input";

export default function HomePage() {
  const [selectedRealm, setSelectedRealm] = useState<Realm | null>(null);
  const [destination, setDestination] = useState("");

  const handleRealmSelect = (realm: Realm | null) => {
    setSelectedRealm(realm);
  };

  const handleEnterRealm = () => {
    // This will later connect to an AI guide and quest system
    console.log("[v0] Entering realm with destination:", destination);
    console.log("[v0] Selected realm:", selectedRealm?.name);
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background atmospheric elements */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />

        {/* Misty orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute top-1/2 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "-2s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-mist/20 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "-3s" }}
        />

        {/* Subtle path lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03]"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <path
            d="M0,400 Q300,300 600,400 T1200,400"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-foreground"
          />
          <path
            d="M0,500 Q400,400 800,500 T1200,500"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-foreground"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <header className="text-center mb-10 md:mb-14">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.2em] text-foreground mb-6 animate-float">
              REALM
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto text-pretty">
              An interactive map of inner experience
            </p>

            {/* Decorative line */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-border" />
              <div className="w-2 h-2 rounded-full bg-primary/50" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-border" />
            </div>
          </header>

          {/* Interactive Realm Map */}
          <section aria-labelledby="realms-heading" className="mb-8">
            <h2 id="realms-heading" className="sr-only">
              Explore the Realms
            </h2>
            <RealmMap
              onRealmSelect={handleRealmSelect}
              selectedRealm={selectedRealm}
            />
          </section>

          {/* Atmosphere Panel */}
          <section aria-live="polite" className="mb-10">
            <AtmospherePanel realm={selectedRealm} />
          </section>

          {/* Input Section */}
          <section className="max-w-2xl mx-auto">
            <RealmInput
              value={destination}
              onChange={setDestination}
              onSubmit={handleEnterRealm}
            />
          </section>

          {/* Footer decorative element */}
          <footer className="mt-16 md:mt-24 text-center">
            <div className="inline-flex items-center gap-2 text-muted-foreground/40 text-sm">
              <span className="w-8 h-px bg-border/50" />
              <span>Begin your journey</span>
              <span className="w-8 h-px bg-border/50" />
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
