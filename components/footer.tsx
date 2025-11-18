import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="px-6 sm:px-12 lg:px-24 py-16 bg-white">
      <div
        className="flex flex-col md:flex-row justify-between gap-12"
        dir="rtl"
      >
        {/* Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-[15px]">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold mb-2">دانلود اپلیکیشن</h3>
            <a href="#" className="hover:text-primary transition">
              بازار
            </a>
            <a href="#" className="hover:text-primary transition">
              مایکت
            </a>
            <a href="#" className="hover:text-primary transition">
              مستقیم
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold mb-2">شبکه‌های اجتماعی</h3>
            <a href="#" className="hover:text-primary transition">
              اینستاگرام
            </a>
            <a href="#" className="hover:text-primary transition">
              تلگرام
            </a>
            <a href="#" className="hover:text-primary transition">
              ایتا
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold mb-2">لینک‌ها</h3>
            <a href="#" className="hover:text-primary transition">
              درباره‌ی ما
            </a>
            <a href="#" className="hover:text-primary transition">
              تماس با ما
            </a>
            <a href="#" className="hover:text-primary transition">
              قوانین حریم خصوصی
            </a>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-col sm:flex-row items-center md:items-start gap-6 ">
          <Image
            src="/images/samandehi.png"
            alt="ستاد سامان‌دهی پایگاه‌های الکترونیک"
            width={129}
            height={194}
            className="object-contain"
          />
          <Image
            src="/images/e-namad.png"
            alt="نشان اعتماد الکترونیک"
            width={180}
            height={180}
            className="object-contain"
          />
        </div>
      </div>
    </footer>
  );
};
