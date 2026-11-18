"use client";

import { motion } from "framer-motion";
import { Camera, CalendarDays, Coffee, Gem, Images, Users } from "lucide-react";

const opportunities = [
  {
    icon: Coffee,
    title: "دار الضيافة والكافيه",
    text: "تشغيل يومي يحقق دخلاً مستمرًا من تجربة ضيافة وجلسات كافيه داخل موقع تراثي.",
  },
  {
    icon: CalendarDays,
    title: "المناسبات الخاصة",
    text: "استثمار الموقع في حجوزات خاصة تبدأ من 3,000 دولار حسب نوع المناسبة والخدمات المطلوبة.",
  },
  {
    icon: Camera,
    title: "جلسات التصوير",
    text: "تأجير الموقع للتصوير التجاري والشخصي وجلسات الأزياء، بأسعار تبدأ من 400 دولار للساعة.",
  },
  {
    icon: Images,
    title: "المعارض والفعاليات",
    text: "تنظيم معارض فنية، أمسيات ثقافية، إطلاق منتجات، واستضافات نوعية تعزز قيمة المكان.",
  },
];

const summary = [
  {
    icon: Gem,
    label: "قيمة المكان",
    value: "أصل تراثي نادر",
  },
  {
    icon: Users,
    label: "طبيعة الجمهور",
    value: "زوار، شركات، مصورون، جهات ثقافية",
  },
  {
    icon: CalendarDays,
    label: "نموذج التشغيل",
    value: "يومي + حجوزات خاصة",
  },
];

export default function OperationalOpportunity() {
  return (
    <section
      id="numbers"
      dir="rtl"
      className="relative overflow-hidden bg-[#062F2C] px-5 py-20 text-white md:px-10 md:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(123,224,174,0.16),transparent_30%),radial-gradient(circle_at_85%_80%,rgba(2,20,18,0.8),transparent_44%)]" />
      <div className="absolute left-[-100px] top-[-100px] h-[280px] w-[280px] rounded-full border border-[#7BE0AE]/14" />
      <div className="absolute bottom-[-120px] right-[-120px] h-[340px] w-[340px] rounded-full bg-[#7BE0AE]/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
          >
            <p className="mb-5 inline-flex rounded-full border border-[#7BE0AE]/25 bg-white/8 px-4 py-2 text-sm font-semibold text-[#BFF5DA] backdrop-blur">
              الفرصة التشغيلية
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.02em] text-white md:text-5xl">
              مصادر الإيرادات في دار ضيافة بيت التحفيات
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="max-w-3xl text-lg leading-9 text-white/68"
          >
            تقوم الفرصة التشغيلية على تحويل القيمة التراثية للمكان إلى نموذج
            تجاري متعدد الاستخدامات، يجمع بين التشغيل اليومي والحجوزات عالية
            القيمة، بما يقلل الاعتماد على إيرادات الكافيه وحدها.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {opportunities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#7BE0AE]/35 hover:bg-white/[0.09]"
              >
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-[#7BE0AE]/12 text-[#8BE7B5] transition-all duration-300 group-hover:bg-[#7BE0AE] group-hover:text-[#062F2C]">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/58">
                  {item.text}
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
          className="mt-12 rounded-[2rem] border border-[#7BE0AE]/18 bg-[#7BE0AE]/10 p-6 backdrop-blur md:p-8"
        >
          <div className="grid gap-5 md:grid-cols-3">
            {summary.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-[1.3rem] border border-white/10 bg-[#052B28]/55 p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/8 text-[#8BE7B5]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm text-white/45">{item.label}</p>
                    <p className="mt-1 text-base font-semibold text-white">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}