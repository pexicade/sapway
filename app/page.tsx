import { Hero } from "@/components/hero";
import { Introduction } from "@/components/introduction";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="w-full">
      <div className="h-[887px] w-full bg-[url(/images/gradient-bg.png)] bg-cover">
        <div className="pt-0 ss:pt-[23.5px]">
          <Navbar />
        </div>
        <div className="px-0px-[60px] sm:px-[69] md:px-[74px] lg:px-[88px] mt-0 min-[600px]:mt-[106px]">
          <Hero />
        </div>
      </div>
      <div>{/* <Introduction /> */}</div>
    </div>
  );
}
