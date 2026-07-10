import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/sections/galleria/GalleryGrid";
import FinalCTA from "@/sections/home/FinalCTA";
import { siteImages } from "@/data/content";

export const metadata: Metadata = {
  title: "Galleria",
  description:
    "Le foto del Portofino Beach Bar: i piatti, la spiaggia attrezzata, i tramonti sull'Adriatico e l'atmosfera del chiosco di Lignano Sabbiadoro.",
};

export default function GalleriaPage() {
  return (
    <>
      <PageHero
        title="Galleria"
        breadcrumb="Galleria"
        subtitle="Il Portofino raccontato per immagini: cibo, spiaggia, tramonti e atmosfera."
        image={siteImages.tramonto}
        imageAlt="Tramonto sul mare davanti al Portofino Beach Bar"
      />
      <div className="bg-cream">
        <GalleryGrid />
      </div>
      <FinalCTA />
    </>
  );
}
