import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mark Deutschmann",
  description:
    "Finance graduate student, equity research analyst, and entrepreneur based in Milwaukee.",
  openGraph: {
    title: "Mark Deutschmann",
    description:
      "Finance graduate student, equity research analyst, and entrepreneur based in Milwaukee.",
    type: "website",
    siteName: "Mark Deutschmann",
    images: [
      {
        url: "/mark-headshot.png",
        width: 1024,
        height: 1017,
        alt: "Mark Deutschmann",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
