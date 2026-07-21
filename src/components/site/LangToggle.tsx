import { cn } from "@/lib/utils";
import { useI18n, type Lang } from "@/lib/i18n";

/**
 * Segmented EN | AR pill — locked to the Edio guideline style
 * (light-blue track, navy thumb, cream text on the active side).
 */
export function LangToggle({ className }: { className?: string }) {
  const { lang, setLang } = useI18n();
  const isAr = lang === "ar";

  return (
    <div
      className={cn(
        "relative inline-flex h-9 items-center rounded-full bg-edio-sky/50 p-1 text-[11px] font-medium select-none",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      <span
        aria-hidden
        className="absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-edio-navy shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: isAr ? "translateX(100%)" : "translateX(0%)" }}
      />
      {(["en", "ar"] as const).map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code as Lang)}
            className={cn(
              "relative z-10 w-10 rounded-full py-1.5 uppercase tracking-wide transition-colors duration-300",
              active ? "text-edio-cream" : "text-edio-navy/60 hover:text-edio-navy",
            )}
            aria-pressed={active}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
