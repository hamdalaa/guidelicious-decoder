import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
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

const ICON_BTN =
  "grid h-11 w-11 place-items-center rounded-full text-[#232323] transition-opacity duration-150 hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#232323]/20";

export function Header() {
  const { t } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-[#F2F2F2] bg-white">
      {/* Desktop */}
      <div className="relative mx-auto hidden h-[92px] max-w-[1440px] items-center px-8 lg:flex xl:px-12">
        <Link to="/" aria-label="Edio home" className="shrink-0">
          <EdioLogo size="sm" pill={false} />
        </Link>

        <nav className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center">
          <ul className="pointer-events-auto flex items-center gap-11 xl:gap-12 text-[15px] font-medium leading-none text-[#232323]">
            {NAV.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  className="transition-opacity duration-150 hover:opacity-60"
                >
                  {t(item.key)}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#shop"
                className="inline-flex h-[46px] items-center rounded-full border-[1.5px] border-[#232323] px-7 text-[15px] font-medium leading-none text-[#232323] transition-colors duration-200 hover:bg-[#232323] hover:text-white"
              >
                {t("nav.shop")}
              </a>
            </li>
          </ul>
        </nav>

        <div className="ms-auto flex items-center gap-[22px]">
          <LangToggle />
          <CurrencyToggle direction="down" />
          <div className="flex items-center gap-[10px]">
            <button type="button" aria-label="Search" className={ICON_BTN}>
              <Search className="h-[22px] w-[22px]" strokeWidth={1.75} />
            </button>
            <button type="button" aria-label="Account" className={ICON_BTN}>
              <User className="h-[22px] w-[22px]" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              aria-label={t("nav.cart")}
              className={cn(ICON_BTN, "relative")}
            >
              <ShoppingBag className="h-[22px] w-[22px]" strokeWidth={1.75} />
              {CART_COUNT > 0 && (
                <span className="absolute top-1.5 end-1.5 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-[#232323] px-1 text-[10px] font-semibold leading-none text-white">
                  {CART_COUNT}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="mx-auto grid h-[68px] grid-cols-[auto_1fr_auto] items-center gap-3 px-5 lg:hidden">
        <button
          type="button"
          aria-label={t("nav.menu")}
          onClick={() => setMenuOpen(true)}
          className={ICON_BTN}
        >
          <Menu className="h-[22px] w-[22px]" strokeWidth={1.75} />
        </button>
        <div className="flex justify-center">
          <Link to="/" aria-label="Edio home">
            <EdioLogo size="sm" pill={false} />
          </Link>
        </div>
        <button
          type="button"
          aria-label={t("nav.cart")}
          className={cn(ICON_BTN, "relative")}
        >
          <ShoppingBag className="h-[22px] w-[22px]" strokeWidth={1.75} />
          {CART_COUNT > 0 && (
            <span className="absolute top-1.5 end-1.5 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-[#232323] px-1 text-[10px] font-semibold leading-none text-white">
              {CART_COUNT}
            </span>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          menuOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!menuOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-black/30 transition-opacity duration-200",
            menuOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMenuOpen(false)}
        />
        <aside
          className={cn(
            "absolute inset-y-0 start-0 flex h-full w-[86%] max-w-[380px] flex-col bg-white shadow-2xl transition-transform duration-200 ease-out",
            menuOpen
              ? "translate-x-0"
              : "ltr:-translate-x-full rtl:translate-x-full",
          )}
        >
          <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-[#F2F2F2]">
            <EdioLogo size="sm" pill={false} />
            <button
              type="button"
              aria-label={t("nav.close")}
              onClick={() => setMenuOpen(false)}
              className={ICON_BTN}
            >
              <X className="h-[22px] w-[22px]" strokeWidth={1.75} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-6">
            <ul className="space-y-1">
              {NAV.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex min-h-[52px] items-center rounded-lg text-[18px] font-medium text-[#232323] transition-opacity hover:opacity-60"
                  >
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#shop"
              onClick={() => setMenuOpen(false)}
              className="mt-6 inline-flex h-[52px] w-full items-center justify-center rounded-full border-[1.5px] border-[#232323] text-[15px] font-medium text-[#232323] transition-colors duration-200 hover:bg-[#232323] hover:text-white"
            >
              {t("nav.shop")}
            </a>
          </nav>

          <div className="border-t border-[#F2F2F2] px-6 py-5">
            <div className="flex items-center gap-1 pb-4">
              <button type="button" aria-label="Search" className={ICON_BTN}>
                <Search className="h-[22px] w-[22px]" strokeWidth={1.75} />
              </button>
              <button type="button" aria-label="Account" className={ICON_BTN}>
                <User className="h-[22px] w-[22px]" strokeWidth={1.75} />
              </button>
            </div>
            <div className="space-y-3 border-t border-[#F2F2F2] pt-4">
              <LangToggle variant="row" />
              <CurrencyToggle variant="row" />
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
