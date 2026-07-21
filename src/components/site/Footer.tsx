import { Send, Instagram } from "lucide-react";
import { EdioLogo } from "@/components/EdioLogo";

export function Footer() {
  return (
    <footer className="px-3 pb-6 pt-16 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 rounded-3xl bg-white/60 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <EdioLogo size="sm" />

        <p className="text-xs text-edio-navy/60">
          © {new Date().getFullYear()} Edio · Legal pages coming soon
        </p>

        <div className="flex items-center gap-2">
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
    </footer>
  );
}
