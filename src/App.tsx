import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HighScores from "./components/HighScores";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import GameList from "./pages/GameList";
import GameDetail from "./pages/GameDetail";
import AnalyticsGA from "./components/Analytics";
import { Analytics } from "@vercel/analytics";

// import { Analytics } from "@vercel/analytics/react"; // Analytics might need different package or setup for Vite if available, or removal if Next specific.
// The package @vercel/analytics/next is for Next.js. Vercel analytics for CRA exists but user asked to remove Next.js. I'll leave it out for now or use the generic one if applicable, but better to comment out to avoid errors.
// User also asked for Google Analytics. @next/third-parties is Next specific.
// We need to implement GA manually or use a react-ga library. I'll stick to basic router setup first.

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[350px_auto] grid-rows-[1fr_auto] min-h-screen [grid-template-areas:'nav_games'_'nav_footer']">
      <nav className="[grid-area:nav] flex flex-col p-10 gap-8">
        <ul className="list-none">
          <div className="flex items-center">
            <Link to="/">
              <span role="img" aria-label="joystick" className="text-[3rem]">
                🕹️
              </span>
            </Link>
          </div>
          <li className="mt-4">
            <Link
              to="/game"
              className="text-2xl hover:border-b-[6px] hover:border-red-color"
            >
              Games
            </Link>
          </li>
          <li className="mt-4">
            <Link
              to="/about"
              className="text-2xl hover:border-b-[6px] hover:border-red-color"
            >
              About
            </Link>
          </li>
          <li className="mt-4">
            <Link
              to="https://withoutwax.me"
              className="text-2xl hover:border-b-[6px] hover:border-red-color"
              target="_blank"
              rel="noopener noreferrer"
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
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnalyticsGA />
      <Analytics />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/game" element={<GameList />} />
          <Route path="/game/:gameId" element={<GameDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
