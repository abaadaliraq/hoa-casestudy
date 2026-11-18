"use client";

import { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";
import { investmentAmount as initialCapital } from "./feasibilityModel";

const format = (value: number) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(value);

const coolingCost = 14000;
const generatorCost = 15000;
const kitchenSetupCost = 30_000;
const gardenSetupCost = 27_000;
const soundSystemCost = 10_000;
const managementSystemCost = 5_000;

const housingAndGeneratorRentMonthly = 700;
const prepaidRentMonths = 6;
const prepaidRent = housingAndGeneratorRentMonthly * prepaidRentMonths;

const marketingBudget = 25000;

const allocatedInvestmentItems = [
  {
    item: "منظومة التبريد",
    amount: coolingCost,
    category: "تجهيز أساسي",
    note: "تجهيز منظومة تبريد مناسبة لمساحات بيت التحفيات وأيام التشغيل.",
  },
  {
    item: "مولدة كهرباء",
    amount: generatorCost,
    category: "تجهيز أساسي",
    note: "تأمين مصدر طاقة احتياطي يحافظ على استقرار التشغيل والخدمة.",
  },
  {
    item: "تجهيز وتأثيث المطبخ",
    amount: kitchenSetupCost,
    category: "تجهيز أساسي",
    note: "معدات وتجهيزات أساسية لبدء تشغيل المطبخ وخدمات الضيافة.",
  },
  {
    item: "تأثيث وتجهيز الحديقة والجلسات",
    amount: gardenSetupCost,
    category: "تجهيز أساسي",
    note: "طاولات، كراسي، جلسات خارجية، إنارة، وتفاصيل تنظيم الحديقة.",
  },
  {
    item: "سماعات ونظام صوت متكامل",
    amount: soundSystemCost,
    category: "تجهيز أساسي",
    note: "سماعات وتجهيزات صوتية للندوات والمؤتمرات والحفلات.",
  },
  {
    item: "نظام متكامل للمخزون والمطبخ والمحاسبة والإدارة",
    amount: managementSystemCost,
    category: "إدارة وتشغيل",
    note: "نظام يربط إدارة المخزون وعمليات المطبخ بالحسابات وإدارة دار الضيافة.",
  },
  {
    item: "إيجار سكن العمال وموقع المولدة",
    amount: prepaidRent,
    category: `دفعة ${prepaidRentMonths} أشهر`,
    note: `إيجار شهري إجمالي بقيمة ${format(housingAndGeneratorRentMonthly)} دولار، يُدفع مقدمًا لمدة ${prepaidRentMonths} أشهر.`,
  },
  {
    item: "تسويق بيت التحفيات",
    amount: marketingBudget,
    category: "تسويق وإطلاق",
    note: "حملات إطلاق، إنتاج محتوى، إعلانات، علاقات عامة، ودعم الفعاليات.",
  },
];

const allocatedAmount = allocatedInvestmentItems.reduce((total, row) => total + row.amount, 0);
const launchReserve = initialCapital - allocatedAmount;

const investmentItems = [
  ...allocatedInvestmentItems,
  {
    item: "احتياطي الإطلاق",
    amount: launchReserve,
    category: "سيولة احتياطية",
    note: "احتياطي نقدي لدعم مرحلة الافتتاح والتعامل مع الاحتياجات غير المتوقعة.",
  },
];

const fixedEquipmentTotal =
  coolingCost +
  generatorCost +
  kitchenSetupCost +
  gardenSetupCost +
  soundSystemCost;

const indicators = [
  {
    label: "رأس المال الأولي",
    value: initialCapital,
    suffix: "$",
    description: "إجمالي مبلغ الدخول الاستثماري.",
  },
  {
    label: "التجهيزات الأساسية",
    value: fixedEquipmentTotal,
    suffix: "$",
    description: "تبريد، مولدة، مطبخ، حديقة، ونظام صوت.",
  },
  {
    label: "ميزانية التسويق",
    value: marketingBudget,
    suffix: "$",
    description: "مخصصة للإطلاق والحملات الإعلامية.",
  },
  {
    label: "احتياطي الإطلاق",
    value: launchReserve,
    suffix: "$",
    description: "سيولة متبقية لدعم مرحلة الافتتاح.",
  },
];

function CountUp({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1.25,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [value]);

  return (
    <span>
      {format(displayValue)}
      {suffix}
    </span>
  );
}

export default function InitialInvestment() {
  return (
    <section
      id="investment"
      dir="rtl"
      className="relative overflow-hidden bg-[#063F3A] px-5 py-20 text-white md:px-10 md:py-24"
    >
      <div className="absolute left-[-120px] top-[-120px] h-[340px] w-[340px] rounded-full bg-[#7BE0AE]/16 blur-3xl" />
      <div className="absolute bottom-[-140px] right-[-140px] h-[360px] w-[360px] rounded-full bg-black/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
          >
            <p className="mb-5 inline-flex rounded-full border border-[#7BE0AE]/25 bg-white/8 px-4 py-2 text-sm font-semibold text-[#BFF5DA]">
              الاستثمار الأولي
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.02em] md:text-5xl">
              توزيع رأس المال الأولي بقيمة {format(initialCapital)} دولار
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/64">
              يوزع رأس المال بين التجهيزات الأساسية، نظام الإدارة والتشغيل، دفعة إيجار
              سكن العمال وموقع المولدة، التسويق، واحتياطي الإطلاق.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-4">
            {indicators.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur"
              >
                <p className="text-sm leading-6 text-white/50">
                  {item.label}
                </p>

                <p className="mt-3 text-3xl font-semibold text-white">
                  <CountUp value={item.value} suffix={item.suffix} />
                </p>

                <p className="mt-3 text-xs leading-6 text-white/40">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="mt-12 overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/20 backdrop-blur"
        >
          <div className="border-b border-white/10 bg-[#052F2C] px-6 py-5">
            <h3 className="text-xl font-semibold">
              جدول توزيع الاستثمار
            </h3>

            <p className="mt-2 text-sm text-white/50">
              جميع المبالغ بالدولار الأمريكي
            </p>
          </div>

          <div className="hidden lg:block">
            <table className="w-full table-fixed border-collapse text-right">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.04]">
                  <th className="w-[26%] p-5 text-sm font-semibold text-white/55">
                    البند
                  </th>

                  <th className="w-[17%] p-5 text-sm font-semibold text-white/55">
                    التصنيف
                  </th>

                  <th className="w-[16%] p-5 text-sm font-semibold text-white/55">
                    المبلغ
                  </th>

                  <th className="w-[13%] p-5 text-sm font-semibold text-white/55">
                    النسبة
                  </th>

                  <th className="w-[28%] p-5 text-sm font-semibold text-white/55">
                    التوضيح
                  </th>
                </tr>
              </thead>

              <tbody>
                {investmentItems.map((row, index) => {
                  const percentage =
                    (row.amount / initialCapital) * 100;

                  return (
                    <motion.tr
                      key={row.item}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.05,
                      }}
                      className="border-b border-white/10 transition-colors hover:bg-white/[0.05]"
                    >
                      <td className="p-5 font-semibold text-white">
                        {row.item}
                      </td>

                      <td className="p-5">
                        <span className="rounded-full bg-[#7BE0AE]/10 px-3 py-1 text-xs font-semibold text-[#BFF5DA]">
                          {row.category}
                        </span>
                      </td>

                      <td className="p-5 text-lg font-semibold text-[#9EF0C2]">
                        {format(row.amount)}$
                      </td>

                      <td className="p-5">
                        <p className="font-semibold text-white">
                          {percentage.toFixed(1)}%
                        </p>

                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{
                              width: `${percentage}%`,
                            }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.9,
                              delay: 0.15 + index * 0.06,
                            }}
                            className="h-full rounded-full bg-[#7BE0AE]"
                          />
                        </div>
                      </td>

                      <td className="p-5 text-sm leading-7 text-white/50">
                        {row.note}
                      </td>
                    </motion.tr>
                  );
                })}

                <tr className="bg-[#7BE0AE] text-[#063F3A]">
                  <td className="p-5 text-lg font-semibold">
                    الإجمالي
                  </td>

                  <td className="p-5" />

                  <td className="p-5 text-xl font-semibold">
                    {format(initialCapital)}$
                  </td>

                  <td className="p-5 font-semibold">100%</td>

                  <td className="p-5 text-sm font-semibold">
                    كامل رأس المال الاستثماري
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid gap-4 p-5 lg:hidden">
            {investmentItems.map((row, index) => {
              const percentage =
                (row.amount / initialCapital) * 100;

              return (
                <motion.div
                  key={row.item}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.42,
                    delay: index * 0.05,
                  }}
                  className="rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-white">
                        {row.item}
                      </h4>

                      <p className="mt-1 text-xs text-[#9EF0C2]">
                        {row.category}
                      </p>
                    </div>

                    <p className="text-lg font-semibold text-[#9EF0C2]">
                      {format(row.amount)}$
                    </p>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-white/50">
                    {row.note}
                  </p>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${percentage}%`,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.9,
                        delay: 0.15 + index * 0.06,
                      }}
                      className="h-full rounded-full bg-[#7BE0AE]"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
            className="rounded-[1.8rem] border border-[#7BE0AE]/20 bg-[#7BE0AE]/10 p-7"
          >
            <p className="text-sm font-semibold text-[#9EF0C2]">
              احتياطي الإطلاق
            </p>

            <h3 className="mt-3 text-3xl font-semibold">
              {format(launchReserve)} دولار سيولة احتياطية
            </h3>

            <p className="mt-5 leading-8 text-white/62">
              يُحفظ هذا المبلغ لدعم مرحلة الافتتاح، تغطية الاحتياجات الطارئة،
              وضمان عدم استهلاك كامل رأس المال في التجهيزات والتسويق.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
            className="rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-7"
          >
            <p className="text-sm font-semibold text-[#9EF0C2]">
              سكن العمال وموقع المولدة
            </p>

            <h3 className="mt-3 text-3xl font-semibold">
              {format(housingAndGeneratorRentMonthly)} دولار شهريًا
            </h3>

            <p className="mt-5 leading-8 text-white/62">
              خُصص مبلغ {format(prepaidRent)} دولار من رأس المال لتغطية إيجار
              {prepaidRentMonths} أشهر يُدفع مقدمًا.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}