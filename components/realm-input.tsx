"use client";

import { cn } from "@/lib/utils";

interface RealmInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

export function RealmInput({ value, onChange, onSubmit }: RealmInputProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative group">
        {/* Background glow */}
        <div
          className={cn(
            "absolute -inset-1 rounded-2xl opacity-0 blur-lg transition-opacity duration-500",
            "bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30",
            "group-focus-within:opacity-100"
          )}
        />

        <div className="relative flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <label htmlFor="realm-destination" className="sr-only">
              What do you want to explore?
            </label>
            <input
              id="realm-destination"
              type="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder="What do you want to explore?"
              className={cn(
                "w-full px-6 py-4 rounded-xl",
                "bg-input/50 border border-border/50",
                "text-foreground placeholder:text-muted-foreground/60",
                "focus:outline-none focus:border-primary/50 focus:bg-input/70",
                "transition-all duration-300"
              )}
            />
          </div>

          <button
            type="submit"
            className={cn(
              "relative px-8 py-4 rounded-xl font-medium",
              "bg-gradient-to-r from-primary/80 to-primary/60",
              "text-primary-foreground",
              "border border-primary/30",
              "hover:from-primary hover:to-primary/80",
              "hover:shadow-[0_0_30px_rgba(100,200,220,0.3)]",
              "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background",
              "transition-all duration-300",
              "group/btn"
            )}
          >
            <span className="relative z-10 flex items-center gap-2">
              Enter the Realm
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}
