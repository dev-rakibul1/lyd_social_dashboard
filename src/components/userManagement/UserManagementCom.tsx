import SearchFilter from "../filter/SearchFilter";
import UserManagementTable from "./UserManageTable";

const UserManagementCom = () => {
  return (
    <div>
      <SearchFilter title="User Management" />
      <UserManagementTable />
    </div>
  );
};

export default UserManagementCom;
