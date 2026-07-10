import type { Metadata } from "next";
import Hero from "@/sections/home/Hero";
import QuickIntro from "@/sections/home/QuickIntro";
import MenuPreview from "@/sections/home/MenuPreview";
import BeachPreview from "@/sections/home/BeachPreview";
import SunsetSection from "@/sections/home/SunsetSection";
import GalleryPreview from "@/sections/home/GalleryPreview";
import LocationPreview from "@/sections/home/LocationPreview";
import FinalCTA from "@/sections/home/FinalCTA";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Portofino Beach Bar — Chiosco sulla spiaggia di Lignano Sabbiadoro",
  description:
    "Panini gustosi, insalatone fresche e aperitivi al tramonto con i piedi nella sabbia. Zona attrezzata e tranquilla sul Lungomare Trieste, Lignano Sabbiadoro. Aperti tutti i giorni 7:30–20:00.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickIntro />
      {/* Raccordo a onda tra la sezione sabbia e quella crema */}
      <WaveDivider color="text-cream" className="bg-sand-light" />
      <MenuPreview />
      <BeachPreview />
      <SunsetSection />
      {/* L'onda sabbia "sale" sopra il gradiente del tramonto */}
      <WaveDivider color="text-sand-light" className="relative z-10 -mt-12 md:-mt-20" />
      <GalleryPreview />
      <LocationPreview />
      <FinalCTA />
    </>
  );
}
