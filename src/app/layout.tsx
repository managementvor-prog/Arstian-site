import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ArtisanTrust — Verified artisans, trusted work",
  description: "Find verified electricians, plumbers, carpenters and more. Transparent ratings, fair pricing, job history.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
