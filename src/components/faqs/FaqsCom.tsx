"use client";

import useHistoryBack from "@/hooks/HistoryBack";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Typography } from "antd";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const { TextArea } = Input;
const { Title } = Typography;

export default function FAQPS() {
  const [faqs, setFaqs] = useState<[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      // @ts-ignore
      setFaqs([...faqs, values]);
      form.resetFields();
      setIsModalOpen(false);
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const removeFAQ = (index: number) => {
    // @ts-ignore
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  const modalStyle = {
    content: {
      background: "#171717",
      borderRadius: "8px",
      border: "1px solid #7D7D7D",
    },
  };

  const { goBack } = useHistoryBack();

  return (
    <div className=" bg-[#171717] flex justify-center items-center p-4">
      <div className="text-white p-6 rounded-lg shadow-lg w-full">
        <div
          className="flex items-center text-[#6C19FF] cursor-pointer mb-4"
          onClick={goBack}
        >
          <FaArrowLeft className="mr-2 text-xl" />
          <span className="text-xl font-medium">FAQs</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {faqs &&
            faqs.map((faq, index) => (
              <div
                key={index}
                className="mb-4 p-4 rounded-lg border border-[#202020]"
              >
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="">Question no: {index + 1}</label>
                </div>
                <div className="flex items-center justify-between text-black bg-white p-4 rounded-md">
                  {/* @ts-ignore */}
                  <p>{faq.question}</p>

                  <DeleteOutlined
                    className="text-red-400 cursor-pointer text-xl"
                    style={{ color: "#6C19FF" }}
                    onClick={() => removeFAQ(index)}
                  />
                </div>
                <div className="mt-5">
                  <label>Answer</label>
                  <p className="text-black bg-white p-4 rounded-md">
                    {/* @ts-ignore */}
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div className="mt-6 flex justify-center">
          <Button
            type="primary"
            className="bg-purple-600 hover:bg-purple-500 px-6 py-2 rounded-lg flex items-center"
            onClick={showModal}
            style={{ height: "40px" }}
          >
            <PlusOutlined className="mr-2" /> Add FAQ
          </Button>
        </div>
        <Modal
          styles={modalStyle}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          className="faqs-input"
        >
          <h2 className="text-white text-center text-2xl">Add FAQ</h2>
          <Form form={form} layout="vertical">
            <Form.Item
              label={<span className="text-white">Question</span>}
              name="question"
              rules={[{ required: true, message: "Please enter a question" }]}
            >
              <Input placeholder="Enter question" />
            </Form.Item>
            <Form.Item
              label={<span className="text-white">Answer</span>}
              name="answer"
              rules={[{ required: true, message: "Please enter an answer" }]}
            >
              <TextArea rows={4} placeholder="Enter answer" />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
}
