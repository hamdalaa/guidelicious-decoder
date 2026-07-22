import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";

export function LangToggle({ className }: { className?: string }) {
  const { lang, setLang } = useI18n();

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "inline-flex h-9 items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider select-none",
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
                "px-1 py-1 transition-colors",
                active
                  ? "text-edio-navy"
                  : "text-edio-navy/40 hover:text-edio-navy/70",
              )}
            >
              {code}
            </button>
            {i === 0 && (
              <span aria-hidden className="text-edio-navy/25">·</span>
            )}
          </span>
        );
      })}
    </div>
  );
}
