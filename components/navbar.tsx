import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <nav className="flex items-center justify-between bg-white rounded-[100px] w-[1248px] h-[78px]">
        <div className="ml-6 my-[22px] flex items-center gap-3">
          <Button variant="outline" className="font-normal">
            ورود به سامانه
          </Button>
          <Button variant="default" className="font-normal">
            ثبت‌نام رایگان
          </Button>
        </div>
        <div className="flex items-center gap-4 mr-6 my-[14.5px]">
          <Link href="#" className="my-[14px]">
            شرکت‌های حمل‌ونقل
          </Link>
          <Link href="#" className="my-[14px]">
            تماس با ما
          </Link>
          <Link href="#" className="my-[14px]">
            سؤالات متداول
          </Link>
          <Link href="#" className="my-[14px]">
            آموزش
          </Link>
          <Link href="#" className="my-[14px]">
            ویژگی‌ها
          </Link>
          <Link href="#">
            <Image
              src="/icon.svg"
              alt="لوگوی آمار پیشرو"
              width={49}
              height={49}
            />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
