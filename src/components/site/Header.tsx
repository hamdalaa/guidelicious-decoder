import { Link } from "@tanstack/react-router";
import { FiSearch, FiUser, FiShoppingBag } from "react-icons/fi";
import { EdioLogo } from "@/components/EdioLogo";
import { LangToggle } from "./LangToggle";
import { CurrencyToggle } from "./CurrencyToggle";
import { useI18n } from "@/lib/i18n";

const CART_COUNT = 2;

export function Header() {
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-40 bg-edio-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 sm:gap-3 sm:px-8 sm:py-5">
        <Link to="/" aria-label="Edio home" className="shrink-0">
          <EdioLogo size="sm" pill />
        </Link>

        <div className="ms-auto flex items-center gap-1.5 sm:gap-2">
          <LangToggle />
          <CurrencyToggle />

          <button
            type="button"
            aria-label="Search"
            className="grid h-9 w-9 place-items-center rounded-full text-edio-navy transition-colors hover:bg-edio-sky/50"
          >
            <FiSearch className="h-4 w-4" />
          </button>

          <button
            type="button"
            aria-label="Account"
            className="hidden h-9 w-9 place-items-center rounded-full text-edio-navy transition-colors hover:bg-edio-sky/50 sm:grid"
          >
            <FiUser className="h-4 w-4" />
          </button>

          <button
            type="button"
            aria-label={t("nav.cart")}
            className="relative grid h-9 w-9 place-items-center rounded-full text-edio-navy transition-colors hover:bg-edio-sky/50"
          >
            <FiShoppingBag className="h-4 w-4" />
            {CART_COUNT > 0 && (
              <span className="absolute -top-1 -right-1 grid h-4 min-w-4 place-items-center rounded-full bg-edio-blue px-1 text-[10px] font-semibold text-edio-cream shadow">
                {CART_COUNT}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
