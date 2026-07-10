import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import MenuTabs from "@/sections/menu/MenuTabs";
import FinalCTA from "@/sections/home/FinalCTA";
import { siteImages } from "@/data/content";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Il menu del Portofino Beach Bar: panini gustosi, insalatone fresche e l'aperitivo al tramonto. Solo presentazione — vieni a scoprirlo direttamente al chiosco di Lignano Sabbiadoro.",
};

export default function MenuPage() {
  return (
    <>
      <PageHero
        title="Il Menu"
        breadcrumb="Menu"
        subtitle="Panini, insalatone e aperitivi: pochi piatti, fatti bene, da gustare in riva al mare."
        image={siteImages.pranzo}
        imageAlt="Un panino fresco preparato al chiosco Portofino"
      />
      <div className="bg-cream">
        <MenuTabs />
      </div>
      <FinalCTA />
    </>
  );
}
