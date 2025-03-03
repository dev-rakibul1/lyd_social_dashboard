"use client";

import useHistoryBack from "@/hooks/HistoryBack";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";

const SearchFilter = ({ title = "N/A" }: { title: string }) => {
  const { goBack } = useHistoryBack();
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    console.log("Current input value:", e.target.value);
  };

  return (
    <div className="flex items-center justify-between w-full px-4 py-3 bg-black text-white">
      {/* Back Button and Title */}
      <div className="flex items-center cursor-pointer" onClick={goBack}>
        <Button
          type="text"
          icon={
            <ArrowLeftOutlined style={{ fontSize: "22px", color: "#6C19FF" }} />
          }
          className="text-purple-500 mr-2 flex items-center justify-center"
        />
        <span className="text-lg font-semibold">{title}</span>
      </div>

      {/* Search Input */}
      <div className="max-w-md w-full">
        <Input
          size="small"
          placeholder="Search here..."
          value={searchValue}
          onChange={handleChange}
          allowClear
          prefix={
            <RiSearchLine
              style={{ color: "#6C19FF", fontSize: "25px", marginRight: "8px" }}
            />
          }
          className="rounded-full bg-gray-800 border-none text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500"
        />
      </div>
    </div>
  );
};

export default SearchFilter;
