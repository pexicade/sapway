import React from "react";

interface Props {
  smallness: "big" | "small";
}

export const Item2 = ({ smallness }: Props) => {
  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 flex flex-col gap-5 ${
        smallness === "big"
          ? "right-[clamp(2.188rem,0.248rem+5.172vw,4.906rem)] "
          : "left-1/2 -translate-x-1/2 w-full flex flex-col items-center text-center"
      }"`}
      dir="rtl"
    >
      {/*
        NOTE: I don't know why but in the condition above when smallness equals "big",
        the className should end with a space.
      */}
      <div className="flex flex-col items-center gap-3 ss:hidden text-white">
        <h2 className="text-[clamp(1.653rem,-0.732rem+9.786vw,2.938rem)] font-bold font-(family-name:--font-peyda)">
          حمل‌ونقل هوشمند
        </h2>
        <h2 className="text-[clamp(1.438rem,0.509rem+3.81vw,1.938rem)] font-(family-name:--font-yekan-fanum)">
          با علم داده و هوش مصنوعی
        </h2>
      </div>

      <div className="hidden ss:block w-full">
        <h2 className="font-bold text-[clamp(1.5rem,0.251rem+3.329vw,3.25rem)] font-(family-name:--font-yekan-fanum) text-white">
          حمل‌ونقل هوشمند
          <br />
          با علم داده و هوش مصنوعی
        </h2>
      </div>
    </div>
  );
};

// text-52
// right-[78.5px]
