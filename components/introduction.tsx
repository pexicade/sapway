import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export const Introduction = () => {
  return (
    <div dir="rtl">
      <div className="flex ss:hidden flex-col rounded-xl mx-6">
        <div className="w-full bg-[#d9d9d9] flex items-center justify-center rounded-t-2xl  min-h-[243px]">
          <Image
            src="/icons/play-circle.svg"
            alt="پخش"
            width={90}
            height={90}
          />
        </div>
        <div className="flex flex-col items-center gap-2.5 bg-[#f4f4f4] rounded-b-2xl">
          <h2 className="font-semibold text-[20px] mt-2.5">معرفی Sapway:</h2>
          <p className="text-[16px] px-4 pb-4">
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
        </div>
      </div>
      <div className="mx-6 sm:mx-8 md:mx-[60px] lg:mx-[78.05px] h-[486px] bg-[#f4f4f4] hidden ss:flex rounded-[34px]  ">
        <div className="flex-1 flex items-center justify-center min-w-0">
          <div className="w-full mx-6 min-h-[334px] flex flex-col gap-[clamp(1rem,0.643rem+0.951vw,1.5rem)]">
            <h2 className="font-semibold ss:text-[clamp(1.063rem,0.394rem+1.784vw,2rem)]">
              معرفی Sapway:
            </h2>
            <p className="text-[clamp(0.875rem,0.607rem+0.713vw,1.25rem)]">
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
        <div className="flex-1 bg-[#d9d9d9] flex items-center justify-center rounded-[34px] ">
          <Image
            src="/icons/play-circle.svg"
            alt="پخش"
            width={90}
            height={90}
          />
        </div>
      </div>
    </div>
  );
};
