"use client";

import { motion } from "framer-motion";

const format = (value: number) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(value);

const initialCapital = 160000;
const generatorCost = 13000;
const kitchenSetupCost = 20000;
const gardenSetupCost = 25000;
const monthlyOperatingCost = 23200;
const firstTwoMonths = monthlyOperatingCost * 2;

const setupSpending =
  generatorCost + kitchenSetupCost + gardenSetupCost + firstTwoMonths;

const reserve = initialCapital - setupSpending;

const investmentItems = [
  {
    item: "مولدة كهرباء",
    amount: generatorCost,
    note: "لتأمين استقرار الطاقة أثناء التشغيل وتقليل أثر الانقطاع.",
  },
  {
    item: "تجهيز وتأثيث المطبخ",
    amount: kitchenSetupCost,
    note: "معدات وتجهيزات أساسية لتشغيل مطبخ يومي متكامل.",
  },
  {
    item: "تجهيز الحديقة والأثاث الخارجي",
    amount: gardenSetupCost,
    note: "طاولات، كراسي، شمسيات، جلسات خارجية، وإنارة مناسبة.",
  },
  {
    item: "مصاريف أول شهرين تشغيلية",
    amount: firstTwoMonths,
    note: "رواتب، إيجار، خدمات، تسويق، صيانة، ونثريات تشغيلية.",
  },
  {
    item: "احتياطي وسيولة تشغيلية",
    amount: reserve,
    note: "سيولة داعمة لفترة الإطلاق والتقلبات التشغيلية الأولى.",
  },
];

const indicators = [
  {
    label: "رأس المال الأولي",
    value: initialCapital,
    suffix: "$",
    description: "المبلغ المعتمد للدخول والتجهيز والتشغيل الأولي.",
  },
  {
    label: "التجهيزات الثابتة",
    value: generatorCost + kitchenSetupCost + gardenSetupCost,
    suffix: "$",
    description: "مولدة، مطبخ، وتجهيزات الحديقة.",
  },
  {
    label: "تشغيل أول شهرين",
    value: firstTwoMonths,
    suffix: "$",
    description: "كلفة تشغيلية مبدئية قبل استقرار الإيراد.",
  },
  {
    label: "احتياطي متبقٍ",
    value: reserve,
    suffix: "$",
    description: "سيولة تشغيلية لتقليل ضغط البداية.",
  },
];

export default function InitialInvestment() {
  return (
    <section
      id="investment"
      dir="rtl"
      className="relative overflow-hidden bg-[#111010] px-5 py-20 text-white md:px-10 md:py-28"
    >
      <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#7A1018]/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-semibold text-white/75 backdrop-blur">
              الاستثمار الأولي
            </p>

            <h2 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
              توزيع مبلغ 160,000 دولار بين التجهيز والسيولة والتشغيل الأولي
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-9 text-white/65">
              يوضح هذا القسم طريقة توزيع رأس المال الأولي على التجهيزات الأساسية
              ومصاريف أول شهرين، مع إبقاء احتياطي نقدي لدعم التشغيل خلال مرحلة
              الإطلاق.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {indicators.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.09]"
              >
                <p className="text-sm text-white/55">{item.label}</p>

                <p className="mt-3 text-4xl font-black tracking-tight text-white">
                  {format(item.value)}
                  <span className="mr-1 text-base text-[#B5121B]">
                    {item.suffix}
                  </span>
                </p>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/30 backdrop-blur"
          >
            <div className="border-b border-white/10 bg-[#7A1018] px-6 py-5">
              <h3 className="text-2xl font-bold">جدول توزيع الاستثمار</h3>
              <p className="mt-2 text-sm text-white/70">
                الأرقام بالدولار الأمريكي — تقديرات تشغيلية أولية
              </p>
            </div>

            <div className="hidden lg:block">
              <table className="w-full table-fixed border-collapse text-right">
                <thead>
                  <tr className="border-b border-white/10 bg-black/25">
                    <th className="w-[26%] p-5 text-sm font-bold text-white/70">
                      البند
                    </th>
                    <th className="w-[18%] p-5 text-sm font-bold text-white/70">
                      المبلغ
                    </th>
                    <th className="w-[22%] p-5 text-sm font-bold text-white/70">
                      النسبة
                    </th>
                    <th className="w-[34%] p-5 text-sm font-bold text-white/70">
                      الملاحظة
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {investmentItems.map((row, index) => {
                    const percentage = (row.amount / initialCapital) * 100;

                    return (
                      <motion.tr
                        key={row.item}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: index * 0.06 }}
                        className="border-b border-white/10 transition-colors duration-300 hover:bg-white/[0.05]"
                      >
                        <td className="p-5 font-semibold text-white">
                          {row.item}
                        </td>

                        <td className="p-5 text-xl font-black text-white">
                          {format(row.amount)}
                          <span className="mr-1 text-sm text-[#B5121B]">
                            $
                          </span>
                        </td>

                        <td className="p-5">
                          <div className="flex items-center gap-3">
                            <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${percentage}%` }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 0.9,
                                  delay: 0.15 + index * 0.08,
                                }}
                                className="h-full rounded-full bg-[#B5121B]"
                              />
                            </div>

                            <span className="min-w-fit text-sm font-bold text-white/75">
                              {percentage.toFixed(1)}%
                            </span>
                          </div>
                        </td>

                        <td className="p-5 text-sm leading-7 text-white/55">
                          {row.note}
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="grid gap-4 p-5 lg:hidden">
              {investmentItems.map((row, index) => (
                <motion.div
                  key={row.item}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="font-black text-white">{row.item}</h4>
                    <p className="text-xl font-black text-white">
                      {format(row.amount)}$
                    </p>
                  </div>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {row.note}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-2xl shadow-black/30 backdrop-blur"
          >
            <p className="text-sm font-semibold text-[#B5121B]">
              قراءة مالية
            </p>

            <h3 className="mt-3 text-3xl font-bold leading-tight">
              الاحتياطي النقدي عنصر أساسي في مرحلة الإطلاق
            </h3>

            <p className="mt-5 leading-8 text-white/60">
              بعد احتساب التجهيزات ومصاريف أول شهرين، يبقى احتياطي تشغيلي قدره{" "}
              {format(reserve)} دولار. هذا الاحتياطي مهم لتغطية التذبذب الطبيعي
              في بداية التشغيل، وضبط التجربة قبل الوصول إلى الاستقرار الكامل.
            </p>

            <div className="mt-8 space-y-5">
              {investmentItems.map((item, index) => {
                const percentage = (item.amount / initialCapital) * 100;

                return (
                  <div key={item.item}>
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <span className="text-sm text-white/70">
                        {item.item}
                      </span>
                      <span className="text-sm font-bold text-white">
                        {format(item.amount)}$
                      </span>
                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percentage}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: 0.2 + index * 0.09,
                        }}
                        className="h-full rounded-full bg-[#B5121B]"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-[#B5121B]/40 bg-[#B5121B]/15 p-5">
              <p className="text-sm font-semibold text-white">
                ملاحظة تشغيلية
              </p>

              <p className="mt-3 leading-8 text-white/70">
                لا يُفضّل استهلاك كامل رأس المال في التجهيزات. وجود سيولة
                تشغيلية بعد الإطلاق يمنح المشروع قدرة أفضل على التعامل مع فترة
                التجربة، التسويق، وتعديل التشغيل بناءً على النتائج الفعلية.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}