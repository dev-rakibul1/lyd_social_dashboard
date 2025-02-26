import BoosterComp from "@/components/booster/BoosterCom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BOOSTER PLAN | LYD SOCIAL",
  description: "Lyd social booster plan page",
};

const BoosterPlan = () => {
  return (
    <div className="bg-[#171717]">
      <BoosterComp />
    </div>
  );
};

export default BoosterPlan;
