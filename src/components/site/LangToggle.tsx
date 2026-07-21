import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";

/**
 * Segmented EN | AR pill — navy thumb slides under the ACTIVE label.
 * Active text is cream, inactive text is muted navy.
 */
export function LangToggle({ className }: { className?: string }) {
  const { lang, setLang } = useI18n();
  const isAr = lang === "ar";

  return (
    <div
      dir="ltr"
      className={cn(
        "relative inline-flex h-9 w-[5.5rem] items-center rounded-full bg-edio-sky/60 p-1 text-[11px] font-semibold select-none",
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
            onClick={() => setLang(code)}
            aria-pressed={active}
            className={cn(
              "relative z-10 grid flex-1 place-items-center rounded-full py-1.5 uppercase tracking-wide transition-colors duration-300",
              active ? "text-edio-cream" : "text-edio-navy/60 hover:text-edio-navy",
            )}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
