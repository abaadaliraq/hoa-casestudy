import AboutHouse from "@/components/AboutHouse";
import Hero from "@/components/Hero";
import InitialInvestment from "@/components/InitialInvestment";
import InvestmentReturn from "@/components/InvestmentReturn";
import MonthlyCosts from "@/components/MonthlyCosts";
import OperatingModel from "@/components/OperatingModel";
import OperationalOpportunity from "@/components/OperationalOpportunity";
import ProfitDistribution from "@/components/ProfitDistribution";
import RevenueScenarios from "@/components/RevenueScenarios";
import RiskAndSuccess from "@/components/RiskAndSuccess";
import SimpleConclusion from "@/components/SimpleConclusion";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <>
      <TopBar />
      <Hero />
      <AboutHouse />
      <OperationalOpportunity />
      <OperatingModel />
      <InitialInvestment />
      <MonthlyCosts />
      <RevenueScenarios />
      <ProfitDistribution />
      <InvestmentReturn />
      <RiskAndSuccess />
      <SimpleConclusion />
    </>
  );
}