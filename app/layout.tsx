import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "V3GASBOI | Digital Artist From Las Vegas",
  description:
    "V3GASBOI - Independent artist from Las Vegas. The Independence Code is Global. #88Mob",
  keywords: [
    "V3GASBOI",
    "Las Vegas",
    "hip hop",
    "independent artist",
    "88Mob",
    "Vegas music",
  ],
  openGraph: {
    title: "V3GASBOI | Digital Artist From Las Vegas",
    description: "The Independence Code is Global. #88Mob",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
