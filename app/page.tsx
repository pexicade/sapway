import { Hero } from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="w-full">
      <div className="h-[887px] w-full bg-[url(/images/gradient-bg.png)] bg-cover">
        <div className=" pt-[23.5px]">
          <Navbar />
        </div>
        <div className="px-[88px] mt-[106px]">
          <Hero />
        </div>
      </div>
      <div>hello</div>
    </div>
  );
}
