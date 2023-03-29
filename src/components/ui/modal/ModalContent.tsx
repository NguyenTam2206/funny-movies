import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { memo } from "react";
import { Close } from "@mui/icons-material";

type Props = {
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
  cancelBtn?: string;
  acceptBtn?: string;
  onAccept: () => void;
  loading: boolean;
  onReject?: () => void;
  rejectBtn?: string;
  width?: string;
};

const ModalContent: React.FC<Props> = ({
  title,
  onClose,
  children,
  cancelBtn,
  acceptBtn = "承認",
  onAccept,
  loading,
  onReject,
  rejectBtn,
  width = "480px",
}) => {
  return (
    <>
      {title && (
        <DialogTitle className="font-bold py-3 px-6">
          <div className="flex items-center justify-between">
            <div>{title}</div>
            <div className="cursor-pointer w-6" onClick={onClose}>
              <Close />
            </div>
          </div>
        </DialogTitle>
      )}
      <DialogContent dividers className={`p-6 w-[${width}]`}>
        {children}
      </DialogContent>

      <DialogActions className="py-3 px-6">
        {cancelBtn && (
          <Button
            variant="text"
            onClick={onClose}
            className="underline text-black"
          >
            {cancelBtn}
          </Button>
        )}

        {rejectBtn && (
          <Button variant="outlined" color="primary" onClick={onReject}>
            {cancelBtn}
          </Button>
        )}
        <LoadingButton
          loading={loading}
          variant="contained"
          color="primary"
          onClick={onAccept}
        >
          {acceptBtn}
        </LoadingButton>
      </DialogActions>
    </>
  );
};

export default memo(ModalContent);
