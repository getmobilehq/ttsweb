import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { PARTNERSHIP_EMAIL } from "@/lib/content";
import "./globals.css";

// Display + body faces, self-hosted via next/font to eliminate layout shift (§2).
const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const title = "TTS Nigeria Initiative — Inclusive, impact-sourced BPO talent";
const description =
  "TTS Nigeria connects marginalised young women to dignified work in the BPO sector, and connects operators and governments to a quality, inclusive talent pipeline.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

// JSON-LD Organization schema (HANDOFF §9). `sameAs` is intentionally omitted
// until official channels are confirmed.
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
