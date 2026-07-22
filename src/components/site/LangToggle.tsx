import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n, type Lang } from "@/lib/i18n";

interface Props {
  className?: string;
  direction?: "down" | "up";
  variant?: "inline" | "row";
}

const OPTIONS: { code: Lang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
];

export function LangToggle({ className, direction = "down", variant = "inline" }: Props) {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [focusIdx, setFocusIdx] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isAr = lang === "ar";

  useEffect(() => {
    if (open) {
      setMounted(true);
      setFocusIdx(OPTIONS.findIndex((o) => o.code === lang));
      const r = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(r);
    }
    setVisible(false);
    const t = window.setTimeout(() => setMounted(false), 180);
    return () => window.clearTimeout(t);
  }, [open, lang]);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocusIdx((i) => (i + 1) % OPTIONS.length);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocusIdx((i) => (i - 1 + OPTIONS.length) % OPTIONS.length);
      }
      if (e.key === "Enter") {
        e.preventDefault();
        const opt = OPTIONS[focusIdx];
        if (opt) {
          setLang(opt.code);
          setOpen(false);
        }
      }
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, focusIdx, setLang]);

  const isUp = direction === "up";
  const label = isAr ? "اللغة" : "Language";
  const current = OPTIONS.find((o) => o.code === lang)!;

  if (variant === "row") {
    return (
      <div ref={ref} className={cn("relative w-full", className)}>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="listbox"
          aria-expanded={open}
          className="flex h-[52px] w-full items-center justify-between rounded-xl border border-[#EDEDED] bg-white px-4 text-[15px] font-medium text-[#232323] transition-colors hover:bg-[#FAFAFA]"
        >
          <span className="text-[#6B6B6B]">{label}</span>
          <span className="ms-auto flex items-center gap-2">
            <span>{current.label}</span>
            <ChevronDown
              className={cn("h-4 w-4 text-[#6B6B6B] transition-transform duration-150", open && "rotate-180")}
              strokeWidth={1.75}
            />
          </span>
        </button>
        {mounted && (
          <div
            role="listbox"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(6px)",
              transitionProperty: "opacity, transform",
              transitionDuration: "180ms",
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            className="mt-2 overflow-hidden rounded-xl border border-[#EDEDED] bg-white shadow-[0_4px_16px_rgba(15,23,42,0.06)]"
          >
            {OPTIONS.map((opt) => {
              const active = opt.code === lang;
              return (
                <button
                  key={opt.code}
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    setLang(opt.code);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex h-[48px] w-full items-center justify-between px-4 text-[15px] font-medium transition-colors",
                    active ? "bg-[#EFF6FF] text-[#232323]" : "text-[#232323] hover:bg-[#F6F7F9]",
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span className="uppercase text-[#6B6B6B] text-[13px]">{opt.code}</span>
                    <span>{opt.label}</span>
                  </span>
                  {active && <Check className="h-4 w-4 text-[#2563EB]" strokeWidth={2} />}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={ref} className={cn("relative inline-block", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Language"
        className="inline-flex items-center gap-1.5 text-[15px] font-medium leading-none text-[#232323] transition-opacity duration-150 hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#232323]/20 rounded"
      >
        <span className="uppercase">{lang}</span>
        <ChevronDown
          className={cn("h-4 w-4 transition-transform duration-150", open && "rotate-180")}
          strokeWidth={1.75}
        />
      </button>

      {mounted && (
        <div
          role="listbox"
          style={{
            [isUp ? "bottom" : "top"]: "calc(100% + 8px)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0) scale(1)" : `translateY(${isUp ? "6px" : "-6px"}) scale(0.98)`,
            transformOrigin: isUp ? "bottom center" : "top center",
            transitionProperty: "opacity, transform",
            transitionDuration: "180ms",
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
          className="absolute z-50 min-w-[160px] overflow-hidden rounded-xl border border-[#EDEDED] bg-white p-1 shadow-[0_8px_24px_rgba(15,23,42,0.08)] ltr:right-0 rtl:left-0"
        >
          {OPTIONS.map((opt, idx) => {
            const active = opt.code === lang;
            const focused = idx === focusIdx;
            return (
              <button
                key={opt.code}
                type="button"
                role="option"
                aria-selected={active}
                onMouseEnter={() => setFocusIdx(idx)}
                onClick={() => {
                  setLang(opt.code);
                  setOpen(false);
                }}
                className={cn(
                  "flex h-10 w-full items-center justify-between gap-4 rounded-lg px-3 text-[14px] font-medium transition-colors",
                  active ? "bg-[#EFF6FF] text-[#232323]" : "text-[#232323]",
                  !active && focused && "bg-[#F6F7F9]",
                  !active && !focused && "hover:bg-[#F6F7F9]",
                )}
              >
                <span className="flex items-center gap-2.5">
                  <span className="uppercase text-[12px] text-[#6B6B6B]">{opt.code}</span>
                  <span>{opt.label}</span>
                </span>
                {active && <Check className="h-4 w-4 text-[#2563EB]" strokeWidth={2} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
