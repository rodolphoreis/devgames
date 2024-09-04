import type { Metadata } from "next";
import { DM_Sans as DMSans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const dmSans = DMSans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DEV GAMES",
  description: "Plataforma para desenvolvedores de jogos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={dmSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
