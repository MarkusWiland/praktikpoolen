import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="2xl:container fixed top-0 w-full z-20 backdrop-filter backdrop-grayscale backdrop-blur-md">
          <div className="lg:container  mx-auto flex items-center justify-between">
            <span>logo</span>
            <nav>
              <ul className="flex ">
                <li className="py-2 px-4">
                  <Link href="/">Hem</Link>
                </li>
                <li className="py-2 px-4">
                  <Link href="/">Sök praktikplatser</Link>
                </li>
                <li className="py-2 px-4">
                  <Link href="/">Erbjud Praktikplats</Link>
                </li>
                <li className="py-2 px-4">
                  <Link href="/">Om praktikplats.se</Link>
                </li>
              </ul>
            </nav>
            <div className="max-w-sm flex flex-col items-center">
              <h3 className="font-bold italic py-2">Logga in som</h3>
              <div className="flex gap-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm">
                  Student
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm">
                  Företag
                </button>
              </div>
            </div>
          </div>
        </header>
        <main className="2xl:container mx-auto">{children}</main>
      </body>
    </html>
  );
}
