// app/page.jsx
"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import Preloader from "./components/PreLoader";

export default function Home() {
  useEffect(() => {
    const timer = setTimeout(() => {
      redirect("/home");
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return <Preloader load={true} />;
}