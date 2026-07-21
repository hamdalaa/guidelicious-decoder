import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import heroImg from "@/assets/hero/edio-hero.png.asset.json";
import { useI18n } from "@/lib/i18n";

export function HeroCard() {
  const { t, dir } = useI18n();
  return (
    <section dir={dir} className="px-3 pt-4 sm:px-6 sm:pt-6">
      {/* ============ DESKTOP / TABLET ============ */}
      <div className="mx-auto hidden max-w-7xl md:block">
        <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-40px_rgba(9,10,50,0.35)] lg:rounded-[2.5rem]">
          <img
            src={heroImg.url}
            alt="Edio audio collection"
            className="h-[560px] w-full object-cover object-center lg:h-[640px]"
            loading="eager"
            fetchPriority="high"
          />

          <div className="absolute start-8 top-8 lg:start-14 lg:top-12">
            <div className="flex items-baseline gap-3">
              <span
                className="font-semibold text-edio-navy"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}
              >
                {t("hero.brand")}
              </span>
              <span
                className="text-edio-navy/40"
                style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)" }}
              >
                {t("hero.sub")}
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-edio-navy/70 lg:text-base">
              {t("hero.tagline")}
            </p>
          </div>

          <div className="absolute bottom-8 start-8 flex flex-wrap items-center gap-3 lg:bottom-12 lg:start-14">
            <a
              href="#headphones"
              className="group inline-flex items-center gap-2 rounded-full bg-edio-navy px-6 py-3 text-sm font-medium text-edio-cream shadow-lg transition-transform hover:-translate-y-0.5"
            >
              {t("hero.cta.explore")}
              <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#headphones"
              className="inline-flex items-center rounded-full border border-edio-navy/15 bg-white/80 px-6 py-3 text-sm font-medium text-edio-navy backdrop-blur transition-colors hover:bg-white"
            >
              {t("hero.cta.shop")}
            </a>
          </div>
        </div>
      </div>

      {/* ============ MOBILE ============ */}
      <div className="mx-auto max-w-md md:hidden">
        <div className="relative overflow-hidden rounded-[1.75rem] shadow-[0_20px_60px_-30px_rgba(9,10,50,0.35)]">
          <img
            src={heroImg.url}
            alt="Edio audio collection"
            className="h-[460px] w-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />

          <div className="absolute start-5 top-5 max-w-[70%]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-edio-navy/60">
              {t("hero.eyebrow")}
            </p>
            <h1
              className="mt-2 font-semibold text-edio-navy"
              style={{ fontSize: "clamp(1.5rem, 6vw, 1.9rem)", lineHeight: 1.1, letterSpacing: dir === "rtl" ? "0" : "-0.02em" }}
            >
              {t("hero.headline")}
            </h1>
          </div>

          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
            <a
              href="#headphones"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-edio-navy shadow-md"
            >
              {t("hero.cta.shopNow")}
              <FiArrowRight className={dir === "rtl" ? "h-4 w-4 rotate-180" : "h-4 w-4"} />
            </a>
            <a
              href="#how"
              className="inline-flex items-center rounded-full bg-edio-navy/85 px-4 py-2.5 text-sm font-medium text-edio-cream backdrop-blur"
            >
              {t("hero.cta.details")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
