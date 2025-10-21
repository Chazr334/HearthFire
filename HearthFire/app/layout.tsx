import "./globals.css";
import type { Metadata } from "next";
import { Cinzel_Decorative, Crimson_Text, Merriweather } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getDefaultMetadata, buildStructuredData } from "@/lib/seo";

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
  display: "swap"
});

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson",
  display: "swap"
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-merriweather",
  display: "swap"
});

export const metadata: Metadata = getDefaultMetadata();

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const structuredData = buildStructuredData();

  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${crimson.variable} ${merriweather.variable}`}>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <SiteHeader />
        <main
          id="main-content"
          className="mx-auto mt-12 flex max-w-6xl flex-col gap-16 px-4 sm:px-6"
        >
          {children}
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c")
          }}
        />
      </body>
    </html>
  );
}
