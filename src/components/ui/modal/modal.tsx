import Dialog from "@mui/material/Dialog";
import { memo } from "react";
import { StyleModal } from "~/types/StyleModal";
import { isMobile } from "react-device-detect";

type Props = {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  style: StyleModal | string;
};

const Modal: React.FC<Props> = ({
  open,
  handleClose,
  children,
  style,
}: Props) => {
  const isFullScreen = () => {
    if (isMobile && style === StyleModal.fullScreenOnMobile) {
      return true;
    }
    if (style === StyleModal.fullScreen) {
      return true;
    }
    return false;
  };
  return (
    <Dialog open={open} onClose={handleClose} fullScreen={isFullScreen()}>
      {children}
    </Dialog>
  );
};

export default memo(Modal);
