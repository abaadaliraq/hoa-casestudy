"use client";

import { motion } from "framer-motion";

const successFactors = [
  {
    title: "إدارة الإشغال اليومي",
    text: "رفع معدل إشغال الطاولات خلال أيام الأسبوع، وعدم الاعتماد فقط على نهاية الأسبوع أو المواسم.",
    indicator: "Occupancy",
  },
  {
    title: "متوسط صرف الطاولة",
    text: "تحسين متوسط الفاتورة من خلال قائمة مدروسة، مشروبات، أراكيل، حجوزات خاصة، وتجارب موسمية.",
    indicator: "Average Spend",
  },
  {
    title: "ضبط الرواتب والشفتات",
    text: "تنظيم الكادر حسب ساعات الذروة، وربط عدد العاملين بحركة الطلب الفعلية داخل المكان.",
    indicator: "Staff Control",
  },
  {
    title: "التسويق والحجوزات",
    text: "تحويل هوية المكان إلى طلب فعلي من خلال محتوى بصري، حجوزات مسبقة، مناسبات، وتجارب خاصة.",
    indicator: "Demand",
  },
];

const controlPoints = [
  {
    label: "كلفة المواد",
    value: "35%",
    note: "نسبة تقديرية يجب مراقبتها شهريًا حتى لا تضغط على الهامش.",
  },
  {
    label: "المصاريف الثابتة",
    value: "23.2K$",
    note: "الحد الأدنى الشهري المطلوب تغطيته قبل تحقيق ربح فعلي.",
  },
  {
    label: "الطاقة التشغيلية",
    value: "40",
    note: "طاولة بطاقة استيعابية تقارب 120 شخصًا.",
  },
  {
    label: "نقطة التعادل",
    value: "35.7K$",
    note: "مبيعات شهرية تقريبية للوصول إلى التعادل.",
  },
];

const recommendations = [
  "اعتماد نظام حجوزات واضح للطاولات والجلسات الخاصة.",
  "إطلاق تدريجي للتشغيل بدل تشغيل كامل الطاقة من اليوم الأول.",
  "قياس المبيعات اليومية حسب نوع الجلسة وفترة الذروة.",
  "مراجعة قائمة الطعام والمشروبات شهريًا حسب الربحية والطلب.",
  "تثبيت نظام محاسبي يومي يربط المبيعات بالمصاريف وكلفة المواد.",
];

export default function RiskAndSuccess() {
  return (
    <section
      id="risk"
      dir="rtl"
      className="relative overflow-hidden bg-[#F8F6F2] px-5 py-20 text-[#141111] md:px-10 md:py-28"
    >
      <div className="absolute right-0 top-0 h-[360px] w-[360px] rounded-bl-[8rem] bg-[#7A1018]/10" />
      <div className="absolute bottom-0 left-0 h-[360px] w-[360px] rounded-tr-[8rem] bg-black/[0.04]" />

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
              عوامل النجاح وضبط التشغيل
            </p>

            <h2 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
              نجاح المشروع يعتمد على تحويل الطاقة التشغيلية إلى إيراد فعلي
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-9 text-[#625955]">
              تعتمد جدوى التشغيل على إدارة 40 طاولة بطاقة استيعابية تقارب 120
              شخصًا، مع ضبط المصاريف الشهرية، كلفة المواد، ومتوسط صرف الطاولة.
              كل تحسن في هذه المؤشرات ينعكس مباشرة على الربحية.
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
                className="rounded-[2rem] bg-[#141111] p-6 text-white shadow-xl shadow-black/10"
              >
                <p className="text-sm text-white/55">{item.label}</p>

                <p className="mt-3 text-4xl font-black text-white">
                  {item.value}
                </p>

                <p className="mt-3 text-sm leading-6 text-white/45">
                  {item.note}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {successFactors.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
            >
              <div className="absolute left-0 top-0 h-24 w-24 rounded-br-[3rem] bg-[#7A1018] transition-all duration-300 group-hover:h-28 group-hover:w-28" />

              <div className="relative">
                <p className="mb-10 text-left text-xs font-bold tracking-[0.2em] text-white">
                  {item.indicator}
                </p>

                <h3 className="mb-4 text-2xl font-bold text-[#141111]">
                  {item.title}
                </h3>

                <p className="leading-8 text-[#625955]">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
            className="rounded-[2rem] bg-[#7A1018] p-8 text-white shadow-xl shadow-[#7A1018]/20 md:p-10"
          >
            <p className="text-sm font-semibold text-white/70">
              قراءة إدارية
            </p>

            <h3 className="mt-3 text-3xl font-bold leading-tight">
              التشغيل يحتاج نظام قياس يومي وليس إدارة عشوائية
            </h3>

            <p className="mt-5 leading-9 text-white/75">
              الطاقة التشغيلية وحدها لا تكفي. المهم هو تحويل الطاولات المتاحة
              إلى إشغال فعلي، ورفع متوسط الصرف، مع ضبط الكادر وكلفة المواد.
              لذلك يجب أن تكون القرارات اليومية مبنية على أرقام المبيعات
              والحجوزات وليس على الانطباع فقط.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
            className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-xl shadow-black/5 md:p-10"
          >
            <p className="text-sm font-semibold text-[#7A1018]">
              توصيات تشغيلية
            </p>

            <h3 className="mt-3 text-3xl font-bold leading-tight">
              خطوات عملية لتعزيز فرص الربحية
            </h3>

            <div className="mt-8 space-y-4">
              {recommendations.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="flex gap-4 rounded-2xl bg-[#F8F6F2] p-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#141111] text-sm font-bold text-white">
                    {index + 1}
                  </div>

                  <p className="leading-8 text-[#3f3834]">{item}</p>
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
          className="mt-12 rounded-[2rem] bg-[#141111] p-8 text-white md:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-[#B5121B]">
                الخلاصة التشغيلية
              </p>

              <h3 className="mt-3 text-3xl font-bold leading-tight">
                ضبط المؤشرات أهم من عدد الطاولات وحده
              </h3>
            </div>

            <p className="leading-9 text-white/65">
              المؤشرات الأساسية التي يجب مراقبتها شهريًا هي: معدل إشغال
              الطاولات، متوسط صرف الطاولة، كلفة المواد، إنتاجية الكادر، وعدد
              الحجوزات الخاصة. عند ضبط هذه العناصر، يصبح المشروع أكثر قدرة على
              تحويل هويته التراثية إلى عائد مالي مستقر.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}