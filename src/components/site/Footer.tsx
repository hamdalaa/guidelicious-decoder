import { Send, Instagram } from "lucide-react";
import { EdioLogo } from "@/components/EdioLogo";
import { useI18n, type TKey } from "@/lib/i18n";

const SHOP: { key: TKey; href: string }[] = [
  { key: "footer.headphones", href: "#headphones" },
  { key: "footer.iems", href: "#iems" },
  { key: "footer.dac", href: "#dac-amps" },
  { key: "footer.deals", href: "#deals" },
];

const SUPPORT: { key: TKey; href: string }[] = [
  { key: "footer.privacy", href: "/legal/privacy" },
  { key: "footer.terms", href: "/legal/terms" },
  { key: "footer.refunds", href: "/legal/refunds" },
  { key: "footer.returns", href: "/legal/returns" },
  { key: "footer.warranty", href: "/legal/warranty" },
  { key: "footer.contact", href: "/contact" },
];

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="px-5 pb-6 pt-10 sm:px-8 sm:pt-12">
      <div className="mx-auto max-w-7xl rounded-2xl bg-white/70 p-5 sm:p-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="min-w-0">
            <EdioLogo size="sm" />
            <p className="mt-3 max-w-xs text-sm text-edio-navy/70">
              {t("footer.tagline")}
            </p>
            <div className="mt-4 flex items-center gap-2">
              <a
                href="https://t.me/edio_iq"
                target="_blank"
                rel="noreferrer"
                aria-label="Edio on Telegram"
                className="grid h-9 w-9 place-items-center rounded-full bg-edio-sky/40 text-edio-navy transition-colors hover:bg-edio-navy hover:text-edio-cream"
              >
                <Send className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/edio.iq"
                target="_blank"
                rel="noreferrer"
                aria-label="Edio on Instagram"
                className="grid h-9 w-9 place-items-center rounded-full bg-edio-sky/40 text-edio-navy transition-colors hover:bg-edio-navy hover:text-edio-cream"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="min-w-0">
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-edio-navy/50">
              {t("footer.shop")}
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-edio-navy/80">
              {SHOP.map((l) => (
                <li key={l.key}>
                  <a href={l.href} className="transition-colors hover:text-edio-navy">
                    {t(l.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-edio-navy/50">
              {t("footer.support")}
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-edio-navy/80">
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

        <div className="mt-6 border-t border-edio-navy/10 pt-4 text-xs text-edio-navy/60">
          <p>© {new Date().getFullYear()} Edio</p>
        </div>
      </div>
    </footer>
  );
}
