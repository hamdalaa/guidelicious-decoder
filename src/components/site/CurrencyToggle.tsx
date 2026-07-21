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
    <div ref={ref} dir="ltr" className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex h-9 items-center gap-1.5 rounded-full bg-edio-sky/60 px-3.5 text-[11px] font-semibold uppercase tracking-wide text-edio-navy transition-colors hover:bg-edio-sky/80"
      >
        <span>{current}</span>
        <FiChevronDown
          className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")}
        />
      </button>
      <div
        role="listbox"
        className={cn(
          "absolute left-0 mt-2 min-w-[7rem] origin-top overflow-hidden rounded-2xl bg-white p-1 shadow-[0_20px_50px_-20px_rgba(9,10,50,0.35)] transition-all",
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
                "flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold transition-colors",
                active
                  ? "bg-edio-navy text-edio-cream"
                  : "text-edio-navy hover:bg-edio-sky/40",
              )}
            >
              <span className={cn("w-6 text-start text-[13px]", active ? "opacity-80" : "opacity-60")}>
                {symbol}
              </span>
              <span className="uppercase tracking-wide">{code}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
