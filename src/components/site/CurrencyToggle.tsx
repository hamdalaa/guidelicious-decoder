import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
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
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
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
        aria-label="Currency"
        className="inline-flex items-center gap-1.5 text-[15px] font-medium leading-none text-[#232323] transition-opacity duration-150 hover:opacity-60"
      >
        <span>{current}</span>
        <ChevronDown
          className={cn("h-4 w-4 transition-transform duration-150", open && "rotate-180")}
          strokeWidth={1.75}
        />
      </button>
      {open && (
        <div
          role="listbox"
          className="absolute top-full end-0 mt-3 min-w-[9rem] rounded-xl border border-[#F2F2F2] bg-white p-1 shadow-[0_8px_28px_-14px_rgba(0,0,0,0.12)] z-50"
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
                  "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-[14px] font-medium transition-colors",
                  active
                    ? "bg-[#F7F7F7] text-[#232323]"
                    : "text-[#232323] hover:bg-[#F7F7F7]",
                )}
              >
                <span>{code}</span>
                <span className="text-[13px] text-[#8A8A8A]">{symbol}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
