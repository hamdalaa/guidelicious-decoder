import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n, type Lang } from "@/lib/i18n";

const LABELS: Record<Lang, string> = { en: "EN", ar: "AR" };

export function LangToggle({ className }: { className?: string }) {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-sm font-medium text-edio-navy transition-colors hover:bg-edio-navy/5"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{LABELS[lang]}</span>
        <ChevronDown
          className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")}
        />
      </button>

      <div
        role="listbox"
        className={cn(
          "absolute end-0 mt-2 min-w-[7rem] origin-top overflow-hidden rounded-2xl border border-edio-navy/10 bg-white/95 p-1 shadow-lg backdrop-blur-md transition-all",
          open
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0",
        )}
      >
        {(["en", "ar"] as const).map((code) => {
          const active = lang === code;
          return (
            <button
              key={code}
              type="button"
              role="option"
              aria-selected={active}
              onClick={() => {
                setLang(code);
                setOpen(false);
              }}
              className={cn(
                "flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm transition-colors",
                active
                  ? "bg-edio-navy text-edio-cream"
                  : "text-edio-navy hover:bg-edio-sky/40",
              )}
            >
              <span>{code === "en" ? "English" : "العربية"}</span>
              {active ? (
                <Check className="h-3.5 w-3.5" />
              ) : (
                <span className="text-[10px] font-medium uppercase tracking-wide opacity-60">
                  {LABELS[code]}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
