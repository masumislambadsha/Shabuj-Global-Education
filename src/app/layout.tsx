import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/src/components/navbar";

export const metadata: Metadata = {
  title: "Shabuj Global – University Finder",
  description:
    "Discover distinguished institutions of higher learning through our curated selection.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-stone-50">
      <body className="text-stone-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
