"use client";

import { Button, Form, Input, message } from "antd";

const { Item } = Form;

const EditBuyForm = () => {
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
      {/* Package Name */}
      <Item
        label={<span style={{ color: "#ddd" }}>Package Name</span>}
        name="packageName"
        rules={[
          { required: true, message: "Please enter the package name!" },
          { max: 50, message: "Package name cannot exceed 50 characters!" },
        ]}
      >
        <Input
          placeholder="Input here"
          style={{ borderColor: "white", color: "white" }} // White border and text
          className="custom-input"
        />
      </Item>

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

      {/* Profile Booster */}
      <Item
        label={<span style={{ color: "#ddd" }}>Profile Booster</span>}
        name="profileBooster"
        rules={[
          { required: true, message: "Please enter the profile booster!" },
        ]}
      >
        <Input
          placeholder="Input here"
          style={{ borderColor: "white", color: "white" }} // White border and text
          className="custom-input"
        />
      </Item>

      {/* Event Booster */}
      <Item
        label={<span style={{ color: "#ddd" }}>Event Booster</span>}
        name="eventBooster"
        rules={[{ required: true, message: "Please enter the event booster!" }]}
      >
        <Input
          placeholder="Input here"
          style={{ borderColor: "white", color: "white" }} // White border and text
          className="custom-input"
        />
      </Item>

      {/* Bonus Profile Booster */}
      <Item
        label={<span style={{ color: "#ddd" }}>Bonus Profile Booster</span>}
        name="bonusProfileBooster"
        rules={[
          {
            required: true,
            message: "Please enter the bonus profile booster!",
          },
        ]}
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

export default EditBuyForm;
