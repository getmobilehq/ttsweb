import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { PARTNERSHIP_EMAIL } from "@/lib/links";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const description =
  "TTS Nigeria connects young women to dignified digital work, gives employers access to capable talent, and strengthens Nigeria's technology talent outsourcing sector.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TTS Nigeria Initiative — Pathways to dignified digital work",
    template: "%s · TTS Nigeria Initiative",
  },
  description,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: "/",
    title: "TTS Nigeria Initiative — Pathways to dignified digital work",
    description,
  },
  twitter: { card: "summary_large_image" },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  email: PARTNERSHIP_EMAIL,
  description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
