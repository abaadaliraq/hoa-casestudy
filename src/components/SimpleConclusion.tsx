"use client";

import { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";
import { FileText } from "lucide-react";
import {
  balancedScenario,
  capitalRefund,
  investmentAmount,
  monthlyOperatingCosts,
} from "./feasibilityModel";

const format = (value: number) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(value);

const { investorMonthlyShare, investorAnnualShare } = balancedScenario;

const annualPartnerRevenue = [
  { year: "السنة 1", revenue: investorAnnualShare },
  { year: "السنة 2", revenue: investorAnnualShare * 1.08 },
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
      onUpdate: (latest) => setDisplayValue(latest),
    });

    return () => controls.stop();
  }, [value]);

  return (
    <span>
      {format(Math.round(displayValue))}
      {suffix}
    </span>
  );
}

export default function SimpleConclusion() {
  const totalAgreementProfit = annualPartnerRevenue.reduce(
    (sum, item) => sum + item.revenue,
    0
  );

  const maxRevenue = Math.max(...annualPartnerRevenue.map((item) => item.revenue));

  return (
    <>
      <section
        id="conclusion"
        dir="rtl"
        className="relative overflow-hidden bg-[#F7F4EE] px-5 py-20 text-[#092E2A] md:px-10 md:py-24"
      >
        <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#7BE0AE]/20 blur-3xl" />
        <div className="absolute bottom-[-140px] right-[-140px] h-[360px] w-[360px] rounded-full bg-[#063F3A]/8 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="mb-5 inline-flex rounded-full border border-[#063F3A]/15 bg-white px-4 py-2 text-sm font-semibold text-[#063F3A] shadow-sm">
              الخلاصة
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.02em] md:text-5xl">
              جدوى تشغيل دار ضيافة بيت التحفيات خلال سنتين
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#5F6B67]">
              تعتمد جدوى المشروع على تحويل الهوية التراثية إلى إشغال فعلي،
              مع ضبط المصاريف، معدل صرف الطاولة، والحجوزات الخاصة.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              label="رأس المال"
              value={investmentAmount}
              suffix="$"
            />

            <MetricCard
              label="المصاريف الشهرية"
              value={monthlyOperatingCosts}
              suffix="$"
            />

            <MetricCard
              label="حصة المستثمر الشهرية"
              value={investorMonthlyShare}
              suffix="$"
            />

            <MetricCard
              label="مبلغ الرد بعد سنتين"
              value={capitalRefund}
              suffix="$"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mt-10 overflow-hidden rounded-[1.8rem] border border-[#063F3A]/10 bg-white shadow-xl shadow-[#063F3A]/5"
          >
            <div className="grid gap-6 border-b border-[#063F3A]/10 bg-[#063F3A] p-6 text-white lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold text-[#9EF0C2]">
                  جدول بياني مختصر
                </p>

                <h3 className="mt-3 text-3xl font-semibold leading-tight">
                  حصة المستثمر المتوقعة من الأرباح خلال سنتين
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  وفق سيناريو التشغيل المتوازن وزيادة تقديرية قدرها 8% في السنة الثانية.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.3rem] border border-white/10 bg-white/8 p-5">
                  <p className="text-sm text-white/55">إجمالي الأرباح خلال سنتين</p>
                  <p className="mt-3 text-3xl font-semibold">
                    <CountUp value={totalAgreementProfit} suffix="$" />
                  </p>
                </div>

                <div className="rounded-[1.3rem] border border-white/10 bg-white/8 p-5">
                  <p className="text-sm text-white/55">متوسط سنوي</p>
                  <p className="mt-3 text-3xl font-semibold">
                    <CountUp
                      value={totalAgreementProfit / annualPartnerRevenue.length}
                      suffix="$"
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="hidden min-h-[340px] items-end gap-5 md:flex">
                {annualPartnerRevenue.map((item, index) => {
                  const height = (item.revenue / maxRevenue) * 100;

                  return (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      className="flex flex-1 flex-col items-center justify-end gap-4"
                    >
                      <div className="text-center">
                        <p className="text-sm text-[#64716C]">{item.year}</p>

                        <p className="mt-2 text-xl font-semibold text-[#092E2A]">
                          {format(item.revenue)}$
                        </p>
                      </div>

                      <div className="flex h-[210px] w-full items-end rounded-[1.2rem] bg-[#F7F4EE] p-2">
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.2 + index * 0.08,
                            ease: "easeOut",
                          }}
                          className="w-full rounded-[1rem] bg-[#063F3A]"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="grid gap-4 md:hidden">
                {annualPartnerRevenue.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="rounded-[1.3rem] bg-[#F7F4EE] p-4"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-semibold text-[#092E2A]">
                        {item.year}
                      </p>

                      <p className="font-semibold text-[#063F3A]">
                        {format(item.revenue)}$
                      </p>
                    </div>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#063F3A]/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${(item.revenue / maxRevenue) * 100}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.9,
                          delay: 0.15 + index * 0.08,
                        }}
                        className="h-full rounded-full bg-[#063F3A]"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.65 }}
              className="rounded-[1.8rem] bg-[#063F3A] p-7 text-white"
            >
              <p className="text-sm font-semibold text-[#9EF0C2]">
                القرار المختصر
              </p>

              <h3 className="mt-3 text-3xl font-semibold leading-tight">
                المشروع قابل للاستثمار بشرط تشغيل منضبط
              </h3>

              <p className="mt-5 leading-8 text-white/66">
                قوة المشروع ليست فقط في المكان، بل في تحويل المكان إلى طلب يومي
                وحجوزات خاصة بعائد واضح.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.65 }}
              className="rounded-[1.8rem] border border-[#063F3A]/10 bg-white p-7 shadow-sm"
            >
              <p className="text-sm font-semibold text-[#063F3A]">
                التوصية النهائية
              </p>

              <h3 className="mt-3 text-3xl font-semibold leading-tight text-[#092E2A]">
                تشغيل تجريبي 60 يومًا قبل التوسع الكامل
              </h3>

              <p className="mt-5 leading-8 text-[#5F6B67]">
                يتم قياس الإشغال، معدل صرف الطاولة، كلفة المواد، وأداء الكادر،
                ثم تثبيت النموذج التشغيلي على الأرقام الفعلية.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div dir="rtl" className="border-t border-[#063F3A]/10 bg-[#F7F4EE] px-5 py-10 text-center md:px-10">
        <a
          href="/hoa-investment-contract.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-[#063F3A] px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-[#063F3A]/20 transition-colors hover:bg-[#0A4B45] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#063F3A] sm:px-10"
        >
          <FileText aria-hidden="true" className="size-5 shrink-0 text-[#9EF0C2]" />
          فتح عقد الشراكة (PDF)
        </a>
      </div>

      <footer
        dir="rtl"
        className="border-t border-[#063F3A]/10 bg-[#063F3A] px-5 py-8 text-white md:px-10"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold">بيت التحفيات</p>
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

function MetricCard({
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
      className="rounded-[1.5rem] border border-[#063F3A]/10 bg-white p-6 shadow-sm"
    >
      <p className="text-sm text-[#64716C]">{label}</p>

      <p className="mt-3 text-3xl font-semibold text-[#092E2A]">
        <CountUp value={value} suffix={suffix} />
      </p>
    </motion.div>
  );
}