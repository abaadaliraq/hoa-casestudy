"use client";

import { motion } from "framer-motion";

const format = (value: number) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(value);

const tableCount = 40;
const guestCapacity = 120;
const averageGuestsPerTable = guestCapacity / tableCount;

const monthlyFixedCosts = 23200;
const foodCostRate = 0.35;

const revenueScenarios = [
  {
    name: "سيناريو محافظ",
    averageTableSpend: 20,
    tableTurnoverPerDay: 1.4,
    operatingDays: 26,
    note: "تشغيل حذر بمتوسط دفع منخفض، مناسب كبداية تشغيل أو أيام الحركة الهادئة.",
  },
  {
    name: "سيناريو متوسط",
    averageTableSpend: 35,
    tableTurnoverPerDay: 1.8,
    operatingDays: 28,
    note: "تشغيل مستقر مع تحسن الإشغال ومتوسط صرف الطاولة وحركة جيدة في الجلسات.",
  },
  {
    name: "سيناريو قوي",
    averageTableSpend: 50,
    tableTurnoverPerDay: 2,
    operatingDays: 30,
    note: "تشغيل مرتفع مع حجوزات منتظمة وتجربة ضيافة ذات تسعير أفضل.",
  },
];

export default function RevenueScenarios() {
  const breakEvenRevenue = monthlyFixedCosts / (1 - foodCostRate);
  const breakEvenPerDay = breakEvenRevenue / 30;
  const breakEvenPerTableMonthly = breakEvenRevenue / tableCount;

  return (
    <section
      id="feasibility"
      dir="rtl"
      className="relative overflow-hidden bg-white px-5 py-20 md:px-10 md:py-28"
    >
      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-br-[9rem] bg-[#7A1018]/10" />
      <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-tl-[9rem] bg-black/[0.04]" />

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
              الإيرادات ونقطة التعادل
            </p>

            <h2 className="max-w-3xl text-3xl font-bold leading-tight text-[#141111] md:text-5xl">
              الإيراد يعتمد على 40 طاولة ومتوسط دفع يتراوح بين 18 و50 دولارًا
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-9 text-[#625955]">
              تعتمد تقديرات الإيرادات على طاقة تشغيلية مقدارها 40 طاولة تستوعب
              حوالي 120 شخصًا، أي بمعدل 3 أشخاص للطاولة. بعد تحديث الكلفة
              التشغيلية الشهرية إلى 23,200 دولار، أصبحت نقطة التعادل أقل وأكثر
              قابلية للتحقق مقارنة بالحساب السابق.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard label="عدد الطاولات" value={tableCount} suffix="طاولة" />
            <StatCard label="الاستيعاب الكلي" value={guestCapacity} suffix="شخص" />
            <StatCard
              label="المصاريف الشهرية"
              value={monthlyFixedCosts}
              suffix="$"
            />
            <StatCard
              label="نقطة التعادل"
              value={Math.ceil(breakEvenRevenue)}
              suffix="$"
            />
          </div>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
            className="rounded-[2rem] bg-[#141111] p-7 text-white shadow-2xl shadow-black/20"
          >
            <p className="text-sm font-semibold text-[#B5121B]">
              الطاقة التشغيلية
            </p>

            <h3 className="mt-3 text-3xl font-bold leading-tight">
              40 طاولة بطاقة استيعابية تقارب 120 شخصًا
            </h3>

            <p className="mt-5 leading-8 text-white/60">
              هذا الرقم يمثل الطاقة التشغيلية المعتمدة في الدراسة. الإيراد
              الفعلي لا يعتمد على عدد الطاولات فقط، بل على عدد مرات إشغال الطاولة
              خلال اليوم، ومتوسط الدفع لكل طاولة.
            </p>

            <div className="mt-8 grid gap-4">
              <CapacityRow label="عدد الطاولات" value="40" suffix="طاولة" />
              <CapacityRow label="الاستيعاب" value="120" suffix="شخص" />
              <CapacityRow label="متوسط الأشخاص للطاولة" value="3" suffix="أشخاص" />
              <CapacityRow label="متوسط الدفع المعتمد" value="18–50" suffix="$" />
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-[#B5121B]/40 bg-[#B5121B]/15 p-5">
              <p className="text-sm font-semibold text-white">
                قراءة مهمة
              </p>

              <p className="mt-3 leading-8 text-white/65">
                بعد تخفيض الكلفة التشغيلية الشهرية إلى 23,200 دولار، أصبح
                السيناريو المحافظ قريبًا من نقطة التعادل، بينما يبدأ الربح
                التشغيلي الواضح عند الوصول إلى متوسط دفع 35 دولارًا للطاولة
                وما فوق.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
            className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-xl shadow-black/5"
          >
            <div className="bg-[#7A1018] px-6 py-5 text-white">
              <h3 className="text-2xl font-bold">جدول سيناريوهات الإيراد</h3>
              <p className="mt-2 text-sm text-white/70">
                الإيراد محسوب على أساس 40 طاولة وكلفة مواد تقديرية 35%
              </p>
            </div>

            <div className="hidden lg:block">
              <table className="w-full table-fixed border-collapse text-right">
                <thead>
                  <tr className="border-b border-black/10 bg-[#F8F6F2]">
                    <th className="w-[18%] p-5 text-sm font-bold text-[#625955]">
                      السيناريو
                    </th>
                    <th className="w-[14%] p-5 text-sm font-bold text-[#625955]">
                      دفع الطاولة
                    </th>
                    <th className="w-[14%] p-5 text-sm font-bold text-[#625955]">
                      دوران يومي
                    </th>
                    <th className="w-[14%] p-5 text-sm font-bold text-[#625955]">
                      أيام التشغيل
                    </th>
                    <th className="w-[16%] p-5 text-sm font-bold text-[#625955]">
                      الإيراد الشهري
                    </th>
                    <th className="w-[14%] p-5 text-sm font-bold text-[#625955]">
                      صافي التشغيل
                    </th>
                    <th className="w-[10%] p-5 text-sm font-bold text-[#625955]">
                      الحالة
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {revenueScenarios.map((row, index) => {
                    const monthlyRevenue =
                      tableCount *
                      row.averageTableSpend *
                      row.tableTurnoverPerDay *
                      row.operatingDays;

                    const foodCost = monthlyRevenue * foodCostRate;
                    const netBeforeDistribution =
                      monthlyRevenue - foodCost - monthlyFixedCosts;

                    const isProfitable = netBeforeDistribution > 0;

                    const barValue = Math.min(
                      (monthlyRevenue / (breakEvenRevenue * 2)) * 100,
                      100
                    );

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
                            {row.note}
                          </p>
                        </td>

                        <td className="p-5 font-bold text-[#141111]">
                          {format(row.averageTableSpend)}$
                        </td>

                        <td className="p-5 font-bold text-[#141111]">
                          {row.tableTurnoverPerDay} مرة
                        </td>

                        <td className="p-5 font-bold text-[#141111]">
                          {row.operatingDays} يوم
                        </td>

                        <td className="p-5">
                          <div className="mb-2 text-xl font-black text-[#141111]">
                            {format(monthlyRevenue)}$
                          </div>

                          <div className="h-2 overflow-hidden rounded-full bg-black/10">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${barValue}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.9,
                                delay: 0.15 + index * 0.08,
                              }}
                              className="h-full rounded-full bg-[#7A1018]"
                            />
                          </div>
                        </td>

                        <td
                          className={`p-5 text-xl font-black ${
                            isProfitable ? "text-[#141111]" : "text-[#7A1018]"
                          }`}
                        >
                          {format(netBeforeDistribution)}$
                        </td>

                        <td className="p-5">
                          <span
                            className={`inline-flex rounded-full px-4 py-2 text-xs font-bold ${
                              isProfitable
                                ? "bg-black text-white"
                                : "bg-[#7A1018]/10 text-[#7A1018]"
                            }`}
                          >
                            {isProfitable ? "مربح" : "دون التعادل"}
                          </span>
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="grid gap-4 p-5 lg:hidden">
              {revenueScenarios.map((row, index) => {
                const monthlyRevenue =
                  tableCount *
                  row.averageTableSpend *
                  row.tableTurnoverPerDay *
                  row.operatingDays;

                const foodCost = monthlyRevenue * foodCostRate;
                const netBeforeDistribution =
                  monthlyRevenue - foodCost - monthlyFixedCosts;

                const isProfitable = netBeforeDistribution > 0;

                return (
                  <motion.div
                    key={row.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    className="rounded-[1.5rem] border border-black/10 bg-[#F8F6F2] p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-xl font-black text-[#141111]">
                          {row.name}
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-[#625955]">
                          {row.note}
                        </p>
                      </div>

                      <span
                        className={`min-w-fit rounded-full px-4 py-2 text-xs font-bold ${
                          isProfitable
                            ? "bg-black text-white"
                            : "bg-[#7A1018]/10 text-[#7A1018]"
                        }`}
                      >
                        {isProfitable ? "مربح" : "دون التعادل"}
                      </span>
                    </div>

                    <div className="mt-5 grid gap-3">
                      <MobileRow label="متوسط دفع الطاولة" value={`${format(row.averageTableSpend)}$`} />
                      <MobileRow label="دوران الطاولة يوميًا" value={`${row.tableTurnoverPerDay} مرة`} />
                      <MobileRow label="أيام التشغيل" value={`${row.operatingDays} يوم`} />
                      <MobileRow label="الإيراد الشهري" value={`${format(monthlyRevenue)}$`} highlight />
                      <MobileRow label="صافي التشغيل" value={`${format(netBeforeDistribution)}$`} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
            className="rounded-[2rem] bg-[#7A1018] p-7 text-white lg:col-span-1"
          >
            <p className="text-sm text-white/70">نقطة التعادل الشهرية</p>

            <p className="mt-3 text-5xl font-black">
              {format(Math.ceil(breakEvenRevenue))}
              <span className="mr-1 text-xl text-white/70">$</span>
            </p>

            <p className="mt-5 leading-8 text-white/75">
              هذا هو مستوى المبيعات الشهري التقريبي المطلوب لتغطية المصاريف
              الثابتة وكلفة المواد، قبل احتساب أي توزيع أرباح.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="rounded-[2rem] bg-[#141111] p-7 text-white lg:col-span-2"
          >
            <p className="text-sm font-semibold text-[#B5121B]">
              القراءة المالية
            </p>

            <h3 className="mt-3 text-3xl font-bold leading-tight">
              الكلفة التشغيلية الجديدة تجعل نقطة التعادل أكثر واقعية
            </h3>

            <p className="mt-5 leading-9 text-white/65">
              مع 40 طاولة ومصاريف شهرية ثابتة تقارب 23,200 دولار، يصبح الوصول
              إلى نقطة التعادل ممكنًا عند مبيعات شهرية تقارب 35,700 دولار. لذلك
              يكون السيناريو المتوسط وما فوق هو المسار الأفضل لبناء ربح تشغيلي
              مستقر.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              <MiniIndicator title="الطاقة التشغيلية" value="40 طاولة" />
              <MiniIndicator title="الاستيعاب" value="120 شخص" />
              <MiniIndicator
                title="تعادل يومي تقريبي"
                value={`${format(Math.ceil(breakEvenPerDay))}$`}
              />
            </div>

            <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-white/10 p-5">
              <p className="text-sm text-white/50">تعادل شهري لكل طاولة</p>
              <p className="mt-2 text-2xl font-black">
                {format(Math.ceil(breakEvenPerTableMonthly))}
                <span className="mr-1 text-sm text-[#B5121B]">$</span>
              </p>
              <p className="mt-3 leading-7 text-white/60">
                كل طاولة تحتاج أن تحقق هذا المعدل شهريًا تقريبًا حتى يلامس
                المشروع نقطة التعادل.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
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
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-[2rem] bg-[#141111] p-6 text-white shadow-xl shadow-black/10"
    >
      <p className="text-sm text-white/55">{label}</p>
      <p className="mt-3 text-4xl font-black">
        {typeof value === "number" && value % 1 !== 0
          ? value.toFixed(1)
          : format(value)}
        <span className="mr-1 text-base text-[#B5121B]">{suffix}</span>
      </p>
    </motion.div>
  );
}

function CapacityRow({
  label,
  value,
  suffix,
}: {
  label: string;
  value: string;
  suffix: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-[1.5rem] border border-white/10 bg-white/10 p-4">
      <span className="text-sm text-white/60">{label}</span>
      <span className="text-xl font-black text-white">
        {value}
        <span className="mr-1 text-sm text-[#B5121B]">{suffix}</span>
      </span>
    </div>
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

function MiniIndicator({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5">
      <p className="text-sm text-white/50">{title}</p>
      <p className="mt-2 text-lg font-bold text-white">{value}</p>
    </div>
  );
}