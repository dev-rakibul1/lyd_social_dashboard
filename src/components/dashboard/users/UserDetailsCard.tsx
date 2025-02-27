"use client";

import { Typography } from "antd";

const { Title, Text } = Typography;

export default function UserDetailsCard({ userData }: any) {
  console.log(userData);

  return (
    <div className=" text-white flex justify-center items-center">
      <div className="w-full rounded-lg shadow-lg">
        <div className="mb-2 flex justify-between">
          <Text className="" style={{ color: "#fff", fontSize: "17px" }}>
            Activity title
          </Text>
          <Text
            className="text-white"
            style={{ color: "#fff", fontSize: "17px" }}
          >
            {userData?.title || "N/A"}
          </Text>
        </div>
        <div className="mb-2 flex justify-between">
          <Text className="" style={{ color: "#fff", fontSize: "17px" }}>
            Activity Type
          </Text>
          <Text
            className="text-white"
            style={{ color: "#fff", fontSize: "17px" }}
          >
            Private
          </Text>
        </div>
        <div className="mb-2 flex justify-between">
          <Text className="" style={{ color: "#fff", fontSize: "17px" }}>
            Schedule:
          </Text>
          <Text
            className="text-white"
            style={{ color: "#fff", fontSize: "17px" }}
          >
            {userData?.schedule || "N/A"}
          </Text>
        </div>
        <div className="mb-2 flex justify-between">
          <Text className="" style={{ color: "#fff", fontSize: "17px" }}>
            Host Name
          </Text>
          <Text
            className="text-white"
            style={{ color: "#fff", fontSize: "17px" }}
          >
            {userData?.host?.name || "N/A"}
          </Text>
        </div>
        <div className="mb-2 flex justify-between">
          <Text className="" style={{ color: "#fff", fontSize: "17px" }}>
            Theme:
          </Text>
          <Text
            className="text-white"
            style={{ color: "#fff", fontSize: "17px" }}
          >
            Black Dress
          </Text>
        </div>
        <div className="mb-2 flex justify-between">
          <Text className="" style={{ color: "#fff", fontSize: "17px" }}>
            Activity:
          </Text>
          <Text
            className="text-white"
            style={{ color: "#fff", fontSize: "17px" }}
          >
            Party
          </Text>
        </div>
        <div className="mb-2 flex justify-between">
          <Text className="" style={{ color: "#fff", fontSize: "17px" }}>
            Age Range:
          </Text>
          <Text
            className="text-white"
            style={{ color: "#fff", fontSize: "17px" }}
          >
            18-20 Years
          </Text>
        </div>
        <div className="mb-2 flex justify-between">
          <Text className="" style={{ color: "#fff", fontSize: "17px" }}>
            Total Attendees:
          </Text>
          <Text
            className="text-white"
            style={{ color: "#fff", fontSize: "17px" }}
          >
            120
          </Text>
        </div>
        <div className="mb-2 flex justify-between">
          <Text className="" style={{ color: "#fff", fontSize: "17px" }}>
            Number of guests per participant:
          </Text>
          <Text
            className="text-white"
            style={{ color: "#fff", fontSize: "17px" }}
          >
            2
          </Text>
        </div>
        <div className="mb-2  flex justify-between">
          <Text className="" style={{ color: "#fff", fontSize: "17px" }}>
            Location:
          </Text>
          <Text
            className="text-white block"
            style={{ color: "#fff", fontSize: "17px" }}
          >
            {userData?.location || "N/A"}
          </Text>
        </div>
        <div className="mb-2">
          <Text className="" style={{ color: "#fff", fontSize: "17px" }}>
            Note:
          </Text>
        </div>
        <div>
          <Text
            className="text-white block"
            style={{ color: "#fff", fontSize: "17px" }}
          >
            Note for Participants:
          </Text>
          <ul className="list-disc pl-5 text-white">
            <li>
              Parking is limited, so consider carpooling or using public
              transport.
            </li>
            <li>Only participants within a 10-mile radius are eligible.</li>
            <li>Let’s make it a night to remember!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
