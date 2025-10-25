import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export const Introduction = () => {
  return (
    <div
      className="mx-6 sm:mx-10 md:mx-[60px] lg:mx-[88px] h-[486px] bg-[#f4f4f4] flex rounded-3xl"
      dir="rtl"
    >
      <div className="flex-1 flex items-center justify-center min-w-0">
        <div className="w-full mx-6 min-h-[334px] flex flex-col gap-3">
          <h2 className="font-semibold ss:text-[clamp(1.063rem,0.394rem+1.784vw,2rem)]">
            معرفی Sapway:
          </h2>
          <p className="ss:text-[clamp(0.875rem,0.607rem+0.713vw,1.25rem)]">
            سپوی یک سامانه هوشمند مدیریت سرویس‌های حمل‌ونقل است که با تکیه بر
            علم داده و هوش مصنوعی، جابجایی افراد در کارخانه ها، مدارس و
            سازمان‌ها را بهینه می‌کند. این سامانه با خوشه‌بندی هوشمند افراد،
            تعیین ایستگاه‌های بهینه و پیشنهاد خودرو مناسب، به کاهش هزینه‌ها و
            صرفه‌جویی در زمان کمک می‌کند. از سوی دیگر، شرکت‌های حمل‌ونقل
            می‌توانند ناوگان و تعرفه‌های خود را ثبت کنند تا خدمات‌گیرندگان
            بهترین انتخاب را داشته باشند. به همراه اپلیکیشن موبایل، همه‌ی
            مدیران، رانندگان و مسافران تجربه‌ای یکپارچه، ساده و کارآمد خواهند
            داشت.
          </p>
          <Button
            className="w-[clamp(5.938rem,4.154rem+4.756vw,8.438rem)] h-[clamp(2.019rem,1.408rem+1.629vw,2.875rem)]
            text-[clamp(0.75rem,0.572rem+0.476vw,1rem)] font-normal"
          >
            دموی رایگان
          </Button>
        </div>
      </div>
      <div className="flex-1 bg-[#d9d9d9] flex items-center justify-center rounded-3xl">
        <Image src="/icons/play-circle.svg" alt="پخش" width={90} height={90} />
      </div>
    </div>
  );
};
