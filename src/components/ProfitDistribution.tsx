"use client";

import { motion } from "framer-motion";
import {
  balancedScenario,
  calculatedScenarios,
  investmentAmount,
  investorSharePercent,
  monthlyOperatingCosts,
} from "./feasibilityModel";

const format = (value: number) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(value);

const maxInvestorMonthlyShare = Math.max(
  ...calculatedScenarios.map((row) => row.investorMonthlyShare),
);

export default function ProfitDistribution() {
  return (
    <section
      id="distribution"
      dir="rtl"
      className="relative overflow-hidden bg-[#063F3A] px-5 py-20 text-white md:px-10 md:py-24"
    >
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#7BE0AE]/16 blur-3xl" />
      <div className="absolute bottom-[-140px] right-[-140px] h-[360px] w-[360px] rounded-full bg-black/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
          >
            <p className="mb-5 inline-flex rounded-full border border-[#7BE0AE]/25 bg-white/8 px-4 py-2 text-sm font-semibold text-[#BFF5DA] backdrop-blur">
              توزيع العائد
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.02em] md:text-5xl">
              حصة المستثمر من صافي أرباح دار الضيافة
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/64">
              يحصل المستثمر خلال السنتين على {investorSharePercent}% من صافي أرباح الكافيه
              والحجوزات والفعاليات بعد خصم كلفة المواد والتهيئة والمصاريف التشغيلية.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-4">
            <TopMetric
              label="رأس المال"
              value={format(investmentAmount)}
              suffix="$"
              note="قيمة الدخول الاستثمارية"
            />

            <TopMetric
              label="المصاريف الشهرية"
              value={format(monthlyOperatingCosts)}
              suffix="$"
              note="تشمل الرواتب، الخدمات، التسويق، والإيجار"
            />

            <TopMetric
              label="حصة المستثمر"
              value={String(investorSharePercent)}
              suffix="%"
              note="من صافي الربح بعد كل الخصومات"
            />

            <TopMetric
              label="حصة متوازنة"
              value={format(balancedScenario.investorMonthlyShare)}
              suffix="$"
              note="حصة المستثمر الشهرية في التشغيل المتوازن"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="mt-12 overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/25 backdrop-blur"
        >
          <div className="border-b border-white/10 bg-[#052B28] px-6 py-5">
            <h3 className="text-xl font-semibold">جدول توزيع صافي الربح</h3>
            <p className="mt-2 text-sm text-white/55">
              التوزيع محسوب بعد خصم كلفة المواد والتهيئة والمصاريف التشغيلية الشهرية.
            </p>
          </div>

          <div className="hidden lg:block">
            <table className="w-full table-fixed border-collapse text-right">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.06]">
                  <th className="w-[18%] p-5 text-sm font-semibold text-white/55">
                    السيناريو
                  </th>
                  <th className="w-[16%] p-5 text-sm font-semibold text-white/55">
                    إجمالي الإيراد
                  </th>
                  <th className="w-[16%] p-5 text-sm font-semibold text-white/55">
                    الخصومات
                  </th>
                  <th className="w-[16%] p-5 text-sm font-semibold text-white/55">
                    صافي الربح
                  </th>
                  <th className="w-[17%] p-5 text-sm font-semibold text-white/55">
                    حصة المستثمر شهريًا
                  </th>
                  <th className="w-[17%] p-5 text-sm font-semibold text-white/55">
                    حصة المستثمر سنويًا
                  </th>
                </tr>
              </thead>

              <tbody>
                {calculatedScenarios.map((row, index) => {
                  const totalDeductions = row.directCosts + monthlyOperatingCosts;
                  const barValue = Math.min(
                    (row.investorMonthlyShare / maxInvestorMonthlyShare) * 100,
                    100
                  );

                  return (
                    <motion.tr
                      key={row.name}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.42, delay: index * 0.06 }}
                      className="border-b border-white/10 transition-colors hover:bg-white/[0.05]"
                    >
                      <td className="p-5">
                        <p className="font-semibold text-white">{row.name}</p>
                        <p className="mt-1 text-xs leading-5 text-white/45">
                          {row.description}
                        </p>
                      </td>

                      <td className="p-5 text-lg font-semibold text-white">
                        {format(row.totalRevenue)}$
                      </td>

                      <td className="p-5">
                        <p className="font-semibold text-[#FCA5A5]">
                          {format(totalDeductions)}$
                        </p>
                        <p className="mt-1 text-xs leading-5 text-white/40">
                          مواد وتهيئة + مصاريف تشغيلية
                        </p>
                      </td>

                      <td className="p-5">
                        <p className="text-lg font-semibold text-[#9EF0C2]">
                          {format(row.netProfit)}$
                        </p>
                      </td>

                      <td className="p-5">
                        <p className="text-xl font-semibold text-white">
                          {format(row.investorMonthlyShare)}$
                        </p>

                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${Math.max(barValue, 4)}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.9,
                              delay: 0.15 + index * 0.08,
                            }}
                            className="h-full rounded-full bg-[#7BE0AE]"
                          />
                        </div>

                        <p className="mt-1 text-xs text-white/40">
                          {investorSharePercent}% من صافي الربح
                        </p>
                      </td>

                      <td className="p-5 text-lg font-semibold text-white">
                        {format(row.investorAnnualShare)}$
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="grid gap-4 p-5 lg:hidden">
            {calculatedScenarios.map((row, index) => {
              const totalDeductions = row.directCosts + monthlyOperatingCosts;

              return (
                <motion.div
                  key={row.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.42, delay: index * 0.06 }}
                  className="rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-5"
                >
                  <h4 className="text-lg font-semibold text-white">
                    {row.name}
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-white/45">
                    {row.description}
                  </p>

                  <div className="mt-5 grid gap-3">
                    <MobileRow
                      label="إجمالي الإيراد"
                      value={`${format(row.totalRevenue)}$`}
                    />
                    <MobileRow
                      label="إجمالي الخصومات"
                      value={`${format(totalDeductions)}$`}
                    />
                    <MobileRow
                      label="صافي الربح"
                      value={`${format(row.netProfit)}$`}
                    />
                    <MobileRow
                      label="حصة المستثمر شهريًا"
                      value={`${format(row.investorMonthlyShare)}$`}
                      highlight
                    />
                    <MobileRow
                      label="حصة المستثمر سنويًا"
                      value={`${format(row.investorAnnualShare)}$`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {calculatedScenarios.map((row, index) => (
            <motion.div
              key={row.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur"
            >
              <p className="text-sm text-white/50">{row.name}</p>

              <p className="mt-3 text-3xl font-semibold text-[#9EF0C2]">
                {format(row.investorMonthlyShare)}$
              </p>

              <p className="mt-3 text-sm leading-6 text-white/50">
                حصة المستثمر الشهرية المتوقعة وفق هذا السيناريو.
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="mt-8 rounded-[1.8rem] border border-[#7BE0AE]/20 bg-[#7BE0AE]/10 p-7"
        >
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-[#9EF0C2]">
                طريقة التوزيع
              </p>

              <h3 className="mt-3 text-3xl font-semibold leading-tight text-white">
                حصة المستثمر لا تُحسب من الإيراد الخام
              </h3>
            </div>

            <p className="leading-8 text-white/66">
              يتم أولًا خصم كلفة المواد والتهيئة والمصاريف التشغيلية الشهرية من
              إجمالي الإيرادات. بعد ظهور صافي الربح، تُحتسب حصة المستثمر بنسبة
              {investorSharePercent}% من هذا الصافي.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TopMetric({
  label,
  value,
  suffix,
  note,
}: {
  label: string;
  value: string;
  suffix: string;
  note: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur"
    >
      <p className="text-sm text-white/55">{label}</p>

      <p className="mt-3 text-3xl font-semibold text-white">
        {value}
        <span className="mr-1 text-base text-[#9EF0C2]">{suffix}</span>
      </p>

      <p className="mt-3 text-sm leading-6 text-white/42">{note}</p>
    </motion.div>
  );
}

function MobileRow({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-4 rounded-2xl p-3 ${
        highlight ? "bg-[#7BE0AE] text-[#063F3A]" : "bg-white/10 text-white"
      }`}
    >
      <span className={highlight ? "text-[#063F3A]/70" : "text-white/60"}>
        {label}
      </span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}