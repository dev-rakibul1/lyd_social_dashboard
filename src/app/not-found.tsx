"use client";

import { Button } from "antd";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="flex justify-center items-center flex-col"
    >
      <div className="flex flex-row justify-center items-center">
        <span className="font-semibold text-3xl">404</span>{" "}
        <span className="h-[80px] w-[1px] bg-slate-100 mx-5"></span>{" "}
        <span className="font-extralight text-xl">The page is not found.</span>
      </div>

      <Link href={`/`} className="mt-12">
        <Button type="primary">Go Back</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
