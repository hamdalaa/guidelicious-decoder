import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type Currency = "USD" | "IQD";

const OPTIONS: Currency[] = ["USD", "IQD"];

interface Props {
  className?: string;
  direction?: "down" | "up";
}

export function CurrencyToggle({ className, direction = "down" }: Props) {
  const [current, setCurrent] = useState<Currency>("USD");
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
  const closedTransform = isUp ? "translateY(6px)" : "translateY(-6px)";
  const others = OPTIONS.filter((o) => o !== current);

  return (
    <div ref={ref} className={cn("relative inline-block", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Currency"
        className="inline-flex w-full items-center justify-center gap-1.5 text-[15px] font-medium leading-none tracking-normal text-[#232323] transition-opacity duration-150 hover:opacity-60"
      >
        <span>{current}</span>
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
          className="absolute inset-x-0 z-50 pt-1 flex flex-col gap-0.5"
        >
          {others.map((code) => (
            <button
              key={code}
              type="button"
              role="option"
              aria-selected={false}
              onClick={() => {
                setCurrent(code);
                setOpen(false);
              }}
              className="flex w-full items-center justify-center rounded-[6px] py-1.5 text-[15px] font-medium leading-none tracking-normal text-[#232323] transition-colors duration-150 hover:bg-[#F5F5F5]"
            >
              {code}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
