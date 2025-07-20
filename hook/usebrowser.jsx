"use client";

import { useState, useEffect } from "react";

const useBrowser = () => {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    ) {
      setIsSafari(true);
    }
  }, []);

  return { isSafari };
};

export default useBrowser;
