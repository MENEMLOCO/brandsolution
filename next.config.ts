import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/curso/:slug", destination: "/cursos/:slug", permanent: true },
      { source: "/articulo/:slug", destination: "/blog/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
