"use client";

import { Slide, SliderRoot } from "@/components/slider/slider-root";
import { Item1 } from "@/components/slider/item-1";
import { Item2 } from "@/components/slider/item-2";
import { Item3 } from "@/components/slider/item-3";
import { useWindowSize } from "@/hooks/window-size";

const slides: Slide[] = [
  {
    url: {
      big: "/images/slider/1.png",
      small: "/images/slider/1-small.png",
    },
    index: 0,
  },
  {
    url: {
      big: "/images/slider/2.png",
      small: "/images/slider/2-small.png",
    },
    index: 1,
  },
  {
    url: {
      big: "/images/slider/3.png",
      small: "/images/slider/3-small.png",
    },
    index: 2,
  },
];

const Slider = () => {
  const { windowSmallness } = useWindowSize();

  const item1 = <Item1 smallness={windowSmallness} />;
  const item2 = <Item2 smallness={windowSmallness} />;
  const item3 = <Item3 smallness={windowSmallness} />;

  const items = [item1, item2, item3];

  const newSlides = slides.map((slide, index) => {
    return { ...slide, children: items[index] };
  });

  return <SliderRoot slides={newSlides} />;
};

export default Slider;
