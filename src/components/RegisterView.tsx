import { memo, useCallback } from "react";
import { useModalAction } from "~/components/ui/modal/ModalContext";
import ModalContent from "./ui/modal/ModalContent";

const RegisterView: React.FC = () => {
  const loading = false;
  const { closeModal } = useModalAction();

  const handleAccept = useCallback(() => {
    console.log("on register");
  }, []);

  return (
    <ModalContent
      onAccept={handleAccept}
      onClose={closeModal}
      title="Register"
      acceptBtn="Send"
      cancelBtn="Cancel"
      loading={loading}
    >
      <div className="text-xs mb-2">This is register modal</div>
    </ModalContent>
  );
};

export default memo(RegisterView);
