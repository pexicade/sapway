import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export const Introduction = () => {
  return (
    <div
      className="mx-[88px] h-[486px] bg-[#f4f4f4] flex rounded-3xl flex-1"
      dir="rtl"
    >
      <div className="flex-1 flex items-center justify-center">
        <div className="w-[622px] flex flex-col gap-6">
          <h2 className="font-semibold text-[32px]">معرفی Sapway:</h2>
          <p>
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
          <Button className="w-[135px] h-[46px] text-base font-normal">
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
