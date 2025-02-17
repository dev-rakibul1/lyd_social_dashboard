import YourActivitiesCom from "@/components/YourActivities/YourActivitiesCom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "YOUR ACTIVITIES | SLYD SOCIAL",
  description: "Slyd social application Your Activity page",
};

const YourActivities = () => {
  return (
    <div>
      <YourActivitiesCom />
    </div>
  );
};

export default YourActivities;
