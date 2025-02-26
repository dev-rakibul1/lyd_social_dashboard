"use client";

import type { TabsProps } from "antd";
import { Tabs } from "antd";
import BuyPackage from "./tabs/BuyPackage";
import EventBoosters from "./tabs/EventBoosters";
import ProfileBoosters from "./tabs/ProfileBoosters";

// Define your components for each tab
const Tab1Content = () => (
  <>
    <ProfileBoosters />
  </>
);
const Tab2Content = () => (
  <>
    <EventBoosters />
  </>
);
const Tab3Content = () => (
  <>
    <BuyPackage />
  </>
);

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Profile Boosters",
    children: <Tab1Content />, // Use the component here
  },
  {
    key: "2",
    label: "Event Boosters",
    children: <Tab2Content />, // Use the component here
  },
  {
    key: "3",
    label: "Buy Boosters",
    children: <Tab3Content />, // Use the component here
  },
];

const BoosterCompTabs = () => (
  <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
);

export default BoosterCompTabs;
