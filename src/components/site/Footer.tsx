import { StreamlineIcon, STREAMLINE } from "@/components/StreamlineIcon";
import { EdioLogo } from "@/components/EdioLogo";
import { useLang } from "@/i18n/LangProvider";
import type { StringKey } from "@/i18n/strings";

const SHOP: { key: StringKey; href: string }[] = [
  { key: "footer.link.headphones", href: "#headphones" },
  { key: "footer.link.iems", href: "#iems" },
  { key: "footer.link.dacamps", href: "#dac-amps" },
  { key: "footer.link.deals", href: "#deals" },
];

const SUPPORT: { key: StringKey; href: string }[] = [
  { key: "footer.link.privacy", href: "/legal/privacy" },
  { key: "footer.link.terms", href: "/legal/terms" },
  { key: "footer.link.refunds", href: "/legal/refunds" },
  { key: "footer.link.returns", href: "/legal/returns" },
  { key: "footer.link.warranty", href: "/legal/warranty" },
  { key: "footer.link.contact", href: "/contact" },
];

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="px-3 pb-6 pt-16 sm:px-6">
      <div className="mx-auto max-w-7xl rounded-[1.75rem] bg-white/70 p-6 sm:rounded-[2rem] sm:p-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="min-w-0">
            <EdioLogo size="sm" />
            <p className="mt-4 max-w-xs text-sm text-edio-navy/70">{t("footer.tagline")}</p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href="https://t.me/edio_iq"
                target="_blank"
                rel="noreferrer"
                aria-label={t("footer.social.telegram")}
                className="grid h-9 w-9 place-items-center rounded-full bg-edio-sky/40 text-edio-navy transition-colors hover:bg-edio-navy hover:text-edio-cream"
              >
                <StreamlineIcon name={STREAMLINE.telegram} className="h-[18px] w-[18px]" />
              </a>
              <a
                href="https://www.instagram.com/edio.iq"
                target="_blank"
                rel="noreferrer"
                aria-label={t("footer.social.instagram")}
                className="grid h-9 w-9 place-items-center rounded-full bg-edio-sky/40 text-edio-navy transition-colors hover:bg-edio-navy hover:text-edio-cream"
              >
                <StreamlineIcon name={STREAMLINE.instagram} className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="min-w-0">
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-edio-navy/50">
              {t("footer.shop")}
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-edio-navy/80">
              {SHOP.map((l) => (
                <li key={l.key}>
                  <a href={l.href} className="transition-colors hover:text-edio-navy">
                    {t(l.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div className="min-w-0">
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-edio-navy/50">
              {t("footer.support")}
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-edio-navy/80">
              {SUPPORT.map((l) => (
                <li key={l.key}>
                  <a href={l.href} className="transition-colors hover:text-edio-navy">
                    {t(l.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-edio-navy/10 pt-6 text-xs text-edio-navy/60">
          <p>© {new Date().getFullYear()} {t("brand.name")}</p>
        </div>
      </div>
    </footer>
  );
}
