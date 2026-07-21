import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";

type Dict = Record<string, { en: string; ar: string }>;

export const dict = {
  "nav.headphones": { en: "Headphones", ar: "سماعات الرأس" },
  "nav.iems": { en: "IEMs", ar: "سماعات الأذن" },
  "nav.dac": { en: "DAC & AMPS", ar: "المضخمات" },
  "nav.deals": { en: "Deals", ar: "العروض" },
  "nav.shop": { en: "Shop", ar: "المتجر" },
  "nav.cart": { en: "Cart", ar: "السلة" },
  "nav.menu": { en: "Menu", ar: "القائمة" },

  "hero.eyebrow": { en: "New collection", ar: "المجموعة الجديدة" },
  "hero.brand": { en: "Edio", ar: "إيديو" },
  "hero.sub": { en: "Audio", ar: "أوديو" },
  "hero.tagline": {
    en: "Find the sound that fits you — no noise, no pressure.",
    ar: "اعثر على الصوت الذي يناسبك — بدون ضجيج، بدون ضغط.",
  },
  "hero.headline": {
    en: "Introducing Edio, a new standard in curated audio.",
    ar: "نقدّم إيديو، معيار جديد في الصوت المختار بعناية.",
  },
  "hero.cta.explore": { en: "Explore", ar: "استكشف" },
  "hero.cta.shop": { en: "Shop headphones", ar: "تسوّق السماعات" },
  "hero.cta.shopNow": { en: "Shop now", ar: "تسوّق الآن" },
  "hero.cta.details": { en: "Details", ar: "التفاصيل" },
  "hero.teaser.eyebrow": { en: "Curated by Edio", ar: "اختيار إيديو" },
  "hero.teaser.title": { en: "Essential bundles.", ar: "الحزم الأساسية." },

  "footer.tagline": {
    en: "Sound, guided. Curated audio gear with calm, expert advice — no noise, no pressure.",
    ar: "الصوت بإرشاد. معدات صوتية مختارة بعناية مع نصائح هادئة من خبراء — بدون ضجيج، بدون ضغط.",
  },
  "footer.shop": { en: "Shop", ar: "المتجر" },
  "footer.support": { en: "Support & Legal", ar: "الدعم والقانون" },
  "footer.privacy": { en: "Privacy Policy", ar: "سياسة الخصوصية" },
  "footer.terms": { en: "Terms of Service", ar: "شروط الخدمة" },
  "footer.refunds": { en: "Refund Policy", ar: "سياسة الاسترداد" },
  "footer.returns": { en: "Returns", ar: "الإرجاع" },
  "footer.warranty": { en: "Warranty", ar: "الضمان" },
  "footer.contact": { en: "Contact", ar: "تواصل" },
} satisfies Dict;

export type TKey = keyof typeof dict;

interface I18nCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TKey) => string;
  dir: "rtl" | "ltr";
}

const Ctx = createContext<I18nCtx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const el = document.documentElement;
    el.lang = lang;
    el.dir = lang === "ar" ? "rtl" : "ltr";
    const main = document.querySelector("main");
    if (main) {
      main.classList.remove("edio-lang-swap");
      void (main as HTMLElement).offsetWidth;
      main.classList.add("edio-lang-swap");
    }
  }, [lang]);

  const value: I18nCtx = {
    lang,
    setLang: setLangState,
    t: (key) => dict[key][lang],
    dir: lang === "ar" ? "rtl" : "ltr",
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
