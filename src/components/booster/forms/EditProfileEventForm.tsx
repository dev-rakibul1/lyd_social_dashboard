"use client";

import { Button, Form, Input, message } from "antd";

const { Item } = Form;

const EditProfileEventForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form values:", values);
    message.success("Package added successfully!");
    form.resetFields(); // Reset form fields after submission
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Form submission failed:", errorInfo);
    message.error("Please fill out all required fields correctly.");
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      style={{ marginTop: "25px" }}
      className="booster-plan"
    >
      {/* Price */}
      <Item
        label={<span style={{ color: "#ddd" }}>Price</span>}
        name="price"
        rules={[
          { required: true, message: "Please enter the price!" },
          {
            pattern: /^\d+(\.\d{1,2})?$/,
            message: "Please enter a valid price (e.g., 49.99)!",
          },
        ]}
      >
        <Input
          placeholder="Input here"
          style={{ borderColor: "white", color: "white" }} // White border and text
          className="custom-input"
        />
      </Item>

      {/* Duration */}
      <Item
        label={<span style={{ color: "#ddd" }}>Duration</span>}
        name="duration"
        rules={[
          { required: true, message: "Please enter the duration!" },
          { max: 50, message: "Package name cannot exceed 50 characters!" },
        ]}
      >
        <Input
          placeholder="Input here"
          style={{ borderColor: "white", color: "white" }} // White border and text
          className="custom-input"
        />
      </Item>

      {/* No of Reboost */}
      <Item
        label={<span style={{ color: "#ddd" }}>No of Reboost</span>}
        name="noOfReboost"
        rules={[{ required: true, message: "Please enter the No of Reboost!" }]}
      >
        <Input
          placeholder="Input here"
          style={{ borderColor: "white", color: "white" }} // White border and text
          className="custom-input"
        />
      </Item>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "15px",
        }}
      >
        <Button
          type="default"
          onClick={() => form.resetFields()}
          style={{ width: "100%", height: "40px" }}
        >
          Cancel
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: "100%", height: "40px" }}
        >
          Update
        </Button>
      </div>
    </Form>
  );
};

export default EditProfileEventForm;
