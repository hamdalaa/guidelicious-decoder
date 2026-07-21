import productFeatured from "@/assets/products/product-featured.png.asset.json";
import productLeft from "@/assets/products/product-left.png.asset.json";
import productRight from "@/assets/products/product-right.png.asset.json";
import { BuyNowButton } from "./BuyNowButton";
import { ProductCard } from "./ProductCard";

/**
 * Featured Products (best-seller) section — locked composition from Slide 99.
 * RTL, three cards, middle card is the featured/best-seller with the glossy Buy Now button.
 */
export function FeaturedProducts() {
  return (
    <section
      dir="rtl"
      lang="ar"
      className="w-full bg-gradient-to-b from-edio-sky/40 via-edio-sky/25 to-edio-sky/50 py-16"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-6 md:grid-cols-3 md:gap-6">
        {/* Right in RTL DOM order = visually first (right side) */}
        <div className="flex flex-col gap-4">
          <ProductCard image={productRight.url} variant="standard" alt="" />
          <BuyNowButton variant="side" />
        </div>

        {/* Featured / best-seller — middle, lifted */}
        <div className="flex flex-col gap-4 md:-my-6">
          <ProductCard image={productFeatured.url} variant="featured" alt="" />
          <BuyNowButton variant="featured" />
        </div>

        {/* Left in RTL DOM order = visually last (left side) */}
        <div className="flex flex-col gap-4">
          <ProductCard image={productLeft.url} variant="standard" alt="" />
          <BuyNowButton variant="side" />
        </div>
      </div>
    </section>
  );
}
