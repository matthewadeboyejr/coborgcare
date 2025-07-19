"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// Configure NProgress
NProgress.configure({
  showSpinner: false,
  minimum: 0.1,
  easing: "ease",
  speed: 500,
  trickleSpeed: 200,
});

const Progress = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Start progress bar
    NProgress.start();

    // Complete progress bar after a short delay
    const timer = setTimeout(() => {
      NProgress.done();
    }, 100);

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [pathname]);

  return null; // NProgress renders its own UI
};

export default Progress;
