"use client";

import { Button, Input } from "antd";
import { useState } from "react";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "Robert Smith",
    email: "robertsmith@gmail.com",
    contact: "+99007007007",
    address: "79/A Joker Vila, Gotham City",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveChanges = () => {
    console.log("Form Data:", formData); // Logs all form data to the console
  };

  return (
    <div className="text-left mt-4 edit-profile-info">
      <div className="my-5 text-center">
        <h3 className="text-white text-lg font-semibold mt-4">Edit profile</h3>
      </div>

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
        onClick={handleSaveChanges} // Triggers logging of form data on click
      >
        Save Change
      </Button>
    </div>
  );
};

export default EditProfile;
