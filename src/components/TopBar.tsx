"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "نبذة", href: "#about" },
  { label: "الفرصة", href: "#numbers" },
  { label: "التشغيل", href: "#operations" },
  { label: "الاستثمار", href: "#investment" },
  { label: "المصاريف", href: "#costs" },
  { label: "الإيرادات", href: "#feasibility" },
  { label: "العائد", href: "#roi" },
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

    const topOffset = 90;
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
          ? "bg-[#6F0F17]/95 shadow-xl shadow-black/10 backdrop-blur-xl"
          : "bg-[#7A1018]/95 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-10">
        <Link
          href="#home"
          onClick={(event) => handleSmoothScroll(event, "#home")}
          className="min-w-fit"
        >
          <div>
            <p className="text-base font-black tracking-tight text-white md:text-lg">
              بيت التحفيات
            </p>
            <p className="mt-0.5 text-xs font-medium text-white/65">
              دراسة جدوى تشغيلية واستثمارية
            </p>
          </div>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-2 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(event) => handleSmoothScroll(event, link.href)}
              className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold text-white/75 transition-all duration-300 hover:bg-white hover:text-[#7A1018]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex xl:hidden">
          <Link
            href="#investment"
            onClick={(event) => handleSmoothScroll(event, "#investment")}
            className="rounded-full px-4 py-2 text-sm font-semibold text-white/75 transition-all duration-300 hover:bg-white hover:text-[#7A1018]"
          >
            الاستثمار
          </Link>

          <Link
            href="#feasibility"
            onClick={(event) => handleSmoothScroll(event, "#feasibility")}
            className="rounded-full px-4 py-2 text-sm font-semibold text-white/75 transition-all duration-300 hover:bg-white hover:text-[#7A1018]"
          >
            الإيرادات
          </Link>

          <Link
            href="#roi"
            onClick={(event) => handleSmoothScroll(event, "#roi")}
            className="rounded-full px-4 py-2 text-sm font-semibold text-white/75 transition-all duration-300 hover:bg-white hover:text-[#7A1018]"
          >
            العائد
          </Link>
        </div>

        <Link
          href="#conclusion"
          onClick={(event) => handleSmoothScroll(event, "#conclusion")}
          className="min-w-fit rounded-full bg-white px-5 py-2.5 text-sm font-black text-[#7A1018] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#141111] hover:text-white hover:shadow-lg"
        >
          الخلاصة
        </Link>
      </div>
    </header>
  );
}