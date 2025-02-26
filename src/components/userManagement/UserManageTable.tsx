"use client";

import { userData } from "@/app/data/FakeData";
import { UserData } from "@/types/type";
import { Avatar, Button, ConfigProvider, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";
import { MdDoNotDisturbAlt } from "react-icons/md";

const UserManagementTable: React.FC = () => {
  const columns: ColumnsType<UserData> = [
    {
      title: "SL No.",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Full Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="flex items-center">
          <Avatar
            src={record.avatar}
            size={40}
            className="mr-2"
            style={{ marginRight: "5px" }}
          />
          <span className="text-white">{record.name}</span>
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Date of Birth",
      dataIndex: "dob",
      key: "dob",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Action",
      key: "action",
      width: 80,
      render: () => (
        <Button
          type="primary"
          style={{ background: "#DC4600", border: "none" }}
          disabled
        >
          <MdDoNotDisturbAlt className="text-xl" />
        </Button>
      ),
    },
  ];

  return (
    <div className="p-4 bg-black text-gray-300">
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
            dataSource={userData}
            pagination={false}
            className="transactions-table"
            rowClassName={() => "transaction-row"}
            scroll={{ x: "max-content" }}
          />
        </div>
      </ConfigProvider>
    </div>
  );
};

export default UserManagementTable;
