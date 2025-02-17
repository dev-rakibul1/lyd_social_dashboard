import SignUpCom from "@/components/signUp/SignUpCom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIGN UP | SLYD SOCIAL",
  description: "Slyd social application sign up page",
};

const SignUp = () => {
  return (
    <div>
      <SignUpCom />
    </div>
  );
};

export default SignUp;
