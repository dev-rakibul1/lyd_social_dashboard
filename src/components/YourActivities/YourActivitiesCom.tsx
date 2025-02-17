"use client";

import { fakeParty } from "@/app/data/FakeData";
import { ColorPalette } from "@/theme/themes";
import { Typography } from "antd";
import YourActivitiesCard from "./YourActivitiesCard";

const YourActivitiesCom = () => {
  const Party = fakeParty;

  const { Title, Text } = Typography;
  return (
    <div>
      <Title
        level={3}
        className="text-left"
        style={{ color: `${ColorPalette?.colorTextPrimary}` }}
      >
        Your Activity
      </Title>

      {/* Party */}
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-7 ">
        {Party?.map((party, index: number) => (
          <YourActivitiesCard data={party} key={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default YourActivitiesCom;
