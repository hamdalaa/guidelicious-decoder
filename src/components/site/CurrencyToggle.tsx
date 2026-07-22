import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type Currency = "USD" | "IQD";

const OPTIONS: { code: Currency; symbol: string }[] = [
  { code: "USD", symbol: "$" },
  { code: "IQD", symbol: "د.ع" },
];

interface Props {
  className?: string;
  /** Where the panel expands from the trigger. */
  direction?: "down" | "up";
}

export function CurrencyToggle({ className, direction = "down" }: Props) {
  const [current, setCurrent] = useState<Currency>("USD");
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Mount/unmount with exit animation
  useEffect(() => {
    if (open) {
      setMounted(true);
      const r = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(r);
    }
    setVisible(false);
    const t = window.setTimeout(() => setMounted(false), 200);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isUp = direction === "up";
  const translateClosed = isUp ? "translateY(8px)" : "translateY(-8px)";

  return (
    <div ref={ref} className={cn("relative inline-block", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Currency"
        className="inline-flex items-center gap-1.5 text-[15px] font-medium leading-none text-[#232323] transition-opacity duration-150 hover:opacity-60"
      >
        <span>{current}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            open && "rotate-180",
          )}
          strokeWidth={1.75}
        />
      </button>
      {mounted && (
        <div
          role="listbox"
          style={{
            transform: visible ? "translateY(0) scale(1)" : `${translateClosed} scale(0.98)`,
            opacity: visible ? 1 : 0,
            transitionProperty: "opacity, transform",
            transitionDuration: "200ms",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            transformOrigin: isUp ? "bottom right" : "top right",
            [isUp ? "bottom" : "top"]: "calc(100% + 7px)",
          }}
          className="absolute end-0 min-w-[10rem] rounded-[18px] border border-black/[0.06] bg-white p-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.12)] z-50"
        >
          {OPTIONS.map(({ code, symbol }) => {
            const active = current === code;
            return (
              <button
                key={code}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => {
                  setCurrent(code);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center justify-between gap-6 rounded-[12px] px-3.5 h-[44px] text-[15px] font-medium leading-none text-[#232323] transition-colors duration-150",
                  "hover:bg-[#F5F5F5]",
                  active && "bg-[#F5F5F5]",
                )}
              >
                <span>{code}</span>
                <span className="text-[#8A8A8A]">{symbol}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
