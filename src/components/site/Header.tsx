import { Link } from "@tanstack/react-router";
import { EdioLogo } from "@/components/EdioLogo";
import { LangToggle } from "./LangToggle";
import { StreamlineIcon, STREAMLINE } from "@/components/StreamlineIcon";
import { useLang } from "@/i18n/LangProvider";

/**
 * Edio site header — matches Slide 101 reference (image-3):
 *   [ ← back ]   [ Edio pill lockup ]                 [ EN | ع ]  [ 🛒 ]
 * Identical layout on mobile and desktop; only spacing scales.
 */
export function Header() {
  const { t } = useLang();

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 rounded-full border border-edio-navy/5 bg-edio-cream/85 px-2.5 py-2 backdrop-blur-md sm:px-3 sm:py-2.5">
        {/* Left cluster: back button + Edio pill lockup */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label={t("nav.back")}
            onClick={() => window.history.back()}
            className="grid h-9 w-9 place-items-center rounded-full bg-white text-edio-navy shadow-sm transition-colors hover:bg-edio-navy hover:text-edio-cream"
          >
            <StreamlineIcon
              name={STREAMLINE.arrowLeft}
              className="h-4 w-4 rtl:rotate-180"
            />
          </button>
          <Link to="/" aria-label={t("nav.home")} className="shrink-0">
            <EdioLogo size="sm" pill />
          </Link>
        </div>

        {/* Right cluster: language toggle + cart */}
        <div className="flex items-center gap-2">
          <LangToggle />
          <button
            type="button"
            aria-label={t("nav.cart")}
            className="grid h-9 w-9 place-items-center rounded-full bg-white text-edio-navy shadow-sm transition-colors hover:bg-edio-navy hover:text-edio-cream"
          >
            <StreamlineIcon name={STREAMLINE.cart} className="h-[18px] w-[18px]" />
          </button>
        </div>
      </div>
    </header>
  );
}
