"use client";

import { boosterPackages } from "@/app/data/FakeData";
import { BoosterPackage } from "@/types/type";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useState } from "react";
import EditFormModal from "../forms/EditFormModal";
import EditProfileEventForm from "../forms/EditProfileEventForm";

const EventBoosters: React.FC = () => {
  const [EditFormOpen, setEditFormOpen] = useState<boolean>(false);

  const columns: ColumnsType<BoosterPackage> = [
    {
      title: "SL No.",
      dataIndex: "id",
      key: "id",
      render: (text) => <span className="text-white">{text}</span>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text) => <span className="text-white">{text}</span>,
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
      render: (text) => <span className="text-white">{text}</span>,
    },
    {
      title: "No of Reboost",
      dataIndex: "reboost",
      key: "reboost",
      render: (text) => <span className="text-white">{text}</span>,
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <div className="flex gap-2">
          <Button type="primary" onClick={() => setEditFormOpen(true)}>
            <EditOutlined />
          </Button>
          <Button type="primary" style={{ background: "#DC4600" }}>
            <DeleteOutlined />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <>
      <EditFormModal
        isOpen={EditFormOpen}
        onConfirm={() => {
          setEditFormOpen(false);
        }}
        onCancel={() => setEditFormOpen(false)}
      >
        <EditProfileEventForm />
      </EditFormModal>
      <div className=" text-white ">
        {/* Table */}

        {/* <Table
          columns={columns}
          dataSource={boosterPackages}
          pagination={false}
          rowClassName="hover:bg-gray-90"
          rowKey="sl"
          className="dark-table"
          scroll={{ x: "max-content" }}
          style={{ border: "transparent", borderBottom: "transparent" }}
          bordered={false}
        /> */}

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
              dataSource={boosterPackages}
              pagination={false}
              className="transactions-table"
              rowClassName={() => "transaction-row"}
              scroll={{ x: "max-content" }}
            />
          </div>
        </ConfigProvider>
      </div>
    </>
  );
};

export default EventBoosters;
