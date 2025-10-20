import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Action Manufacturing Services",
  description: "CNC, waterjet, and fabrication — on time.",
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
