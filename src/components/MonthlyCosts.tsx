"use client";

import { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";
import {
  monthlyOperatingCosts,
  monthlyRent,
  monthlyRentPerPartner,
  otherCosts,
  otherCostsTotal,
  salaryRows,
  staffCount,
  totalSalaries,
} from "./feasibilityModel";

const format = (value: number) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(value);

const salaryShare = (totalSalaries / monthlyOperatingCosts) * 100;

const indicators = [
  {
    label: "إجمالي الرواتب",
    value: totalSalaries,
    suffix: "$",
  },
  {
    label: "غير الرواتب",
    value: otherCostsTotal,
    suffix: "$",
  },
  {
    label: "الإيجار الشهري",
    value: monthlyRent,
    suffix: "$",
  },
  {
    label: "إجمالي التشغيل الشهري",
    value: monthlyOperatingCosts,
    suffix: "$",
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
      duration: 1.3,
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

export default function MonthlyCosts() {
  return (
    <section
      id="costs"
      dir="rtl"
      className="relative overflow-hidden bg-[#F7F4EE] px-5 py-20 md:px-10 md:py-24"
    >
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#7BE0AE]/20 blur-3xl" />
      <div className="absolute bottom-[-140px] right-[-140px] h-[360px] w-[360px] rounded-full bg-[#063F3A]/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
          >
            <p className="mb-5 inline-flex rounded-full border border-[#063F3A]/15 bg-white px-4 py-2 text-sm font-semibold text-[#063F3A] shadow-sm">
              المصاريف الشهرية
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.02em] text-[#092E2A] md:text-5xl">
              هيكل الكلفة الشهرية للتشغيل
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5F6B67]">
              يوضح هذا القسم الكلفة الشهرية الأساسية للتشغيل، وتشمل الرواتب،
              المصاريف الخدمية، التسويق، والإيجار الشهري المعتمد ضمن النموذج
              المالي.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-4">
            {indicators.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[1.3rem] border border-[#063F3A]/10 bg-white p-5 shadow-sm"
              >
                <p className="text-sm leading-6 text-[#64716C]">
                  {item.label}
                </p>

                <p className="mt-3 text-2xl font-semibold text-[#092E2A] md:text-3xl">
                  <CountUp value={item.value} suffix={item.suffix} />
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
            className="overflow-hidden rounded-[1.8rem] border border-[#063F3A]/10 bg-white shadow-xl shadow-[#063F3A]/5"
          >
            <div className="border-b border-[#063F3A]/10 bg-[#063F3A] px-5 py-4 text-white">
              <h3 className="text-xl font-semibold">تفصيل الرواتب الشهرية</h3>
              <p className="mt-1 text-sm text-white/55">
                إجمالي الكادر: {staffCount} موظف — إجمالي الرواتب:{" "}
                {format(totalSalaries)}$
              </p>
            </div>

            <div className="hidden lg:block">
              <table className="w-full table-fixed border-collapse text-right">
                <thead>
                  <tr className="border-b border-[#063F3A]/10 bg-[#F7F4EE]">
                    <th className="w-[32%] p-4 text-sm font-semibold text-[#64716C]">
                      التخصص
                    </th>
                    <th className="w-[20%] p-4 text-sm font-semibold text-[#64716C]">
                      القسم
                    </th>
                    <th className="w-[13%] p-4 text-sm font-semibold text-[#64716C]">
                      العدد
                    </th>
                    <th className="w-[17%] p-4 text-sm font-semibold text-[#64716C]">
                      الراتب
                    </th>
                    <th className="w-[18%] p-4 text-sm font-semibold text-[#64716C]">
                      الإجمالي
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {salaryRows.map((row, index) => (
                    <motion.tr
                      key={row.role}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.38, delay: index * 0.025 }}
                      className="border-b border-[#063F3A]/10 transition-colors duration-300 hover:bg-[#F7F4EE]"
                    >
                      <td className="p-4 font-semibold text-[#092E2A]">
                        {row.role}
                      </td>

                      <td className="p-4">
                        <span className="rounded-full bg-[#063F3A]/8 px-3 py-1 text-xs font-semibold text-[#063F3A]">
                          {row.category}
                        </span>
                      </td>

                      <td className="p-4 text-[#64716C]">{row.count}</td>

                      <td className="p-4 font-semibold text-[#092E2A]">
                        {format(row.salary)}$
                      </td>

                      <td className="p-4 font-semibold text-[#063F3A]">
                        {format(row.count * row.salary)}$
                      </td>
                    </motion.tr>
                  ))}

                  <tr className="bg-[#092E2A] text-white">
                    <td className="p-4 text-lg font-semibold">الإجمالي</td>
                    <td className="p-4" />
                    <td className="p-4 font-semibold">{staffCount}</td>
                    <td className="p-4" />
                    <td className="p-4 text-xl font-semibold">
                      {format(totalSalaries)}$
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid gap-3 p-4 lg:hidden">
              {salaryRows.map((row, index) => (
                <motion.div
                  key={row.role}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.38, delay: index * 0.025 }}
                  className="rounded-[1.3rem] border border-[#063F3A]/10 bg-[#F7F4EE] p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-[#092E2A]">
                        {row.role}
                      </h4>
                      <p className="mt-1 text-sm text-[#64716C]">
                        {row.category} — العدد {row.count}
                      </p>
                    </div>

                    <p className="text-lg font-semibold text-[#063F3A]">
                      {format(row.count * row.salary)}$
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
            className="rounded-[1.8rem] bg-[#063F3A] p-7 text-white"
          >
            <p className="text-sm font-semibold text-[#9EF0C2]">
              ملخص المصاريف
            </p>

            <h3 className="mt-3 text-3xl font-semibold leading-tight">
              الرواتب هي بند التشغيل الأكبر
            </h3>

            <p className="mt-5 leading-8 text-white/64">
              تبلغ الرواتب {format(totalSalaries)} دولار شهريًا، وتمثل حوالي{" "}
              {salaryShare.toFixed(1)}% من إجمالي المصاريف التشغيلية الشهرية.
              لذلك يجب أن يرتبط حجم الكادر بساعات التشغيل الفعلية وحجم الحجوزات.
            </p>

            <div className="mt-8 overflow-hidden rounded-[1.4rem] border border-white/10">
              <div className="grid grid-cols-[1fr_0.8fr] bg-white/8 px-5 py-3 text-sm text-white/55">
                <span>البند</span>
                <span>الكلفة</span>
              </div>

              {otherCosts.map((row, index) => (
                <motion.div
                  key={row.item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.38, delay: index * 0.05 }}
                  className="grid grid-cols-[1fr_0.8fr] border-t border-white/10 px-5 py-4"
                >
                  <span className="text-white/70">{row.item}</span>
                  <span className="font-semibold text-[#9EF0C2]">
                    {format(row.amount)}$
                  </span>
                </motion.div>
              ))}

              <div className="grid grid-cols-[1fr_0.8fr] border-t border-white/10 px-5 py-4">
                <div>
                  <p className="text-white/70">الإيجار الشهري</p>
                  <p className="mt-1 text-sm leading-6 text-white/60">
                    المستثمر {format(monthlyRentPerPartner)} دولار
                    والشريك {format(monthlyRentPerPartner)} دولار.
                  </p>
                </div>
                <span className="font-semibold text-[#9EF0C2]">
                  {format(monthlyRent)}$
                </span>
              </div>

              <div className="grid grid-cols-[1fr_0.8fr] border-t border-white/10 bg-white/8 px-5 py-4">
                <span className="font-semibold">
                  إجمالي غير الرواتب مع الإيجار
                </span>
                <span className="font-semibold text-[#9EF0C2]">
                  {format(otherCostsTotal + monthlyRent)}$
                </span>
              </div>
            </div>

            <div className="mt-7 rounded-[1.4rem] border border-[#7BE0AE]/20 bg-[#7BE0AE]/10 p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-white/55">
                    إجمالي التشغيل الشهري
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white/62">
                    يشمل الرواتب، الكهرباء، الخدمات، الصيانة، التسويق، والإيجار.
                  </p>
                </div>

                <p className="min-w-fit text-2xl font-semibold text-[#9EF0C2]">
                  {format(monthlyOperatingCosts)}$
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-7 rounded-[1.4rem] border border-[#063F3A]/10 bg-white px-6 py-5 text-sm leading-7 text-[#5F6B67] shadow-sm"
        >
          ملاحظة: لا تشمل الأرقام أعلاه كلفة المواد الغذائية والمشروبات، لأنها
          ترتبط مباشرة بحجم المبيعات ونوع الطلبات، ويتم احتسابها ضمن نموذج
          الربحية وليس ضمن المصاريف التشغيلية الثابتة.
        </motion.p>
      </div>
    </section>
  );
}