import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolioData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-seven-woad-24.vercel.app"),
  title: `${portfolioData.personal.name} | Computer Engineering Undergraduate & Full-Stack Developer`,
  description: portfolioData.personal.tagline,
  keywords: [
    "Pasindu Ranasinghe",
    "Computer Engineering",
    "University of Jaffna",
    "Full-Stack Developer",
    "Software Engineering Intern",
    "Spring Boot",
    "React",
    "Next.js",
    "Node.js",
    "WebRTC",
  ],
  authors: [{ name: portfolioData.personal.name }],
  openGraph: {
    title: `${portfolioData.personal.name} | Portfolio`,
    description: portfolioData.personal.tagline,
    url: "https://portfolio-seven-woad-24.vercel.app",
    siteName: `${portfolioData.personal.name} Portfolio`,
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 1200,
        alt: portfolioData.personal.name,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#09090b] text-zinc-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
        {children}
      </body>
    </html>
  );
}
