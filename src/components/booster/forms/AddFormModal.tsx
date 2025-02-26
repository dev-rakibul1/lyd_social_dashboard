import { Modal, Tabs } from "antd";
import { IoClose } from "react-icons/io5";
import PackageForm from "./AddForm";
import BuyForm from "./BuyForm";

interface Props {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const AddFormModal = ({ isOpen, onConfirm, onCancel }: Props) => {
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
    >
      <div className="text-white text-lg font-semibold mb-4">Add new</div>

      {/* Tabs Component */}
      <Tabs
        defaultActiveKey="1"
        className="text-white booster-plan"
        items={[
          {
            key: "1",
            label: <span className="text-white">Profile & Event</span>,
            children: <PackageForm />,
          },
          {
            key: "2",
            label: <span className="text-white">Buy Booster</span>,
            children: (
              <div className="text-white">
                <BuyForm />
              </div>
            ),
          },
        ]}
      />
    </Modal>
  );
};

export default AddFormModal;
