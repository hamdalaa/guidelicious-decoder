import { FiArrowUpRight } from "react-icons/fi";
import heroImg from "@/assets/hero/edio-hero.png.asset.json";
import { useI18n } from "@/lib/i18n";

export function HeroCard() {
  const { t } = useI18n();

  return (
    <section className="px-5 pt-5 sm:px-8 sm:pt-8">
      <div className="mx-auto max-w-7xl">
        {/* Desktop / tablet: single card, text + image side by side */}
        <div className="relative isolate hidden overflow-hidden rounded-[40px] bg-edio-sky/25 shadow-[0_30px_80px_-40px_rgba(9,10,50,0.35)] md:block">
          <div className="grid min-h-[520px] grid-cols-[1.05fr_1fr] items-stretch lg:min-h-[600px]">
            {/* Text */}
            <div className="relative z-10 flex flex-col justify-center gap-6 p-10 lg:p-16">
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-edio-navy/60">
                {t("hero.eyebrow")}
              </span>
              <h1
                className="font-semibold text-edio-navy"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.02 }}
              >
                {t("hero.headline")}
              </h1>
              <p className="max-w-md text-base text-edio-navy/70 lg:text-lg">
                {t("hero.tagline")}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#shop"
                  className="group inline-flex items-center gap-2 rounded-full bg-edio-navy px-6 py-3 text-sm font-semibold text-edio-cream transition-transform hover:-translate-y-0.5"
                >
                  {t("hero.cta.explore")}
                  <FiArrowUpRight className="rtl-flip h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#categories"
                  className="inline-flex items-center rounded-full border border-edio-navy/25 px-6 py-3 text-sm font-semibold text-edio-navy transition-colors hover:border-edio-navy"
                >
                  {t("hero.cta.shopAudio")}
                </a>
              </div>
            </div>
            {/* Image */}
            <div className="relative">
              <img
                src={heroImg.url}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>

        {/* Mobile: stacked card */}
        <div className="relative overflow-hidden rounded-[28px] bg-edio-sky/25 md:hidden">
          <div className="flex flex-col gap-6 px-6 pt-8 pb-6">
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-edio-navy/60">
              {t("hero.eyebrow")}
            </span>
            <h1
              className="font-semibold text-edio-navy"
              style={{ fontSize: "clamp(2rem, 9vw, 3rem)", lineHeight: 1.05 }}
            >
              {t("hero.headline")}
            </h1>
            <p className="text-[15px] text-edio-navy/70">{t("hero.tagline")}</p>
            <div className="mt-1 flex flex-col gap-2.5 xs:flex-row xs:gap-3">
              <a
                href="#shop"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-edio-navy px-5 py-3 text-sm font-semibold text-edio-cream"
              >
                {t("hero.cta.explore")}
                <FiArrowUpRight className="rtl-flip h-4 w-4" />
              </a>
              <a
                href="#categories"
                className="inline-flex flex-1 items-center justify-center rounded-full border border-edio-navy/25 px-5 py-3 text-sm font-semibold text-edio-navy"
              >
                {t("hero.cta.shopAudio")}
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full">
            <img
              src={heroImg.url}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
