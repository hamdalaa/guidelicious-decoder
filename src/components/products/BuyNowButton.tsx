import btnFeatured from "@/assets/buttons/btn-featured-bg.png.asset.json";
import btnSide from "@/assets/buttons/btn-side-bg.png.asset.json";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type Variant = "featured" | "side";

interface BuyNowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

/**
 * Buy Now button ("اشتر الآن") — locked to two variants from the Edio product-card spec.
 * - featured: glossy blue-gradient pill (Rectangle 147), light-sky Arabic text
 * - side:     flat light-sky pill (Rectangle 143), navy Arabic text
 * Never invent a third variant.
 */
export function BuyNowButton({
  variant = "side",
  className,
  ...props
}: BuyNowButtonProps) {
  const isFeatured = variant === "featured";
  const bg = isFeatured ? btnFeatured.url : btnSide.url;

  return (
    <button
      type="button"
      dir="rtl"
      lang="ar"
      {...props}
      className={cn(
        "relative inline-flex w-full items-center justify-center rounded-2xl font-semibold tracking-wide transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-edio-blue focus-visible:ring-offset-2",
        isFeatured
          ? "h-14 text-lg text-edio-sky"
          : "h-12 text-base text-edio-navy",
        className,
      )}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      اشتر الآن
    </button>
  );
}
