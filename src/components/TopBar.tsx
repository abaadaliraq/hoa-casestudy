"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "الاتفاق", href: "#agreement" },
  { label: "الفرصة", href: "#numbers" },
  { label: "التشغيل", href: "#operations" },
  { label: "الاستثمار", href: "#investment" },
  { label: "المصاريف", href: "#costs" },
  { label: "الإيرادات", href: "#revenue" },
  { label: "رد الاستثمار", href: "#roi" },
  { label: "الخلاصة", href: "#conclusion" },
];

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    const target = document.querySelector(href);

    if (!target) return;

    const topOffset = 86;
    const elementPosition =
      target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - topOffset,
      behavior: "smooth",
    });
  };

  return (
    <header
      dir="rtl"
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#052F2C]/92 shadow-xl shadow-black/15 backdrop-blur-xl"
          : "bg-[#063F3A]/88 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-10">
        <Link
          href="#home"
          onClick={(event) => handleSmoothScroll(event, "#home")}
          className="min-w-fit"
        >
          <div className="leading-none">
            <p className="text-base font-semibold tracking-tight text-white md:text-lg">
              بيت التحفيات
            </p>

            <p className="mt-1.5 text-xs font-medium text-[#BFF5DA]/70">
              دراسة استثمارية وتشغيلية
            </p>
          </div>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1.5 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(event) => handleSmoothScroll(event, link.href)}
              className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold text-white/68 transition-all duration-300 hover:bg-[#7BE0AE]/14 hover:text-[#BFF5DA]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-1.5 lg:flex xl:hidden">
          <Link
            href="#investment"
            onClick={(event) => handleSmoothScroll(event, "#investment")}
            className="rounded-full px-4 py-2 text-sm font-semibold text-white/68 transition-all duration-300 hover:bg-[#7BE0AE]/14 hover:text-[#BFF5DA]"
          >
            الاستثمار
          </Link>

          <Link
            href="#revenue"
            onClick={(event) => handleSmoothScroll(event, "#revenue")}
            className="rounded-full px-4 py-2 text-sm font-semibold text-white/68 transition-all duration-300 hover:bg-[#7BE0AE]/14 hover:text-[#BFF5DA]"
          >
            الإيرادات
          </Link>

          <Link
            href="#roi"
            onClick={(event) => handleSmoothScroll(event, "#roi")}
            className="rounded-full px-4 py-2 text-sm font-semibold text-white/68 transition-all duration-300 hover:bg-[#7BE0AE]/14 hover:text-[#BFF5DA]"
          >
            رد الاستثمار
          </Link>
        </div>

        <Link
          href="#conclusion"
          onClick={(event) => handleSmoothScroll(event, "#conclusion")}
          className="min-w-fit rounded-full bg-[#7BE0AE] px-5 py-2.5 text-sm font-bold text-[#052B27] shadow-lg shadow-[#7BE0AE]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#9AF0C7]"
        >
          الخلاصة
        </Link>
      </div>
    </header>
  );
}