"use client";

import { CameraOutlined } from "@ant-design/icons";
import { Avatar, Button, Input, Tabs } from "antd";
import { useState } from "react";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className="bg-[#171717] flex items-center justify-center p-6 h-screen">
      <div className="bg-[#121d212] p-8 rounded-lg shadow-lg w-full text-center h-screen max-w-4xl ">
        {/* Profile Image */}
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

        {/* Profile Name */}
        <h2 className="text-white text-2xl font-semibold mt-2">Mr. Admin</h2>

        {/* Tabs */}
        <Tabs defaultActiveKey="1" centered className="text-white mt-4">
          <TabPane
            tab={<span className="text-purple-500">Edit Profile</span>}
            key="1"
          >
            <h3 className="text-white text-lg font-semibold mt-4">
              Edit Your Profile
            </h3>

            <div className="text-left mt-4 edit-profile-info">
              <label className="text-white block mb-1">User Name</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-black text-white border border-gray-600"
              />

              <label className="text-white block mt-4 mb-1">Email</label>
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-black text-white border border-gray-600"
              />

              <label className="text-white block mt-4 mb-1">Contact no</label>
              <Input
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="bg-black text-white border border-gray-600"
              />

              <label className="text-white block mt-4 mb-1">Address</label>
              <Input
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="bg-black text-white border border-gray-600"
              />

              <Button
                type="primary"
                block
                className="bg-purple-600 hover:bg-purple-700 mt-6"
                style={{ height: "40px" }}
              >
                Save Change
              </Button>
            </div>
          </TabPane>

          <TabPane
            tab={<span className="text-white">Change Password</span>}
            key="2"
          >
            <h3 className="text-white text-lg font-semibold mt-4">
              Change Your Password
            </h3>
            <div className="text-left mt-4">
              <label className="text-white block mb-1">Old Password</label>
              <Input.Password className="bg-black text-white border border-gray-600" />

              <label className="text-white block mb-1 mt-4">New Password</label>
              <Input.Password className="bg-black text-white border border-gray-600" />

              <label className="text-white block mt-4 mb-1">
                Confirm Password
              </label>
              <Input.Password className="bg-black text-white border border-gray-600" />

              <Button
                type="primary"
                block
                className="bg-purple-600 hover:bg-purple-700 mt-6"
                style={{ height: "40px" }}
              >
                Update Password
              </Button>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfileCom;
