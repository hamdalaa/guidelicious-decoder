import { StreamlineIcon, STREAMLINE } from "@/components/StreamlineIcon";
import heroImg from "@/assets/hero/edio-hero.png.asset.json";
import { useLang } from "@/i18n/LangProvider";

export function HeroCard() {
  const { t } = useLang();

  return (
    <section className="px-3 pt-4 sm:px-6 sm:pt-6">
      {/* ============ DESKTOP / TABLET ============ */}
      <div className="mx-auto hidden max-w-7xl md:block">
        <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-40px_rgba(9,10,50,0.35)] lg:rounded-[2.5rem]">
          <img
            src={heroImg.url}
            alt="Edio audio collection — headphones, IEMs and DAC"
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
                {t("hero.wordmark")}
              </span>
              <span
                className="text-edio-navy/40"
                style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)", letterSpacing: "-0.01em" }}
              >
                {t("hero.subtitle")}
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-edio-navy/70 lg:text-base">
              {t("hero.desc")}
            </p>
          </div>

          <div className="absolute bottom-8 start-8 flex flex-wrap items-center gap-3 lg:bottom-12 lg:start-14">
            <a
              href="#headphones"
              className="group inline-flex items-center gap-2 rounded-full bg-edio-navy px-6 py-3 text-sm font-medium text-edio-cream shadow-lg transition-transform hover:-translate-y-0.5"
            >
              {t("hero.cta.explore")}
              <StreamlineIcon
                name={STREAMLINE.arrowRight}
                className="h-4 w-4 rtl:rotate-180 transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#headphones"
              className="inline-flex items-center rounded-full border border-edio-navy/15 bg-white/80 px-6 py-3 text-sm font-medium text-edio-navy backdrop-blur transition-colors hover:bg-white"
            >
              {t("hero.cta.shopHeadphones")}
            </a>
          </div>
        </div>
      </div>

      {/* ============ MOBILE — same scheme as desktop, stacked ============ */}
      <div className="mx-auto max-w-md md:hidden">
        <div className="relative overflow-hidden rounded-[1.75rem] shadow-[0_20px_60px_-30px_rgba(9,10,50,0.35)]">
          <img
            src={heroImg.url}
            alt="Edio audio collection"
            className="h-[460px] w-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />

          <div className="absolute start-5 top-5">
            <div className="flex items-baseline gap-2">
              <span
                className="font-semibold text-edio-navy"
                style={{ fontSize: "2.25rem", letterSpacing: "-0.03em" }}
              >
                {t("hero.wordmark")}
              </span>
              <span className="text-base text-edio-navy/40">{t("hero.subtitle")}</span>
            </div>
            <p className="mt-2 max-w-[15rem] text-[13px] text-edio-navy/70">
              {t("hero.desc")}
            </p>
          </div>

          <div className="absolute inset-x-4 bottom-4 flex items-center gap-2">
            <a
              href="#headphones"
              className="group inline-flex items-center gap-2 rounded-full bg-edio-navy px-5 py-2.5 text-sm font-medium text-edio-cream shadow-lg"
            >
              {t("hero.cta.shopNow")}
              <StreamlineIcon
                name={STREAMLINE.arrowRight}
                className="h-4 w-4 rtl:rotate-180"
              />
            </a>
            <a
              href="#headphones"
              className="inline-flex items-center rounded-full border border-edio-navy/15 bg-white/85 px-5 py-2.5 text-sm font-medium text-edio-navy backdrop-blur"
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
            <StreamlineIcon
              name={STREAMLINE.arrowRight}
              className="h-4 w-4 shrink-0 text-edio-navy/70 rtl:rotate-180"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
