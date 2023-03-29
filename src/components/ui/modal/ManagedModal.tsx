import dynamic from "next/dynamic";
import { MODAL_VIEWS, useModalAction, useModalState } from "./ModalContext";
import { memo } from "react";
import Modal from "./modal";

// const DocumentFolderCreateView = dynamic(
//   () => import("~/components/document/DocumentFolderCreateView")
// );

// const DocumentFolderUpdateView = dynamic(
//   () => import("~/components/document/DocumentFolderUpdateView")
// );

// const DocumentFolderDeleteView = dynamic(
//   () => import("~/components/document/DocumentFolderDeleteView")
// );

// const DocumentUpdateView = dynamic(
//   () => import("~/components/document/DocumentUpdateView")
// );
// const DocumentsDeleteView = dynamic(
//   () => import("~/components/document/DocumentsDeleteView")
// );

// const ConfirmModal = dynamic(
//   () => import("~/components/ui/modal/ConfirmModal")
// );

// const DocumentBuilderpadUploadView = dynamic(
//   () => import("~/components/document/DocumentBuilderpadUploadView")
// );

function renderModal(view: MODAL_VIEWS | undefined, data: any) {
  switch (view) {
    // case "CREATE_DOCUMENT_FOLDER":
    //   return <DocumentFolderCreateView />;
    // case "UPDATE_DOCUMENT_FOLDER":
    //   return <DocumentFolderUpdateView />;
    // case "DELETE_DOCUMENT_FOLDER":
    //   return <DocumentFolderDeleteView />;
    // case "UPDATE_DOCUMENT":
    //   return <DocumentUpdateView />;
    // case "DELETE_DOCUMENTS":
    //   return <DocumentsDeleteView />;
    // case "CONFIRM":
    //   return <ConfirmModal />;
    // case "UPLOAD_FILE_BUILDERPAD":
    //   return <DocumentBuilderpadUploadView />;
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
