import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heckmann | Hypotheken & Verzekeringen",
  description:
    "Persoonlijk advies over hypotheken, verzekeringen en financieringen in Zuid-Holland en Utrecht.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}
