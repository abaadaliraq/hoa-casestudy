"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "قيمة الدخول الاستثمارية", value: "160K", suffix: "$" },
  { label: "الإيجار الشهري المقترح", value: "5K", suffix: "$" },
  { label: "استثمار سابق في الإحياء والترميم", value: "+500K", suffix: "$" },
];

export default function Hero() {
  return (
    <section
      id="home"
      dir="rtl"
      className="relative overflow-hidden bg-[#F8F6F2] px-5 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40"
    >
      <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#7A1018]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-black/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 inline-flex rounded-full border border-[#7A1018]/20 bg-white px-5 py-2 text-sm font-medium text-[#7A1018] shadow-sm">
            دراسة جدوى تشغيلية لموقع تراثي في بغداد
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-[1.25] tracking-tight text-[#141111] md:text-6xl">
            بيت التحفيات كوجهة تراثية قابلة للتشغيل التجاري المستدام
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#625955] md:text-xl">
            تعرض هذه الدراسة التصور التشغيلي والمالي لاستثمار بيت التحفيات
            كوجهة ضيافة ومطعم وحديقة فعاليات، بالاعتماد على قيمة المكان
            التاريخية، وجاهزية الموقع، وحجم المصاريف والإيرادات المتوقعة.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#numbers"
              className="rounded-full bg-[#7A1018] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-[#7A1018]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#5f0c12]"
            >
              عرض الأرقام
            </a>

            <a
              href="#about"
              className="rounded-full border border-black/10 bg-white px-7 py-3 text-sm font-bold text-[#141111] transition-all duration-300 hover:-translate-y-1 hover:border-[#7A1018]/30 hover:text-[#7A1018]"
            >
              نبذة عن بيت التحفيات
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-white p-5 shadow-2xl shadow-black/10">
            <div className="absolute left-0 top-0 h-32 w-32 rounded-br-[4rem] bg-[#7A1018]" />

            <div className="relative rounded-[2rem] bg-[#141111] p-8 text-white">
              <p className="mb-16 text-sm text-white/60">
                Feasibility Study
              </p>

              <div className="space-y-4">
                <p className="text-sm text-[#E8D7C3]">House of Antiques</p>
                <h2 className="max-w-md text-4xl font-bold leading-tight">
                  أصل تراثي قائم بقابلية تشغيل تجارية
                </h2>
              </div>

              <div className="mt-12 grid gap-4">
                {stats.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55, delay: 0.35 + index * 0.12 }}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur"
                  >
                    <span className="text-sm text-white/70">{item.label}</span>
                    <span className="text-2xl font-bold">
                      {item.value}
                      <span className="mr-1 text-base text-[#E8D7C3]">
                        {item.suffix}
                      </span>
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 hidden rounded-3xl bg-white p-5 shadow-xl md:block">
            <p className="text-sm text-[#7A1018]">محور الدراسة</p>
            <p className="mt-1 text-2xl font-bold text-[#141111]">
              القيمة التاريخية مقابل العائد التشغيلي
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}