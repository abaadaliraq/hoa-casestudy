"use client";

import { motion } from "framer-motion";
import { CalendarDays, Coffee, Landmark } from "lucide-react";

const modelItems = [
  {
    icon: Coffee,
    title: "تشغيل يومي",
    description:
      "دار ضيافة وكافيه داخل موقع تراثي، يحقق دخلاً مستمرًا ويخلق حركة يومية داخل المكان.",
  },
  {
    icon: CalendarDays,
    title: "حجوزات عالية القيمة",
    description:
      "مناسبات خاصة، جلسات تصوير، معارض وفعاليات، بأسعار أعلى وهامش ربح أفضل من التشغيل اليومي فقط.",
  },
  {
    icon: Landmark,
    title: "إدارة من صاحب المكان",
    description:
      "يتولى مالك بيت التحفيات الإدارة التشغيلية بحكم معرفته بالمكان وهويته وقيمته، مع متابعة مالية واضحة للمستثمر.",
  },
];

export default function OperatingModel() {
  return (
    <section
      id="operations"
      dir="rtl"
      className="relative overflow-hidden bg-[#F7F4EE] px-5 py-20 md:px-10 md:py-28"
    >
      <div className="absolute left-[-120px] top-[-120px] h-[300px] w-[300px] rounded-full bg-[#7BE0AE]/18 blur-3xl" />
      <div className="absolute bottom-[-140px] right-[-140px] h-[360px] w-[360px] rounded-full bg-[#063F3A]/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
          >
            <p className="mb-5 inline-flex rounded-full border border-[#063F3A]/15 bg-white px-4 py-2 text-sm font-semibold text-[#063F3A] shadow-sm">
              نموذج التشغيل
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.02em] text-[#092E2A] md:text-5xl">
              تشغيل خفيف يجمع بين الدخل اليومي والحجوزات عالية القيمة
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="max-w-3xl text-lg leading-9 text-[#4D5A56]"
          >
            يعتمد النموذج المقترح على إدارة مباشرة من مالك بيت التحفيات، مع
            تشغيل يومي لدار الضيافة والكافيه، وتشغيل منفصل للحجوزات الخاصة مثل
            المناسبات، التصوير، المعارض والفعاليات. بهذه الطريقة لا يكون العائد
            مرتبطًا بعدد الطاولات فقط.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {modelItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-[1.7rem] border border-[#063F3A]/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#063F3A]/10"
              >
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-[#063F3A]/8 text-[#063F3A]">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="text-2xl font-semibold text-[#092E2A]">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-[#5F6B67]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="mt-12 overflow-hidden rounded-[2rem] bg-[#063F3A] text-white"
        >
          <div className="grid gap-0 lg:grid-cols-[0.42fr_0.58fr]">
            <div className="bg-[#7BE0AE] p-8 text-[#063F3A] md:p-10">
              <p className="text-sm font-bold opacity-70">
                الفكرة التشغيلية
              </p>

              <h3 className="mt-3 text-3xl font-semibold leading-tight">
                مصادر دخل دار الضيافة
              </h3>
            </div>

            <div className="p-8 md:p-10">
              <p className="text-lg leading-9 text-white/76">
                قوة النموذج في الجمع بين دخل يومي ثابت من الضيافة، ودخل أعلى
                من الحجوزات الخاصة. لذلك يجب أن تُدار الحجوزات كخط إيراد مستقل،
                وليس كاستخدام جانبي للمكان.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/8 px-5 py-2.5 text-sm text-white/75">
                  كافيه وجلسات ضيافة
                </span>

                <span className="rounded-full border border-white/10 bg-white/8 px-5 py-2.5 text-sm text-white/75">
                  مناسبات من 3,000$
                </span>

                <span className="rounded-full border border-white/10 bg-white/8 px-5 py-2.5 text-sm text-white/75">
                  تصوير من 400$ للساعة
                </span>

                <span className="rounded-full border border-white/10 bg-white/8 px-5 py-2.5 text-sm text-white/75">
                  معارض وفعاليات
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}