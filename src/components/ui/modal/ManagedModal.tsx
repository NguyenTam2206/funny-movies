import dynamic from "next/dynamic";
import { MODAL_VIEWS, useModalAction, useModalState } from "./ModalContext";
import { memo } from "react";
import Modal from "./modal";

const RegisterView = dynamic(() => import("~/components/RegisterView"));

function renderModal(view: MODAL_VIEWS | undefined, data: any) {
  switch (view) {
    case "REGISTER":
      return <RegisterView />;
    default:
      return null;
  }
}

const ManagedModal: React.FC = () => {
  const { isOpen, view, data } = useModalState();
  const { closeModal } = useModalAction();
  return (
    <Modal open={isOpen} handleClose={closeModal} style={data?.style || ""}>
      {renderModal(view, data)}
    </Modal>
  );
};

export default memo(ManagedModal);
