"use client";

import { motion } from "framer-motion";

const format = (value: number) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(value);

const formatOne = (value: number) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 1,
  }).format(value);

const initialInvestment = 160000;
const totalTables = 40;
const monthlyFixedCosts = 23200;
const foodCostRate = 0.35;
const operatorShareRate = 0.4;

const scenarios = [
  {
    name: "سيناريو محافظ",
    averageTableSpend: 20,
    tableTurnoverPerDay: 1.4,
    operatingDays: 26,
    description: "تشغيل حذر بمتوسط دفع منخفض",
  },
  {
    name: "سيناريو متوسط",
    averageTableSpend: 35,
    tableTurnoverPerDay: 1.8,
    operatingDays: 28,
    description: "تشغيل مستقر وحركة جيدة",
  },
  {
    name: "سيناريو قوي",
    averageTableSpend: 50,
    tableTurnoverPerDay: 2,
    operatingDays: 30,
    description: "تشغيل مرتفع وحجوزات منتظمة",
  },
];
export default function InvestmentReturn() {
  return (
    <section
      id="roi"
      dir="rtl"
      className="relative overflow-hidden bg-white px-5 py-20 text-[#141111] md:px-10 md:py-28"
    >
      <div className="absolute right-0 top-0 h-[380px] w-[380px] rounded-bl-[9rem] bg-[#7A1018]/10" />
      <div className="absolute bottom-0 left-0 h-[340px] w-[340px] rounded-tr-[9rem] bg-black/[0.04]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="mb-4 inline-flex rounded-full border border-[#7A1018]/20 bg-[#F8F6F2] px-5 py-2 text-sm font-semibold text-[#7A1018]">
              العائد على الاستثمار
            </p>

            <h2 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
              مدة استرداد مبلغ 160,000 دولار ومؤشر ROI السنوي
            </h2>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#625955]">
  يوضح هذا القسم المدة التقديرية اللازمة لاسترداد مبلغ الاستثمار الأولي
  البالغ 160,000 دولار، بناءً على حصة المشغل من صافي الربح بعد خصم كلفة
  المواد والمصاريف التشغيلية الشهرية 
</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <MetricCard label="رأس المال الأولي" value="160K" suffix="$" />
            <MetricCard label="حصة المشغل" value="40" suffix="%" />
            <MetricCard label="كلفة المواد" value="35" suffix="%" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="mt-14 overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-xl shadow-black/5"
        >
          <div className="bg-[#141111] px-6 py-5 text-white">
            <h3 className="text-2xl font-bold">
              جدول مدة الاسترداد والعائد السنوي
            </h3>
            <p className="mt-2 text-sm text-white/60">
              Payback Period و ROI محسوبة على أساس حصة المشغل من صافي الربح
            </p>
          </div>

          <div className="hidden lg:block">
            <table className="w-full table-fixed border-collapse text-right">
              <thead>
                <tr className="border-b border-black/10 bg-[#F8F6F2]">
                  <th className="w-[18%] p-5 text-sm font-bold text-[#625955]">
                    السيناريو
                  </th>
                  <th className="w-[15%] p-5 text-sm font-bold text-[#625955]">
                    المبيعات الشهرية
                  </th>
                  <th className="w-[15%] p-5 text-sm font-bold text-[#625955]">
                    صافي ربح المشغل
                  </th>
                  <th className="w-[15%] p-5 text-sm font-bold text-[#625955]">
                    العائد السنوي
                  </th>
                  <th className="w-[15%] p-5 text-sm font-bold text-[#625955]">
                    مدة الاسترداد
                  </th>
                  <th className="w-[22%] p-5 text-sm font-bold text-[#625955]">
                    ROI السنوي
                  </th>
                </tr>
              </thead>

              <tbody>
                {scenarios.map((row, index) => {
                  const monthlyRevenue =
                    totalTables *
                    row.averageTableSpend *
                    row.tableTurnoverPerDay *
                    row.operatingDays;

                  const foodCost = monthlyRevenue * foodCostRate;
                  const netProfit =
                    monthlyRevenue - foodCost - monthlyFixedCosts;

                  const operatorMonthlyProfit =
                    netProfit > 0 ? netProfit * operatorShareRate : 0;

                  const operatorAnnualProfit = operatorMonthlyProfit * 12;

                  const paybackMonths =
                    operatorMonthlyProfit > 0
                      ? initialInvestment / operatorMonthlyProfit
                      : 0;

                  const annualROI =
                    (operatorAnnualProfit / initialInvestment) * 100;

                  const roiBar = Math.min(annualROI / 4, 100);

                  return (
                    <motion.tr
                      key={row.name}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.06 }}
                      className="border-b border-black/10 hover:bg-[#F8F6F2]"
                    >
                      <td className="p-5">
                        <p className="font-black text-[#141111]">{row.name}</p>
                        <p className="mt-1 text-xs leading-6 text-[#625955]">
                          {row.description}
                        </p>
                      </td>

                      <td className="p-5 text-xl font-black text-[#141111]">
                        {format(monthlyRevenue)}$
                      </td>

                      <td className="p-5 text-xl font-black text-[#141111]">
                        {format(operatorMonthlyProfit)}$
                      </td>

                      <td className="p-5 text-xl font-black text-[#141111]">
                        {format(operatorAnnualProfit)}$
                      </td>

                      <td className="p-5">
                        <span className="rounded-full bg-[#7A1018] px-4 py-2 text-sm font-black text-white">
                          {formatOne(paybackMonths)} شهر
                        </span>
                      </td>

                      <td className="p-5">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-xl font-black text-[#141111]">
                            {formatOne(annualROI)}%
                          </span>
                        </div>

                        <div className="h-3 overflow-hidden rounded-full bg-black/10">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${roiBar}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: 0.15 + index * 0.08,
                            }}
                            className="h-full rounded-full bg-gradient-to-l from-[#7A1018] to-[#D7A066]"
                          />
                        </div>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="grid gap-4 p-5 lg:hidden">
            {scenarios.map((row, index) => {
              const monthlyRevenue =
                totalTables *
                row.averageTableSpend *
                row.tableTurnoverPerDay *
                row.operatingDays;

              const foodCost = monthlyRevenue * foodCostRate;
              const netProfit = monthlyRevenue - foodCost - monthlyFixedCosts;

              const operatorMonthlyProfit =
                netProfit > 0 ? netProfit * operatorShareRate : 0;

              const operatorAnnualProfit = operatorMonthlyProfit * 12;

              const paybackMonths =
                operatorMonthlyProfit > 0
                  ? initialInvestment / operatorMonthlyProfit
                  : 0;

              const annualROI =
                (operatorAnnualProfit / initialInvestment) * 100;

              return (
                <motion.div
                  key={row.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-[1.5rem] border border-black/10 bg-[#F8F6F2] p-5"
                >
                  <h4 className="text-xl font-black">{row.name}</h4>
                  <p className="mt-1 text-sm text-[#625955]">
                    {row.description}
                  </p>

                  <div className="mt-5 grid gap-3">
                    <MobileRow label="المبيعات الشهرية" value={`${format(monthlyRevenue)}$`} />
                    <MobileRow label="صافي ربح المشغل" value={`${format(operatorMonthlyProfit)}$`} />
                    <MobileRow label="العائد السنوي" value={`${format(operatorAnnualProfit)}$`} />
                    <MobileRow label="مدة الاسترداد" value={`${formatOne(paybackMonths)} شهر`} highlight />
                    <MobileRow label="ROI السنوي" value={`${formatOne(annualROI)}%`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
            className="rounded-[2rem] bg-[#7A1018] p-8 text-white shadow-xl shadow-[#7A1018]/20 md:p-10"
          >
            <p className="text-sm font-semibold text-white/70">
              معادلة الاسترداد
            </p>

            <h3 className="mt-3 text-3xl font-bold leading-tight">
              Payback Period = الاستثمار الأولي ÷ صافي الربح الشهري للمشغل
            </h3>

            <p className="mt-5 leading-9 text-white/75">
              كلما ارتفع صافي الربح الشهري، انخفضت مدة استرداد رأس المال. لذلك
              فإن تحسين متوسط صرف الطاولة وزيادة معدل دوران الطاولات ينعكسان
              مباشرة على سرعة استرداد الاستثمار.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
            className="rounded-[2rem] bg-[#141111] p-8 text-white shadow-xl shadow-black/20 md:p-10"
          >
            <p className="text-sm font-semibold text-[#D7A066]">
              معادلة ROI
            </p>

            <h3 className="mt-3 text-3xl font-bold leading-tight">
              ROI = العائد السنوي الصافي ÷ الاستثمار الأولي × 100
            </h3>

            <p className="mt-5 leading-9 text-white/65">
              يستخدم هذا المؤشر لقياس كفاءة رأس المال المستثمر. في هذه الدراسة
              تم احتساب ROI على أساس حصة المشغل السنوية من صافي الربح مقابل
              مبلغ الدخول البالغ 160,000 دولار.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({
  label,
  value,
  suffix,
}: {
  label: string;
  value: string;
  suffix: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-[2rem] bg-[#141111] p-6 text-white shadow-xl shadow-black/10"
    >
      <p className="text-sm text-white/55">{label}</p>
      <p className="mt-3 text-4xl font-black">
        {value}
        <span className="mr-1 text-base text-[#D7A066]">{suffix}</span>
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
        highlight ? "bg-[#7A1018] text-white" : "bg-white"
      }`}
    >
      <span className={highlight ? "text-white/70" : "text-[#625955]"}>
        {label}
      </span>
      <span className="font-black">{value}</span>
    </div>
  );
}