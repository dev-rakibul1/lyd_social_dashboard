"use client";

import { ColorPalette } from "@/theme/themes";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider theme={{ token: ColorPalette }}>
      <AntdRegistry>{children}</AntdRegistry>
    </ConfigProvider>
  );
};

export default Providers;
