import Navbar from "@/components/navbar";
import { ClerkProvider } from "@clerk/nextjs";

import { svSE } from "@clerk/localizations";

import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider localization={svSE}>
      <html lang="en">
        <body>
      <Navbar />
          <main className="2xl:container mx-auto">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
