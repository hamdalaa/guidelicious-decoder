import { createContext, useContext, useState, type ReactNode } from "react";
import type { TKey } from "@/lib/i18n";

export type CategoryId = "headphones" | "iems" | "dac" | "deals";

export interface Category {
  id: CategoryId;
  labelKey: TKey;
  href: string;
}

export const CATEGORIES: Category[] = [
  { id: "headphones", labelKey: "nav.headphones", href: "#headphones" },
  { id: "iems", labelKey: "nav.iems", href: "#iems" },
  { id: "dac", labelKey: "nav.dac", href: "#dac-amps" },
  { id: "deals", labelKey: "nav.deals", href: "#deals" },
];

interface CategoryCtx {
  active: CategoryId | null;
  setActive: (id: CategoryId | null) => void;
}

const Ctx = createContext<CategoryCtx | null>(null);

export function CategoryProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<CategoryId | null>(null);
  return <Ctx.Provider value={{ active, setActive }}>{children}</Ctx.Provider>;
}

export function useCategory() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCategory must be inside CategoryProvider");
  return ctx;
}
