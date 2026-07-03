import { Inter, JetBrains_Mono } from "next/font/google";
import "./styles/globals.css";
import LayoutShell from "./components/LayoutShell";
import { siteConfig } from "./data/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "Daniel Zhou",
    "AI Systems",
    "Machine Learning",
    "Android Developer",
    "Embedded Systems",
    "UCLA",
    "Software Engineer",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-[#030712] text-slate-200 antialiased font-sans">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
