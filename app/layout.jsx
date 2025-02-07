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
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  const [load, setLoad] = useState(true);
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!load) {
      const footerTimer = setTimeout(() => {
        setShowFooter(true);
      }, 500); // 0.5-second delay for the footer
      return () => clearTimeout(footerTimer);
    }
  }, [load]);

  return (
    <html lang="en" className={raleway.className}>
      <body>
        <Background />
        <Preloader load={load} />
        <div id="scroll">
          <Navbar />
          <ScrollToTop />
          <main>{children}</main>
          {showFooter && <Footer />}
        </div>
      </body>
    </html>
  );
}
