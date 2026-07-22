import { DesktopSelector, type SelectorOption } from "./Selector";
import { useI18n, type Currency } from "@/lib/i18n";

export const CURRENCY_OPTIONS: SelectorOption[] = [
  { value: "USD", code: "USD", label: "$" },
  { value: "IQD", code: "IQD", label: "د.ع" },
];

export function CurrencyToggle() {
  const { currency, setCurrency, dir } = useI18n();
  return (
    <DesktopSelector
      ariaLabel="Currency"
      triggerLabel={currency}
      options={CURRENCY_OPTIONS}
      value={currency}
      onChange={(v) => setCurrency(v as Currency)}
      dir={dir}
    />
  );
}
