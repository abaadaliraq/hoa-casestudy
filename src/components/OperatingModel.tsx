"use client";

import { motion } from "framer-motion";

const modelItems = [
  {
    title: "تشغيل المطعم",
    description:
      "يعتمد التشغيل على مطبخ رئيسي مجهز، مع توزيع واضح للمهام بين الطباخ الرئيسي، مساعد الطباخ، موظفي المشاوي، موظفي السمك، الخباز، وغسال الصحون.",
    tag: "Food Operations",
  },
  {
    title: "تشغيل الحديقة",
    description:
      "تمثل الحديقة عنصر الجذب الأساسي للجلسات اليومية والموسمية، وتحتاج إلى تجهيز أثاث خارجي مريح، طاولات، كراسي، شمسيات، وإنارة مناسبة للأجواء المسائية.",
    tag: "Garden Experience",
  },
  {
    title: "خدمة الضيوف",
    description:
      "يقوم نموذج الخدمة على فريق ويترز وكباتن لإدارة استقبال الطلبات، تنظيم الجلسات، متابعة جودة الخدمة، ورفع مستوى تجربة الزائر داخل المكان.",
    tag: "Guest Service",
  },
  {
    title: "النظافة والدعم",
    description:
      "تحتاج طبيعة المشروع إلى فريق تنظيف يومي يحافظ على مستوى المكان، خصوصًا مع وجود حديقة، مطبخ، جلسات خارجية، وحركة ضيوف مستمرة.",
    tag: "Support Team",
  },
];

const workflow = [
  "استقبال الضيوف وتنظيم الجلسات",
  "إدارة الطلبات من قبل الكباتن والويترز",
  "تحضير الطعام داخل المطبخ حسب الأقسام",
  "متابعة النظافة والخدمات أثناء التشغيل",
  "إغلاق يومي ومراجعة المبيعات والمصاريف",
];

const costDrivers = [
  { label: "الكادر", value: "أعلى بند تشغيلي" },
  { label: "الطاقة", value: "مولدة + كهرباء" },
  { label: "المواد", value: "مرتبطة بحجم المبيعات" },
  { label: "الصيانة", value: "ضرورية للمكان التراثي" },
];

export default function OperatingModel() {
  return (
    <section
      id="operations"
      dir="rtl"
      className="relative overflow-hidden bg-white px-5 py-20 md:px-10 md:py-28"
    >
      <div className="absolute left-0 top-0 h-80 w-80 rounded-br-[8rem] bg-[#7A1018]/10" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-tl-[8rem] bg-black/[0.04]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-4 inline-flex rounded-full border border-[#7A1018]/20 bg-[#F8F6F2] px-5 py-2 text-sm font-semibold text-[#7A1018]">
            نموذج التشغيل
          </p>

          <h2 className="text-3xl font-bold leading-tight text-[#141111] md:text-5xl">
            تشغيل منظم يحوّل المكان إلى مشروع ضيافة يومي
          </h2>

          <p className="mt-6 text-lg leading-9 text-[#625955]">
            يعتمد النموذج التشغيلي على تقسيم واضح بين المطبخ، الحديقة، خدمة
            الضيوف، النظافة، والطاقة. هذا التقسيم ضروري حتى لا يتحول المشروع
            إلى تشغيل عشوائي يصعب ضبط كلفته أو قياس ربحيته.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {modelItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group rounded-[2rem] border border-black/10 bg-[#F8F6F2] p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-black/10"
            >
              <div className="mb-8 flex items-center justify-between gap-4">
                <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-[#7A1018] shadow-sm group-hover:bg-[#7A1018] group-hover:text-white">
                  {item.tag}
                </span>

                <span className="text-4xl font-bold text-[#7A1018]/20">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mb-4 text-2xl font-bold text-[#141111]">
                {item.title}
              </h3>

              <p className="leading-8 text-[#625955]">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
            className="rounded-[2rem] bg-[#141111] p-8 text-white md:p-10"
          >
            <p className="text-sm font-semibold text-[#E8D7C3]">
              مسار التشغيل اليومي
            </p>

            <h3 className="mt-3 text-3xl font-bold leading-tight">
              كل يوم تشغيل يجب أن ينتهي بأرقام واضحة
            </h3>

            <div className="mt-8 space-y-4">
              {workflow.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#7A1018] text-sm font-bold text-white">
                    {index + 1}
                  </div>

                  <p className="leading-7 text-white/80">{step}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
            className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-xl shadow-black/5 md:p-10"
          >
            <p className="text-sm font-semibold text-[#7A1018]">
              محركات الكلفة التشغيلية
            </p>

            <h3 className="mt-3 text-3xl font-bold leading-tight text-[#141111]">
              ضبط المصاريف أهم من رفع المبيعات فقط
            </h3>

            <p className="mt-5 leading-8 text-[#625955]">
              أي مشروع ضيافة يفشل إذا لم تتم مراقبة الكادر، المواد، الطاقة،
              والصيانة. لذلك يجب التعامل مع التشغيل كمنظومة مالية يومية، وليس
              كمطعم يعمل بردّات فعل.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {costDrivers.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-3xl bg-[#F8F6F2] p-5"
                >
                  <p className="text-sm text-[#7A1018]">{item.label}</p>
                  <p className="mt-2 text-xl font-bold text-[#141111]">
                    {item.value}
                  </p>
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
          className="mt-12 rounded-[2rem] border border-[#7A1018]/15 bg-[#F8F6F2] p-8 md:p-10"
        >
          <div className="grid gap-8 md:grid-cols-[0.35fr_0.65fr] md:items-center">
            <h3 className="text-3xl font-bold leading-tight text-[#141111]">
              ملاحظة تشغيلية مهمة
            </h3>

            <p className="leading-9 text-[#625955]">
              قوة المشروع لا تكمن في فتح مطعم داخل بيت تراثي فقط، بل في ضبط
              التجربة اليومية: جودة الطعام، سرعة الخدمة، نظافة المكان، راحة
              الجلسات، وإدارة الطاقة والمصاريف. بدون هذا الانضباط، تتحول قيمة
              المكان إلى ديكور جميل فقط، وهذا لا يكفي لبناء ربح مستمر.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}