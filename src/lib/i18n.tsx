import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";

type Dict = Record<string, { en: string; ar: string }>;

export const dict = {
  "nav.cart": { en: "Cart", ar: "السلة" },
  "nav.shop": { en: "Shop", ar: "تسوق" },
  "nav.menu": { en: "Menu", ar: "القائمة" },
  "nav.close": { en: "Close", ar: "إغلاق" },
  "nav.headphones": { en: "Headphones", ar: "سماعات الرأس" },
  "nav.speakers": { en: "Speakers", ar: "مكبرات الصوت" },
  "nav.microphones": { en: "Microphones", ar: "الميكروفونات" },
  "nav.audioEquipment": { en: "Audio Equipment", ar: "معدات صوتية" },
  "nav.brands": { en: "Brands", ar: "العلامات" },

  "hero.eyebrow": { en: "Curated Audio", ar: "صوتيات مختارة" },
  "hero.headline": { en: "Hear the Difference", ar: "اسمع الفرق" },
  "hero.tagline": {
    en: "Discover hand-picked audio gear for a clearer, richer experience.",
    ar: "اكتشف أجهزة صوتية مختارة بعناية لتجربة أوضح وأغنى.",
  },
  "hero.cta.explore": { en: "Shop now", ar: "تسوق الآن" },
  "hero.cta.shopAudio": { en: "Browse categories", ar: "تصفح الفئات" },

  "categories.title": { en: "Shop by category", ar: "تسوق حسب الفئة" },

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
  "footer.headphones": { en: "Headphones", ar: "سماعات الرأس" },
  "footer.iems": { en: "IEMs", ar: "سماعات الأذن" },
  "footer.dac": { en: "DAC & AMPS", ar: "المضخمات" },
  "footer.deals": { en: "Deals", ar: "العروض" },
} satisfies Dict;

export type TKey = keyof typeof dict;

export type Currency = "USD" | "IQD";

interface I18nCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TKey) => string;
  dir: "rtl" | "ltr";
  currency: Currency;
  setCurrency: (c: Currency) => void;
}

const Ctx = createContext<I18nCtx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [currency, setCurrency] = useState<Currency>("USD");

  useEffect(() => {
    const el = document.documentElement;
    el.lang = lang;
    el.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const value: I18nCtx = {
    lang,
    setLang: setLangState,
    t: (key) => dict[key][lang],
    dir: lang === "ar" ? "rtl" : "ltr",
    currency,
    setCurrency,
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}

