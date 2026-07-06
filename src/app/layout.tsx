import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alliancedubeignet.com"),

  title: "L'Irresistible Alliance du Beignet",
  description: "Rendre irrésistibles les nouveaux récits",

  alternates: {
    canonical: "/",
  },

  verification: {
    other: {
      "msvalidate.01": "7EBD7B19A8DC75FF910A278B4712E8FC",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      
      <body className={`${lato.className} min-h-full flex flex-col`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}