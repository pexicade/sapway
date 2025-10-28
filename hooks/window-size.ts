import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [windowSmallness, setWindowSmallness] = useState<"big" | "small">(
    "big"
  );
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setWindowSmallness(width > 600 ? "big" : "small");
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { windowSmallness, windowWidth };
};
