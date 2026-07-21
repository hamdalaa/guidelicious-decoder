import { cn } from "@/lib/utils";
import { useLang } from "@/i18n/LangProvider";

export function LangToggle({ className }: { className?: string }) {
  const { lang, setLang, t } = useLang();
  const isAr = lang === "ar";

  return (
    <div
      dir="ltr"
      className={cn(
        "relative inline-flex h-9 items-center rounded-full bg-white/70 p-1 text-[12px] font-medium select-none shadow-inner",
        className,
      )}
      role="group"
      aria-label={t("lang.toggle")}
    >
      {/* Sliding thumb */}
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
            className={cn(
              "relative z-10 min-w-10 rounded-full px-3 py-1 uppercase tracking-wide transition-colors duration-300",
              active ? "text-edio-cream" : "text-edio-navy/60 hover:text-edio-navy",
            )}
            aria-pressed={active}
          >
            {code === "ar" ? "ع" : "EN"}
          </button>
        );
      })}
    </div>
  );
}
