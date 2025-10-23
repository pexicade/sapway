import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Customers } from "./customers";

export const Hero = () => {
  return (
    <>
      {/* Horizontal layout */}
      <div className="w-full h-full hidden min-[600px]:flex flex-col items-center justify-center gap-11">
        {/* Main */}
        <div className="relative flex items-center justify-center gap-8">
          {/* Left Route */}
          <div className="relative aspect-335/448 max-[390px]:w-[260px]">
            <Image
              src="/icons/path-l.svg"
              alt="مسیر"
              width={335}
              height={448}
            />

            <div className="absolute top-[8.9%] left-[26.8%] w-[17%] h-[13%]">
              <Image
                src="/icons/electric-car-tl.svg"
                alt="ماشین برقی"
                width={57}
                height={58}
                className="object-contain"
              />
            </div>

            <div className="absolute top-[34.15%] left-[60%] w-[17%] h-[13%]">
              <Image
                src="/icons/electric-car-l.svg"
                alt="ماشین برقی"
                width={57}
                height={58}
                className="object-contain"
              />
            </div>

            <div className="absolute bottom-[18.75%] left-[39.1%] w-[17%] h-[13%]">
              <Image
                src="/icons/electric-car-bl.svg"
                alt="ماشین برقی"
                width={57}
                height={58}
                className="object-contain"
              />
            </div>
          </div>

          {/* Center Text */}
          <div className="flex flex-col items-center gap-5 md:gap-7 xl:gap-[38.25px]">
            <div className="flex flex-col items-center gap-3 xs:gap-[18px] text-center">
              <h1
                className="text-[#1C64F2] whitespace-nowrap text-[clamp(1.1rem,-1.097rem+4.136vw,2.625rem)] tracking-wide leading-[1.3] font-bold"
                dir="rtl"
              >
                بهینه سازی سرویس حمل و نقل،
              </h1>
              <h1
                className="text-black text-[clamp(1.1rem,-1.097rem+4.136vw,2.625rem)] tracking-wide leading-[1.3] font-bold"
                dir="rtl"
              >
                صرفه جویی در زمان و هزینه
              </h1>
            </div>
            <div className="flex items-center justify-evenly xl:justify-between w-[clamp(235px,29vw,335px)]">
              <Button
                variant="outline"
                className="
                w-[90px] md:w-auto xl:w-[151px] max-w-[151px] h-[30px] md:h-full
                lg:h-[46px] font-normal rounded-[13px] text-[clamp(0.7rem,0.8vw,1.02rem)]
              "
              >
                ورود به سامانه
              </Button>
              <Button
                className="
                w-[90px] md:w-auto xl:w-[151px] max-w-[151px] h-[30px] md:h-full
                lg:h-[46px] font-normal rounded-[13px] text-[clamp(0.7rem,0.81vw,1.02rem)]"
              >
                ثبت‌نام رایگان
              </Button>
            </div>
          </div>
          <div className="relative aspect-335/448 max-[390px]:w-[260px]">
            <Image src="/icons/path-r.svg" alt="راه" width={335} height={448} />
            <div className="absolute bottom-[12%] right-[31%] w-[17%] h-[13%] ">
              <Image
                src="/icons/electric-car-br.svg"
                alt="ماشین برقی"
                width={57}
                height={58}
                className="object-contain"
              />
            </div>
          </div>
        </div>
        {/* <div>
        <Customers />
      </div> */}
      </div>
    </>
  );
};

// text-[clamp(1.3rem,2.1vw,2.625rem)]
