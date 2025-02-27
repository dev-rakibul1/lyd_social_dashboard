"use client";

import { data } from "@/app/data/FakeData";
import { EyeOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Table, Tag } from "antd";
import { useState } from "react";
import UserDataOpenModal from "../dashboard/users/UserDataOpenModal";

const ActivityTable = () => {
  const [UserDetailsOpen, setUserDetailsOpen] = useState<boolean>(false);
  const [CatchUser, setCatchUser] = useState<{}>({});

  const columns = [
    {
      title: "SL No.",
      dataIndex: "sl",
      key: "sl",
    },
    {
      title: "Activity Title",
      dataIndex: "title", // Updated to match the data
      key: "title",
    },
    {
      title: "Host",
      dataIndex: "host",
      key: "host",
      render: (host: { name: string; avatar: string }) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={host.avatar}
            alt={host.name}
            style={{
              width: 24,
              height: 24,
              borderRadius: "50%",
              marginRight: 8,
            }}
          />
          <span>{host.name}</span>
        </div>
      ),
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Schedule",
      dataIndex: "schedule",
      key: "schedule",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag
          style={{
            padding: "5px 10px",
            background: "none",
            borderRadius: "50px",
            borderColor: `${status === "Completed" ? "#F0BD4F" : "#7DFF19"}`,
            color: `${status === "Completed" ? "#F0BD4F" : "#7DFF19"}`,
            cursor: "pointer",
          }}
        >
          {status}
        </Tag>
      ),
    },
    {
      title: "Details",
      key: "details",
      render: (_: any, record: any) => (
        <Button type="primary" onClick={() => handleUserData(record)}>
          <EyeOutlined className="text-lg cursor-pointer text-purple-400" />
        </Button>
      ),
    },
  ];

  const handleUserData = (data: any) => {
    if (!data) return; // Prevent errors if data is undefined
    setCatchUser(data);
    setUserDetailsOpen(true);
  };

  return (
    <>
      <UserDataOpenModal
        onCancel={() => setUserDetailsOpen(false)}
        onConfirm={() => setUserDetailsOpen(false)}
        isOpen={UserDetailsOpen}
        userData={CatchUser}
      />

      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: "#1e1e1e",
              headerColor: "rgba(255, 255, 255, 0.85)",
              rowHoverBg: "#0a0a0a",
              colorBgContainer: "#171717",
            },
          },
          token: {
            colorText: "rgba(255, 255, 255, 0.85)",
            // colorBgContainer: "#171717",
            colorBorderSecondary: "#171717",
          },
        }}
      >
        <div className="w-full">
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            className="transactions-table"
            rowClassName={() => "transaction-row"}
            scroll={{ x: "max-content" }}
          />
        </div>
      </ConfigProvider>
    </>
  );
};

export default ActivityTable;
