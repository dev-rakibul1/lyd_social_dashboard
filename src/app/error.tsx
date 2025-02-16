"use client";

const NotFoundPage = () => {
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="flex flex-row justify-center items-center"
    >
      <span className="font-semibold text-3xl">Offfs</span>{" "}
      <span className="h-[80px] w-[1px] bg-slate-100 mx-5"></span>{" "}
      <span className="font-extralight text-xl">Something went wrong.</span>
    </div>
  );
};

export default NotFoundPage;
