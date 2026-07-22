import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { openSelector, subscribeSelector } from "./selector-bus";

export interface SelectorOption {
  value: string;
  /** Compact code shown as muted secondary label, e.g. "EN", "USD". */
  code: string;
  /** Primary supporting value, e.g. "English", "$". */
  label: string;
}

interface DesktopSelectorProps {
  /** Trigger text (usually the selected code). */
  triggerLabel: string;
  ariaLabel: string;
  options: SelectorOption[];
  value: string;
  onChange: (value: string) => void;
  /** Direction to open — inherited from RTL/LTR. */
  dir: "rtl" | "ltr";
}

/**
 * Shared anchored popover selector. Used for both Language and Currency in the
 * desktop header. Renders into a portal so it is never clipped by the header
 * or hero. Follows menu/listbox keyboard pattern.
 */
export function DesktopSelector({
  triggerLabel,
  ariaLabel,
  options,
  value,
  onChange,
  dir,
}: DesktopSelectorProps) {
  const id = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [focusIdx, setFocusIdx] = useState(0);
  const [pos, setPos] = useState<{ top: number; left: number; minWidth: number } | null>(null);

  const openIt = useCallback(
    (startIdx?: number) => {
      const idx =
        startIdx !== undefined
          ? startIdx
          : Math.max(0, options.findIndex((o) => o.value === value));
      setFocusIdx(idx);
      setOpen(true);
      openSelector(id);
    },
    [id, options, value],
  );

  const close = useCallback((restoreFocus = false) => {
    setOpen(false);
    if (restoreFocus) requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  // Close when another selector opens.
  useEffect(() => {
    return subscribeSelector((otherId) => {
      if (otherId !== id) setOpen(false);
    });
  }, [id]);

  // Mount/unmount + animation lifecycle.
  useEffect(() => {
    if (open) {
      setMounted(true);
      const r = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(r);
    }
    setVisible(false);
    const t = window.setTimeout(() => setMounted(false), 160);
    return () => window.clearTimeout(t);
  }, [open]);

  // Position on open + reposition on resize/scroll.
  useLayoutEffect(() => {
    if (!mounted) return;
    const compute = () => {
      const trig = triggerRef.current;
      if (!trig) return;
      const r = trig.getBoundingClientRect();
      const menuWidth = Math.max(180, popoverRef.current?.offsetWidth ?? 200);
      const gutter = 8;
      let left: number;
      if (dir === "rtl") {
        // Anchor to trigger's inline-start edge (right side visually).
        left = r.right - menuWidth;
      } else {
        // Anchor to trigger's inline-end edge (right side visually).
        left = r.right - menuWidth;
      }
      // Clamp to viewport.
      left = Math.max(gutter, Math.min(left, window.innerWidth - menuWidth - gutter));
      const top = r.bottom + 8;
      setPos({ top, left, minWidth: 180 });
    };
    compute();
    const onScroll = () => close();
    window.addEventListener("resize", compute);
    window.addEventListener("scroll", onScroll, true);
    return () => {
      window.removeEventListener("resize", compute);
      window.removeEventListener("scroll", onScroll, true);
    };
  }, [mounted, dir, close]);

  // Outside click + Escape/keyboard.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (triggerRef.current?.contains(t)) return;
      if (popoverRef.current?.contains(t)) return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close(true);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocusIdx((i) => (i + 1) % options.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocusIdx((i) => (i - 1 + options.length) % options.length);
      } else if (e.key === "Home") {
        e.preventDefault();
        setFocusIdx(0);
      } else if (e.key === "End") {
        e.preventDefault();
        setFocusIdx(options.length - 1);
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const opt = options[focusIdx];
        if (opt) {
          onChange(opt.value);
          close(true);
        }
      } else if (e.key === "Tab") {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, focusIdx, options, onChange, close]);

  const onTriggerKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!open) openIt(Math.max(0, options.findIndex((o) => o.value === value)));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!open) openIt(options.length - 1);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (open) close(); else openIt();
    }
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => (open ? close() : openIt())}
        onKeyDown={onTriggerKeyDown}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
        className="inline-flex h-11 items-center gap-1.5 rounded-md px-1 text-[15px] font-medium leading-none text-[#232323] transition-opacity duration-150 hover:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#87CBF6]/60"
      >
        <span className="uppercase tracking-[0.02em]">{triggerLabel}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200 motion-reduce:transition-none",
            open && "rotate-180",
          )}
          strokeWidth={1.75}
        />
      </button>

      {mounted && pos && typeof document !== "undefined" &&
        createPortal(
          <div
            ref={popoverRef}
            role="listbox"
            aria-label={ariaLabel}
            style={{
              position: "fixed",
              top: pos.top,
              left: pos.left,
              minWidth: pos.minWidth,
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0) scale(1)"
                : "translateY(-6px) scale(0.98)",
              transformOrigin: "top center",
              transitionProperty: "opacity, transform",
              transitionDuration: visible ? "180ms" : "140ms",
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            className="z-[100] overflow-hidden rounded-2xl border border-[#ECECEC] bg-[#FDFDFB] p-1 shadow-[0_10px_30px_-12px_rgba(15,23,42,0.18)] motion-reduce:transition-none"
          >
            {options.map((opt, idx) => {
              const active = opt.value === value;
              const focused = idx === focusIdx;
              return (
                <button
                  key={opt.value}
                  type="button"
                  role="option"
                  aria-selected={active}
                  onMouseEnter={() => setFocusIdx(idx)}
                  onClick={() => {
                    onChange(opt.value);
                    close(true);
                  }}
                  className={cn(
                    "grid h-11 w-full grid-cols-[36px_1fr_20px] items-center gap-2 rounded-xl px-3 text-[14px] font-medium transition-colors duration-150 text-start",
                    active
                      ? "bg-[#EAF4FE] text-[#0F172A]"
                      : "text-[#0F172A] hover:bg-[#F3F5F8]",
                    !active && focused && "bg-[#F3F5F8]",
                  )}
                >
                  <span className="text-[12px] font-semibold uppercase tracking-[0.04em] text-[#6B7280]">
                    {opt.code}
                  </span>
                  <span className="truncate">{opt.label}</span>
                  <span aria-hidden className="grid h-5 w-5 place-items-center">
                    {active && <Check className="h-4 w-4 text-[#2563EB]" strokeWidth={2.25} />}
                  </span>
                </button>
              );
            })}
          </div>,
          document.body,
        )}
    </>
  );
}

/* ---------------- Mobile row (inside drawer) ---------------- */

interface MobileRowProps {
  label: string;
  value: string;
  onClick: () => void;
}

/**
 * Compact full-width row shown inside the mobile navigation drawer. Tapping it
 * transitions the drawer to a nested selection panel (handled by Header).
 */
export function SelectorRow({ label, value, onClick }: MobileRowProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-14 w-full items-center rounded-xl border border-[#ECECEC] bg-white px-4 text-[15px] font-medium text-[#0F172A] transition-colors duration-150 hover:bg-[#F8F9FB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#87CBF6]/60"
    >
      <span className="text-[13px] font-medium text-[#6B7280]">{label}</span>
      <span className="ms-auto flex items-center gap-2 text-[15px] text-[#0F172A]">
        <span>{value}</span>
        <ChevronDown className="h-4 w-4 -rotate-90 rtl:rotate-90 text-[#6B7280]" strokeWidth={1.75} />
      </span>
    </button>
  );
}

/* ---------------- Mobile nested panel ---------------- */

interface MobilePanelProps {
  title: string;
  onBack: () => void;
  options: SelectorOption[];
  value: string;
  onChange: (value: string) => void;
  dir: "rtl" | "ltr";
}

export function SelectorPanel({
  title,
  onBack,
  options,
  value,
  onChange,
  dir,
}: MobilePanelProps) {
  const firstRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    // Focus first option (or selected) when panel opens.
    const idx = Math.max(0, options.findIndex((o) => o.value === value));
    const el = document.querySelectorAll<HTMLButtonElement>(
      '[data-edio-panel-option="true"]',
    )[idx];
    (el ?? firstRef.current)?.focus();
  }, [options, value]);

  return (
    <div className="flex h-full flex-col bg-white" role="dialog" aria-label={title}>
      <div className="flex items-center gap-2 px-4 pt-5 pb-4 border-b border-[#F2F2F2]">
        <button
          type="button"
          onClick={onBack}
          aria-label="Back"
          className="grid h-11 w-11 place-items-center rounded-full text-[#232323] transition-opacity hover:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#87CBF6]/60"
        >
          {/* Arrow mirrors correctly in RTL because we flip the SVG */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transform: dir === "rtl" ? "scaleX(-1)" : undefined }}
            aria-hidden
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <h2 className="text-[17px] font-semibold text-[#0F172A]">{title}</h2>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-3">
        <ul className="space-y-1">
          {options.map((opt, idx) => {
            const active = opt.value === value;
            return (
              <li key={opt.value}>
                <button
                  ref={idx === 0 ? firstRef : undefined}
                  data-edio-panel-option="true"
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    onChange(opt.value);
                    onBack();
                  }}
                  className={cn(
                    "grid min-h-[52px] w-full grid-cols-[1fr_24px] items-center gap-3 rounded-xl px-4 text-start text-[16px] font-medium transition-colors duration-150",
                    active
                      ? "bg-[#EAF4FE] text-[#0F172A]"
                      : "text-[#0F172A] hover:bg-[#F3F5F8]",
                  )}
                >
                  <span className="flex items-baseline gap-2">
                    <span>{opt.label}</span>
                    <span className="text-[13px] font-medium text-[#6B7280]">
                      {opt.code}
                    </span>
                  </span>
                  <span aria-hidden className="grid h-5 w-5 place-items-center">
                    {active && <Check className="h-5 w-5 text-[#2563EB]" strokeWidth={2.25} />}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
