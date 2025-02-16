"use client";

import { Spin } from "antd";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full fixed top-0 left-0 bg-gray-100/50 backdrop-blur-sm">
      <Spin size="small" style={{ color: "red" }} />
    </div>
  );
};

export default LoadingPage;
