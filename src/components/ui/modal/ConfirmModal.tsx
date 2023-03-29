import { memo } from "react";
import ModalContent from "./ModalContent";
import { useModalAction, useModalState } from "./ModalContext";

const ConfirmModal: React.FC = () => {
  const { closeModal } = useModalAction();
  const { data } = useModalState();
  const {
    loading,
    title,
    onAccept,
    acceptBtn,
    cancelBtn,
    onReject,
    rejectBtn,
    children,
  } = data;
  return (
    <ModalContent
      onAccept={onAccept}
      acceptBtn={acceptBtn}
      onClose={closeModal}
      title={title}
      loading={loading}
      cancelBtn={cancelBtn}
      onReject={onReject}
      rejectBtn={rejectBtn}
    >
      {children}
    </ModalContent>
  );
};

export default memo(ConfirmModal);
