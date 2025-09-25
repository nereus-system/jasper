import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-feature",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Jasper - AI-Powered Creative Platform",
  description: "Transform your creative workflow with Jasper's AI-powered tools. Built for marketers and enterprise users who demand innovation and efficiency.",
  keywords: ["AI", "creative", "marketing", "enterprise", "automation"],
  authors: [{ name: "Jasper Team" }],
  openGraph: {
    title: "Jasper - AI-Powered Creative Platform",
    description: "Transform your creative workflow with Jasper's AI-powered tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-feature antialiased`}>
        {children}
      </body>
    </html>
  );
}
