import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../scss/main.scss"; // Import global styles
import HighScores from "../components/HighScores";
import Footer from "../components/Footer";
import logo from "../assets/joystick.png";

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
        <div className="App">
          <header className="App-header">
            <div className="App-logo-container">
              <Link href="/">
                <Image src={logo} className="App-logo" alt="logo" priority />
              </Link>
              <a className="back-button" href="https://www.withoutwax.me">
                <span role="img" aria-label="back-button">
                  ◀️
                </span>{" "}
                to Blog
              </a>
            </div>
            <nav className="App-nav">
              <ul>
                <li>
                  <Link href="/game">
                    Games
                    <span role="img" aria-label="joystick">
                      🕹
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </nav>
            <HighScores />
          </header>

          <main>{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
