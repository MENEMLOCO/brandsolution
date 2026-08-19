import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { site } from "@/data/site";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { JsonLd } from "@/components/shared/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Brand Solutions · Cursos de Marketing Digital e Inteligencia Artificial",
    template: "%s · Brand Solutions",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "education",
  keywords: [
    "cursos de marketing digital",
    "marketing digital e inteligencia artificial",
    "curso de community manager",
    "curso de Meta Ads",
    "curso de Google Ads",
    "email marketing y automatización",
    "capacitaciones para equipos de marketing",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: "Brand Solutions · Cursos de Marketing Digital e Inteligencia Artificial",
    description: site.description,
    // Imagen social por defecto. Las rutas que definen su propio
    // opengraph-image la reemplazan automáticamente.
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Solutions · Marketing Digital e Inteligencia Artificial",
    description: site.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfbf8" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0a1d" },
  ],
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={`${inter.variable} ${sora.variable}`}>
      <body className="flex min-h-dvh flex-col antialiased">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Header />
        <main id="contenido" className="flex-1 pt-16 lg:pt-18">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
