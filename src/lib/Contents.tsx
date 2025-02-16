"use client";

import { ColorPalette } from "@/theme/themes";
import { Layout } from "antd";
import React from "react";
const { Content } = Layout;

const Contents = ({
  children,
}: {
  children: React.ReactNode | React.ReactElement;
}) => {
  return (
    <>
      <Content
        style={{
          minHeight: "100vh",
          background: `${ColorPalette.colorPrimaryDark}`,
        }}
      >
        {children}
      </Content>
    </>
  );
};

export default Contents;
