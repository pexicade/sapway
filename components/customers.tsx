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
    <div className="flex items-center justify-center gap-[26px]">
      {customers_icon_name.map((e) => (
        <Image
          key={e[0]}
          src={`/icons/${e[0]}.svg`}
          alt={`آیکون ${e[1]}`}
          width={72}
          height={72}
        />
      ))}
    </div>
  );
};
