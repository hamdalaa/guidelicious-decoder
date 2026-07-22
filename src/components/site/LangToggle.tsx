import { DesktopSelector, type SelectorOption } from "./Selector";
import { useI18n, type Lang } from "@/lib/i18n";

export const LANG_OPTIONS: SelectorOption[] = [
  { value: "en", code: "EN", label: "English" },
  { value: "ar", code: "AR", label: "العربية" },
];

export function LangToggle() {
  const { lang, setLang, dir } = useI18n();
  return (
    <DesktopSelector
      ariaLabel="Language"
      triggerLabel={lang.toUpperCase()}
      options={LANG_OPTIONS}
      value={lang}
      onChange={(v) => setLang(v as Lang)}
      dir={dir}
    />
  );
}
