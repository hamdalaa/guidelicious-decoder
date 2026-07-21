import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { FiChevronDown } from "react-icons/fi";

export type Currency = "USD" | "IQD";

interface Props {
  value?: Currency;
  onChange?: (c: Currency) => void;
  className?: string;
}

export function CurrencyToggle({ value = "USD", onChange, className }: Props) {
  const [current, setCurrent] = useState<Currency>(value);
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

  const pick = (c: Currency) => {
    setCurrent(c);
    onChange?.(c);
    setOpen(false);
  };

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-9 items-center gap-1.5 rounded-full bg-edio-sky/50 px-3 text-[11px] font-medium uppercase tracking-wide text-edio-navy transition-colors hover:bg-edio-sky/70"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{current}</span>
        <FiChevronDown
          className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")}
        />
      </button>
      <div
        role="listbox"
        className={cn(
          "absolute end-0 mt-2 min-w-[6rem] overflow-hidden rounded-2xl border border-edio-navy/10 bg-white/95 p-1 shadow-lg backdrop-blur-md transition-all",
          open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0",
        )}
      >
        {(["USD", "IQD"] as const).map((c) => {
          const active = current === c;
          return (
            <button
              key={c}
              type="button"
              role="option"
              aria-selected={active}
              onClick={() => pick(c)}
              className={cn(
                "flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors",
                active ? "bg-edio-navy text-edio-cream" : "text-edio-navy hover:bg-edio-sky/40",
              )}
            >
              <span className="font-medium">{c}</span>
              <span className="text-[10px] opacity-70">
                {c === "USD" ? "$" : "د.ع"}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
