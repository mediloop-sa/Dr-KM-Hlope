import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Dermatology Diary | Dr. KM Hlophe, Specialist Dermatologist",
  description:
    "Specialist dermatology care in Mbombela and Hoedspruit with Dr. KM Hlophe — medical, aesthetic, minor surgical and psychodermatological conditions.",
  metadataBase: new URL("https://thedermatologydiary.com"),
  openGraph: {
    title: "The Dermatology Diary | Dr. KM Hlophe",
    description:
      "Specialist dermatology care in Mbombela and Hoedspruit — medical, aesthetic, minor surgical and psychodermatological conditions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
