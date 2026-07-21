import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ShoppingBag } from "lucide-react";
import { EdioLogo } from "@/components/EdioLogo";
import { LangToggle } from "./LangToggle";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Headphones", href: "#headphones" },
  { label: "IEMs", href: "#iems" },
  { label: "DAC & AMPS", href: "#dac-amps" },
  { label: "Deals", href: "#deals" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-full border border-edio-navy/5 bg-edio-cream/80 px-3 py-2 backdrop-blur-md sm:px-4 sm:py-2.5">
        <Link to="/" aria-label="Edio home" className="shrink-0">
          <EdioLogo size="sm" />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full bg-white/60 px-1.5 py-1 text-sm font-medium text-edio-navy/80">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="rounded-full px-3.5 py-1.5 transition-colors hover:bg-edio-navy hover:text-edio-cream"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle />
          <button
            type="button"
            aria-label="Cart"
            className="grid h-9 w-9 place-items-center rounded-full bg-white/70 text-edio-navy transition-colors hover:bg-edio-navy hover:text-edio-cream"
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full bg-white/70 text-edio-navy transition-colors hover:bg-edio-navy hover:text-edio-cream md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl border border-edio-navy/5 bg-edio-cream/95 backdrop-blur-md transition-all md:hidden",
          open ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col p-3 text-base font-medium text-edio-navy">
          {NAV.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 transition-colors hover:bg-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
