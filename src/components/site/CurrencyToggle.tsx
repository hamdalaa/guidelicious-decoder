import { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { cn } from "@/lib/utils";

export type Currency = "USD" | "IQD";

const OPTIONS: { code: Currency; symbol: string }[] = [
  { code: "USD", symbol: "$" },
  { code: "IQD", symbol: "د.ع" },
];

export function CurrencyToggle({ className }: { className?: string }) {
  const [current, setCurrent] = useState<Currency>("USD");
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
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex h-9 items-center gap-1 px-1.5 text-[12px] font-semibold uppercase tracking-wider text-edio-navy transition-colors hover:text-edio-navy/70"
      >
        <span>{current}</span>
        <FiChevronDown
          className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")}
        />
      </button>
      <div
        role="listbox"
        className={cn(
          "absolute end-0 mt-2 min-w-[9rem] overflow-hidden rounded-xl border border-edio-navy/10 bg-white p-1 shadow-[0_12px_36px_-16px_rgba(9,10,50,0.2)] transition-all",
          open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0",
        )}
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
                "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                active
                  ? "bg-edio-sky/30 text-edio-navy"
                  : "text-edio-navy/80 hover:bg-edio-navy/5",
              )}
            >
              <span className="uppercase tracking-wide">{code}</span>
              <span className="text-[13px] text-edio-navy/60">{symbol}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
