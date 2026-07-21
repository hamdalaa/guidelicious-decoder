import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { FiSearch, FiUser, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { EdioLogo } from "@/components/EdioLogo";
import { LangToggle } from "./LangToggle";
import { CurrencyToggle } from "./CurrencyToggle";
import { useI18n, type TKey } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const CART_COUNT = 2;

const NAV: { key: TKey; href: string }[] = [
  { key: "nav.headphones", href: "#headphones" },
  { key: "nav.speakers", href: "#speakers" },
  { key: "nav.microphones", href: "#microphones" },
  { key: "nav.audioEquipment", href: "#audio-equipment" },
  { key: "nav.brands", href: "#brands" },
];

export function Header() {
  const { t, dir } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      dir={dir}
      className="sticky top-0 z-40 bg-edio-cream/85 backdrop-blur-md"
    >
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-5 sm:h-24 sm:px-8">
        {/* Logo */}
        <Link to="/" aria-label="Edio home" className="shrink-0">
          <EdioLogo size="sm" pill={false} />
        </Link>

        {/* Center nav — desktop only */}
        <nav className="hidden justify-center lg:flex">
          <ul className="flex items-center gap-8 text-[13px] font-medium tracking-wide text-edio-navy/80">
            {NAV.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-edio-navy"
                >
                  {t(item.key)}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#shop"
                className="inline-flex items-center rounded-full border border-edio-navy/30 px-5 py-2 text-[13px] font-semibold text-edio-navy transition-colors hover:border-edio-navy hover:bg-edio-navy hover:text-edio-cream"
              >
                {t("nav.shop")}
              </a>
            </li>
          </ul>
        </nav>

        {/* Utilities */}
        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <div className="hidden sm:block">
            <LangToggle />
          </div>
          <div className="hidden sm:block">
            <CurrencyToggle />
          </div>

          <button
            type="button"
            aria-label="Search"
            className="hidden h-10 w-10 place-items-center rounded-full text-edio-navy transition-colors hover:bg-edio-navy/5 sm:grid"
          >
            <FiSearch className="h-5 w-5" strokeWidth={1.75} />
          </button>

          <button
            type="button"
            aria-label="Account"
            className="hidden h-10 w-10 place-items-center rounded-full text-edio-navy transition-colors hover:bg-edio-navy/5 lg:grid"
          >
            <FiUser className="h-5 w-5" strokeWidth={1.75} />
          </button>

          <button
            type="button"
            aria-label={t("nav.cart")}
            className="relative grid h-10 w-10 place-items-center rounded-full text-edio-navy transition-colors hover:bg-edio-navy/5"
          >
            <FiShoppingBag className="h-5 w-5" strokeWidth={1.75} />
            {CART_COUNT > 0 && (
              <span className="absolute -top-0.5 -right-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-edio-navy px-1 text-[10px] font-semibold text-edio-cream">
                {CART_COUNT}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={t("nav.menu")}
            onClick={() => setMenuOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-full text-edio-navy transition-colors hover:bg-edio-navy/5 lg:hidden"
          >
            <FiMenu className="h-5 w-5" strokeWidth={1.75} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 transition lg:hidden",
          menuOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!menuOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-edio-navy/30 transition-opacity",
            menuOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMenuOpen(false)}
        />
        <div
          dir={dir}
          className={cn(
            "absolute inset-y-0 w-[85%] max-w-sm bg-edio-cream p-6 shadow-2xl transition-transform duration-300",
            dir === "rtl" ? "start-0" : "end-0",
            menuOpen
              ? "translate-x-0"
              : dir === "rtl"
                ? "-translate-x-full"
                : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <EdioLogo size="sm" pill={false} />
            <button
              type="button"
              aria-label={t("nav.close")}
              onClick={() => setMenuOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-full text-edio-navy hover:bg-edio-navy/5"
            >
              <FiX className="h-5 w-5" strokeWidth={1.75} />
            </button>
          </div>

          <nav className="mt-8">
            <ul className="space-y-1">
              {NAV.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-2 py-3 text-lg font-medium text-edio-navy hover:bg-edio-navy/5"
                  >
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#shop"
              onClick={() => setMenuOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-edio-navy/30 px-5 py-3 text-sm font-semibold text-edio-navy"
            >
              {t("nav.shop")}
            </a>
          </nav>

          <div className="mt-8 flex items-center justify-between">
            <LangToggle />
            <CurrencyToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
