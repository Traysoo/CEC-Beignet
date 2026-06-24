import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "L'Irresistible Alliance du Beignet",
  description: "Rendre irrésistibles les nouveaux récits",
  icons: {
    icon: "/LogoIcon.png",
    apple: "/LogoIcon.png",
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