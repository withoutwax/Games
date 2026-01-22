import React from "react";
import Link from "next/link";
import "./globals.css";
import HighScores from "../components/HighScores";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: "Games",
  description: "A collection of games by Will",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="grid grid-cols-[350px_auto] grid-rows-[1fr_auto] min-h-screen [grid-template-areas:'nav_games'_'nav_footer']">
          <nav className="[grid-area:nav] flex flex-col p-10 gap-8">
            <ul className="list-none">
              <div className="flex items-center">
                <Link href="/">
                  <span
                    role="img"
                    aria-label="joystick"
                    className="text-[3rem]"
                  >
                    🕹️
                  </span>
                </Link>
              </div>
              <li className="mt-4">
                <Link
                  href="/game"
                  className="text-2xl hover:border-b-[6px] hover:border-red-color"
                >
                  Games
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  href="/about"
                  className="text-2xl hover:border-b-[6px] hover:border-red-color"
                >
                  About
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  href="https://withoutwax.me"
                  className="text-2xl hover:border-b-[6px] hover:border-red-color"
                >
                  to Blog
                  <span role="img" aria-label="joystick" className="ml-2">
                    ↗️
                  </span>
                </Link>
              </li>
            </ul>
            <HighScores />
          </nav>

          <main className="[grid-area:games]">{children}</main>

          <Footer />
        </div>
        <Analytics />
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ""}
        />
      </body>
    </html>
  );
}
