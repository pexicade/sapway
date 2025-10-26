import React from "react";

interface Props {
  smallness: "big" | "small";
}

export const Item1 = ({ smallness }: Props) => {
  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 flex flex-col ss:gap-5 ${
        smallness === "big"
          ? "right-[clamp(1.75rem,0.5rem+3.333vw,3.5rem)]"
          : "left-1/2 -translate-x-1/2 gap-2 text-center w-full"
      }`}
      dir="rtl"
    >
      <h2
        className={`font-bold font-(family-name:--font-peyda) ${
          smallness === "big"
            ? "text-[clamp(1.438rem,0.366rem+2.857vw,2.938rem)]"
            : "text-[clamp(1.341rem,-0.813rem+8.833vw,2.5rem)]"
        }`}
      >
        شرکت‌های حمل‌ونقل
      </h2>
      <h3
        className={`font-(family-name:--font-yekan-fanum) ${
          smallness === "big"
            ? "text-[clamp(1rem,-0.159rem+3.092vw,2.625rem)]"
            : "text-[clamp(1.25rem,0.321rem+3.81vw,1.75rem)]"
        }`}
      >
        معرفی به مشتریان هدف و مدیریت ساده
        {smallness === "big" && <br />}
        {" رانندگان و جابجایی‌ها"}
      </h3>
    </div>
  );
};
