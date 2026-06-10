"use client";

import { motion } from "framer-motion";

const points = [
  {
    title: "بيت تراثي من ثلاثينيات القرن الماضي",
    text: "يقع بيت التحفيات ضمن النسيج التراثي لبغداد، ويحمل طابع البيوت البغدادية القديمة من حيث الفناء، التفاصيل المعمارية، والهوية المكانية.",
  },
  {
    title: "اسم معروف منذ الثمانينات",
    text: "منذ ثمانينيات القرن الماضي ارتبط المكان بتجارة التحف والقطع القديمة، مما يمنحه قيمة سوقية ومعنوية لا تتوفر في المشاريع الجديدة.",
  },
  {
    title: "إحياء وترميم سابق",
    text: "شهد المكان أعمال إحياء وترميم واسعة أعادت تقديمه كوجهة قابلة للاستقبال والتشغيل، مع الحفاظ على روحه الأصلية وقيمته التراثية.",
  },
];

export default function AboutHouse() {
  return (
    <section
      id="about"
      dir="rtl"
      className="bg-white px-5 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="rounded-[2.5rem] bg-[#7A1018] p-8 text-white md:p-10"
        >
          <p className="mb-4 text-sm text-white/70">نبذة تعريفية</p>

          <h2 className="text-4xl font-bold leading-tight">
            بيت التحفيات قيمة تاريخية قابلة للتحويل إلى تجربة اقتصادية
          </h2>

          <p className="mt-6 leading-9 text-white/80">
            لا تعتمد جدوى المشروع على المساحة وحدها، بل على الذاكرة المرتبطة
            بالمكان، وتاريخه التجاري، وقدرته على تقديم تجربة مختلفة عن النماذج
            التقليدية للمطاعم والضيافة.
          </p>
        </motion.div>

        <div>
          <p className="mb-4 text-sm font-semibold text-[#7A1018]">
            خلفية المكان
          </p>

          <h3 className="max-w-3xl text-3xl font-bold leading-tight text-[#141111] md:text-5xl">
            أصل تراثي قائم، واسم متداول، وموقع قابل للتشغيل
          </h3>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#625955]">
            يمثل بيت التحفيات أحد المواقع ذات الطابع التراثي في بغداد، إذ يجمع
            بين القيمة المعمارية للمكان، والتاريخ التجاري المرتبط بعالم التحف،
            وإمكانية تحويل هذه الهوية إلى مشروع ضيافة ومطعم وحديقة فعاليات ذات
            طابع مختلف عن السوق التقليدي.
          </p>

          <div className="mt-10 grid gap-4">
            {points.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 rounded-3xl border border-black/10 bg-[#F8F6F2] p-5"
              >
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#141111] text-sm font-bold text-white">
                  {index + 1}
                </div>

                <div>
                  <h4 className="mb-2 text-lg font-bold text-[#141111]">
                    {point.title}
                  </h4>
                  <p className="leading-8 text-[#3f3834]">{point.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}