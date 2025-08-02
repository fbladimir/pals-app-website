import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pal Apps - Smart little helpers for your everyday life",
  description: "Discover our suite of smart apps designed to make your daily tasks easier and more efficient. From SleepPal to CartPal, find the perfect helper for your needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gradient-to-br from-dark via-dark to-gray-900 min-h-screen">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
