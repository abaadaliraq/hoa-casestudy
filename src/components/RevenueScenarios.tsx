"use client";

import { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";
import {
  balancedScenario,
  calculatedScenarios,
  investorSharePercent,
  monthlyOperatingCosts,
  tableCount,
} from "./feasibilityModel";

const format = (value: number) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(value);

const guestCapacity = 120;

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

export default function RevenueScenarios() {
  return (
    <section
      id="revenue"
      dir="rtl"
      className="relative overflow-hidden bg-white py-20 md:py-24"
    >
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#7BE0AE]/18 blur-3xl" />
      <div className="absolute bottom-[-140px] right-[-140px] h-[360px] w-[360px] rounded-full bg-[#063F3A]/8 blur-3xl" />

      <div className="relative mx-auto max-w-[1600px] px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
          >
            <p className="mb-5 inline-flex rounded-full border border-[#063F3A]/15 bg-[#F7F4EE] px-4 py-2 text-sm font-semibold text-[#063F3A]">
              الإيرادات والربحية
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.02em] text-[#092E2A] md:text-5xl">
              صافي الربح وحصة المستثمر بعد خصم كل المصاريف
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5F6B67]">
              يوضح الجدول إيرادات الطاولات حسب معدل الطاولة ودورانها وأيام
              التشغيل الفعلية، مع خصم أيام الحجز الخاص من التشغيل اليومي لدار الضيافة واحتسابها
              ضمن الإيرادات المساندة.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-4">
            <IndicatorCard
              label="عدد الطاولات"
              value={tableCount}
              suffix=" طاولة"
            />
            <IndicatorCard
              label="الاستيعاب"
              value={guestCapacity}
              suffix=" شخص"
            />
            <IndicatorCard
              label="المصاريف التشغيلية"
              value={monthlyOperatingCosts}
              suffix="$"
            />
            <IndicatorCard
              label="حصة المستثمر المتوازنة"
              value={balancedScenario.investorMonthlyShare}
              suffix="$"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="mt-12 overflow-hidden rounded-[1.8rem] border border-[#063F3A]/10 bg-white shadow-xl shadow-[#063F3A]/5"
        >
          <div className="border-b border-[#063F3A]/10 bg-[#063F3A] px-5 py-4 text-white">
            <h3 className="text-xl font-semibold">جدول السيناريوهات المالية</h3>
            <p className="mt-1 text-sm text-white/55">
              صافي الربح = إجمالي الإيراد − خصم المواد والتهيئة − المصاريف التشغيلية
            </p>
          </div>

          <div className="hidden xl:block">
            <table className="w-full table-fixed border-collapse text-right">
              <thead>
                <tr className="border-b border-[#063F3A]/10 bg-[#F7F4EE]">
                  <th className="w-[12%] p-4 text-sm font-semibold text-[#64716C]">
                    السيناريو
                  </th>
                  <th className="w-[7%] p-4 text-sm font-semibold text-[#64716C]">
                    معدل الطاولة
                  </th>
                  <th className="w-[7%] p-4 text-sm font-semibold text-[#64716C]">
                    دوران يومي
                  </th>
                  <th className="w-[7%] p-4 text-sm font-semibold text-[#64716C]">
                    أيام دار الضيافة
                  </th>
                  <th className="w-[7%] p-4 text-sm font-semibold text-[#64716C]">
                    أيام الحجز
                  </th>
                  <th className="w-[10%] p-4 text-sm font-semibold text-[#64716C]">
                    إيراد الطاولات
                  </th>
                  <th className="w-[9%] p-4 text-sm font-semibold text-[#64716C]">
                    إيرادات مساندة
                  </th>
                  <th className="w-[10%] p-4 text-sm font-semibold text-[#64716C]">
                    إجمالي الإيراد
                  </th>
                  <th className="w-[10%] p-4 text-sm font-semibold text-[#64716C]">
                    خصم المواد والتهيئة
                  </th>
                  <th className="w-[9%] p-4 text-sm font-semibold text-[#64716C]">
                    مصاريف تشغيلية
                  </th>
                  <th className="w-[6%] p-4 text-sm font-semibold text-[#64716C]">
                    صافي الربح
                  </th>
                  <th className="w-[6%] p-4 text-sm font-semibold text-[#64716C]">
                    حصة المستثمر
                  </th>
                </tr>
              </thead>

              <tbody>
                {calculatedScenarios.map((row, index) => {
                  const barValue = Math.min((row.netProfit / 65000) * 100, 100);

                  return (
                    <motion.tr
                      key={row.name}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.38, delay: index * 0.06 }}
                      className="border-b border-[#063F3A]/10 transition-colors hover:bg-[#F7F4EE]"
                    >
                      <td className="p-4">
                        <p className="font-semibold text-[#092E2A]">
                          {row.name}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-[#64716C]">
                          {row.revenueDescription}
                        </p>
                      </td>

                      <td className="p-4 font-semibold text-[#063F3A]">
                        {format(row.averageTableSpend)}$
                      </td>

                      <td className="p-4 font-semibold text-[#092E2A]">
                        {row.tableTurnoverPerDay} مرة
                      </td>

                      <td className="p-4 font-semibold text-[#092E2A]">
                        {row.hospitalityOperatingDays} يوم
                      </td>

                      <td className="p-4 font-semibold text-[#9B2C2C]">
                        {row.eventClosedDays} يوم
                      </td>

                      <td className="p-4">
                        <p className="font-semibold text-[#092E2A]">
                          {format(row.tableRevenue)}$
                        </p>
                        <p className="mt-1 text-[11px] leading-5 text-[#64716C]">
                          40 × {format(row.averageTableSpend)} ×{" "}
                          {row.tableTurnoverPerDay} ×{" "}
                          {row.hospitalityOperatingDays}
                        </p>
                      </td>

                      <td className="p-4 font-semibold text-[#063F3A]">
                        {format(row.supportRevenue)}$
                      </td>

                      <td className="p-4 font-semibold text-[#092E2A]">
                        {format(row.totalRevenue)}$
                      </td>

                      <td className="p-4">
                        <p className="font-semibold text-[#9B2C2C]">
                          {format(row.directCosts)}$
                        </p>
                        <p className="mt-1 text-[11px] leading-5 text-[#64716C]">
                          35% مواد ضيافة + 20% تهيئة حجوزات
                        </p>
                      </td>

                      <td className="p-4">
                        <p className="font-semibold text-[#9B2C2C]">
                          {format(monthlyOperatingCosts)}$
                        </p>
                        <p className="mt-1 text-[11px] leading-5 text-[#64716C]">
                          رواتب، كهرباء، خدمات، صيانة، تسويق، إيجار
                        </p>
                      </td>

                      <td className="p-4">
                        <p className="text-lg font-semibold text-[#063F3A]">
                          {format(row.netProfit)}$
                        </p>

                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#063F3A]/10">
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

                        <p className="mt-1 text-[11px] text-[#64716C]">
                          {format(row.dailyNetProfit)}$ يوميًا
                        </p>
                      </td>

                      <td className="p-4">
                        <p className="text-lg font-semibold text-[#092E2A]">
                          {format(row.investorMonthlyShare)}$
                        </p>
                        <p className="mt-1 text-[11px] text-[#64716C]">
                          {investorSharePercent}% من الصافي
                        </p>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="grid gap-4 p-4 xl:hidden">
            {calculatedScenarios.map((row, index) => (
              <motion.div
                key={row.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.38, delay: index * 0.05 }}
                className="rounded-[1.4rem] border border-[#063F3A]/10 bg-[#F7F4EE] p-5"
              >
                <h4 className="text-lg font-semibold text-[#092E2A]">
                  {row.name}
                </h4>

                <p className="mt-1 text-sm leading-6 text-[#64716C]">
                  {row.revenueDescription}
                </p>

                <div className="mt-5 grid gap-3">
                  <MobileRow
                    label="معدل الطاولة"
                    value={`${format(row.averageTableSpend)}$`}
                  />
                  <MobileRow
                    label="دوران الطاولة يوميًا"
                    value={`${row.tableTurnoverPerDay} مرة`}
                  />
                  <MobileRow
                    label="أيام التشغيل اليومي لدار الضيافة"
                    value={`${row.hospitalityOperatingDays} يوم`}
                  />
                  <MobileRow
                    label="أيام الحجز الخاص"
                    value={`${row.eventClosedDays} يوم`}
                  />
                  <MobileRow
                    label="إيراد الطاولات"
                    value={`${format(row.tableRevenue)}$`}
                  />
                  <MobileRow
                    label="إيرادات مساندة"
                    value={`${format(row.supportRevenue)}$`}
                  />
                  <MobileRow
                    label="إجمالي الإيراد"
                    value={`${format(row.totalRevenue)}$`}
                  />
                  <MobileRow
                    label="خصم المواد والتهيئة"
                    value={`${format(row.directCosts)}$`}
                  />
                  <MobileRow
                    label="المصاريف التشغيلية"
                    value={`${format(monthlyOperatingCosts)}$`}
                  />
                  <MobileRow
                    label="صافي الربح"
                    value={`${format(row.netProfit)}$`}
                    highlight
                  />
                  <MobileRow
                    label="صافي يومي"
                    value={`${format(row.dailyNetProfit)}$`}
                  />
                  <MobileRow
                    label={`حصة المستثمر ${investorSharePercent}%`}
                    value={`${format(row.investorMonthlyShare)}$`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="mt-8 rounded-[1.8rem] bg-[#063F3A] p-7 text-white"
        >
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-[#9EF0C2]">
                طريقة الاحتساب
              </p>

              <h3 className="mt-3 text-3xl font-semibold leading-tight">
                صافي الربح يظهر بعد خصم كل المصاريف
              </h3>
            </div>

            <p className="leading-8 text-white/66">
              يتم احتساب إيراد الطاولات وفق عدد الطاولات ومعدل الطاولة ودورانها
              وأيام التشغيل اليومي لدار الضيافة فقط. أما يوم الحجز الخاص فتتوقف فيه خدمة الكافيه
              ويُحسب ضمن الإيرادات المساندة. بعدها تُخصم كلفة مواد الضيافة،
              كلفة تهيئة الحجوزات، والمصاريف التشغيلية الشهرية، ثم تُحسب حصة
              المستثمر بنسبة {investorSharePercent}% من صافي أرباح الكافيه والحجوزات والفعاليات.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function IndicatorCard({
  label,
  value,
  suffix,
}: {
  label: string;
  value: number;
  suffix: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="rounded-[1.3rem] border border-[#063F3A]/10 bg-[#F7F4EE] p-5"
    >
      <p className="text-sm leading-6 text-[#64716C]">{label}</p>

      <p className="mt-3 text-2xl font-semibold text-[#092E2A] md:text-3xl">
        <CountUp value={value} suffix={suffix} />
      </p>
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
        highlight ? "bg-[#063F3A] text-white" : "bg-white"
      }`}
    >
      <span className={highlight ? "text-white/65" : "text-[#64716C]"}>
        {label}
      </span>
      <span className="font-semibold text-left">{value}</span>
    </div>
  );
}