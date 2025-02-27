"use client";

import useHistoryBack from "@/hooks/HistoryBack";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function NotificationsCom() {
  const notifications = [
    {
      type: "New Activity Created",
      message: "John created a new event: Pool Party.",
      time: "Just Now",
      highlighted: false,
    },
    {
      type: "Activity Update",
      message: "Mike updated event details: Birthday Party.",
      time: "5 min ago",
      highlighted: true,
    },
    {
      type: "New User Registration",
      message: "Robert Smith has signed up.",
      time: "30 min ago",
      highlighted: false,
    },
    {
      type: "User Reported",
      message: "Brown032 has been reported for unauthorized activity",
      time: "6 hours ago",
      highlighted: true,
    },
    {
      type: "Account Deletion",
      message: "Smith has deleted their account.",
      time: "8 hours ago",
      highlighted: false,
    },
  ];

  const { goBack } = useHistoryBack();

  return (
    <div className="min-h-screen bg-[#171717] text-white p-6">
      {/* Header */}
      <div className="flex items-center cursor-pointer" onClick={goBack}>
        <Button
          type="text"
          icon={
            <ArrowLeftOutlined
              className="text-2xl"
              style={{ fontSize: "22px", color: "#6C19FF" }}
            />
          }
          className="text-purple-500 mr-2 flex items-center justify-center"
        />

        <span className="text-lg font-semibold">Notifications</span>
      </div>

      {/* Total Notifications Count */}
      <p className=" text-base text-white mt-7">Total 128 Notifications</p>

      {/* Notification List */}
      <div className="space-y-2">
        {notifications.map((notification, index) => (
          <div
            key={index}
            className={`flex justify-between items-center p-5 rounded-sm text-base ${
              notification.highlighted ? "bg-[#2E2E2F]" : ""
            }`}
          >
            <span>
              <strong>{notification.type}:</strong> {notification.message}
            </span>
            <span className="text-gray-400 text-sm">{notification.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
