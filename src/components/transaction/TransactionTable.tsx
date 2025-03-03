"use client";

import { Avatar, ConfigProvider, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";

interface TransactionData {
  key: string;
  slNo: string;
  transactionId: string;
  date: string;
  user: {
    name: string;
    avatar: string;
  };
  paymentType: string;
  amount: string;
}

const TransactionTable: React.FC = () => {
  const transactionData: TransactionData[] = [
    {
      key: "1",
      slNo: "#12333",
      transactionId: "#123354674573",
      date: "12/06/24",
      user: {
        name: "Hari Danang",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      paymentType: "Online Payment",
      amount: "$5",
    },
    {
      key: "2",
      slNo: "#12333",
      transactionId: "#123354674573",
      date: "10/06/24",
      user: {
        name: "Hari Danang",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      paymentType: "Online Payment",
      amount: "$2",
    },
    {
      key: "3",
      slNo: "#12333",
      transactionId: "#123354674573",
      date: "10/06/24",
      user: {
        name: "Devon Lane",
        avatar: "https://randomuser.me/api/portraits/men/36.jpg",
      },
      paymentType: "Online Payment",
      amount: "$15",
    },
    {
      key: "4",
      slNo: "#12333",
      transactionId: "#123354674573",
      date: "05/06/24",
      user: {
        name: "Floyd Miles",
        avatar: "https://randomuser.me/api/portraits/men/64.jpg",
      },
      paymentType: "Online Payment",
      amount: "$8",
    },
    {
      key: "5",
      slNo: "#12333",
      transactionId: "#123354674573",
      date: "04/06/24",
      user: {
        name: "Kathryn Murp",
        avatar: "https://randomuser.me/api/portraits/women/62.jpg",
      },
      paymentType: "Online Payment",
      amount: "$50",
    },
    {
      key: "6",
      slNo: "#12333",
      transactionId: "#123354674573",
      date: "04/06/24",
      user: {
        name: "Devon Lane",
        avatar: "https://randomuser.me/api/portraits/men/44.jpg",
      },
      paymentType: "Online Payment",
      amount: "$15",
    },
    {
      key: "7",
      slNo: "#12333",
      transactionId: "#123354674573",
      date: "04/06/24",
      user: {
        name: "Foysal Rahman",
        avatar: "https://randomuser.me/api/portraits/men/82.jpg",
      },
      paymentType: "Online Payment",
      amount: "$3",
    },
    {
      key: "8",
      slNo: "#12333",
      transactionId: "#123354674573",
      date: "04/06/24",
      user: {
        name: "Hari Danang",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      paymentType: "Online Payment",
      amount: "$7",
    },
    {
      key: "9",
      slNo: "#12333",
      transactionId: "#123354674573",
      date: "04/06/24",
      user: {
        name: "Eleanor Pena",
        avatar: "https://randomuser.me/api/portraits/women/64.jpg",
      },
      paymentType: "Online Payment",
      amount: "$2",
    },
    {
      key: "10",
      slNo: "#12333",
      transactionId: "#123354674573",
      date: "04/06/24",
      user: {
        name: "Hari Danang",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      paymentType: "Online Payment",
      amount: "$15",
    },
    {
      key: "11",
      slNo: "#12333",
      transactionId: "#123354674573",
      date: "04/06/24",
      user: {
        name: "Hari Danang",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      paymentType: "Online Payment",
      amount: "$45",
    },
  ];

  const columns: ColumnsType<TransactionData> = [
    {
      title: "SL No.",
      dataIndex: "slNo",
      key: "slNo",
      width: 100,
    },
    {
      title: "Transaction ID",
      dataIndex: "transactionId",
      key: "transactionId",
      width: 180,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: 100,
    },
    {
      title: "User Name",
      key: "user",
      width: 180,
      render: (_, record) => (
        <div className="flex items-center">
          <Avatar src={record.user.avatar} size={36} className="mr-3" />
          <span>{record.user.name}</span>
        </div>
      ),
    },
    {
      title: "Payment Type",
      dataIndex: "paymentType",
      key: "paymentType",
      width: 150,
    },
    {
      title: "Paid Amount",
      dataIndex: "amount",
      key: "amount",
      align: "right",
      width: 120,
    },
  ];

  return (
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
          colorBgContainer: "#171717",
          colorBorderSecondary: "#171717",
        },
      }}
    >
      <div className="w-full mt-7">
        <Table
          columns={columns}
          dataSource={transactionData}
          pagination={false}
          className="transactions-table"
          rowClassName={() => "transaction-row"}
          scroll={{ x: "max-content" }}
        />
      </div>
    </ConfigProvider>
  );
};

export default TransactionTable;
