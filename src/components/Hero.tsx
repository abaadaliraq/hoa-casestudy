"use client";

import { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";
import { investmentAmount } from "./feasibilityModel";

type StatItem = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
};

const stats: StatItem[] = [
  {
    label: "قيمة الدخول الاستثمارية",
    value: investmentAmount / 1_000,
    suffix: "K$",
  },
  {
    label: "استثمار سابق في الإحياء والترميم",
    value: 500,
    prefix: "+",
    suffix: "K$",
  },
  {
    label: "مصادر دخل تشغيلية",
    value: 5,
    suffix: "+",
  },
];

function CountUp({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [value]);

  return (
    <span>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      dir="rtl"
      className="relative isolate min-h-screen overflow-hidden bg-[#063F3A] px-5 pb-16 pt-28 text-white md:px-10 md:pb-24 md:pt-36"
    >
      {/* خلفية ناعمة بدون مربعات */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_20%,rgba(123,224,174,0.20),transparent_30%),radial-gradient(circle_at_85%_82%,rgba(2,28,25,0.95),transparent_46%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-20 h-1/2 bg-gradient-to-t from-[#032B28] to-transparent" />

      {/* زخارف بسيطة مثل المرجع */}
      <div className="absolute right-[-120px] top-[-120px] -z-10 h-[330px] w-[330px] rounded-full border border-[#7BE0AE]/18" />
      <div className="absolute right-[-52px] top-[-52px] -z-10 h-[205px] w-[205px] rounded-full border border-[#7BE0AE]/16" />
      <div className="absolute left-[8%] top-[21%] -z-10 h-20 w-20 rounded-full bg-[#7BE0AE]/60" />
      <div className="absolute bottom-[12%] right-[48%] -z-10 h-12 w-12 rounded-full bg-[#7BE0AE]/38" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        {/* الصورة */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          className="order-2 lg:order-1"
        >
          <div className="relative mx-auto max-w-xl">
            <div className="absolute -right-5 -top-5 h-28 w-28 rounded-tl-[3rem] bg-[#7BE0AE]/75" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[#082F2C] p-4 shadow-2xl shadow-black/25">
              <div className="relative h-[420px] overflow-hidden rounded-[1.5rem] bg-[#0B514A] md:h-[500px]">
                <img
                  src="/images/hoa-hero.jpg"
                  alt="بيت التحفيات"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#031F1D]/80 via-[#031F1D]/20 to-transparent" />

                <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/20 px-4 py-2 text-xs text-white/75 backdrop-blur">
                  Investment Case
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-sm text-[#9EF0C2]">
                    House of Antiques — Baghdad
                  </p>

                  <h2 className="mt-2 max-w-md text-3xl font-semibold leading-tight text-white">
                    أصل تراثي قائم بقابلية تشغيل تجارية متعددة
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* النص */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="order-1 text-center lg:order-2 lg:text-right"
        >
          <div className="mb-7 flex flex-wrap justify-center gap-3 lg:justify-start">
            <span className="rounded-full border border-[#7BE0AE]/25 bg-white/8 px-4 py-2 text-sm font-medium text-[#BFF5DA] backdrop-blur">
              دراسة استثمارية وتشغيلية
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/65">
              بيت التحفيات — بغداد
            </span>
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.22] tracking-[-0.02em] text-white md:text-6xl lg:mx-0">
            دار ضيافة بيت التحفيات (خاتون)
          </h1>

          <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#numbers"
              className="rounded-full bg-[#7BE0AE] px-7 py-3.5 text-sm font-bold text-[#062B28] shadow-xl shadow-[#7BE0AE]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#98F0C5]"
            >
              عرض المؤشرات المالية
            </a>

            <a
              href="#revenue"
              className="rounded-full border border-white/15 bg-white/8 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#7BE0AE]/50 hover:bg-white/12"
            >
              مصادر الإيرادات
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 + index * 0.1 }}
                className="rounded-[1.2rem] border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur"
              >
                <p className="text-sm leading-6 text-white/55">
                  {item.label}
                </p>

                <div className="mt-2 flex items-end justify-center gap-1 lg:justify-start">
                  <span className="text-3xl font-semibold text-white">
                    <CountUp
                      value={item.value}
                      prefix={item.prefix}
                      suffix={item.suffix}
                    />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}