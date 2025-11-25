import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Novic - AI & Automation Solutions",
  description: "Growth through innovation. AI & Automation solutions for local businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
