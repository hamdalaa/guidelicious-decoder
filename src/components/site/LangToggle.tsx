import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
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
        className="inline-flex items-center gap-1.5 text-[15px] font-medium leading-none text-[#232323] transition-opacity duration-150 hover:opacity-60"
      >
        <span className="uppercase">{lang}</span>
        <ChevronDown
          className={cn("h-4 w-4 transition-transform duration-150", open && "rotate-180")}
          strokeWidth={1.75}
        />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute top-full mt-3 min-w-[80px] rounded-xl border border-[#F2F2F2] bg-white py-1 shadow-[0_8px_28px_-14px_rgba(0,0,0,0.12)] z-50 start-0"
        >
          <button
            type="button"
            role="option"
            aria-selected={false}
            onClick={() => {
              setLang(other);
              setOpen(false);
            }}
            className="w-full text-start px-3 py-2 text-[14px] font-medium uppercase text-[#232323] hover:bg-[#F7F7F7] transition-colors"
          >
            {other}
          </button>
        </div>
      )}
    </div>
  );
}
