import UserManagementCom from "@/components/userManagement/UserManagementCom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "USER MANAGEMENT | LYD SOCIAL",
  description: "Lyd social user management page",
};

const UserManagement = () => {
  return (
    <div>
      <UserManagementCom />
    </div>
  );
};

export default UserManagement;
