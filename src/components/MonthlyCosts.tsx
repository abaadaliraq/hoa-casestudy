"use client";

import { motion } from "framer-motion";

const salaries = [
  { role: "مدير التشغيل", count: 1, salary: 1200, category: "الإدارة" },
  { role: "محاسب", count: 1, salary: 500, category: "الإدارة" },

  { role: "شيف عام", count: 1, salary: 2000, category: "المطبخ" },
  { role: "مساعد شيف", count: 1, salary: 700, category: "المطبخ" },
  { role: "غسال صحون", count: 1, salary: 450, category: "المطبخ" },
  { role: "موظفو مشاوي / أسطة", count: 2, salary: 500, category: "المطبخ" },
  { role: "موظفو سمك", count: 2, salary: 500, category: "المطبخ" },
  { role: "خباز", count: 1, salary: 600, category: "المطبخ" },

  { role: "باريستا", count: 1, salary: 700, category: "المشروبات" },
  { role: "مساعد باريستا", count: 1, salary: 500, category: "المشروبات" },

  { role: "موظف أراكيل", count: 1, salary: 700, category: "الأراكيل" },
  { role: "عامل أراكيل", count: 1, salary: 400, category: "الأراكيل" },

  { role: "منظفون", count: 3, salary: 400, category: "الخدمات" },

  { role: "موظفو خدمة / سيرفيس", count: 4, salary: 450, category: "الخدمة" },
  { role: "كباتن", count: 2, salary: 600, category: "الخدمة" },
];

const fixedCostsBase = [
  { item: "إيجار شهري", amount: 5000, type: "ثابت" },
  { item: "مولدة / كهرباء شهرية", amount: 750, type: "تشغيلي" },
  { item: "ماء وكهرباء وخدمات", amount: 1000, type: "تشغيلي" },
  { item: "صيانة ونثريات", amount: 1000, type: "متغير" },
  { item: "تسويق شهري", amount: 1500, type: "متغير" },
];

const format = (value: number) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(value);

export default function MonthlyCosts() {
  const totalSalaries = salaries.reduce(
    (sum, row) => sum + row.count * row.salary,
    0
  );

  const fixedCosts = [
    { item: "رواتب تشغيلية وإدارية", amount: totalSalaries, type: "ثابت" },
    ...fixedCostsBase,
  ];

  const totalFixedCosts = fixedCosts.reduce((sum, row) => sum + row.amount, 0);

  const kitchenSalaries = salaries
    .filter((row) => row.category === "المطبخ")
    .reduce((sum, row) => sum + row.count * row.salary, 0);

  const serviceSalaries = salaries
    .filter((row) => row.category === "الخدمة")
    .reduce((sum, row) => sum + row.count * row.salary, 0);

  const managementSalaries = salaries
    .filter((row) => row.category === "الإدارة")
    .reduce((sum, row) => sum + row.count * row.salary, 0);

  const beverageSalaries = salaries
    .filter((row) => row.category === "المشروبات")
    .reduce((sum, row) => sum + row.count * row.salary, 0);

  const shishaSalaries = salaries
    .filter((row) => row.category === "الأراكيل")
    .reduce((sum, row) => sum + row.count * row.salary, 0);

  const cleaningSalaries = salaries
    .filter((row) => row.category === "الخدمات")
    .reduce((sum, row) => sum + row.count * row.salary, 0);

  const staffCount = salaries.reduce((sum, row) => sum + row.count, 0);

  const salaryShare = (totalSalaries / totalFixedCosts) * 100;

  return (
    <section
      id="costs"
      dir="rtl"
      className="relative overflow-hidden bg-[#F8F6F2] px-5 py-20 md:px-10 md:py-28"
    >
      <div className="absolute right-0 top-0 h-80 w-80 rounded-bl-[8rem] bg-[#7A1018]/10" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-tr-[8rem] bg-black/[0.04]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="mb-4 inline-flex rounded-full border border-[#7A1018]/20 bg-white px-5 py-2 text-sm font-semibold text-[#7A1018] shadow-sm">
              المصاريف الشهرية
            </p>

            <h2 className="max-w-3xl text-3xl font-bold leading-tight text-[#141111] md:text-5xl">
              الكلفة التشغيلية الشهرية قبل احتساب المواد الغذائية
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-9 text-[#625955]">
              يوضح هذا القسم الكلفة الشهرية الثابتة لتشغيل المشروع، وتشمل
              الإدارة، المطبخ، المشروبات، الأراكيل، الخدمة، التنظيف، إضافة إلى
              الإيجار والخدمات الأساسية.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <StatCard label="إجمالي الرواتب" value={totalSalaries} suffix="$" />
            <StatCard
              label="إجمالي المصاريف الشهرية"
              value={totalFixedCosts}
              suffix="$"
            />
            <StatCard label="عدد الكادر التشغيلي" value={staffCount} suffix="موظف" />
            <StatCard
              label="نسبة الرواتب من المصاريف"
              value={Math.round(salaryShare)}
              suffix="%"
            />
          </div>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
            className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-xl shadow-black/5"
          >
            <div className="bg-[#141111] px-6 py-5 text-white">
              <h3 className="text-2xl font-bold">جدول الرواتب الشهرية</h3>
              <p className="mt-2 text-sm text-white/60">
                توزيع الكادر حسب الوظيفة والعدد والكلفة الشهرية
              </p>
            </div>

            <div className="hidden lg:block">
              <table className="w-full table-fixed border-collapse text-right">
                <thead>
                  <tr className="border-b border-black/10 bg-[#F8F6F2]">
                    <th className="w-[30%] p-5 text-sm font-bold text-[#625955]">
                      الوظيفة
                    </th>
                    <th className="w-[18%] p-5 text-sm font-bold text-[#625955]">
                      القسم
                    </th>
                    <th className="w-[12%] p-5 text-sm font-bold text-[#625955]">
                      العدد
                    </th>
                    <th className="w-[18%] p-5 text-sm font-bold text-[#625955]">
                      الراتب
                    </th>
                    <th className="w-[22%] p-5 text-sm font-bold text-[#625955]">
                      الإجمالي
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {salaries.map((row, index) => (
                    <motion.tr
                      key={row.role}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.04 }}
                      className="border-b border-black/10 transition-colors duration-300 hover:bg-[#F8F6F2]"
                    >
                      <td className="p-5 font-bold text-[#141111]">{row.role}</td>

                      <td className="p-5">
                        <span className="rounded-full bg-[#7A1018]/10 px-3 py-1 text-xs font-bold text-[#7A1018]">
                          {row.category}
                        </span>
                      </td>

                      <td className="p-5 text-[#625955]">{row.count}</td>

                      <td className="p-5 font-bold text-[#141111]">
                        {format(row.salary)}$
                      </td>

                      <td className="p-5 text-xl font-black text-[#141111]">
                        {format(row.count * row.salary)}$
                      </td>
                    </motion.tr>
                  ))}

                  <tr className="bg-[#7A1018] text-white">
                    <td className="p-5 text-xl font-black">الإجمالي</td>
                    <td className="p-5"></td>
                    <td className="p-5 font-bold">{staffCount}</td>
                    <td className="p-5"></td>
                    <td className="p-5 text-2xl font-black">
                      {format(totalSalaries)}$
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid gap-4 p-5 lg:hidden">
              {salaries.map((row, index) => (
                <motion.div
                  key={row.role}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="rounded-[1.5rem] border border-black/10 bg-[#F8F6F2] p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-black text-[#141111]">{row.role}</h4>
                      <p className="mt-1 text-sm text-[#7A1018]">{row.category}</p>
                    </div>

                    <p className="text-xl font-black text-[#141111]">
                      {format(row.count * row.salary)}$
                    </p>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <MobileRow label="العدد" value={`${row.count}`} />
                    <MobileRow label="الراتب" value={`${format(row.salary)}$`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
            className="rounded-[2rem] bg-[#141111] p-7 text-white shadow-2xl shadow-black/20"
          >
            <p className="text-sm font-semibold text-[#B5121B]">
              قراءة تشغيلية
            </p>

           <h3 className="mt-3 text-3xl font-bold leading-tight">
  هيكل كادر منظم يدعم التشغيل اليومي بكفاءة
</h3>

           <p className="mt-5 leading-8 text-white/60">
  يتكوّن الهيكل التشغيلي من {staffCount} موظفًا بكلفة رواتب شهرية مقدارها{" "}
  {format(totalSalaries)} دولار. ويُعد ضبط الشفتات، توزيع المهام، ومراقبة
  الإنتاجية اليومية عناصر أساسية للحفاظ على كفاءة التشغيل وتحقيق هامش ربح
  مستقر.
</p>

            <div className="mt-8 space-y-6">
              <ProgressBar
                label="رواتب المطبخ"
                value={kitchenSalaries}
                total={totalSalaries}
              />
              <ProgressBar
                label="رواتب الخدمة"
                value={serviceSalaries}
                total={totalSalaries}
              />
              <ProgressBar
                label="رواتب الإدارة"
                value={managementSalaries}
                total={totalSalaries}
              />
              <ProgressBar
                label="رواتب المشروبات"
                value={beverageSalaries}
                total={totalSalaries}
              />
              <ProgressBar
                label="رواتب الأراكيل"
                value={shishaSalaries}
                total={totalSalaries}
              />
              <ProgressBar
                label="رواتب التنظيف"
                value={cleaningSalaries}
                total={totalSalaries}
              />
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/10 p-5">
              <p className="text-sm text-[#B5121B]">مؤشر مهم</p>

              <p className="mt-2 text-3xl font-black">
                {salaryShare.toFixed(1)}%
              </p>

              <p className="mt-3 leading-7 text-white/60">
                من المصاريف الشهرية الثابتة تذهب للرواتب. هذه نسبة مقبولة
                نسبيًا لمشروع ضيافة، بشرط أن تكون ساعات العمل والشفتات مرتبطة
                بحجم الطلب الفعلي.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="mt-10 overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-xl shadow-black/5"
        >
          <div className="bg-[#7A1018] px-6 py-5 text-white">
            <h3 className="text-2xl font-bold">جدول المصاريف الشهرية الثابتة</h3>
            <p className="mt-2 text-sm text-white/70">
              لا تشمل كلفة المواد الغذائية والمشروبات، لأنها ترتبط بحجم المبيعات
            </p>
          </div>

          <div className="hidden lg:block">
            <table className="w-full table-fixed border-collapse text-right">
              <thead>
                <tr className="border-b border-black/10 bg-[#F8F6F2]">
                  <th className="w-[30%] p-5 text-sm font-bold text-[#625955]">
                    البند
                  </th>
                  <th className="w-[20%] p-5 text-sm font-bold text-[#625955]">
                    النوع
                  </th>
                  <th className="w-[20%] p-5 text-sm font-bold text-[#625955]">
                    الكلفة الشهرية
                  </th>
                  <th className="w-[30%] p-5 text-sm font-bold text-[#625955]">
                    المؤشر البياني
                  </th>
                </tr>
              </thead>

              <tbody>
                {fixedCosts.map((row, index) => {
                  const percentage = (row.amount / totalFixedCosts) * 100;

                  return (
                    <motion.tr
                      key={row.item}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.05 }}
                      className="border-b border-black/10 hover:bg-[#F8F6F2]"
                    >
                      <td className="p-5 font-bold text-[#141111]">{row.item}</td>

                      <td className="p-5">
                        <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-bold text-[#625955]">
                          {row.type}
                        </span>
                      </td>

                      <td className="p-5 text-xl font-black text-[#141111]">
                        {format(row.amount)}$
                      </td>

                      <td className="p-5">
                        <div className="flex items-center gap-3">
                          <div className="h-2 flex-1 overflow-hidden rounded-full bg-black/10">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${percentage}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.9,
                                delay: 0.15 + index * 0.08,
                              }}
                              className="h-full rounded-full bg-[#7A1018]"
                            />
                          </div>

                          <span className="min-w-fit text-sm font-bold text-[#625955]">
                            {percentage.toFixed(1)}%
                          </span>
                        </div>
                      </td>
                    </motion.tr>
                  );
                })}

                <tr className="bg-[#141111] text-white">
                  <td className="p-5 text-xl font-black">الإجمالي الشهري</td>
                  <td className="p-5"></td>
                  <td className="p-5 text-2xl font-black">
                    {format(totalFixedCosts)}$
                  </td>
                  <td className="p-5 text-white/60">
                    قبل احتساب كلفة المواد الغذائية والمشروبات
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid gap-4 p-5 lg:hidden">
            {fixedCosts.map((row, index) => (
              <motion.div
                key={row.item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-[1.5rem] border border-black/10 bg-[#F8F6F2] p-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h4 className="font-black text-[#141111]">{row.item}</h4>
                    <p className="mt-1 text-sm text-[#625955]">{row.type}</p>
                  </div>

                  <p className="text-xl font-black text-[#141111]">
                    {format(row.amount)}$
                  </p>
                </div>
              </motion.div>
            ))}

            <div className="rounded-[1.5rem] bg-[#141111] p-5 text-white">
              <p className="text-sm text-white/60">الإجمالي الشهري</p>
              <p className="mt-2 text-3xl font-black">
                {format(totalFixedCosts)}$
              </p>
            </div>
          </div>
        </motion.div>
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
        {format(value)}
        <span className="mr-1 text-base text-[#B5121B]">{suffix}</span>
      </p>
    </motion.div>
  );
}

function ProgressBar({
  label,
  value,
  total,
}: {
  label: string;
  value: number;
  total: number;
}) {
  const percentage = (value / total) * 100;

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4">
        <span className="text-sm text-white/70">{label}</span>
        <span className="text-sm font-bold text-white">{format(value)}$</span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-full rounded-full bg-[#B5121B]"
        />
      </div>
    </div>
  );
}

function MobileRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white p-3">
      <p className="text-xs text-[#625955]">{label}</p>
      <p className="mt-1 font-black text-[#141111]">{value}</p>
    </div>
  );
}