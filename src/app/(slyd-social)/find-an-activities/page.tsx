import FindAnActivitiesCom from "@/components/FindAnActivities/FindAnActivitiesCom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FIND AN ACTIVITIES | SLYD SOCIAL",
  description: "Slyd social application Find an Activity page",
};

const FindAnActivities = () => {
  return (
    <div>
      <FindAnActivitiesCom />
    </div>
  );
};

export default FindAnActivities;
