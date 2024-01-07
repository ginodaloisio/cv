import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { RESUME_DATA } from "@/data/resume-data";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ginodaloisio.com"),
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
  authors: [
    {
      name: "Gino",
      url: "https://www.ginodaloisio.com",
    },
  ],
  creator: "Gino",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ginodaloisio.com",
    title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
    description: RESUME_DATA.summary,
    siteName: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
    images: [
      {
        url: "https://www.ginodaloisio.com/og.png",
        width: 960,
        height: 934,
        alt: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
    description: RESUME_DATA.summary,
    images: ["https://www.ginodaloisio.com/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
