import Image from "next/image";

const LoginFormImage = () => {
  return (
    <div className="h-screen">
      <Image
        src="/assets/images/login.png"
        alt="Logo"
        layout="responsive"
        width={100}
        height={100}
        style={{ minHeight: "100vh", objectFit: "cover" }}
      />
    </div>
  );
};

export default LoginFormImage;
