import "./globals.scss";

import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { getAssetPath } from "@/components/util/assetPath";

config.autoAddCss = false;

const sharpfont = Inter({ subsets: ["latin"] });
const mainfont = Nunito({ subsets: ["latin"] });
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "AI@MIT",
  description:
    "MIT's premier undergraduate artificial intelligence student organization.",
  keywords: [
    "ai@mit",
    "aim mit",
    "ai at mit",
    "ai club mit",
    "mit ai club",
    "mit artificial intelligence club",
    "mit machine learning club",
    "artificial intelligence",
    "machine learning",
    "student organization",
  ],
  openGraph: {
    title: "AI@MIT",
    description:
      "MIT's premier undergraduate artificial intelligence student organization.",
    url: "https://aiatmit.com",
    siteName: "AI@MIT",
    images: [
      {
        url: "https://aiatmit.com/icons/aim-icon-full.svg",
        width: 700,
        height: 200,
        alt: "AI@MIT Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

import { ThemeProvider } from "next-themes";
import StructuredData from "@/components/StructuredData";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="shortcut icon"
          href={getAssetPath("/icons/aim-icon-at.svg")}
        />
      </head>
      <body className={mainfont.className}>
        <ThemeProvider defaultTheme="dark">
          <Navbar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
