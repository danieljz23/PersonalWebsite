"use client";

import React, { useEffect, useState } from "react";

function PreLoader({ load }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!load) {
      const timer = setTimeout(() => setIsVisible(false), 800);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
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
          backgroundColor: "#000015",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: load ? 1 : 0,
          transition: "opacity 0.8s ease-in-out",
          pointerEvents: load ? "auto" : "none",
        }}
      >
        <div className="loading-container">
          <div className="circuit">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="trace"></span>
          </div>
          <p className="loading-text">Booting System...</p>
        </div>

        <style>
          {`
          .loading-container {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .circuit {
            display: flex;
            gap: 20px;
            position: relative;
          }

          .dot {
            width: 24px;
            height: 24px;
            background-color: #ff9100;
            border-radius: 50%;
            box-shadow: 0 0 15px #ff9100, 0 0 30px rgba(255, 145, 0, 0.6);
            animation: blink 1.5s infinite ease-in-out alternate;
          }

          .dot:nth-child(2) { animation-delay: 0.3s; }
          .dot:nth-child(3) { animation-delay: 0.6s; }

          .trace {
            position: absolute;
            top: 10px;
            left: 0;
            width: 100px;
            height: 5px;
            background: linear-gradient(90deg, #ff9100, transparent);
            animation: move-trace 1.5s infinite linear;
          }

          @keyframes blink {
            from { transform: scale(1); opacity: 1; }
            to { transform: scale(1.4); opacity: 0.5; }
          }

          @keyframes move-trace {
            0% { left: 0; opacity: 1; }
            100% { left: 80px; opacity: 0; }
          }

          .loading-text {
            color: #ff9100;
            font-family: 'Courier New', monospace;
            font-size: 28px;
            font-weight: bold;
            margin-top: 15px;
            text-shadow: 0 0 10px #ff9100, 0 0 20px rgba(255, 145, 0, 0.6);
            letter-spacing: 2px;
          }
        `}
        </style>
      </div>
    )
  );
}

export default PreLoader;
