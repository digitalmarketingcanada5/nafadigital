import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { ChatBotProvider } from "@/contexts/ChatBotContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NafaDigital - Digital Marketing & Google Ads Management",
  description:
    "Professional Google Ads management, digital marketing services, and lead generation solutions. Boost your online presence with NafaDigital's expert team.",
  keywords:
    "Google Ads, digital marketing, PPC management, lead generation, online advertising, search marketing",
  authors: [{ name: "NafaDigital" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "NafaDigital - Digital Marketing & Google Ads Management",
    description:
      "Professional Google Ads management and digital marketing services to grow your business online.",
    url: "https://www.nafadigital.com",
    siteName: "NafaDigital",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "NafaDigital Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NafaDigital - Digital Marketing & Google Ads Management",
    description:
      "Professional Google Ads management and digital marketing services to grow your business online.",
    images: ["/logo.png"],
  },
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Material Symbols Font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17425030136"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17425030136');
            gtag('config', 'G-PMVNZ6DBFQ');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ChatBotProvider>
          <Header />
          <main style={{ minHeight: '100vh' }}>{children}</main>
          <Footer />
          <ChatBot />
        </ChatBotProvider>
      </body>
    </html>
  );
}