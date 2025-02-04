"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function ScrollToTop() {
  const pathname = usePathname();
  
  useEffect(() => {
    let mounted = true;
    
    if (mounted) {
      window.scrollTo(0, 0);
    }

    return () => {
      mounted = false;
    };
  }, [pathname]);

  return null;
}
export default ScrollToTop;