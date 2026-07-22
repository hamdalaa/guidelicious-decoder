import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";

export function LangToggle({ className }: { className?: string }) {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const other = lang === "en" ? "ar" : "en";

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={cn("relative inline-block", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Language"
        className="inline-flex items-center gap-1 text-[12px] font-semibold uppercase tracking-wider text-edio-navy/50 hover:text-edio-navy/80 transition-colors bg-transparent border-0 p-1"
      >
        <span>{lang}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          aria-hidden
          className={cn("transition-transform", open && "rotate-180")}
        >
          <path
            d="M2 3.5 L5 6.5 L8 3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute top-full mt-2 min-w-[72px] rounded-md border border-edio-navy/10 bg-edio-cream shadow-[0_8px_24px_-12px_rgba(9,10,50,0.18)] py-1 z-50 start-0"
          style={{ fontFamily: "var(--font-en-main)" }}
        >
          <button
            type="button"
            role="option"
            aria-selected={false}
            onClick={() => {
              setLang(other);
              setOpen(false);
            }}
            className="w-full text-start px-3 py-1.5 text-[12px] font-semibold uppercase tracking-wider text-edio-navy/70 hover:bg-edio-navy/5 hover:text-edio-navy transition-colors"
          >
            {other}
          </button>
        </div>
      )}
    </div>
  );
}
