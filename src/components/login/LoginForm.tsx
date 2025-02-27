"use client";

import { ColorPalette } from "@/theme/themes";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import Link from "next/link";

const { Title, Text } = Typography;

const LoginForm = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="w-full lg:w-[500px] p-6 rounded-lg border border-[#202020] max-w-xl">
        <Title
          level={2}
          className="text-center"
          style={{ color: `${ColorPalette?.colorTextPrimary}` }}
        >
          Login to Account
        </Title>
        <Text
          className="block text-center mb-5"
          style={{ color: `${ColorPalette?.colorTextPrimary}` }}
        >
          Please enter your email and password to continue
        </Text>

        <Form
          layout="vertical"
          onFinish={onFinish}
          style={{ marginTop: "60px" }}
        >
          {/* Email Field */}
          <Form.Item
            label={<span className="text-white">Email address</span>}
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Invalid email format" },
            ]}
          >
            <Input
              placeholder="Authorize Email"
              style={{ outline: "none", border: "transparent" }}
              size="large"
              className="bg-gray-900 text-white"
            />
          </Form.Item>

          {/* Password Field */}
          <Form.Item
            label={<span className="text-white">Password</span>}
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password
              className="bg-gray-900 text-white "
              size="large"
              placeholder="*************"
              style={{
                color: "white",
                padding: "0px 11px",
                border: "transparent",
              }}
            />
          </Form.Item>

          {/* Remember Password and Forgot Password */}
          <div className="flex justify-between items-center mb-4">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className="text-white" style={{ color: "#fff" }}>
                Remember Password
              </Checkbox>
            </Form.Item>
            <Link
              className="text-purple-500 hover:underline"
              style={{ color: "#fff" }}
              href="/auth/login/forgot-password/"
            >
              Forget Password?
            </Link>
          </div>

          {/* Sign-in Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-purple-600 hover:bg-purple-700"
              style={{ minHeight: "40px" }}
            >
              Sign in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
