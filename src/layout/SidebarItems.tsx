import { FileSearchOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import Link from "next/link";
import { FaHandsClapping } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuSquarePlus } from "react-icons/lu";
import { PiCalendarStarBold } from "react-icons/pi";
import { RiUserSearchLine } from "react-icons/ri";
import { TbMessages } from "react-icons/tb";

const sidebarItems = () => {
  // Find an Activities
  const findAnActivities: MenuProps["items"] = [
    {
      label: <Link href="/find-an-activities">Find an Activities</Link>,
      key: `/find-an-activities`,
      icon: <FileSearchOutlined style={{ fontSize: "19px" }} />,
    },
  ];

  // find-an-activities
  const yourActivities: MenuProps["items"] = [
    {
      label: <Link href="/your-activities">Your Activities</Link>,
      key: `/your-activities`,
      icon: <PiCalendarStarBold style={{ fontSize: "19px" }} />,
    },
  ];

  // Create an Activity
  const createAnActivity: MenuProps["items"] = [
    {
      label: <Link href="/create-an-activity">Create an Activity</Link>,
      key: `/create-an-activity`,
      icon: <LuSquarePlus style={{ fontSize: "19px" }} />,
    },
  ];
  // friends
  const friends: MenuProps["items"] = [
    {
      label: <Link href="/friends">Friends</Link>,
      key: `/friends`,
      icon: <FaHandsClapping style={{ fontSize: "19px" }} />,
    },
  ];
  // Find Friends
  const findFriends: MenuProps["items"] = [
    {
      label: <Link href="/find-friends">Find Friends</Link>,
      key: `/find-friends`,
      icon: <RiUserSearchLine style={{ fontSize: "19px" }} />,
    },
  ];
  // Messages
  const messages: MenuProps["items"] = [
    {
      label: <Link href="/messages">Messages</Link>,
      key: `/messages`,
      icon: <TbMessages style={{ fontSize: "19px" }} />,
    },
  ];
  // Notifications
  const notifications: MenuProps["items"] = [
    {
      label: <Link href="/notifications">Notifications</Link>,
      key: `/notifications`,
      icon: <IoNotificationsOutline style={{ fontSize: "19px" }} />,
    },
  ];

  const contents = [
    ...findAnActivities,
    ...yourActivities,
    ...createAnActivity,
    ...friends,
    ...findFriends,
    ...messages,
    ...notifications,
  ];

  return contents;
};

export default sidebarItems;
