import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zenvyra Digital — Premium Social Media & Digital Solutions Agency",
  description:
    "Zenvyra Digital is a full-service digital agency specializing in social media growth, FPV drone videography, video editing, and event production. 1.4M+ followers scaled. 188K+ YouTube subscribers.",
  keywords: [
    "digital agency",
    "social media marketing",
    "FPV drone videography",
    "video editing",
    "content creation",
    "YouTube growth",
    "Zenvyra Digital",
  ],
  openGraph: {
    title: "Zenvyra Digital — Anti-Gravity Digital Growth",
    description: "We scale brands to orbit. 1.4M+ followers. 188K+ subscribers.",
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
  themeColor: "#07070f",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <CustomCursor />
        <SmoothScrollProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
