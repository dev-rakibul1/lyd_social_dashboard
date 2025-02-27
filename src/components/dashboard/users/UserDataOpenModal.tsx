import { Modal } from "antd";
import { IoClose } from "react-icons/io5";
import UserDetailsCard from "./UserDetailsCard";

interface Props {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  userData: any;
}

const UserDataOpenModal = ({
  isOpen,
  onConfirm,
  onCancel,
  userData,
}: Props) => {
  const modalStyle = {
    content: {
      background: "#171717",
      borderRadius: "8px",
      border: "1px solid #7D7D7D",
    },
  };

  return (
    <Modal
      open={isOpen}
      onCancel={onCancel}
      centered
      footer={null}
      width={{
        xs: "90%",
        sm: "80%",
        md: "70%",
        lg: "60%",
        xl: "50%",
        xxl: "40%",
      }}
      closeIcon={<IoClose className="text-white text-2xl" />}
      styles={modalStyle}
      style={{ zIndex: "999" }}
    >
      <div className="text-white text-lg font-semibold mb-4">Details</div>
      <UserDetailsCard userData={userData} />
    </Modal>
  );
};

export default UserDataOpenModal;
