import { Send, Instagram } from "lucide-react";
import { EdioLogo } from "@/components/EdioLogo";

const SHOP = [
  { label: "Headphones", href: "#headphones" },
  { label: "IEMs", href: "#iems" },
  { label: "DAC & AMPS", href: "#dac-amps" },
  { label: "Deals", href: "#deals" },
];

const SUPPORT = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Refund Policy", href: "/legal/refunds" },
  { label: "Returns", href: "/legal/returns" },
  { label: "Warranty", href: "/legal/warranty" },
  { label: "Contact", href: "/contact" },
];



export function Footer() {
  return (
    <footer className="px-3 pb-6 pt-16 sm:px-6">
      <div className="mx-auto max-w-7xl rounded-[1.75rem] bg-white/70 p-6 sm:rounded-[2rem] sm:p-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="min-w-0">
            <EdioLogo size="sm" />
            <p className="mt-4 max-w-xs text-sm text-edio-navy/70">
              Sound, guided. Curated audio gear with calm, expert advice — no noise, no pressure.
            </p>
            <div className="mt-5 flex items-center gap-2">
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

          {/* Shop */}
          <div className="min-w-0">
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-edio-navy/50">
              Shop
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-edio-navy/80">
              {SHOP.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition-colors hover:text-edio-navy">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div className="min-w-0">
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-edio-navy/50">
              Support & Legal
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-edio-navy/80">
              {SUPPORT.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition-colors hover:text-edio-navy">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-edio-navy/10 pt-6 text-xs text-edio-navy/60">
          <p>© {new Date().getFullYear()} Edio</p>
        </div>
      </div>
    </footer>
  );
}
