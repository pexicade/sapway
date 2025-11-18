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
  { name: "clients", btnText: "خدمات‌گیرندگان" },
  { name: "common-carriers", btnText: "شرکت‌های حمل‌ونقل" },
  { name: "passengers", btnText: "مسافران" },
  { name: "drivers", btnText: "رانندگان" },
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
      { icon: getIconPath("common", "car"), text: "پیشنهاد خودرو" },
      { icon: getIconPath("common", "flag"), text: "گزارش‌دهی آنلاین" },
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
      { icon: getIconPath("common", "flag"), text: "گزارش‌دهی آنلاین" },
      { icon: getIconPath("common", "car"), text: "مدیریت رانندگان" },
      {
        icon: getIconPath("common-carriers", "sign-post"),
        text: "کنترل آسان جابه‌جایی",
      },
    ],
  },
  {
    name: "passengers",
    icons: [
      { icon: getIconPath("passengers", "shield-check"), text: "امنیت بالا" },
      { icon: getIconPath("passengers", "binoculars"), text: "پیگیری لحظه‌ای" },
      { icon: getIconPath("common", "comment-dots"), text: "ثبت نظر" },
    ],
  },
  {
    name: "drivers",
    icons: [
      {
        icon: getIconPath("drivers", "route-destination"),
        text: "مسیریابی هوشمند",
      },
      { icon: getIconPath("drivers", "trolly-bag"), text: "لیست مسافران" },
      { icon: getIconPath("common", "comment-dots"), text: "ثبت نظر" },
    ],
  },
];
export const Features = () => {
  const [activeFeature, setActiveFeature] = useState("clients");

  return (
    <div className="bg-linear-to-r from-[#e2eefe] to-[#f8ceba] flex flex-col items-center gap-0 justify-center min-h-[420px]">
      <h2
        className="mt-12 sm:mt-10 lg:mt-0   text-[32px] md:text-[32px] font-bold font-(family-name:--font-yekan-fanum)"
        dir="rtl"
      >
        ویژگی‌ها
      </h2>

      <div
        className="mt-[17px] flex flex-col gap-10 items-center justify-center w-full"
        dir="rtl"
      >
        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 w-full px-4">
          {features.map((feature) => (
            <Button
              key={feature.name}
              className="
                w-[251px] h-[45px]
                transition-colors duration-500 
                font-normal text-[16px] 
                font-(family-name:--font-yekan-fanum)
              "
              variant={activeFeature === feature.name ? "default" : "outline"}
              onClick={() => setActiveFeature(feature.name)}
            >
              {feature.btnText}
            </Button>
          ))}
        </div>

        {/* Icons */}
        <div className="mt-12 w-full flex justify-center mb-10 sm:mb-7 lg:mb-0">
          {featureIcons.map((featureIcon) => (
            <div
              key={featureIcon.name}
              className={`${
                activeFeature === featureIcon.name ? "flex" : "hidden"
              } 
                 flex-wrap justify-center
                 gap-x-4 gap-y-6 sm:gap-x-6 sm:gap-y-8 md:gap-x-8 md:gap-y-10 lg:gap-x-12 lg:gap-y-12
                 w-full max-w-[1200px]`}
            >
              {featureIcon.icons.map((icon, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-2"
                  style={{ flex: "0 1 auto" }}
                >
                  <div
                    className="
              flex items-center justify-center
              w-[90px] h-[90px] sm:w-20 sm:h-20 md:w-[98px] md:h-[98px] lg:w-[110px] lg:h-[110px]
              max-w-full
            "
                  >
                    <Image
                      src={icon.icon}
                      alt={icon.text}
                      width={110}
                      height={110}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[13px] sm:text-[14px] md:text-[15px] text-center leading-6">
                    {icon.text}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
