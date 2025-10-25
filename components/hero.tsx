import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Customers } from "./customers";

export const Hero = () => {
  return (
    <div className="flex flex-col gap-12">
      {/* Vertical layout */}
      <div className="flex min-[600]:hidden flex-col items-center gap-11">
        <div>
          {/* Main */}
          <div className="relative flex flex-col items-center gap-2">
            <div className="relative flex flex-col gap-[12.5px]">
              {/* Top Route */}
              <div className="relative -mt-[55px] aspect-400/332  w-[clamp(260px,calc(260px+(140)*((100vw-320px)/(279))),400px)]">
                <Image
                  src="/icons/path-t-1.svg"
                  alt="مسیر"
                  fill
                  // className="h-auto w-[clamp(260px,calc(260px+(140)*((100vw-320px)/(279))),400px)]"
                />
                <div className="absolute top-[32%] right-[16%] w-[14.25%] h-[17.45%]">
                  <Image
                    src="/icons/electric-car-t.svg"
                    alt="ماشین"
                    width={57}
                    height={58}
                    className="object-contain"
                    // className="h-auto w-[clamp(37px,calc(37px+(20)*((100vw-320px)/(279))),57px)]"
                  />
                </div>
              </div>

              {/* Centeral Text */}
              <div
                className="flex flex-col items-center gap-1 text-center"
                dir="rtl"
              >
                <h1
                  className="text-[#1C64F2] whitespace-nowrap text-[clamp(22.4px,calc(22.4px+(6.4*((100vw-320px)/279))),28.8px)] tracking-wide leading-[1.3] font-bold"
                  dir="rtl"
                >
                  بهینه سازی سرویس حمل و نقل،
                </h1>
                <h1
                  className="text-black text-[clamp(22.4px,calc(22.4px+(6.4*((100vw-320px)/279))),28.8px)] tracking-wide leading-[1.3] font-bold"
                  dir="rtl"
                >
                  صرفه جویی در زمان و هزینه
                </h1>
              </div>

              {/* Bottom Route */}
              <div className="relative aspect-400/332 w-[clamp(260px,calc(260px+(140)*((100vw-320px)/(279))),400px)]">
                <Image
                  src="/icons/path-b.svg"
                  alt="مسیر"
                  fill
                  // width={400}
                  // height={400}
                  // className="h-auto w-[clamp(260px,calc(260px+(140)*((100vw-320px)/(279))),400px)]"
                />
                <div className="absolute top-[33%] left-[30%] w-[14.25%] h-[17.45%]">
                  <Image
                    src="/icons/electric-car-b.svg"
                    alt="ماشین"
                    width={57}
                    height={58}
                    className="object-contain"
                    // className="h-auto w-[clamp(37px,calc(37px+(20)*((100vw-320px)/(279))),57px)]"
                  />
                </div>
              </div>
            </div>
            {/* Buttons */}
            <div
              className="flex items-center justify-between max-w-[330px] w-full"
              dir="rtl"
            >
              <Button
                variant="default"
                className="max-h-[46px] w-full max-w-[145px]"
              >
                ثبت‌نام رایگان
              </Button>
              <Button
                variant="outline"
                className="max-h-[46px] w-full max-w-[151px]"
              >
                ورود به سامانه
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal layout */}
      <div className="w-full h-full hidden min-[600px]:flex flex-col items-center justify-center gap-11">
        {/* Main */}
        <div className="relative flex items-center justify-center gap-8">
          {/* Left Route */}
          <div className="relative aspect-335/448">
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
          <div className="relative aspect-335/448">
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
      </div>
      <div>
        <Customers />
      </div>
    </div>
  );
};

// text-[clamp(1.3rem,2.1vw,2.625rem)]
