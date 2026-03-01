import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Figtree, Cormorant_Garamond } from "next/font/google";
import { EmrgScript } from "@/components/emrg-script";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AG Rx | Performance Medicine for Men",
  description:
    "Testosterone optimization, peptide protocols, and weight management for high-performing men. Licensed providers in 44 states.",
  metadataBase: new URL("https://agrxhealth.com"),
  openGraph: {
    title: "AG Rx | Performance Medicine for Men",
    description:
      "Testosterone optimization, peptide protocols, and weight management for high-performing men. Licensed providers in 44 states.",
    url: "https://agrxhealth.com",
    siteName: "AG Rx",
    images: [
      {
        url: "/runner-shareable.png",
        width: 1200,
        height: 630,
        alt: "AG Rx - Performance Medicine for Men",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AG Rx | Performance Medicine for Men",
    description:
      "Testosterone optimization, peptide protocols, and weight management for high-performing men.",
    images: ["/runner-shareable.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${cormorant.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DHL2FR1J21"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DHL2FR1J21');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-background min-h-screen">
          <SiteHeader />
          {children}
          <Analytics />
          <SiteFooter />
        </div>
        <EmrgScript />
      </body>
    </html>
  );
}
