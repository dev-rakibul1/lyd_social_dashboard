"use client";

import { ColorPalette } from "@/theme/themes";
import { Button, Form, Input, message, Typography } from "antd";
import { useRouter } from "next/navigation";

const { Title, Text } = Typography;

type IProps = {
  password: string;
  confirmPassword: string;
};

const ResetPasswordForm = () => {
  const router = useRouter();
  const onFinish = (values: IProps) => {
    console.log("Success:", values);

    if (values.password && values.confirmPassword) {
      message.success("Your password reset successfully done.");
      router.push("/auth/login/");
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
          Set a new password
        </Title>
        <Text
          className="block text-center mb-12 text-base"
          style={{
            color: `${ColorPalette?.colorTextPrimary}`,
            fontSize: "17px",
          }}
        >
          Create a new password. Ensure it differs from previous ones for
          security
        </Text>

        <Form layout="vertical" onFinish={onFinish}>
          {/* Password Field */}
          <Form.Item
            label={<span className="text-white">Password</span>}
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password
              className="bg-gray-900 text-white "
              size="large"
              style={{
                color: "white",
                padding: "0px 11px",
                border: "transparent",
              }}
            />
          </Form.Item>

          {/* Confirm Password Field */}
          <Form.Item
            label={<span className="text-white">Confirm password</span>}
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords do not match")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              className="bg-gray-900 text-white "
              size="large"
              style={{
                color: "white",
                padding: "0px 11px",
                border: "transparent",
              }}
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
              Reset Password
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
