import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Bootcamp: Master AI & Build Real Projects in Weeks",
  description: "Join our AI Bootcamp and go from zero to building production-ready AI apps! Skip the theory. Build real projects. Land interviews with proof of work.",
  keywords: "AI bootcamp, machine learning, artificial intelligence, programming, software development, career change, tech skills",
  authors: [{ name: "AI Bootcamp Instructor" }],
  openGraph: {
    title: "AI Bootcamp: Master AI & Build Real Projects in Weeks",
    description: "Join our AI Bootcamp and go from zero to building production-ready AI apps! Skip the theory. Build real projects. Land interviews with proof of work.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Bootcamp: Master AI & Build Real Projects in Weeks",
    description: "Join our AI Bootcamp and go from zero to building production-ready AI apps! Skip the theory. Build real projects. Land interviews with proof of work.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="lg:px-80 px-10 sm:px-4 md:px-8">
          {children}
        </div>

        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">
              © 2025 Tripathi Rajat. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
