import { FiHeadphones, FiSpeaker, FiMic, FiSliders } from "react-icons/fi";
import { useI18n, type TKey } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { IconType } from "react-icons";

const CATEGORIES: { key: TKey; href: string; Icon: IconType }[] = [
  { key: "nav.headphones", href: "#headphones", Icon: FiHeadphones },
  { key: "nav.speakers", href: "#speakers", Icon: FiSpeaker },
  { key: "nav.microphones", href: "#microphones", Icon: FiMic },
  { key: "nav.audioEquipment", href: "#audio-equipment", Icon: FiSliders },
];

export function CategoryStrip() {
  const { t, dir } = useI18n();
  const isAr = dir === "rtl";

  return (
    <section dir={dir} className="px-4 pt-12 sm:px-6 sm:pt-16">
      <div className="mx-auto max-w-[1440px]">
        <h2
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.24em] text-edio-navy/50",
            isAr ? "text-end" : "text-start",
          )}
        >
          {t("categories.title")}
        </h2>

        <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {CATEGORIES.map(({ key, href, Icon }) => (
            <li key={key}>
              <a
                href={href}
                className={cn(
                  "group flex h-28 items-center gap-4 rounded-2xl border border-edio-navy/10 bg-white/60 px-5 transition-all hover:-translate-y-0.5 hover:border-edio-navy/30 hover:bg-white sm:h-32",
                  isAr && "flex-row-reverse text-end",
                )}
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-edio-sky/40 text-edio-navy transition-colors group-hover:bg-edio-navy group-hover:text-edio-cream">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className="text-sm font-semibold text-edio-navy sm:text-base">
                  {t(key)}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
