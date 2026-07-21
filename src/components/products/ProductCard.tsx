import cardFeaturedBg from "@/assets/cards/card-featured-bg.png.asset.json";
import { cn } from "@/lib/utils";

type Variant = "featured" | "standard";

interface ProductCardProps {
  image: string;
  alt?: string;
  variant?: Variant;
  className?: string;
}

/**
 * Product card — white rounded card with a square product image slot.
 * Featured variant swaps the interior for the blue-glow background (Rectangle 141)
 * and gets a stronger shadow / slight lift.
 */
export function ProductCard({
  image,
  alt = "",
  variant = "standard",
  className,
}: ProductCardProps) {
  const isFeatured = variant === "featured";

  return (
    <div
      className={cn(
        "relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-3xl bg-white",
        isFeatured
          ? "shadow-[0_20px_50px_-15px_rgba(9,10,50,0.25)]"
          : "shadow-[0_10px_30px_-15px_rgba(9,10,50,0.15)]",
        className,
      )}
      style={
        isFeatured
          ? {
              backgroundImage: `url(${cardFeaturedBg.url})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }
          : undefined
      }
    >
      <img
        src={image}
        alt={alt}
        className="h-[78%] w-[78%] object-contain"
        loading="lazy"
      />
    </div>
  );
}
