"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export interface Slide {
  index: number;
  url: string;
  children?: React.ReactNode;
}

interface Props {
  slides: Slide[];
}

export const SliderRoot = ({ slides }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [parentWidth, setParentWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // For swipe tracking
  const startX = useRef<number | null>(null);
  const deltaX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setParentWidth(containerRef.current.offsetWidth);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle swipe start
  const handlePointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    isDragging.current = true;
  };

  // Handle swipe move
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || startX.current === null) return;
    deltaX.current = e.clientX - startX.current;
  };

  // Handle swipe end
  const handlePointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const threshold = 12; // resulted from trial and error

    if (deltaX.current > threshold && currentIndex > 0) {
      // Swiped right → go to previous
      setCurrentIndex(currentIndex - 1);
    } else if (
      deltaX.current < -threshold &&
      currentIndex < slides.length - 1
    ) {
      // Swiped left → go to next
      setCurrentIndex(currentIndex + 1);
    }

    // Reset
    startX.current = null;
    deltaX.current = 0;
  };

  return (
    <div
      ref={containerRef}
      className="mx-6 sm:mx-8 md:mx-[60px] lg:mx-[78.05px] flex flex-col gap-4 select-none"
    >
      <div className="relative h-full flex items-center justify-center">
        <div
          className="h-full overflow-x-hidden"
          style={{ width: parentWidth }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          <div
            className="flex h-full items-center justify-center transition-transform duration-600 ease-in-out overflow-hidden"
            style={{
              width: parentWidth * slides.length,
              transform: `translateX(${-(currentIndex * parentWidth)}px)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={`${slide.url}_${index}`}
                className="relative aspect-1285/368 w-full rounded-xl"
              >
                <Image
                  src={slide.url}
                  alt="alt"
                  fill
                  className="object-contain pointer-events-none"
                />
                {slide.children}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-[9px]">
        {slides.map((slide) => (
          <div
            key={`${slide.url}_${slide.index}`}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
              currentIndex === slide.index ? "bg-[#386bf6]" : "bg-[#d9d9d9]"
            }`}
            onClick={() => setCurrentIndex(slide.index)}
          />
        ))}
      </div>
    </div>
  );
};

/*
Slider Structure Overview:
--------------------------
<div> (outer viewport)
  <div> (inner track)
    <div> (slide)
      <Image fill object-contain />
    </div>
  </div>
</div>

Explanation:
1. Outer viewport:
   - width = parentWidth → defines how much of the track is visible at once (usually one slide)
   - overflow-x-hidden → hides slides that are outside the current view

2. Inner track:
   - display: flex → arranges slides horizontally
   - width = parentWidth * slides.length → total width for all slides in a row
   - transform: translateX(-currentIndex * parentWidth) → moves the entire track left/right to show the current slide
   - Optional: add a transition for smooth sliding (e.g., "transition-transform duration-500 ease-in-out")

3. Slide container:
   - relative → required so that the <Image fill> works correctly
   - aspect-[1285/368] → enforces proportional height based on width
   - w-full → makes each slide span the full width of the viewport
   - rounded-xl → purely visual

4. <Image> (Next.js):
   - fill → expands to fill the parent container (requires the parent to be positioned)
   - object-contain → scales image up or down proportionally to fit within the container
   - Combined with the aspect ratio, this ensures the image both upscales and downscales responsively without distortion.

Result:
- All slides sit horizontally on a long track.
- The track shifts left by one slide’s width each time currentIndex changes.
- Only one full slide is visible at a time inside the viewport.
*/
