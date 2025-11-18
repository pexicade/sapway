import React from "react";
import { Button } from "./ui/button";

export const FinalCTA = () => {
  return (
    <div
      dir="rtl"
      className="
        bg-linear-to-r from-[#e2eefe] to-[#f8ceba]
        flex flex-col items-center justify-center
        gap-6
        px-6 py-16
        md:py-20
        font-(family-name:--font-yekan-fanum)
      "
    >
      <h2
        className="
          font-bold
          text-center
          text-2xl sm:text-3xl md:text-4xl lg:text-[42px]
          max-w-[90%] md:max-w-3xl lg:max-w-4xl
        "
      >
        با Sapway؛ رانندگی هوشمندتر، سفر ایمن‌تر و مدیریت آسان‌تر.
      </h2>

      <Button
        className="
          font-normal
          h-[47px]
          px-10
          rounded-[12px]
          text-base
          w-full max-w-[300px]
          md:max-w-[340px]
          lg:w-[376px]    
        "
      >
        ثبت‌نام رایگان
      </Button>
    </div>
  );
};
