import React from "react";

interface Props {
  smallness: "big" | "small";
}

export const Item3 = ({ smallness }: Props) => {
  return (
    <div
      className={`
        absolute top-1/2 -translate-y-1/2 flex flex-col gap-5 ${
          smallness === "big"
            ? "right-[clamp(1.75rem,0.5rem+3.333vw,3.5rem)] "
            : "left-1/2 -translate-x-1/2 w-full items-center"
        }`}
      dir="rtl"
    >
      <h2
        className={`
        font-bold font-(family-name:--font-peyda)
        ${
          smallness === "big"
            ? " text-[clamp(1.438rem,0.366rem+2.857vw,2.938rem)] "
            : "text-[clamp(1.375rem,0.214rem+4.762vw,2rem)]"
        }`}
      >
        کارخانه ها، مدارس ، سازمان ها
      </h2>
      <h3
        className={`
        font-(family-name:--font-yekan-fanum) ${
          smallness === "big"
            ? "text-[clamp(1.063rem,-0.054rem+2.976vw,2.625rem)] "
            : "text-[clamp(1.25rem,0.438rem+3.333vw,1.688rem)] p-3 text-center"
        }`}
      >
        از خوشه‌بندی افراد تا انتخاب بهترین
        {smallness === "big" && <br />}
        {" ناوگان؛ همه‌چیز در یک داشبورد هوشمند"}
      </h3>
    </div>
  );
};
