"use client";
import {  SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
export default function Navbar() {
  const { user, isLoaded } = useUser();
  return (
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
              {isLoaded && user && (
                <>
                  <Link href="/">Om praktikplats.se</Link>
                </>
              )}
            </li>
          </ul>
        </nav>
        <div className="max-w-sm flex flex-col items-center">
          <h3 className="font-bold italic py-2">Logga in som</h3>
          <div className="flex gap-2">
            {isLoaded && user ? (
              <>
                <UserButton afterSignOutUrl="/" />
              </>   
            ) : (
              <>
               <SignInButton>
      <button className="bg-gray-800 text-white border rounded-md py-6 px-4">Logga in</button>
      </SignInButton>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
