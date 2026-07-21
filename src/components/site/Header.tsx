import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ShoppingBag } from "lucide-react";
import { EdioLogo } from "@/components/EdioLogo";
import { LangToggle } from "./LangToggle";
import { cn } from "@/lib/utils";
import { useI18n, type TKey } from "@/lib/i18n";

const NAV: { key: TKey; href: string }[] = [
  { key: "nav.headphones", href: "#headphones" },
  { key: "nav.iems", href: "#iems" },
  { key: "nav.dac", href: "#dac-amps" },
  { key: "nav.deals", href: "#deals" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-40 bg-edio-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-8 sm:py-5">
        {/* Logo — left */}
        <Link to="/" aria-label="Edio home" className="shrink-0">
          <EdioLogo size="sm" pill />
        </Link>

        {/* Centered nav + shop pill */}
        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-edio-navy/80 transition-colors hover:text-edio-navy"
            >
              {t(item.key)}
            </a>
          ))}
          <a
            href="#shop"
            className="rounded-full border border-edio-navy/25 px-5 py-1.5 text-sm font-medium text-edio-navy transition-colors hover:bg-edio-navy hover:text-edio-cream"
          >
            {t("nav.shop")}
          </a>
        </nav>

        {/* Right cluster */}
        <div className="ms-auto flex items-center gap-3 md:ms-0">
          <LangToggle />
          <button
            type="button"
            aria-label={t("nav.cart")}
            className="inline-flex items-center gap-2 text-sm font-medium text-edio-navy"
          >
            <span className="hidden sm:inline">{t("nav.cart")}</span>
            <span className="grid h-9 w-9 place-items-center rounded-full border border-edio-navy/20 text-edio-navy transition-colors hover:bg-edio-navy hover:text-edio-cream">
              <ShoppingBag className="h-4 w-4" />
            </span>
          </button>
          <button
            type="button"
            aria-label={open ? "Close menu" : t("nav.menu")}
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-edio-navy/20 text-edio-navy transition-colors hover:bg-edio-navy hover:text-edio-cream md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "mx-auto max-w-7xl overflow-hidden px-4 transition-all md:hidden",
          open ? "max-h-[28rem] opacity-100 pb-4" : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col rounded-3xl border border-edio-navy/10 bg-white/70 p-2 text-base font-medium text-edio-navy backdrop-blur-md">
          {NAV.map((item) => (
            <li key={item.key}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 transition-colors hover:bg-edio-sky/40"
              >
                {t(item.key)}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#shop"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-2xl bg-edio-navy px-4 py-3 text-center text-edio-cream"
            >
              {t("nav.shop")}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
