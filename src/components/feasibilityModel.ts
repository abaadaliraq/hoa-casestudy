export const investmentAmount = 200_000;
export const agreementYears = 2;
export const capitalDeductionPercent = 20;
export const capitalDeduction = investmentAmount * (capitalDeductionPercent / 100);
export const capitalRefund = investmentAmount - capitalDeduction;
const investorShareRate = 0.5;
export const investorSharePercent = investorShareRate * 100;

export const tableCount = 40;
const monthDays = 30;

export const salaryRows = [
  { role: "مدير التشغيل", count: 1, salary: 1200, category: "الإدارة" },
  { role: "محاسب", count: 1, salary: 500, category: "الإدارة" },

  { role: "شيف عام", count: 1, salary: 1500, category: "المطبخ" },
  { role: "مساعد شيف", count: 1, salary: 700, category: "المطبخ" },
  { role: "غسال صحون", count: 1, salary: 450, category: "المطبخ" },
  { role: "خباز", count: 1, salary: 600, category: "المطبخ" },

  { role: "باريستا", count: 1, salary: 800, category: "المشروبات" },
  { role: "مساعد باريستا", count: 1, salary: 500, category: "المشروبات" },

  { role: "موظف أراكيل", count: 1, salary: 700, category: "الأراكيل" },
  { role: "عامل أراكيل", count: 1, salary: 400, category: "الأراكيل" },

  { role: "منظفون", count: 3, salary: 400, category: "الخدمات" },

  { role: "موظفو خدمة / سيرفيس", count: 4, salary: 450, category: "الخدمة" },
  { role: "كباتن", count: 2, salary: 600, category: "الخدمة" },
];

export const otherCosts = [
  { item: "مولدة / كهرباء", amount: 750 },
  { item: "ماء وكهرباء وخدمات", amount: 1000 },
  { item: "صيانة ونثريات", amount: 1000 },
  { item: "تسويق شهري", amount: 1500 },
];

export const totalSalaries = salaryRows.reduce(
  (sum, row) => sum + row.count * row.salary,
  0
);

export const staffCount = salaryRows.reduce((sum, row) => sum + row.count, 0);

export const otherCostsTotal = otherCosts.reduce((sum, row) => sum + row.amount, 0);

export const monthlyRent = 5_000;
export const monthlyRentPerPartner = monthlyRent / 2;

export const monthlyOperatingCosts =
  totalSalaries + otherCostsTotal + monthlyRent;

const foodMaterialRate = 0.35;
const bookingPreparationRate = 0.2;

const scenarios = [
  {
    name: "تشغيل تأسيسي",
    description: "مرحلة إطلاق وتشغيل حذر.",
    revenueDescription: "تشغيل حذر مع حجز خاص واحد واستخدامات مساندة محدودة.",
    averageTableSpend: 24,
    tableTurnoverPerDay: 1.2,
    eventClosedDays: 1,
    supportRevenue: 3400,
  },
  {
    name: "تشغيل متوازن",
    description: "تشغيل مستقر مع حجوزات شهرية منتظمة.",
    revenueDescription: "تشغيل مستقر للطاولات مع حجوزات شهرية منتظمة.",
    averageTableSpend: 35,
    tableTurnoverPerDay: 1.7,
    eventClosedDays: 2,
    supportRevenue: 7600,
  },
  {
    name: "تشغيل نشط",
    description: "تشغيل قوي مع استثمار أعلى لاستخدامات المكان.",
    revenueDescription: "تشغيل قوي مع استثمار أعلى للمكان كموقع للحجوزات الخاصة.",
    averageTableSpend: 50,
    tableTurnoverPerDay: 2,
    eventClosedDays: 4,
    supportRevenue: 18800,
  },
];

export const calculatedScenarios = scenarios.map((scenario) => {
  const hospitalityOperatingDays = monthDays - scenario.eventClosedDays;
  const tableRevenue =
    tableCount *
    scenario.averageTableSpend *
    scenario.tableTurnoverPerDay *
    hospitalityOperatingDays;
  const totalRevenue = tableRevenue + scenario.supportRevenue;

  const directCosts =
    tableRevenue * foodMaterialRate +
    scenario.supportRevenue * bookingPreparationRate;
  const netProfit = totalRevenue - directCosts - monthlyOperatingCosts;
  const investorMonthlyShare = netProfit * investorShareRate;
  const investorAnnualShare = investorMonthlyShare * 12;

  return {
    ...scenario,
    hospitalityOperatingDays,
    tableRevenue,
    totalRevenue,
    directCosts,
    netProfit,
    dailyNetProfit: netProfit / monthDays,
    investorMonthlyShare,
    investorAnnualShare,
  };
});

export const balancedScenario = calculatedScenarios[1];
