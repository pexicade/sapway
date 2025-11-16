"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

interface Icon {
  icon: string;
  text: string;
}

interface FeatureIcons {
  name: string;
  icons: Icon[];
}

interface Feature {
  name: string;
  btnText: string;
}

type Category =
  | "common"
  | "clients"
  | "common-carriers"
  | "passengers"
  | "drivers";

function getIconPath(category: Category, iconName: string) {
  return `/icons/features/${category}/${iconName}.svg`;
}

const features: Feature[] = [
  {
    name: "clients",
    btnText: "خدمات‌گیرندگان",
  },
  {
    name: "common-carriers",
    btnText: "شرکت‌های حمل‌ونقل",
  },
  {
    name: "passengers",
    btnText: "مسافران",
  },
  {
    name: "drivers",
    btnText: "رانندگان",
  },
];

const featureIcons: FeatureIcons[] = [
  {
    name: "clients",
    icons: [
      {
        icon: getIconPath("clients", "lightbulb-on"),
        text: "مدیریت هوشمند سرویس‌ها",
      },
      {
        icon: getIconPath("clients", "location-pin-2"),
        text: "ایستگاه‌های بهینه",
      },
      {
        icon: getIconPath("common", "car"),
        text: "پیشنهاد خودرو",
      },
      {
        icon: getIconPath("common", "flag"),
        text: "گزارش‌دهی آنلاین",
      },
      {
        icon: getIconPath("clients", "truck-check"),
        text: "انتخاب آسان شرکت حمل‌ونقل",
      },
    ],
  },
  {
    name: "common-carriers",
    icons: [
      {
        icon: getIconPath("common-carriers", "badge"),
        text: "معرفی به مشتری هدف",
      },
      {
        icon: getIconPath("common", "flag"),
        text: "گزارش‌دهی آنلاین",
      },
      {
        icon: getIconPath("common", "car"),
        text: "مدیریت رانندگان",
      },
      {
        icon: getIconPath("common-carriers", "sign-post"),
        text: "کنترل آسان جابه‌جایی",
      },
    ],
  },
  {
    name: "passengers",
    icons: [
      {
        icon: getIconPath("passengers", "shield-check"),
        text: "امنیت بالا",
      },
      {
        icon: getIconPath("passengers", "binoculars"),
        text: "پیگیری لحظه‌ای",
      },
      {
        icon: getIconPath("common", "comment-dots"),
        text: "ثبت نظر",
      },
    ],
  },
  {
    name: "drivers",
    icons: [
      {
        icon: getIconPath("drivers", "route-destination"),
        text: "مسیریابی هوشمند",
      },
      {
        icon: getIconPath("drivers", "trolly-bag"),
        text: "لیست مسافران",
      },
      {
        icon: getIconPath("common", "comment-dots"),
        text: "ثبت نظر",
      },
    ],
  },
];

export const Features = () => {
  const [activeFeature, setActiveFeature] = useState("clients");

  return (
    <div className="bg-linear-to-r from-[#e2eefe] to-[#f8ceba] flex flex-col items-center gap-0 justify-center h-[420px]">
      <h2
        className="mt-16 text-[32px] font-bold font-(family-name:--font-yekan-fanum)"
        dir="rtl"
      >
        ویژگی‌ها
      </h2>
      <div
        className="mt-[17px] flex flex-col gap-10 items-center justify-center"
        dir="rtl"
      >
        <div className="flex flex-wrap items-center justify-center gap-3 w-full">
          {features.map((feature) => (
            <Button
              key={feature.name}
              // className={`w-[251px] h-[45px] transition-colors duration-500 font-normal text-[16px] font-(family-name:--font-yekan-fanum)`}
              className="w-[251px] h-[45px] px-[clamp(0.75rem,1vw,1.25rem)] py-[clamp(0.5rem,0.8vw,1rem)] text-[clamp(0.9rem,1.2vw,1.3rem)]
                transition-colors duration-500 font-normal font-(family-name:--font-yekan-fanum)
              "
              variant={`${
                activeFeature === feature.name ? "default" : "outline"
              }`}
              onClick={() => {
                setActiveFeature(feature.name);
              }}
            >
              {feature.btnText}
            </Button>
          ))}
        </div>
        <div>
          {featureIcons.map((featureIcon) => (
            <div key={featureIcon.name} className="flex">
              {featureIcon.icons.map((icon, index) => (
                <div
                  key={index}
                  className={`${
                    activeFeature === featureIcon.name ? "flex" : "hidden"
                  } flex-col items-center justify-center gap-3 w-48 h-[136px]`}
                >
                  <Image
                    src={icon.icon}
                    alt={`آیکون ${icon.text}`}
                    width={98}
                    height={98}
                  />
                  <span className="text-center"> {icon.text}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
