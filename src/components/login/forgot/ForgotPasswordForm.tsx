"use client";

import { ColorPalette } from "@/theme/themes";
import { Button, Form, Input, Typography } from "antd";
import { useRouter } from "next/navigation";

const { Title, Text } = Typography;

const ForgotPasswordForm = () => {
  const router = useRouter();
  const onFinish = (values: { email: string }) => {
    console.log("Success:", values);

    if (values.email) {
      router.push("/auth/login/otp-verify/");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="w-full lg:w-[500px] p-6 rounded-lg">
        <Title
          level={2}
          className="text-center"
          style={{ color: `${ColorPalette?.colorTextPrimary}` }}
        >
          Forgot Password
        </Title>
        <Text
          className="block text-center mb-5"
          style={{ color: `${ColorPalette?.colorTextPrimary}` }}
        >
          Please enter your email to get verification code
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
            <Input
              style={{ outline: "none", border: "transparent" }}
              size="large"
              className="bg-gray-900 text-white"
            />
          </Form.Item>

          {/* Sign-up Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-purple-600 hover:bg-purple-700"
              style={{ minHeight: "40px" }}
            >
              Continue
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
