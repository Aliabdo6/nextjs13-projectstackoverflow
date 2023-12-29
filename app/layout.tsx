import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import React from "react";
import {
  Inter,
  Space_Grotesk,
} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  variable: "--font-inter",
});

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dev Stack OverFlow",
  description:
    " A community-driven platform for asking and answering programming questions . Get help , share knowledge , and collaborate with developers from around the world . Explore topics in web development , mobile app development , algorithms , data structures , and more .  ",

  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary:
            "bg-blue-500 hover:bg-blue-600",
          footerActionLink:
            "text-blue-500 hover:text-blue-600",
        },
      }}
    >
      <html lang="en">
        <body
          className={` ${inter.variable} ${spacegrotesk.variable} `}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
