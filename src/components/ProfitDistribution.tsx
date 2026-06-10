"use client";

import { motion } from "framer-motion";

const format = (value: number) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(value);

const totalTables = 40;
const guestCapacity = 120;
const monthlyFixedCosts = 23200;
const foodCostRate = 0.35;
const operatorShareRate = 0.4;

const scenarios = [
  {
    name: "سيناريو محافظ",
    averageTableSpend: 20,
    tableTurnoverPerDay: 1.4,
    operatingDays: 26,
  },
  {
    name: "سيناريو متوسط",
    averageTableSpend: 35,
    tableTurnoverPerDay: 1.8,
    operatingDays: 28,
  },
  {
    name: "سيناريو قوي",
    averageTableSpend: 50,
    tableTurnoverPerDay: 2,
    operatingDays: 30,
  },
];

export default function ProfitDistribution() {
  const breakEvenRevenue = monthlyFixedCosts / (1 - foodCostRate);

  return (
    <section
      id="distribution"
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
              نموذج توزيع العائد
            </p>

            <h2 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
              قراءة صافي التشغيل وحصة المشغل حسب سيناريوهات الإيراد
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-9 text-white/65">
              يوضح هذا القسم صافي التشغيل المتوقع بعد خصم كلفة المواد والمصاريف
              الشهرية الثابتة، ثم احتساب حصة المشغل بنسبة 40% من صافي التشغيل
              في كل سيناريو.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <TopMetric
              label="عدد الطاولات"
              value={format(totalTables)}
              suffix="طاولة"
              note="طاقة تشغيلية معتمدة في الدراسة"
            />
            <TopMetric
              label="الاستيعاب التقريبي"
              value={format(guestCapacity)}
              suffix="شخص"
              note="بمعدل 3 أشخاص للطاولة"
            />
            <TopMetric
              label="حصة المشغل"
              value="40"
              suffix="%"
              note="من صافي التشغيل بعد المصاريف"
            />
            <TopMetric
              label="نقطة التعادل"
              value={format(Math.ceil(breakEvenRevenue))}
              suffix="$"
              note="مبيعات شهرية تقريبية"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/30 backdrop-blur"
        >
          <div className="border-b border-white/10 bg-[#7A1018] px-6 py-5">
            <h3 className="text-2xl font-bold">جدول توزيع صافي التشغيل</h3>
            <p className="mt-2 text-sm text-white/70">
              يوضح الجدول المبيعات الشهرية، صافي التشغيل، وحصة المشغل حسب كل
              سيناريو.
            </p>
          </div>

          <div className="hidden lg:block">
            <table className="w-full table-fixed border-collapse text-right">
              <thead>
                <tr className="border-b border-white/10 bg-black/25">
                  <th className="w-[25%] p-5 text-sm font-bold text-white/70">
                    السيناريو
                  </th>
                  <th className="w-[25%] p-5 text-sm font-bold text-white/70">
                    المبيعات الشهرية
                  </th>
                  <th className="w-[25%] p-5 text-sm font-bold text-white/70">
                    صافي التشغيل
                  </th>
                  <th className="w-[25%] p-5 text-sm font-bold text-white/70">
                    حصة المشغل 40%
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

                  const operatorProfitShare =
                    netProfit > 0 ? netProfit * operatorShareRate : 0;

                  const isProfitable = netProfit > 0;

                  return (
                    <motion.tr
                      key={row.name}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.06 }}
                      className="border-b border-white/10 transition-colors duration-300 hover:bg-white/[0.05]"
                    >
                      <td className="p-5">
                        <p className="font-black text-white">{row.name}</p>
                        <p className="mt-1 text-xs leading-6 text-white/45">
                          {row.averageTableSpend}$ × {row.tableTurnoverPerDay} ×{" "}
                          {row.operatingDays} يوم
                        </p>
                      </td>

                      <td className="p-5 text-xl font-black text-white">
                        {format(monthlyRevenue)}$
                      </td>

                      <td
                        className={`p-5 text-xl font-black ${
                          isProfitable ? "text-white" : "text-[#B5121B]"
                        }`}
                      >
                        {format(netProfit)}$
                      </td>

                      <td className="p-5">
                        <span className="inline-flex rounded-full bg-[#7A1018] px-4 py-2 text-sm font-black text-white">
                          {format(operatorProfitShare)}$
                        </span>
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

              const operatorProfitShare =
                netProfit > 0 ? netProfit * operatorShareRate : 0;

              return (
                <motion.div
                  key={row.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5"
                >
                  <h4 className="text-xl font-black">{row.name}</h4>
                  <p className="mt-1 text-xs text-white/45">
                    {row.averageTableSpend}$ × {row.tableTurnoverPerDay} ×{" "}
                    {row.operatingDays} يوم
                  </p>

                  <div className="mt-5 grid gap-3">
                    <MobileRow
                      label="المبيعات الشهرية"
                      value={`${format(monthlyRevenue)}$`}
                    />
                    <MobileRow
                      label="صافي التشغيل"
                      value={`${format(netProfit)}$`}
                    />
                    <MobileRow
                      label="حصة المشغل 40%"
                      value={`${format(operatorProfitShare)}$`}
                      highlight
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-2xl shadow-black/30 backdrop-blur md:p-10"
        >
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold text-[#B5121B]">
                قراءة مالية مباشرة
              </p>

              <h3 className="mt-3 text-3xl font-bold leading-tight">
                حصة المشغل تتحسن بوضوح عند الوصول إلى السيناريو المتوسط
              </h3>

              <p className="mt-5 leading-8 text-white/60">
                بعد تحديث الكلفة التشغيلية وعدد الطاولات، يصبح الفرق واضحًا بين
                التشغيل المحافظ والتشغيل المستقر. السيناريو المتوسط يوفر صافي
                تشغيل قابل للتوزيع، بينما يمنح السيناريو القوي عائدًا أعلى عند
                رفع معدل دوران الطاولة ومتوسط الصرف.
              </p>
            </div>

            <div className="space-y-5">
              {scenarios.map((row, index) => {
                const monthlyRevenue =
                  totalTables *
                  row.averageTableSpend *
                  row.tableTurnoverPerDay *
                  row.operatingDays;

                const foodCost = monthlyRevenue * foodCostRate;
                const netProfit = monthlyRevenue - foodCost - monthlyFixedCosts;

                const operatorProfitShare =
                  netProfit > 0 ? netProfit * operatorShareRate : 0;

                const maxValue = 25000;
                const percentage = Math.min(
                  (operatorProfitShare / maxValue) * 100,
                  100
                );

                return (
                  <div key={row.name}>
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <span className="text-sm text-white/70">{row.name}</span>
                      <span className="text-sm font-bold text-white">
                        {format(operatorProfitShare)}$
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

              <div className="rounded-[1.5rem] border border-[#B5121B]/40 bg-[#B5121B]/15 p-5">
                <p className="text-sm font-semibold text-white">
                  ملاحظة تشغيلية
                </p>

                <p className="mt-3 leading-8 text-white/70">
                  تعتمد قوة نموذج التوزيع على الوصول إلى مبيعات شهرية تتجاوز
                  نقطة التعادل بوضوح. لذلك يصبح ضبط الحجوزات، متوسط صرف الطاولة،
                  وحركة الجلسات اليومية عناصر أساسية في تحقيق عائد منتظم.
                </p>
              </div>
            </div>
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
      className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur"
    >
      <p className="text-sm text-white/55">{label}</p>

      <p className="mt-3 text-4xl font-black text-white">
        {value}
        <span className="mr-1 text-base text-[#B5121B]">{suffix}</span>
      </p>

      <p className="mt-3 text-sm leading-6 text-white/45">{note}</p>
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
        highlight ? "bg-[#7A1018]" : "bg-white/10"
      }`}
    >
      <span className="text-sm text-white/60">{label}</span>
      <span className="font-black text-white">{value}</span>
    </div>
  );
}