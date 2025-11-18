import { Hero } from "@/components/hero";
import { Introduction } from "@/components/introduction";
import Navbar from "@/components/navbar";
import Slider from "@/components/slider";
import { Features } from "@/components/features";
import { FAQ } from "@/components/faq";

export default function Home() {
  return (
    <div className="w-full pb-5">
      {/* we don't need flex and flex-col because the divs are natuarlly block elements. */}
      <div className="relative h-auto w-full pb-28 bg-linear-to-r from-[#e2eefe] to-[#f8ceba]">
        <div className="pt-0 ss:pt-[23.5px]">
          <Navbar />
        </div>
        <div className="px-6 sm:px-8 md:px-[60px] lg:px-[78.5px] mt-0 min-[600px]:mt-[106px]">
          <Hero />
        </div>
      </div>
      <div className="flex flex-col gap-12 ss:gap-[72px]">
        <div className="relative w-full -mt-[71px]">
          <Introduction />
        </div>
        <Slider />
        <Features />
        <FAQ />
      </div>
    </div>
  );
}
