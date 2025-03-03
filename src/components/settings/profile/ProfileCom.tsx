"use client";

import { CameraOutlined } from "@ant-design/icons";
import { Avatar, Tabs } from "antd";
import { useState } from "react";
import ChangePassword from "./tabs/ChangePassword";
import EditProfile from "./tabs/EditProfile";

const { TabPane } = Tabs;

const ProfileCom = () => {
  const [formData, setFormData] = useState({
    name: "Robert Smith",
    email: "robertsmith@gmail.com",
    contact: "+99007007007",
    address: "79/A Joker Vila, Gotham City",
  });

  const [profileImage, setProfileImage] = useState<string>(
    "https://randomuser.me/api/portraits/men/75.jpg"
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className="bg-[#171717] flex items-center justify-center p-6 h-screen">
      <div className="bg-[#121d212] p-8 rounded-lg shadow-lg w-full text-center h-screen max-w-4xl">
        {/* Profile Image and Name */}
        <div className="relative inline-block">
          <Avatar
            size={120}
            src={profileImage}
            className="border-4 border-gray-600"
          />
          <label className="absolute bottom-[15px] right-[-5px] bg-purple-600 p-2 rounded-full cursor-pointer text-white w-8 h-8 flex items-center justify-center border">
            <CameraOutlined className="text-white text-md" />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>
        <h2 className="text-white text-2xl font-semibold mt-2">
          {formData.name}
        </h2>
        <p className="text-white">{formData.email}</p>

        {/* Tabs for Edit Profile and Change Password */}
        <Tabs defaultActiveKey="1" centered className="text-white mt-4">
          <TabPane tab={<span className="">Edit Profile</span>} key="1">
            <EditProfile />
          </TabPane>

          <TabPane tab={<span className="">Change Password</span>} key="2">
            <ChangePassword />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfileCom;
