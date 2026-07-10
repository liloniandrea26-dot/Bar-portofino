/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Placeholder da Unsplash/Pexels: sostituisci con foto reali del chiosco
      // caricandole in /public/images e aggiornando data/content.ts
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
};

export default nextConfig;
