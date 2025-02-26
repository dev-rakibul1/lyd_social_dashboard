"use client";

import useHistoryBack from "@/hooks/HistoryBack";
import { ArrowLeftOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";
import AddFormModal from "../forms/AddFormModal";

const AddBtn = ({ title = "N/A" }: { title: string }) => {
  const { goBack } = useHistoryBack();
  const [AddFormOpen, setAddFormOpen] = useState<boolean>(false);

  return (
    <>
      <AddFormModal
        isOpen={AddFormOpen}
        onConfirm={() => {
          setAddFormOpen(false);
        }}
        onCancel={() => setAddFormOpen(false)}
      />

      <div className="flex items-center justify-between w-full px-4 py-3 text-white">
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

        <div className="">
          <Button
            onClick={() => setAddFormOpen(true)}
            type="primary"
            style={{ padding: "15px", height: "40px", minWidth: "150px" }}
          >
            <PlusOutlined /> <span>Add New</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddBtn;
