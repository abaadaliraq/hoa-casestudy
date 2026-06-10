"use client";

import { motion } from "framer-motion";

const highlights = [
  "بيت التحفيات يمتلك قيمة تراثية وتجارية جاهزة يمكن تحويلها إلى تجربة ضيافة مختلفة.",
  "الطاقة التشغيلية المقدّرة بـ 40 طاولة وباستيعاب يقارب 120 شخصًا تمنح المشروع قابلية جيدة للإيراد عند إدارة الإشغال بشكل صحيح.",
  "الأرقام توضح أن نجاح المشروع يعتمد على ضبط المصاريف، معدل دوران الطاولات، ومتوسط صرف الزائر.",
];

const annualPartnerRevenue = [
  { year: "السنة 1", revenue: 108787 },
  { year: "السنة 2", revenue: 117490 },
  { year: "السنة 3", revenue: 126889 },
  { year: "السنة 4", revenue: 137040 },
  { year: "السنة 5", revenue: 148003 },
];

const format = (value: number) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(value);

export default function SimpleConclusion() {
  const totalFiveYears = annualPartnerRevenue.reduce(
    (sum, item) => sum + item.revenue,
    0
  );

  return (
    <>
      <section
        id="conclusion"
        dir="rtl"
        className="relative overflow-hidden bg-[#F8F6F2] px-5 py-20 text-[#141111] md:px-10 md:py-28"
      >
        <div className="absolute right-0 top-0 h-[360px] w-[360px] rounded-bl-[8rem] bg-[#7A1018]/10" />
        <div className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-tr-[8rem] bg-black/[0.04]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="mb-4 inline-flex rounded-full border border-[#7A1018]/20 bg-white px-5 py-2 text-sm font-semibold text-[#7A1018] shadow-sm">
              الخلاصة
            </p>

            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              بيت التحفيات فرصة تشغيلية قائمة على الهوية والمكان والأرقام
            </h2>

            <p className="mt-6 text-lg leading-9 text-[#625955]">
              تشير الدراسة إلى أن المشروع قابل للتحول إلى وجهة ضيافة ذات عائد
              مستمر عند تشغيله بمنهجية واضحة، تجمع بين قوة المكان التراثية
              والانضباط المالي والتسويق المستمر.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {highlights.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#7A1018] text-sm font-black text-white">
                  {index + 1}
                </div>

                <p className="leading-8 text-[#3f3834]">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mt-14 overflow-hidden rounded-[2.5rem] bg-[#111010] text-white shadow-2xl shadow-black/20"
          >
            <div className="grid gap-8 border-b border-white/10 p-7 md:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white/75">
                  توقعات العائد السنوي
                </p>

                <h3 className="text-3xl font-black leading-tight md:text-4xl">
                  مسار الإيراد السنوي المتوقع للشريك خلال أول 5 سنوات
                </h3>

                <p className="mt-5 leading-8 text-white/60">
                  يوضح المؤشر مسار نمو حصة الشريك السنوية وفق السيناريو المتوسط،
                  مع افتراض تحسن تدريجي في الإشغال، الحجوزات، ومتوسط صرف
                  الطاولة.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6">
                  <p className="text-sm text-white/50">إجمالي أول 5 سنوات</p>

                  <p className="mt-3 text-4xl font-black">
                    {format(totalFiveYears)}
                    <span className="mr-1 text-base text-[#B5121B]">$</span>
                  </p>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6">
                  <p className="text-sm text-white/50">متوسط سنوي تقريبي</p>

                  <p className="mt-3 text-4xl font-black">
                    {format(totalFiveYears / annualPartnerRevenue.length)}
                    <span className="mr-1 text-base text-[#B5121B]">$</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-7 md:p-10">
              <div className="relative mx-auto max-w-6xl">
                <div className="hidden md:block">
                  <div className="absolute right-0 top-[104px] h-1 w-full rounded-full bg-white/10" />

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: "easeOut" }}
                    className="absolute right-0 top-[104px] h-1 rounded-full bg-[#B5121B]"
                  />

                  <div className="relative grid grid-cols-5 gap-4">
                    {annualPartnerRevenue.map((item, index) => {
                      const previous =
                        index === 0
                          ? annualPartnerRevenue[0].revenue
                          : annualPartnerRevenue[index - 1].revenue;

                      const growth =
                        index === 0
                          ? 0
                          : ((item.revenue - previous) / previous) * 100;

                      const isLast = index === annualPartnerRevenue.length - 1;

                      return (
                        <motion.div
                          key={item.year}
                          initial={{ opacity: 0, y: 24 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.55, delay: index * 0.12 }}
                          className="relative flex min-h-[250px] flex-col items-center justify-between text-center"
                        >
                          <div>
                            <p className="text-sm text-white/45">
                              {item.year}
                            </p>

                            <p className="mt-2 text-2xl font-black">
                              {format(item.revenue)}
                              <span className="mr-1 text-sm text-[#B5121B]">
                                $
                              </span>
                            </p>
                          </div>

                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.45,
                              delay: 0.55 + index * 0.12,
                              ease: "easeOut",
                            }}
                            className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border ${
                              isLast
                                ? "border-[#B5121B] bg-[#B5121B] shadow-lg shadow-[#B5121B]/30"
                                : "border-white/15 bg-[#1d1d1d]"
                            }`}
                          >
                            <span className="h-3 w-3 rounded-full bg-white" />
                          </motion.div>

                          <div className="h-16">
                            <p
                              className={`rounded-full px-4 py-2 text-xs font-bold ${
                                isLast
                                  ? "bg-[#B5121B] text-white"
                                  : "bg-white/10 text-white/60"
                              }`}
                            >
                              {index === 0
                                ? "سنة الأساس"
                                : `نمو +${growth.toFixed(1)}%`}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid gap-4 md:hidden">
                  {annualPartnerRevenue.map((item, index) => {
                    const previous =
                      index === 0
                        ? annualPartnerRevenue[0].revenue
                        : annualPartnerRevenue[index - 1].revenue;

                    const growth =
                      index === 0
                        ? 0
                        : ((item.revenue - previous) / previous) * 100;

                    return (
                      <motion.div
                        key={item.year}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: index * 0.08 }}
                        className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p className="text-sm text-white/45">
                              {item.year}
                            </p>

                            <p className="mt-2 text-2xl font-black">
                              {format(item.revenue)}
                              <span className="mr-1 text-sm text-[#B5121B]">
                                $
                              </span>
                            </p>
                          </div>

                          <span className="rounded-full bg-[#B5121B] px-4 py-2 text-xs font-bold text-white">
                            {index === 0 ? "أساس" : `+${growth.toFixed(1)}%`}
                          </span>
                        </div>

                        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{
                              width: `${
                                (item.revenue /
                                  annualPartnerRevenue[
                                    annualPartnerRevenue.length - 1
                                  ].revenue) *
                                100
                              }%`,
                            }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.9,
                              delay: 0.15 + index * 0.08,
                            }}
                            className="h-full rounded-full bg-[#B5121B]"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-8 rounded-[2rem] border border-[#B5121B]/40 bg-[#B5121B]/15 p-6">
                  <p className="text-sm font-semibold text-white">
                    ملاحظة على التوقعات
                  </p>

                  <p className="mt-3 leading-8 text-white/65">
                    هذه الأرقام تقديرية وتعتمد على استمرار التشغيل وفق السيناريو
                    المتوسط، مع تحسن تدريجي في الأداء السنوي. يتم تثبيت الأرقام
                    النهائية بعد أول 60 يوم تشغيل فعلي وقياس الإشغال ومتوسط صرف
                    الطاولة.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
            className="mt-12 rounded-[2rem] bg-[#141111] p-8 text-white md:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold text-[#B5121B]">
                  التوصية النهائية
                </p>

                <h3 className="mt-3 text-3xl font-bold leading-tight">
                  الانتقال إلى تشغيل تجريبي منظم قبل التوسع الكامل
                </h3>
              </div>

              <p className="leading-9 text-white/65">
                يوصى بالبدء بمرحلة تشغيل تجريبية تقيس الإشغال، متوسط صرف
                الطاولة، كلفة المواد، وأداء الكادر خلال أول 60 يومًا. وبعد ظهور
                النتائج الفعلية، يمكن تعديل ساعات التشغيل، قائمة الأسعار، ونظام
                الحجوزات قبل رفع الطاقة التشغيلية بالكامل.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <footer
        dir="rtl"
        className="border-t border-white/10 bg-[#111010] px-5 py-8 text-white md:px-10"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-bold">بيت التحفيات</p>
            <p className="mt-1 text-sm text-white/50">
              دراسة جدوى تشغيلية واستثمارية
            </p>
          </div>

          <p className="text-sm text-white/45">
            © {new Date().getFullYear()} House of Antiques — Baghdad
          </p>
        </div>
      </footer>
    </>
  );
}