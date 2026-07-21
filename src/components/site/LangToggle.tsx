import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Lang = "en" | "ar";

export function LangToggle({ className }: { className?: string }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const el = document.documentElement;
    el.lang = lang;
    el.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full bg-edio-sky/30 p-0.5 text-[11px] font-medium",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {(["en", "ar"] as const).map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            className={cn(
              "rounded-full px-3 py-1 uppercase tracking-wide transition-colors",
              active
                ? "bg-edio-navy text-edio-cream"
                : "text-edio-navy/70 hover:text-edio-navy",
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
