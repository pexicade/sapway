import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

interface navItem {
  href: string;
  name: string;
}

const navItems: navItem[] = [
  {
    href: "#",
    name: "ویژگی‌ها",
  },
  {
    href: "#",
    name: "آموزش",
  },
  {
    href: "#",
    name: "سؤالات متداول",
  },
  {
    href: "#",
    name: "تماس با ما",
  },
  {
    href: "#",
    name: "شرکت‌های حمل‌ونقل",
  },
];

const Navbar = () => {
  return (
    <div className="flex items-center justify-center">
      <nav
        className="flex ss:hidden items-center justify-between bg-white w-full h-[65px]"
        dir="rtl"
        aria-label="Navigation bar"
      >
        <div className="mr-6 my-2">
          <Image
            src="/icon.svg"
            alt="لوگوی آمار پیشرو"
            width={49}
            height={49}
          />
        </div>
        <div className="ml-6 my-[20.5px]">
          <Image
            src="/icons/hamburger-menu.svg"
            alt="آیکون منوی نوار ناوش"
            width={24}
            height={24}
          />
        </div>
      </nav>
      <nav
        className="hidden ss:flex items-center justify-between bg-white rounded-[35px] md:rounded-[100px] w-[90%] max-w-[1248px] h-[clamp(3.6rem,6.5vw,4.75rem)]"
        dir="rtl"
      >
        <div className="flex items-center gap-1 md:gap-2 lg:gap-4  text-[clamp(0.6rem,0.034rem+1.509vw,1rem)] mr-6 my-[14.5px]">
          <Link
            href="#"
            className="my-3.5 p-0 h-7 w-7 md:h-10 md:w-10 lg:w-[49px]"
          >
            <Image
              src="/icon.svg"
              alt="لوگوی آمار پیشرو"
              width={49}
              height={49}
            />
          </Link>
          {navItems.map((item, index) => (
            <Link key={index} href={item.href} className="my-3.5 p-0">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="ml-6 my-[18px] md:my-[22px] flex items-center gap-2 md:gap-3">
          <Button
            variant="outline"
            className="font-normal h-[26px] w-18 p-1 sm:h-8 md:w-auto md:h-9 md:px-4 md:py-2 text-[clamp(0.6rem,0.2rem+1.067vw,1rem)]"
          >
            ورود به سامانه
          </Button>
          <Button
            variant="default"
            className="font-normal h-[26px] w-18 p-1 sm:h-8 md:w-auto md:h-9 md:px-4 md:py-2 text-[clamp(0.6rem,0.2rem+1.067vw,1rem)]"
          >
            ثبت‌نام رایگان
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
// text-[clamp(0.7rem,1.12vw,1rem)]
