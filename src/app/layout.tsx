import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "MallSphere - AI-Powered Interactive Sales Experience",
  description:
    "Experience the future of premium shopping malls. Cinematic, interactive sales deck for mega shopping destinations.",
  keywords: [
    "shopping mall",
    "real estate",
    "luxury",
    "interactive experience",
    "sales platform",
  ],
  openGraph: {
    title: "MallSphere",
    description: "AI-Powered Interactive Sales Experience Platform",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${spaceMono.variable} antialiased bg-luxury-black text-luxury-white overflow-x-hidden`}
      >
        <div className="relative min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>

        {/* Animated gradient background */}
        <div className="fixed inset-0 -z-50 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        </div>

        {/* Smooth scroll behavior */}
        <style>{`
          html {
            scroll-behavior: smooth;
          }

          ::-webkit-scrollbar {
            width: 8px;
          }

          ::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.1);
          }

          ::-webkit-scrollbar-thumb {
            background: #d4af37;
            border-radius: 4px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: #e6c547;
          }
        `}</style>
      </body>
    </html>
  );
}
