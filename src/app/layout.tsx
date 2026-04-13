import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YouKnow — The analyst you always wished you had",
  description:
    "YouKnow replicates and improves upon the best analyst you could have on your team. One that understands the business, understands the data, remembers everything, and drives impact through action.",
  openGraph: {
    title: "YouKnow — The analyst you always wished you had",
    description:
      "A system that replicates the best analyst you could have on your team.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
