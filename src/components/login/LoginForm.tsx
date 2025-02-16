"use client";

import { GoogleOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { FaInstagram, FaSnapchatGhost } from "react-icons/fa";

const { Title, Text } = Typography;

const LoginForm = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="w-[400px] p-6 rounded-lg">
        <Title level={2} className="text-center">
          Login to Account
        </Title>
        <Text className="block text-center mb-5">
          Welcome Back, Please Enter Details
        </Text>

        <Form layout="vertical" onFinish={onFinish}>
          {/* Email Field */}
          <Form.Item
            label={<span className="text-white">Email address</span>}
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Invalid email format" },
            ]}
          >
            <Input className="bg-gray-900 text-white" />
          </Form.Item>

          {/* Password Field */}
          <Form.Item
            label={<span className="text-white">Password</span>}
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password className="bg-gray-900 text-white" />
          </Form.Item>

          {/* Remember Password and Forgot Password */}
          <div className="flex justify-between items-center mb-4">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className="text-white">Remember Password</Checkbox>
            </Form.Item>
            <a className="text-purple-500 hover:underline" href="#">
              Forget Password?
            </a>
          </div>

          {/* Sign-in Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-purple-600 hover:bg-purple-700"
            >
              Sign in
            </Button>
          </Form.Item>
        </Form>

        {/* Social Login */}
        <div className="text-center my-4">
          <span className="inline-block w-20 border-b border-gray-600"></span>
          <span className="mx-2 text-gray-400">Or Continue With</span>
          <span className="inline-block w-20 border-b border-gray-600"></span>
        </div>

        <div className="flex justify-center gap-3">
          <Button shape="circle" size="large" icon={<GoogleOutlined />} />
          <Button
            shape="circle"
            size="large"
            icon={<FaSnapchatGhost className="text-yellow-400" />}
          />
          <Button
            shape="circle"
            size="large"
            icon={<FaInstagram className="text-pink-500" />}
          />
        </div>

        {/* Sign-up Link */}
        <p className="text-center mt-4 text-gray-400">
          Not a member?{" "}
          <a href="#" className="text-purple-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
