"use client";

import { motion } from "framer-motion";
import { monthlyOperatingCosts } from "./feasibilityModel";

const successFactors = [
  {
    title: "إدارة إشغال الطاولات",
    text: "رفع معدل إشغال الطاولات خلال أيام الأسبوع، وعدم الاعتماد فقط على نهاية الأسبوع أو المواسم.",
    indicator: "Occupancy",
  },
  {
    title: "رفع معدل صرف الطاولة",
    text: "تحسين متوسط الفاتورة من خلال قائمة مختصرة ومدروسة، مشروبات، أراكيل، وتجارب ضيافة مناسبة لهوية المكان.",
    indicator: "Average Spend",
  },
  {
    title: "تنظيم الحجوزات الخاصة",
    text: "إدارة أيام المناسبات بوضوح، لأن يوم الحجز الخاص تتوقف فيه خدمة الكافيه ويجب أن يعوض ذلك بإيراد مساند مجزٍ.",
    indicator: "Private Booking",
  },
  {
    title: "ضبط الكادر والشفتات",
    text: "ربط عدد العاملين بحركة الطلب وساعات الذروة، حتى لا تتحول الرواتب إلى ضغط ثابت على صافي الربح.",
    indicator: "Staff Control",
  },
];

const controlPoints = [
  {
    label: "المصاريف التشغيلية",
    value: `${(monthlyOperatingCosts / 1000).toFixed(1)}K$`,
    note: "تشمل الرواتب، الكهرباء، الخدمات، الصيانة، التسويق، والإيجار الشهري.",
  },
  {
    label: "عدد الطاولات",
    value: "40",
    note: "طاولة بطاقة استيعابية تقارب 120 شخصًا عند التشغيل الكامل.",
  },
  {
    label: "كلفة مواد الضيافة",
    value: "35%",
    note: "نسبة تقديرية من إيراد الطاولات، ويجب ضبطها شهريًا لحماية هامش الربح.",
  },
  {
    label: "تهيئة الحجوزات",
    value: "20%",
    note: "نسبة تقديرية من إيرادات المناسبات والحجوزات الخاصة لتغطية الترتيب والتنظيف والدعم الإضافي.",
  },
];

const recommendations = [
  "اعتماد نظام حجوزات واضح للطاولات والجلسات الخاصة.",
  "تحديد حد أدنى لإيراد يوم المناسبة قبل إيقاف خدمة الكافيه طوال اليوم.",
  "قياس المبيعات اليومية حسب الفترة: صباحية، مسائية، نهاية الأسبوع، ومناسبات.",
  "مراجعة قائمة الطعام والمشروبات شهريًا حسب الربحية والطلب.",
  "تنظيم الشفتات حسب الذروة بدل تثبيت نفس الكادر طوال اليوم.",
  "إصدار تقرير شهري مختصر يربط الإيرادات بالمصاريف وكلفة المواد.",
];

export default function RiskAndSuccess() {
  return (
    <section
      id="risk"
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
          className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="mb-5 inline-flex rounded-full border border-[#063F3A]/15 bg-white px-4 py-2 text-sm font-semibold text-[#063F3A] shadow-sm">
              عوامل النجاح وضبط التشغيل
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.02em] md:text-5xl">
              نجاح المشروع يعتمد على ضبط التشغيل لا على الهوية وحدها
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5F6B67]">
              تمتلك الوجهة قيمة تراثية وبصرية عالية، لكن تحويل هذه القيمة إلى
              عائد مستقر يتطلب إدارة دقيقة للإشغال، معدل صرف الطاولة، الحجوزات
              الخاصة، وكلفة التشغيل الشهرية.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {controlPoints.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-[1.5rem] border border-[#063F3A]/10 bg-white p-6 shadow-sm"
              >
                <p className="text-sm text-[#64716C]">{item.label}</p>

                <p className="mt-3 text-4xl font-semibold text-[#063F3A]">
                  {item.value}
                </p>

                <p className="mt-3 text-sm leading-6 text-[#64716C]">
                  {item.note}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {successFactors.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[1.7rem] border border-[#063F3A]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#063F3A]/10"
            >
              <div className="absolute left-0 top-0 h-24 w-24 rounded-br-[3rem] bg-[#063F3A] transition-all duration-300 group-hover:h-28 group-hover:w-28" />

              <div className="relative">
                <p className="mb-10 text-left text-xs font-semibold tracking-[0.18em] text-[#BFF5DA]">
                  {item.indicator}
                </p>

                <h3 className="mb-4 text-2xl font-semibold text-[#092E2A]">
                  {item.title}
                </h3>

                <p className="leading-8 text-[#64716C]">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
            className="rounded-[1.8rem] bg-[#063F3A] p-8 text-white shadow-xl shadow-[#063F3A]/15 md:p-10"
          >
            <p className="text-sm font-semibold text-[#9EF0C2]">
              قراءة إدارية
            </p>

            <h3 className="mt-3 text-3xl font-semibold leading-tight">
              التشغيل يحتاج نظام قياس يومي وليس قرارات عشوائية
            </h3>

            <p className="mt-5 leading-8 text-white/66">
              الطاقة التشغيلية وحدها لا تكفي. الأهم هو تحويل الطاولات المتاحة
              إلى إشغال فعلي، ورفع متوسط الصرف، مع ضبط الكادر وكلفة المواد
              والحجوزات. لذلك يجب أن تكون القرارات اليومية مبنية على أرقام
              المبيعات والحجوزات وليس على الانطباع فقط.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
            className="rounded-[1.8rem] border border-[#063F3A]/10 bg-white p-8 shadow-xl shadow-[#063F3A]/5 md:p-10"
          >
            <p className="text-sm font-semibold text-[#063F3A]">
              توصيات تشغيلية
            </p>

            <h3 className="mt-3 text-3xl font-semibold leading-tight text-[#092E2A]">
              خطوات عملية لتعزيز فرص الربحية
            </h3>

            <div className="mt-8 grid gap-4">
              {recommendations.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="flex gap-4 rounded-2xl bg-[#F7F4EE] p-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#063F3A] text-sm font-semibold text-white">
                    {index + 1}
                  </div>

                  <p className="leading-8 text-[#5F6B67]">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="mt-8 rounded-[1.8rem] border border-[#7BE0AE]/20 bg-[#063F3A] p-8 text-white md:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-[#9EF0C2]">
                الخلاصة التشغيلية
              </p>

              <h3 className="mt-3 text-3xl font-semibold leading-tight">
                ضبط المؤشرات أهم من عدد الطاولات وحده
              </h3>
            </div>

            <p className="leading-8 text-white/66">
              المؤشرات الأساسية التي يجب مراقبتها شهريًا هي: معدل إشغال
              الطاولات، معدل صرف الطاولة، كلفة مواد الضيافة، كلفة تهيئة
              الحجوزات الخاصة، إنتاجية الكادر، وعدد أيام الحجز التي يُغلق فيها
              دار الضيافة. عند ضبط هذه العناصر يصبح المشروع أكثر قدرة على تحويل
              هويته التراثية إلى عائد مالي مستقر.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}