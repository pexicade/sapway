import { Slide, SliderRoot } from "@/components/slider/slider-root";
import { Item1 } from "@/components/slider/item-1";
import { Item2 } from "@/components/slider/item-2";
import { Item3 } from "@/components/slider/item-3";

const slides: Slide[] = [
  {
    url: "/images/slider/1.png",
    index: 0,
    children: <Item1 />,
  },
  {
    url: "/images/slider/2.png",
    index: 1,
    children: <Item2 />,
  },
  {
    url: "/images/slider/3.png",
    index: 2,
    children: <Item3 />,
  },
];

const Slider = () => {
  return <SliderRoot slides={slides} />;
};

export default Slider;
