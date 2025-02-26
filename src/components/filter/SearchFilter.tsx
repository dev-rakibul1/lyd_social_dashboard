"use client";

import useHistoryBack from "@/hooks/HistoryBack";
import { ArrowLeftOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

const SearchFilter = ({ title = "N/A" }: { title: string }) => {
  const { goBack } = useHistoryBack();

  return (
    <div className="flex items-center justify-between w-full px-4 py-3 bg-black text-white">
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

        <span className="text-lg font-semibold">{title}</span>
      </div>

      <div className="max-w-md w-full">
        <Input
          placeholder="Search here..."
          prefix={
            <SearchOutlined
              className=" text-2xl text-purple-600"
              style={{ color: "#6C19FF" }}
            />
          }
          className="rounded-full border-gray-700 bg-gray-800 hover:border-gray-600 focus:border-purple-500"
          //   size="large"
        />
      </div>
    </div>
  );
};

export default SearchFilter;
