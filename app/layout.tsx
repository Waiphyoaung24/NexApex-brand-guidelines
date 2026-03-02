import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const nexa = localFont({
  src: [
    { path: "../public/Nexa-Font/NexaRegular.otf", weight: "400", style: "normal" },
    { path: "../public/Nexa-Font/NexaBold.otf", weight: "700", style: "normal" },
    { path: "../public/Nexa-Font/NexaLight.otf", weight: "300", style: "normal" },
  ],
  variable: "--font-nexa",
});

const nevera = localFont({
  src: [
    { path: "../public/nevera-font/Nevera-Regular.otf", weight: "400", style: "normal" },
  ],
  variable: "--font-nevera",
});

export const metadata: Metadata = {
  title: "NEX APEX — Brand Guidelines",
  description: "NEX APEX brand guidelines — Where AI Reaches Its Peak.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nexa.variable} ${nevera.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
