import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { STRINGS, type Lang, type StringKey } from "./strings";

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: StringKey) => string;
}

const LangContext = createContext<LangContextValue | null>(null);
const STORAGE_KEY = "edio.lang";

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Hydrate from storage on the client only (SSR-safe)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved === "ar" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  // Apply to <html> whenever it changes
  useEffect(() => {
    const el = document.documentElement;
    el.lang = lang;
    el.dir = lang === "ar" ? "rtl" : "ltr";
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
    // Smooth swap animation
    const main = document.querySelector("main");
    if (main) {
      main.classList.remove("edio-lang-swap");
      void (main as HTMLElement).offsetWidth;
      main.classList.add("edio-lang-swap");
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const t = useCallback((key: StringKey) => STRINGS[lang][key] ?? STRINGS.en[key], [lang]);

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}
