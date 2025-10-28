import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sai Praveen Kumar Salapu | Cloud & AI Software Engineer",
  description:
    "Portfolio of a software engineer building resilient cloud platforms, intelligent ML products, and delightful developer experiences.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Your Name | Cloud & AI Software Engineer",
    description:
      "Engineering resilient cloud-native systems, production ML pipelines, and immersive developer platforms.",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="bg-grid flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  );
}
