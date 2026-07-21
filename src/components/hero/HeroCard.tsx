import { ArrowUpRight, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero/edio-hero.png.asset.json";
import { useI18n } from "@/lib/i18n";

export function HeroCard() {
  const { t } = useI18n();
  return (
    <section className="px-3 pt-4 sm:px-6 sm:pt-6">
      {/* ============ DESKTOP / TABLET ============ */}
      <div className="mx-auto hidden max-w-7xl md:block">
        <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-40px_rgba(9,10,50,0.35)] lg:rounded-[2.5rem]">
          <img
            src={heroImg.url}
            alt="Edio audio collection — headphones, IEMs and DAC on light-blue geometric surfaces"
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
                style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)", letterSpacing: "-0.01em" }}
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
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
            className="h-[440px] w-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />

          <div className="absolute start-5 top-5 max-w-[65%]">
            <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-edio-navy/60">
              {t("hero.eyebrow")}
            </p>
            <h1
              className="mt-2 font-semibold text-edio-navy"
              style={{ fontSize: "clamp(1.5rem, 6vw, 1.9rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
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
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center rounded-full bg-edio-navy/85 px-4 py-2.5 text-sm font-medium text-edio-cream backdrop-blur"
            >
              {t("hero.cta.details")}
            </a>
          </div>
        </div>

        <div className="relative mt-3 overflow-hidden rounded-[1.5rem] bg-gradient-to-r from-edio-sky/70 via-white to-edio-sky/70">
          <div className="flex items-center justify-between gap-4 p-5">
            <div className="min-w-0">
              <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-edio-navy/60">
                {t("hero.teaser.eyebrow")}
              </p>
              <h2
                className="mt-1 truncate font-semibold text-edio-navy"
                style={{ fontSize: "1.05rem", letterSpacing: "-0.01em" }}
              >
                {t("hero.teaser.title")}
              </h2>
            </div>
            <ArrowRight className="h-4 w-4 shrink-0 text-edio-navy/70 rtl:rotate-180" />
          </div>
        </div>
      </div>
    </section>
  );
}
