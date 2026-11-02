import "./globals.css";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { profile } from "../data";

const sans = Space_Grotesk({ subsets: ["latin"], variable: "--sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--mono" });

export const metadata = { title: `${profile.name} | Portfolio`, description: profile.tagline };
export const viewport = { themeColor: "#0a1929" };

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${sans.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
