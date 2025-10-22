import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-8">
        <div className="relative">
          <Image src="/icons/path-l.svg" alt="مسیر" width={335} height={448} />
          <Image
            src="/icons/electric-car-tl.svg"
            alt="ماشین برقی"
            width={57}
            height={58}
            className="absolute top-[40px] left-[90px]"
          />
          <Image
            src="/icons/electric-car-l.svg"
            alt="ماشین برقی"
            width={57}
            height={58}
            className="absolute top-[153px] left-[203px]"
          />
          <Image
            src="/icons/electric-car-bl.svg"
            alt="ماشین برقی"
            width={57}
            height={58}
            className="absolute bottom-[84px] left-[131px]"
          />
        </div>
        <div className="flex flex-col items-center gap-[38.25px]">
          <div className="flex flex-col items-center gap-[18px]">
            <h1 className="text-[#1C64F2] text-[42px] leading-[1.3] font-bold ">
              بهینه‌سازی سرویس حمل و نقل
            </h1>
            <h1 className="text-black text-[42px] leading-[1.3] font-bold">
              صرفه‌جویی در زمان و هزینه
            </h1>
          </div>
          <div className="flex items-center justify-between w-[329px]">
            <Button
              variant="outline"
              className="w-[151px] h-[46px] font-normal rounded-[13px]"
            >
              ورود به سامانه
            </Button>
            <Button className="w-[151px] h-[46px] font-normal rounded-[13px]">
              ثتب‌نام رایگان
            </Button>
          </div>
        </div>
        <div>
          <Image src="/icons/path-r.svg" alt="راه" width={335} height={448} />
          <Image
            src="/icons/electric-car-br.svg"
            alt="ماشین برقی"
            width={57}
            height={58}
            className="absolute bottom-[90px] right-[230px]"
          />
        </div>
      </div>

      <div></div>
    </div>
  );
};
