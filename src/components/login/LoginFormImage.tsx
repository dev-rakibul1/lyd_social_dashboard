import Image from "next/image";

const LoginFormImage = () => {
  return (
    <div>
      <Image
        src="/assets/images/login.png"
        alt="Logo"
        layout="responsive"
        width={100}
        height={100}
      />
    </div>
  );
};

export default LoginFormImage;
