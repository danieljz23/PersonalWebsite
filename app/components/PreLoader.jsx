"use client";

import React, { useEffect, useState } from "react";

function PreLoader({ load }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!load) {
      setTimeout(() => setIsVisible(false), 600); // Delay hiding after fade-out
    }
  }, [load]);

  return (
    isVisible && (
      <div
        id="preloader"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 999999,
          backgroundColor: "#000015", // Matching your background color
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: load ? 1 : 0,
          transition: "opacity 0.6s ease-in-out", // Smooth fade-out effect
          pointerEvents: load ? "auto" : "none", // Allows interaction after fade
        }}
      >
        <div className="loading-animation">
          <div className="spinner"></div>
          <div className="spinner"></div>
          <div className="spinner"></div>
        </div>
      </div>
    )
  );
}

export default PreLoader;
