import { ImageResponse } from "next/og";
import { getDictionary } from "@/lib/i18n";

/**
 * Immagine Open Graph generata a build time (1200×630) per le anteprime
 * social. Quando avrai una foto reale del locale, puoi sostituirla
 * mettendo un file opengraph-image.jpg in questa cartella.
 */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage({ params }: { params: { locale: string } }) {
  const dict = getDictionary(params.locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #201D19 0%, #37312A 100%)",
          color: "#FDFCF9",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 34, color: "#C9AF8B", letterSpacing: 10, textTransform: "uppercase" }}>
          {dict.brand.tagline}
        </div>
        <div style={{ fontSize: 96, fontWeight: 600, marginTop: 24, textAlign: "center" }}>
          {dict.brand.name}
        </div>
        <div
          style={{
            marginTop: 40,
            width: 140,
            height: 6,
            background: "#9A6B3F",
            borderRadius: 3,
          }}
        />
      </div>
    ),
    size,
  );
}
