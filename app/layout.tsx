
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kasinnahan Hotel & Resort | Isabela City, Basilan",
  description:
    "Discover Kasinnahan Hotel & Resort in Isabela City, Basilan — a welcoming destination for relaxing stays, memorable celebrations, and special events.",
  applicationName: "Kasinnahan Hotel & Resort",
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
