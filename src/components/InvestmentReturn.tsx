import {
  agreementYears,
  capitalDeduction,
  capitalDeductionPercent,
  capitalRefund,
  investmentAmount,
} from "./feasibilityModel";

const format = (amount: number) => amount.toLocaleString("en-US");

const amounts = [
  { label: "أصل الاستثمار", amount: investmentAmount },
  {
    label: `الخصم من أصل الاستثمار (${capitalDeductionPercent}%)`,
    amount: capitalDeduction,
  },
  { label: "المبلغ المستحق للمستثمر", amount: capitalRefund },
];

export default function InvestmentReturn() {
  return (
    <section
      id="roi"
      dir="rtl"
      className="bg-[#F7F4EE] px-5 py-20 text-[#092E2A] md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.02em] md:text-5xl">
          رد مبلغ الاستثمار عند نهاية الاتفاق
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5F6B67]">
          يُرد المبلغ المستحق للمستثمر عند انتهاء مدة الاتفاق البالغة{" "}
          {agreementYears * 12} شهرًا. ويستحق المستثمر حصته من صافي الأرباح
          التشغيلية خلال مدة الاتفاق، بالإضافة إلى مبلغ الرد.
        </p>

        <dl className="mt-10 grid gap-4 md:grid-cols-3">
          {amounts.map(({ label, amount }) => (
            <div
              key={label}
              className="rounded-[1.5rem] border border-[#063F3A]/10 bg-white p-6 shadow-sm"
            >
              <dt className="text-sm text-[#5F6B67]">{label}</dt>
              <dd className="mt-3 text-3xl font-semibold text-[#063F3A]">
                {format(amount)} دولار
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
