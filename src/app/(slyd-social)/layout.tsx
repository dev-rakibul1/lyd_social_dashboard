"use client";

import Sidebar from "@/layout/Sidebar";
import TopMenu from "@/layout/TopMenu";
import Contents from "@/lib/Contents";
import { Layout } from "antd";
import React, { useState } from "react";

const { Header } = Layout;

const SlydLayout = ({
  children,
}: {
  children: React.ReactNode | React.ReactElement;
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Toggle the sidebar's collapsed state
  const handleToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <Layout hasSider>
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        setIsMobile={setIsMobile}
        onToggle={handleToggle}
      />
      <Contents>
        <TopMenu
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          isMobile={isMobile}
          onToggle={handleToggle}
        />
        <div style={{ padding: "15px" }}>{children}</div>
      </Contents>
    </Layout>
  );
};

export default SlydLayout;
