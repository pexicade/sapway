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
    <div
      className="
        bg-linear-to-r from-[#e2eefe] to-[#f8ceba]
        flex flex-col items-center justify-center
        w-full
        px-6 py-16
        md:py-20
      "
    >
      <h2
        dir="rtl"
        className="
          text-[28px] sm:text-[32px] font-bold
          font-(family-name:--font-yekan-fanum)
          text-center
        "
      >
        ویژگی‌ها
      </h2>

      {/* Buttons */}
      <div
        dir="rtl"
        className="mt-10 flex flex-wrap items-center justify-center gap-3 w-full max-w-4xl"
      >
        {features.map((feature) => (
          <Button
            key={feature.name}
            onClick={() => setActiveFeature(feature.name)}
            variant={activeFeature === feature.name ? "default" : "outline"}
            className="
              h-[45px]
              px-6
              w-full sm:w-auto
              text-[15px] sm:text-[16px]
              font-normal
              transition-colors duration-500
              font-(family-name:--font-yekan-fanum)
            "
          >
            {feature.btnText}
          </Button>
        ))}
      </div>

      {/* Icons */}
      <div className="mt-12 w-full flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-10">
          {featureIcons
            .find((f) => f.name === activeFeature)
            ?.icons.map((icon, index) => (
              <div
                key={index}
                className="
                  flex flex-col items-center justify-center
                  gap-3
                  w-[120px] sm:w-[140px] md:w-40
                  text-center
                "
              >
                <Image
                  src={icon.icon}
                  alt={`آیکون ${icon.text}`}
                  width={98}
                  height={98}
                  className="w-[60px] sm:w-[70px] md:w-[90px] h-auto"
                />
                <span className="text-[13px] sm:text-[14px] md:text-[15px] leading-6">
                  {icon.text}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
