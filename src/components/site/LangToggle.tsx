import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";

/**
 * Minimal EN | AR toggle — plain text, navy underline on the active label.
 */
export function LangToggle({ className }: { className?: string }) {
  const { lang, setLang } = useI18n();

  return (
    <div
      dir="ltr"
      role="group"
      aria-label="Language"
      className={cn(
        "inline-flex items-center gap-1 text-[12px] font-semibold uppercase tracking-wider select-none",
        className,
      )}
    >
      {(["en", "ar"] as const).map((code, i) => {
        const active = lang === code;
        return (
          <span key={code} className="inline-flex items-center">
            <button
              type="button"
              onClick={() => setLang(code)}
              aria-pressed={active}
              className={cn(
                "px-1.5 py-1 transition-colors",
                active
                  ? "text-edio-navy underline underline-offset-4 decoration-2"
                  : "text-edio-navy/45 hover:text-edio-navy",
              )}
            >
              {code}
            </button>
            {i === 0 && <span aria-hidden className="text-edio-navy/25">/</span>}
          </span>
        );
      })}
    </div>
  );
}
