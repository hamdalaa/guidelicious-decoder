import heroImg from "@/assets/hero/edio-hero.png.asset.json";
import { useI18n } from "@/lib/i18n";

export function HeroCard() {
  const { t, lang } = useI18n();
  const isAr = lang === "ar";

  return (
    <section className="mx-auto w-full max-w-[1440px] px-5 pt-5 sm:px-8 sm:pt-8 xl:px-12">
      {/* Desktop / tablet */}
      <div className="relative hidden overflow-hidden rounded-[36px] bg-edio-sky/25 shadow-[0_30px_80px_-40px_rgba(9,10,50,0.25)] md:block">
        <div className="relative aspect-[2.3/1] min-h-[520px] lg:min-h-[600px] xl:min-h-[640px]">
          <img
            src={heroImg.url}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-[75%_center] rtl:object-[25%_center]"
            loading="eager"
            fetchPriority="high"
          />
          {/* Localized text-side gradient */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 start-0 w-[62%] bg-gradient-to-r from-edio-cream/85 via-edio-cream/55 to-transparent rtl:bg-gradient-to-l"
          />
          {/* Copy block */}
          <div className="relative z-10 flex h-full items-center">
            <div className="w-full max-w-[560px] px-10 py-14 lg:px-14 lg:py-16 xl:px-16">
              <p className="text-[12px] font-semibold tracking-[0.22em] text-edio-navy/70">
                {t("hero.eyebrow")}
              </p>
              <h1 className="mt-4 text-[44px] font-semibold leading-[1.05] text-edio-navy lg:text-[56px] xl:text-[64px]">
                {t("hero.headline")}
              </h1>
              <p className="mt-5 max-w-[420px] text-[16px] leading-[1.55] text-edio-navy/75 lg:text-[17px]">
                {t("hero.tagline")}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#shop"
                  className="inline-flex h-[46px] items-center rounded-full bg-edio-navy px-7 text-[14px] font-medium leading-none text-white transition-opacity duration-200 hover:opacity-90"
                >
                  {t("hero.cta.explore")}
                </a>
                <a
                  href="#audio"
                  className="inline-flex h-[46px] items-center rounded-full border-[1.5px] border-edio-navy/85 px-7 text-[14px] font-medium leading-none text-edio-navy transition-colors duration-200 hover:bg-edio-navy hover:text-white"
                >
                  {t("hero.cta.shopAudio")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="relative overflow-hidden rounded-[26px] bg-edio-sky/25 md:hidden">
        <div className="relative aspect-[4/5] max-h-[540px] min-h-[430px] w-full">
          <img
            src={heroImg.url}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-[55%_78%]"
            loading="eager"
            fetchPriority="high"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-[58%] bg-gradient-to-b from-edio-cream/95 via-edio-cream/70 to-transparent"
          />
          <div className="absolute inset-x-0 top-0 z-10 px-6 pb-10 pt-7">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-edio-navy/70">
              {t("hero.eyebrow")}
            </p>
            <h1 className="mt-2 text-[32px] font-semibold leading-[1.08] text-edio-navy">
              {t("hero.headline")}
            </h1>
            <p className={`mt-3 text-[14px] leading-[1.5] text-edio-navy/75 ${isAr ? "text-start" : ""}`}>
              {t("hero.tagline")}
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-2.5 px-6 pb-6">
            <a
              href="#shop"
              className="inline-flex h-[44px] w-full items-center justify-center rounded-full bg-edio-navy px-6 text-[14px] font-medium leading-none text-white"
            >
              {t("hero.cta.explore")}
            </a>
            <a
              href="#audio"
              className="inline-flex h-[44px] w-full items-center justify-center rounded-full border-[1.5px] border-edio-navy/85 bg-edio-cream/70 px-6 text-[14px] font-medium leading-none text-edio-navy backdrop-blur-[2px]"
            >
              {t("hero.cta.shopAudio")}
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
