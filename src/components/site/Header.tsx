import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { FiSearch, FiUser, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { EdioLogo } from "@/components/EdioLogo";
import { LangToggle } from "./LangToggle";
import { CurrencyToggle } from "./CurrencyToggle";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";
import { CATEGORIES, useCategory } from "@/lib/category";

const CART_COUNT = 2;

export function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();
  const { active, setActive } = useCategory();

  return (
    <header className="sticky top-0 z-40 bg-edio-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-8 sm:py-5">
        <Link
          to="/"
          aria-label="Edio home"
          className="shrink-0"
          onClick={() => setActive(null)}
        >
          <EdioLogo size="sm" pill />
        </Link>

        {/* Centered category nav */}
        <nav className="hidden flex-1 items-center justify-center gap-2 md:flex">
          {CATEGORIES.map((c) => {
            const isActive = active === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActive(c.id)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-edio-navy text-edio-cream"
                    : "text-edio-navy/80 hover:bg-edio-navy/5 hover:text-edio-navy",
                )}
              >
                {t(c.labelKey)}
              </button>
            );
          })}
        </nav>

        {/* Right cluster — guideline scheme (image-8) */}
        <div className="ms-auto flex items-center gap-2">
          <LangToggle />
          <CurrencyToggle />

          <button
            type="button"
            aria-label="Search"
            className="grid h-9 w-9 place-items-center rounded-full text-edio-navy transition-colors hover:bg-edio-navy/10"
          >
            <FiSearch className="h-4 w-4" />
          </button>

          <button
            type="button"
            aria-label="Account"
            className="grid h-9 w-9 place-items-center rounded-full text-edio-navy transition-colors hover:bg-edio-navy/10"
          >
            <FiUser className="h-4 w-4" />
          </button>

          <button
            type="button"
            aria-label={t("nav.cart")}
            className="relative grid h-9 w-9 place-items-center rounded-full text-edio-navy transition-colors hover:bg-edio-navy/10"
          >
            <FiShoppingBag className="h-4 w-4" />
            {CART_COUNT > 0 && (
              <span className="absolute -top-1 -end-1 grid h-4 min-w-4 place-items-center rounded-full bg-edio-blue px-1 text-[10px] font-semibold text-edio-cream shadow">
                {CART_COUNT}
              </span>
            )}
          </button>

          <button
            type="button"
            aria-label={open ? "Close menu" : t("nav.menu")}
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full text-edio-navy transition-colors hover:bg-edio-navy/10 md:hidden"
          >
            {open ? <FiX className="h-4 w-4" /> : <FiMenu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile category drawer */}
      <div
        className={cn(
          "mx-auto max-w-7xl overflow-hidden px-4 transition-all md:hidden",
          open ? "max-h-[28rem] opacity-100 pb-4" : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col rounded-3xl border border-edio-navy/10 bg-white/70 p-2 text-base font-medium text-edio-navy backdrop-blur-md">
          {CATEGORIES.map((c) => {
            const isActive = active === c.id;
            return (
              <li key={c.id}>
                <button
                  type="button"
                  onClick={() => {
                    setActive(c.id);
                    setOpen(false);
                  }}
                  className={cn(
                    "block w-full rounded-2xl px-4 py-3 text-start transition-colors",
                    isActive ? "bg-edio-navy text-edio-cream" : "hover:bg-edio-sky/40",
                  )}
                >
                  {t(c.labelKey)}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
