"use client";

import { Button, Form, Input } from "antd";

type IInput = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const ChangePassword = () => {
  const onFinish = (values: IInput) => {
    console.log("Form data:", values); // Log the form data to the console
  };

  return (
    <div className="text-left mt-4">
      <div className="my-5 text-center">
        <h3 className="text-white text-lg font-semibold mt-4">
          Change Your Password
        </h3>
      </div>

      <Form
        onFinish={onFinish}
        layout="vertical"
        className="space-y-4"
        initialValues={{
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
      >
        <Form.Item
          label="Old Password"
          name="oldPassword"
          rules={[
            {
              required: true,
              message: "Please input your old password!",
            },
          ]}
        >
          <Input.Password
            placeholder="Your old password"
            size="small"
            className="bg-black text-white border border-gray-600"
          />
        </Form.Item>

        <Form.Item
          label="New Password"
          name="newPassword"
          rules={[
            {
              required: true,
              message: "Please input your new password!",
            },
            {
              min: 6,
              message: "Password must be at least 6 characters long!",
            },
          ]}
        >
          <Input.Password
            placeholder="New password"
            size="small"
            className="bg-black text-white border border-gray-600"
          />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          dependencies={["newPassword"]}
          rules={[
            {
              required: true,
              message: "Please confirm your new password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password
            placeholder="Confirm password"
            size="small"
            className="bg-black text-white border border-gray-600"
          />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          block
          className="bg-purple-600 hover:bg-purple-700 mt-6"
          style={{ height: "40px" }}
        >
          Update Password
        </Button>
      </Form>
    </div>
  );
};

export default ChangePassword;
