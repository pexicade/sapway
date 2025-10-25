import Image from "next/image";
import React from "react";

const customers_icon_name = [
  ["digikala", "دیجی‌کالا"],
  ["irancell", "ایرانسل"],
  ["shahre-lavazem", "سهر لوازم خانگی"],
  ["shahre-farsh", "شهر فرش"],
  ["saraye-irani", "سرای ایرانی"],
  ["charme-mashhad", "چرم مشهد"],
  ["eghamat-24", "اقامت 24"],
];

export const Customers = () => {
  return (
    <div className="flex items-center justify-center gap-x-[clamp(1rem,0.583rem+2.083vw,1.625rem)] gap-y-1 flex-wrap relative">
      {customers_icon_name.map((e) => (
        <Image
          key={e[0]}
          src={`/icons/${e[0]}.svg`}
          alt={`آیکون ${e[1]}`}
          width={48}
          height={48}
          className="w-[clamp(3rem,2.016rem+4.918vw,4.5rem)] aspect-square"
        />
      ))}
    </div>
  );
};
