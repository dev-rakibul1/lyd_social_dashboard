import {
  AppstoreOutlined,
  CalendarOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import Link from "next/link";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { GrLineChart } from "react-icons/gr";
import { IoRocketOutline } from "react-icons/io5";
import {
  MdOutlineContactSupport,
  MdOutlineDescription,
  MdOutlinePrivacyTip,
} from "react-icons/md";
import { RiUserSettingsLine } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";

const sidebarItems = () => {
  // Dashboard
  const dashboard: MenuProps["items"] = [
    {
      label: <Link href="/dashboard">Dashboard</Link>,
      key: `/dashboard`,
      icon: <AppstoreOutlined style={{ fontSize: "19px" }} />,
    },
  ];

  // Activity
  const activity: MenuProps["items"] = [
    {
      label: <Link href="/activity">Activity</Link>,
      key: `/activity`,
      icon: <CalendarOutlined style={{ fontSize: "19px" }} />,
    },
  ];
  // user management
  const userManagement: MenuProps["items"] = [
    {
      label: <Link href="/user-management">User Management</Link>,
      key: `/user-management`,
      icon: <UserOutlined style={{ fontSize: "19px" }} />,
    },
  ];

  // Booster plan
  const boosterPlan: MenuProps["items"] = [
    {
      label: <Link href="/booster-plan">Booster plan</Link>,
      key: `/booster-plan`,
      icon: <IoRocketOutline style={{ fontSize: "19px" }} />,
    },
  ];
  // Transaction
  const transaction: MenuProps["items"] = [
    {
      label: <Link href="/transaction">Transaction</Link>,
      key: `/transaction`,
      icon: <GrLineChart style={{ fontSize: "19px" }} />,
    },
  ];
  // Settings
  const settings: MenuProps["items"] = [
    {
      label: "Settings",
      key: `/settings`,
      icon: <SettingOutlined style={{ fontSize: "19px" }} />,
      children: [
        {
          label: <Link href="/settings/profile">Profile</Link>,
          key: `/settings/profile`,
          icon: <RiUserSettingsLine style={{ fontSize: "19px" }} />, // Example icon
        },
        {
          label: <Link href="/settings/terms">Terms & Conditions</Link>,
          key: `/settings/terms`,
          icon: <MdOutlineDescription style={{ fontSize: "19px" }} />, // Example icon
        },
        {
          label: <Link href="/settings/privacy">Privacy Policy</Link>,
          key: `/settings/privacy`,
          icon: <MdOutlinePrivacyTip style={{ fontSize: "19px" }} />, // Example icon
        },
        {
          label: <Link href="/settings/version">Version Details</Link>,
          key: `/settings/version`,
          icon: <TbListDetails style={{ fontSize: "19px" }} />, // Example icon
        },
        {
          label: <Link href="/settings/contact">Contact</Link>,
          key: `/settings/contact`,
          icon: <MdOutlineContactSupport style={{ fontSize: "19px" }} />, // Example icon
        },
        {
          label: <Link href="/settings/faqs">FAQs</Link>,
          key: `/settings/faqs`,
          icon: <AiOutlineQuestionCircle style={{ fontSize: "19px" }} />, // Example icon
        },
      ],
    },
  ];

  // logout
  // const logOut: MenuProps["items"] = [
  //   {
  //     label: <Link href="/logout">Logout</Link>,
  //     key: `/logout`,
  //     icon: <LogoutOutlined style={{ fontSize: "19px" }} />,
  //   },
  // ];

  const contents = [
    ...dashboard,
    ...activity,
    ...userManagement,
    ...boosterPlan,
    ...transaction,
    ...settings,
    // ...logOut,
  ];

  return contents;
};

export default sidebarItems;
