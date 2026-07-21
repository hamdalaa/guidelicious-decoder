import { FiArrowUpRight } from "react-icons/fi";
import heroImg from "@/assets/hero/edio-hero.png.asset.json";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function HeroCard() {
  const { t, dir } = useI18n();
  const isAr = dir === "rtl";

  return (
    <section dir={dir} className="px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="mx-auto max-w-[1440px]">
        <div
          className={cn(
            "relative isolate overflow-hidden rounded-[32px] bg-edio-sky/30 shadow-[0_30px_80px_-40px_rgba(9,10,50,0.35)] sm:rounded-[40px]",
            "h-[520px] sm:h-[560px] md:h-[620px] lg:h-[660px]",
          )}
        >
          {/* Product image */}
          <img
            src={heroImg.url}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />

          {/* Subtle readability overlay — only on the text side */}
          <div
            aria-hidden
            className={cn(
              "absolute inset-y-0 w-2/3",
              isAr
                ? "end-0 bg-gradient-to-l from-edio-cream/85 via-edio-cream/40 to-transparent"
                : "start-0 bg-gradient-to-r from-edio-cream/85 via-edio-cream/40 to-transparent",
            )}
          />

          {/* Content */}
          <div
            className={cn(
              "relative flex h-full flex-col justify-between p-8 sm:p-12 lg:p-16",
              isAr ? "items-end text-end" : "items-start text-start",
            )}
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-edio-navy/60">
              {t("hero.eyebrow")}
            </span>

            <div className={cn("max-w-xl", isAr && "ms-auto")}>
              <h1
                className="font-semibold text-edio-navy"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  lineHeight: 1.02,
                  letterSpacing: isAr ? "0" : "-0.03em",
                }}
              >
                {t("hero.headline")}
              </h1>
              <p className="mt-5 max-w-md text-base text-edio-navy/70 sm:text-lg">
                {t("hero.tagline")}
              </p>

              <div
                className={cn(
                  "mt-8 flex flex-wrap items-center gap-3",
                  isAr && "justify-end",
                )}
              >
                <a
                  href="#explore"
                  className="group inline-flex items-center gap-2 rounded-full bg-edio-navy px-7 py-3.5 text-sm font-semibold text-edio-cream transition-transform hover:-translate-y-0.5"
                >
                  {t("hero.cta.explore")}
                  <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#shop"
                  className="inline-flex items-center rounded-full border border-edio-navy/25 px-7 py-3.5 text-sm font-semibold text-edio-navy transition-colors hover:border-edio-navy"
                >
                  {t("hero.cta.shopAudio")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
