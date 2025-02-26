"use client";

import { data, fakeDashboardTopData } from "@/app/data/FakeData";
import IncomeOverviewChart from "./charts/IncomeOverviewChart";
import UserGrowthChart from "./charts/UserGrowthChart";
import TopCard from "./topCard/TopCard";
import DashboardUser from "./users/DashboardUser";

const cardData = fakeDashboardTopData;
const activityData = data?.slice(0, 3);

export default function Dashboard() {
  return (
    <div className="bg-black text-white min-h-screen p-6">
      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {cardData?.map((item, i) => (
          <TopCard data={item} key={i + 1} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div>
          <IncomeOverviewChart />
        </div>

        <div>
          <UserGrowthChart />{" "}
        </div>
      </div>

      {/* Recent Activity */}
      {/* Recent Activity */}
      <DashboardUser dataSource={activityData} />
    </div>
  );
}
