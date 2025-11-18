import React from "react";
import { Button } from "./ui/button";

export const FinalCTA = () => {
  return (
    <div
      className="bg-linear-to-r from-[#e2eefe] to-[#f8ceba] flex flex-col items-center gap-6 justify-center h-[314px] font-(family-name:--font-yekan-fanum) "
      dir="rtl"
    >
      <h2 className="font-bold text-[42px] w-[832px] text-center">
        با Sapway؛ رانندگی هوشمندتر، سفر ایمن‌تر و مدیریت آسان‌تر.
      </h2>
      <Button className="font-normal h-[47px] w-[376px] rounded-[12px]">
        ثبت‌نام رایگان
      </Button>
    </div>
  );
};
