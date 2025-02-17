"use client";

import { ColorPalette } from "@/theme/themes";
import { Button, Form, Input, Typography } from "antd";
import { OTPProps } from "antd/es/input/OTP";
import Link from "next/link";
import { useRouter } from "next/navigation";

const { Title, Text } = Typography;

const OTPForm = () => {
  const router = useRouter();
  const onFinish = (values: { otp: string }) => {
    console.log("OTP Submitted:", values);

    if (values.otp) {
      router.push("/auth/login/reset-new-password/");
    }
  };

  const onChange: OTPProps["onChange"] = (text) => {
    console.log("onChange:", text);
  };

  const sharedProps: OTPProps = {
    onChange,
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md  p-8 rounded-lg shadow-lg flex items-center justify-center flex-col">
        {/* Title */}

        <Title
          level={2}
          className="text-center"
          style={{ color: `${ColorPalette?.colorTextPrimary}` }}
        >
          OTP Verification
        </Title>

        {/* Description */}
        <Text
          className="block text-center text-gray-600"
          style={{ color: `${ColorPalette?.colorTextPrimary}` }}
        >
          We have sent a verification code to
        </Text>

        {/* Email Address */}
        <Text
          className="block text-center text-gray-800 font-semibold mb-6"
          style={{ color: `${ColorPalette?.colorTextPrimary}` }}
        >
          robert56@gmail.com
        </Text>

        {/* OTP Input Form */}
        <Form onFinish={onFinish}>
          {/* OTP Input Field */}
          <Form.Item
            name="otp"
            rules={[
              { required: true, message: "Please enter the OTP" },
              { len: 6, message: "OTP must be 6 digits" },
            ]}
          >
            <Input.OTP
              length={6} // Set the length of the OTP (6 digits)
              formatter={(str) => str.toUpperCase()} // Optional: Format the input
              {...sharedProps}
              className="w-full justify-center"
              style={{ outline: "none", border: "transparent" }}
            />
          </Form.Item>

          {/* Verify Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 mt-7"
              style={{ minHeight: "40px" }}
            >
              Verify
            </Button>
          </Form.Item>
        </Form>

        {/* Resend OTP Link */}
        <div className="text-center mt-4">
          <Text
            className="text-gray-600"
            style={{ color: `${ColorPalette?.colorTextPrimary}` }}
          >
            Didn't receive the OTP?{" "}
            <Link
              href="#"
              className="text-purple-500 hover:underline"
              style={{ color: `${ColorPalette?.colorPrimary}` }}
            >
              Resend OTP
            </Link>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default OTPForm;
