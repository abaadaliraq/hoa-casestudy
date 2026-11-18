"use client";

import { motion } from "framer-motion";
import {
  capitalDeductionPercent,
  capitalRefund,
  investmentAmount,
  investorSharePercent,
} from "./feasibilityModel";

const format = (amount: number) => amount.toLocaleString("en-US");

export default function AgreementTerms() {
  return (
    <section
      id="agreement"
      dir="rtl"
      className="relative overflow-hidden bg-[#F7F4EE]"
    >
      <div className="grid min-h-[620px] lg:grid-cols-2">
        {/* النص - يمين */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="flex items-center px-5 py-20 md:px-10 lg:pr-20 lg:pl-12"
        >
          <div className="max-w-2xl text-right">
            <p className="mb-5 inline-flex rounded-full border border-[#0A4B45]/15 bg-white px-4 py-2 text-sm font-semibold text-[#0A4B45] shadow-sm">
              الاتفاق الاستثماري
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.02em] text-[#0B2623] md:text-5xl">
              دراسة جدوى واتفاق استثماري
            </h2>

            <p className="mt-7 text-lg leading-9 text-[#4D5A56]">
              تغطي هذه الدراسة تشغيل دار ضيافة بيت التحفيات (خاتون) لمدة سنتين،
              وهي مدة الاتفاق الاستثماري الحالي.
              وتُعد الدراسة جزءًا من عقد الشراكة.
            </p>


            <p className="mt-5 text-lg leading-9 text-[#4D5A56]">
              يتفق الطرفان على عقد جديد للمرحلة التالية عند افتتاح الفندق والمؤسسة
              المجاورة لبيت التحفيات بعد انتهاء السنتين. هذا العرض هو الخطوة الأولى
              في سلسلة من التعاملات المستقبلية بين الطرفين.
            </p>
          </div>
        </motion.div>

        {/* الصورة - يسار */}
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative min-h-[420px] overflow-hidden lg:min-h-[620px]"
        >
          <img
            src="/images/hoa-about.jpg"
            alt="بيت التحفيات"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#F7F4EE]/12" />

          <div className="absolute bottom-8 right-8 rounded-full border border-white/20 bg-black/25 px-5 py-2.5 text-sm font-medium text-white backdrop-blur">
            House of Antiques — Baghdad
          </div>
        </motion.div>
      </div>
    </section>
  );
}