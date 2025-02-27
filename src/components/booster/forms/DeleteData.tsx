import { Button, Modal } from "antd";
import { IoClose } from "react-icons/io5";

interface Props {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  data?: any;
}

const DeleteBoosterModal = ({ isOpen, onConfirm, onCancel, data }: Props) => {
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
      width={600}
      closeIcon={<IoClose className="text-white text-2xl" />}
      styles={modalStyle}
    >
      <div className="text-white text-lg font-semibold mb-4">
        Delete Booster
      </div>

      <p className="text-gray-400 mb-6">
        {data?.name
          ? `Are you sure you want to delete the booster "${data.name}"? This action cannot be undone.`
          : "Are you sure you want to delete this booster? This action cannot be undone."}
      </p>

      <div className="flex justify-end gap-3">
        <Button
          onClick={onCancel}
          className="bg-gray-600 text-white hover:bg-gray-700"
        >
          No
        </Button>
        <Button
          type="primary"
          onClick={onConfirm}
          className="bg-red-600 text-white hover:bg-red-700"
        >
          Yes! delete it
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteBoosterModal;
