import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroCard } from "@/components/hero/HeroCard";
import { CategoryView } from "@/components/category/CategoryView";
import { useCategory } from "@/lib/category";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Edio — Sound, guided." },
      {
        name: "description",
        content:
          "Edio helps you choose the right audio gear — headphones, IEMs, DACs and amps — with calm, expert guidance.",
      },
      { property: "og:title", content: "Edio — Sound, guided." },
      {
        property: "og:description",
        content:
          "Find the sound that fits you. Curated headphones, IEMs, DACs and amps, guided by Edio.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { active } = useCategory();
  return (
    <div className="min-h-screen bg-edio-cream">
      <Header />
      <main>{active ? <CategoryView /> : <HeroCard />}</main>
      <Footer />
    </div>
  );
}
