import { FiArrowUpRight } from "react-icons/fi";
import { useI18n, type TKey } from "@/lib/i18n";
import { CATEGORIES, useCategory, type CategoryId } from "@/lib/category";

interface DummyProduct {
  id: string;
  name: { en: string; ar: string };
  sku: string;
  price: number;
}

const DUMMY: Record<CategoryId, DummyProduct[]> = {
  headphones: [
    { id: "h1", sku: "EDIO-HP-01", price: 249, name: { en: "Aria Studio", ar: "آريا ستوديو" } },
    { id: "h2", sku: "EDIO-HP-02", price: 379, name: { en: "Nocturne Pro", ar: "نوكتورن برو" } },
    { id: "h3", sku: "EDIO-HP-03", price: 179, name: { en: "Halo Lite", ar: "هالو لايت" } },
    { id: "h4", sku: "EDIO-HP-04", price: 499, name: { en: "Meridian X", ar: "ميريديان إكس" } },
  ],
  iems: [
    { id: "i1", sku: "EDIO-IEM-01", price: 129, name: { en: "Pebble", ar: "بيبل" } },
    { id: "i2", sku: "EDIO-IEM-02", price: 219, name: { en: "Coda Duo", ar: "كودا ديو" } },
    { id: "i3", sku: "EDIO-IEM-03", price: 349, name: { en: "Solace 5", ar: "سولاس 5" } },
  ],
  dac: [
    { id: "d1", sku: "EDIO-DAC-01", price: 199, name: { en: "Prism Mini", ar: "بريزم ميني" } },
    { id: "d2", sku: "EDIO-DAC-02", price: 449, name: { en: "Prism Pro", ar: "بريزم برو" } },
  ],
  deals: [
    { id: "s1", sku: "EDIO-DEAL-01", price: 149, name: { en: "Aria Bundle", ar: "حزمة آريا" } },
    { id: "s2", sku: "EDIO-DEAL-02", price: 259, name: { en: "Studio Kit", ar: "طقم ستوديو" } },
    { id: "s3", sku: "EDIO-DEAL-03", price: 89, name: { en: "Cable Pack", ar: "حزمة الكابلات" } },
  ],
};

const COMING: TKey = "nav.deals"; // just to reuse i18n type; not shown

export function CategoryView() {
  const { active } = useCategory();
  const { lang, t } = useI18n();

  if (!active) return null;

  const cat = CATEGORIES.find((c) => c.id === active)!;
  const items = DUMMY[active];

  return (
    <section className="px-3 pt-4 sm:px-6 sm:pt-6">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] bg-white/60 p-6 sm:p-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-technical text-[11px] uppercase tracking-[0.2em] text-edio-navy/50">
                Edio / Category
              </p>
              <h1
                className="mt-2 font-semibold text-edio-navy"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: lang === "ar" ? "0" : "-0.02em" }}
              >
                {t(cat.labelKey)}
              </h1>
            </div>
            <p className="hidden max-w-xs text-sm text-edio-navy/60 sm:block">
              {lang === "ar"
                ? "معاينة تجريبية — سيتم ربط الفئات بواجهة برمجة التطبيقات لاحقاً."
                : "Dummy preview — categories will be wired to the API next."}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((p) => (
              <article
                key={p.id}
                className="group relative flex flex-col overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-edio-sky/40 via-white to-white p-5 shadow-[0_10px_40px_-20px_rgba(9,10,50,0.25)] transition-transform hover:-translate-y-0.5"
              >
                <div className="aspect-square rounded-2xl bg-edio-sky/40" />
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="truncate text-base font-semibold text-edio-navy">
                      {p.name[lang]}
                    </h3>
                    <p className="font-technical mt-1 text-[11px] tracking-wide text-edio-navy/50">
                      {p.sku}
                    </p>
                  </div>
                  <span className="font-technical shrink-0 text-sm font-semibold text-edio-navy">
                    ${p.price}
                  </span>
                </div>
                <button
                  type="button"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-edio-navy px-4 py-2.5 text-sm font-medium text-edio-cream transition-transform group-hover:-translate-y-0.5"
                >
                  {lang === "ar" ? "اشتر الآن" : "Buy now"}
                  <FiArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
