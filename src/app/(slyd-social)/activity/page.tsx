import ActivityCom from "@/components/activity/ActivityCom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ACTIVITY | LYD SOCIAL",
  description: "Lyd social main layout page",
};

const Activity = () => {
  return (
    <div>
      <ActivityCom />
    </div>
  );
};

export default Activity;
