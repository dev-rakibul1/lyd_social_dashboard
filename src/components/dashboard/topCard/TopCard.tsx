import Image from "next/image";

const TopCard = ({ data }: any) => {
  return (
    <div className="bg-[#171717] p-6 rounded-lg flex flex-col items-center w-full shadow-md">
      <h3 className="text-white text-lg">{data?.title || "N/A"}</h3>
      <div className="w-16 h-16 rounded-full  flex items-center justify-center my-3 shadow-lg object-cover">
        <Image
          src={data?.icon || "N/A"}
          alt="User Icon"
          width={60}
          height={60}
        />
      </div>
      <p className="text-white text-xl font-semibold">{data?.value || "N/A"}</p>
    </div>
  );
};

export default TopCard;
