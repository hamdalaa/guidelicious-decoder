import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";

interface Props {
  className?: string;
  direction?: "down" | "up";
}

export function LangToggle({ className, direction = "down" }: Props) {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const other = lang === "en" ? "ar" : "en";

  useEffect(() => {
    if (open) {
      setMounted(true);
      const r = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(r);
    }
    setVisible(false);
    const t = window.setTimeout(() => setMounted(false), 170);
    return () => window.clearTimeout(t);
  }, [open]);

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

  const isUp = direction === "up";
  const closedTransform = isUp ? "translateY(6px)" : "translateY(-6px)";

  return (
    <div ref={ref} className={cn("relative inline-block", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Language"
        className="inline-flex w-full items-center justify-center gap-1.5 text-[15px] font-medium leading-none tracking-normal text-[#232323] transition-opacity duration-150 hover:opacity-60"
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
            [isUp ? "bottom" : "top"]: "100%",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : closedTransform,
            transitionProperty: "opacity, transform",
            transitionDuration: "170ms",
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
          className="absolute inset-x-0 z-50 pt-1"
        >
          <button
            type="button"
            role="option"
            aria-selected={false}
            onClick={() => {
              setLang(other);
              setOpen(false);
            }}
            className="flex w-full items-center justify-center rounded-[6px] py-1.5 text-[15px] font-medium uppercase leading-none tracking-normal text-[#232323] transition-colors duration-150 hover:bg-[#F5F5F5]"
          >
            {other}
          </button>
        </div>
      )}
    </div>
  );
}
