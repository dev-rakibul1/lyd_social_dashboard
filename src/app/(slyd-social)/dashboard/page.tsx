import DashboardCom from "@/components/dashboard/DashboardCom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DASHBOARD | LYD SOCIAL",
  description: "Lyd social dashboard page",
};

const Dashboard = () => {
  return (
    <div>
      <DashboardCom />
    </div>
  );
};

export default Dashboard;
