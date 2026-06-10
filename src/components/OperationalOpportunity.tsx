"use client";

import { motion } from "framer-motion";

const opportunities = [
  {
    title: "مطعم بطابع تراثي",
    text: "إمكانية تشغيل مطعم يقدم تجربة ضيافة مرتبطة بهوية المكان، بحيث لا يكون المنتج طعامًا فقط، بل تجربة متكاملة داخل بيئة تراثية.",
    metric: "01",
  },
  {
    title: "حديقة وجلسات خارجية",
    text: "توفر الحديقة فرصة لإنشاء جلسات يومية وموسمية تناسب العوائل، الضيوف، والجلسات المسائية، مع قابلية تنظيم حجوزات خاصة.",
    metric: "02",
  },
  {
    title: "فعاليات وتجارب خاصة",
    text: "يمكن استثمار المكان في أمسيات محدودة، مناسبات خاصة، جلسات ثقافية، تصوير، واستضافات نوعية تضيف مصادر دخل غير تقليدية.",
    metric: "03",
  },
  {
    title: "قيمة المكان كعلامة",
    text: "يمتلك بيت التحفيات قيمة اسمية وبصرية تساعد على بناء تسعير أعلى من المشاريع التقليدية، لأن المنافسة هنا تعتمد على التجربة وليس السعر فقط.",
    metric: "04",
  },
];

const indicators = [
  { label: "مصادر تشغيل", value: "4+" },
  { label: "نموذج إيراد", value: "متعدد" },
  { label: "اعتماد على الموقع", value: "مرتفع" },
];

export default function OperationalOpportunity() {
  return (
    <section
      id="numbers"
      dir="rtl"
      className="relative overflow-hidden bg-[#F8F6F2] px-5 py-20 md:px-10 md:py-28"
    >
      <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-[#7A1018]/10 blur-3xl" />
      <div className="absolute -left-24 bottom-20 h-72 w-72 rounded-full bg-black/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
          >
            <p className="mb-4 inline-flex rounded-full border border-[#7A1018]/20 bg-white px-5 py-2 text-sm font-semibold text-[#7A1018] shadow-sm">
              الفرصة التشغيلية
            </p>

            <h2 className="max-w-3xl text-3xl font-bold leading-tight text-[#141111] md:text-5xl">
              تحويل القيمة التراثية إلى نموذج ضيافة قابل للإيراد
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-9 text-[#625955]">
              تستند الفرصة التشغيلية في بيت التحفيات إلى تحويل هوية المكان
              وتاريخه إلى تجربة ضيافة يومية وموسمية. فالمشروع لا يعتمد على
              تقديم الطعام فقط، بل على خلق بيئة مختلفة تجمع بين الذاكرة
              البغدادية، الجلسات الخارجية، والضيافة ذات الطابع الثقافي.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-xl shadow-black/5"
          >
            <p className="mb-5 text-sm font-semibold text-[#7A1018]">
              مؤشرات نوعية
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {indicators.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.2 + index * 0.1 }}
                  className="rounded-3xl bg-[#F8F6F2] p-5 text-center"
                >
                  <p className="text-3xl font-bold text-[#141111]">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm text-[#625955]">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {opportunities.map((item, index) => (
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
                <p className="mb-10 text-left text-3xl font-bold text-white">
                  {item.metric}
                </p>

                <h3 className="mb-4 text-2xl font-bold text-[#141111]">
                  {item.title}
                </h3>

                <p className="leading-8 text-[#625955]">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="mt-12 rounded-[2rem] bg-[#141111] p-8 text-white md:p-10"
        >
          <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:items-center">
            <div>
              <p className="text-sm text-[#E8D7C3]">الخلاصة التشغيلية</p>
              <h3 className="mt-3 text-3xl font-bold leading-tight">
                التميز هنا ليس في المنتج وحده، بل في المكان والانطباع.
              </h3>
            </div>

            <p className="leading-9 text-white/75">
              هذا النوع من المشاريع يملك قابلية أعلى للتميّز مقارنة بالمشاريع
              التقليدية، لأن قرار الزائر لا يقوم على السعر فقط، بل على التجربة،
              الصورة، الذاكرة، وإحساس الخصوصية الذي يقدمه المكان.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}