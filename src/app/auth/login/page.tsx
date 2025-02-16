import LoginCom from "@/components/login/LoginCom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LOGIN | SLYD SOCIAL",
  description: "Slyd social application login page",
};

const Login = () => {
  return (
    <div>
      <LoginCom />
    </div>
  );
};

export default Login;
