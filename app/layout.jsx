"use client";

import { useState, useEffect } from "react";
import { Raleway } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/PreLoader";
import Background from "./components/Background";
import "./styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const raleway = Raleway({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" className={raleway.className}>
      <body>
        <Background />
        <Preloader load={load} />
        <div id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}