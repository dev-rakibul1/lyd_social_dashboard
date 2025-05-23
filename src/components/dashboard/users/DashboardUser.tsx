import { EyeOutlined } from "@ant-design/icons";
import { Avatar, Button, ConfigProvider, Table, Tag } from "antd";
import { useState } from "react";
import UserDataOpenModal from "./UserDataOpenModal";

const DashboardUser = ({ dataSource }: any) => {
  const [UserDetailsOpen, setUserDetailsOpen] = useState<boolean>(false);
  const [CatchUser, setCatchUser] = useState<{}>({});

  const activityData = dataSource;
  const columns = [
    {
      title: "SL No",
      dataIndex: "sl",
    },
    {
      title: "Activity Title",
      dataIndex: "title",
    },
    {
      title: "Host",
      dataIndex: "host",
      render: (host: { name: string; avatar: string }) => (
        <div className="flex items-center gap-2">
          <Avatar src={host.avatar} />
          {host.name}
        </div>
      ),
    },
    {
      title: "Location",
      dataIndex: "location",
    },
    {
      title: "Schedule",
      dataIndex: "schedule",
    },
    {
      title: "Status",
      dataIndex: "status",
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
      render: (_: any, record: any) => {
        console.log(record);

        return (
          <Button type="primary" onClick={() => handleUserData(record)}>
            <EyeOutlined className="text-lg cursor-pointer text-purple-400" />
          </Button>
        );
      },
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

      <div className="mt-6 table-wrap">
        <h3 style={{ color: "white", padding: "7px" }}>Recent Activity</h3>

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
              dataSource={activityData}
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

export default DashboardUser;
