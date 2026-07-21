import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Lang = "en" | "ar";

export function LangToggle({ className }: { className?: string }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const el = document.documentElement;
    el.lang = lang;
    el.dir = lang === "ar" ? "rtl" : "ltr";
    // brief page fade to smooth the direction/font swap
    const main = document.querySelector("main");
    if (main) {
      main.classList.remove("edio-lang-swap");
      // force reflow so the animation replays
      void (main as HTMLElement).offsetWidth;
      main.classList.add("edio-lang-swap");
    }
  }, [lang]);

  const isAr = lang === "ar";

  return (
    <div
      className={cn(
        "relative inline-flex h-8 items-center rounded-full bg-edio-sky/40 p-1 text-[11px] font-medium select-none",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {/* Sliding thumb */}
      <span
        aria-hidden
        className="absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-edio-navy shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: isAr ? "translateX(100%)" : "translateX(0%)" }}
      />
      {(["en", "ar"] as const).map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            className={cn(
              "relative z-10 w-10 rounded-full py-1 uppercase tracking-wide transition-colors duration-300",
              active ? "text-edio-cream" : "text-edio-navy/70 hover:text-edio-navy",
            )}
            aria-pressed={active}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
