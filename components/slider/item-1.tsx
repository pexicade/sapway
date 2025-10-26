import React from "react";

export const Item1 = () => {
  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 right-14 flex flex-col gap-5"
      dir="rtl"
    >
      <h2 className="font-bold text-[clamp(1.563rem,0.582rem+2.616vw,2.938rem)] font-(family-name:--font-peyda)">
        شرکت‌های حمل‌ونقل
      </h2>
      <h3 className="text-[clamp(1rem,-0.159rem+3.092vw,2.625rem)] font-(family-name:--font-yekan-fanum)">
        معرفی به مشتریان هدف و مدیریت ساده
        <br />
        رانندگان و جابجایی‌ها
      </h3>
    </div>
  );
};
