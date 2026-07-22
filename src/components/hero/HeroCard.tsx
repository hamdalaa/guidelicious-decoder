import heroImg from "@/assets/hero/edio-hero.png.asset.json";
import { useI18n } from "@/lib/i18n";

export function HeroCard() {
  const { t } = useI18n();

  return (
    <section className="mx-auto w-full max-w-[1440px] px-5 pt-5 sm:px-8 sm:pt-8 xl:px-12">
      {/* Desktop / tablet */}
      <div className="relative hidden overflow-hidden rounded-[20px] bg-edio-sky/25 shadow-[0_30px_80px_-40px_rgba(9,10,50,0.25)] md:block md:rounded-[18px] lg:rounded-[20px] xl:rounded-[22px]">
        <div className="relative aspect-[2.3/1] min-h-[500px] lg:min-h-[580px] xl:min-h-[620px]">
          <img
            src={heroImg.url}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "70% 50%" }}
            loading="eager"
            fetchPriority="high"
          />
          {/* Localized text-side gradient */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 start-0 w-[58%] bg-gradient-to-r from-edio-cream/85 via-edio-cream/50 to-transparent rtl:bg-gradient-to-l"
          />
          {/* Copy block */}
          <div className="relative z-10 flex h-full items-center">
            <div className="w-full max-w-[560px] px-10 py-14 lg:px-14 lg:py-16 xl:px-16">
              <h1
                className="font-semibold leading-[1.05] text-edio-navy"
                style={{ fontSize: "clamp(40px, 4.2vw, 64px)" }}
              >
                {t("hero.headline")}
              </h1>
              <p className="mt-5 max-w-[420px] text-[16px] leading-[1.55] text-edio-navy/75 lg:text-[17px]">
                {t("hero.tagline")}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#shop"
                  className="edio-btn-primary inline-flex h-[46px] items-center rounded-[10px] bg-edio-navy px-7 text-[14px] font-medium leading-none text-white active:opacity-95"
                >
                  {t("hero.cta.explore")}
                </a>
                <a
                  href="#audio"
                  className="edio-btn-secondary inline-flex h-[46px] items-center rounded-[10px] border-[1.5px] border-edio-navy/85 px-7 text-[14px] font-medium leading-none text-edio-navy active:opacity-95"
                >
                  {t("hero.cta.shopAudio")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile — premium editorial composition, sits directly on cream page bg */}
      <div className="md:hidden">
        <div className="flex flex-col px-6 pt-6 pb-8">
          {/* Text block — centered editorial */}
          <div className="mb-8 text-center">
            <h1
              className="font-semibold tracking-tight text-edio-navy"
              style={{ fontSize: "clamp(2rem, 9.5vw, 2.75rem)", lineHeight: 1.08 }}
            >
              {t("hero.headline")}
            </h1>
            <p className="mx-auto mt-3 max-w-[30ch] text-[16px] leading-[1.55] text-edio-navy/70">
              {t("hero.tagline")}
            </p>
          </div>

          {/* Editorial product stage */}
          <div className="relative mb-9 flex aspect-[4/5] w-full items-center justify-center">
            {/* Architectural sky-blue blocks */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <div
                aria-hidden
                className="h-[75%] w-[80%] rounded-2xl bg-edio-sky"
                style={{ transform: "rotate(-6deg) translateX(1rem)" }}
              />
              <div
                aria-hidden
                className="absolute h-[60%] w-[65%] rounded-2xl bg-edio-sky/60"
                style={{ transform: "rotate(3deg) translateX(-1.5rem)" }}
              />
            </div>
            {/* Product artwork — dominant */}
            <div
              className="relative z-10 h-[86%] w-[88%]"
              style={{ filter: "drop-shadow(0 24px 40px rgba(9,10,50,0.22))" }}
            >
              <img
                src={heroImg.url}
                alt=""
                className="h-full w-full object-contain"
                style={{ objectPosition: "center" }}
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>

          {/* Actions — stacked full-width */}
          <div className="flex w-full flex-col gap-3">
            <a
              href="#shop"
              className="inline-flex h-[52px] w-full items-center justify-center rounded-[10px] bg-edio-navy px-5 text-[15px] font-semibold leading-none text-white active:opacity-95"
            >
              {t("hero.cta.explore")}
            </a>
            <a
              href="#audio"
              className="inline-flex h-[52px] w-full items-center justify-center rounded-[10px] border-2 border-edio-navy px-5 text-[15px] font-semibold leading-none text-edio-navy active:opacity-95"
            >
              {t("hero.cta.shopAudio")}
            </a>
          </div>

          {/* Editorial pagination indicator */}
          <div className="mt-8 flex justify-center gap-2" aria-hidden>
            <div className="h-1 w-8 rounded-full bg-edio-navy" />
            <div className="h-1 w-2 rounded-full bg-edio-navy/20" />
            <div className="h-1 w-2 rounded-full bg-edio-navy/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
