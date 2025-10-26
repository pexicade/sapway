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
      console.log({ width: windowWidth });

      if (width > 600 && windowSmallness === "small") {
        setWindowSmallness("big");
      }

      if (width <= 600 && windowSmallness === "big") {
        setWindowSmallness("small");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
  }, [windowSmallness, windowWidth]);

  return { windowSmallness, windowWidth };
};
