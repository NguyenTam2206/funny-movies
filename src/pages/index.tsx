import { memo } from "react";
import AppBar from "../components/Appbar";

const IndexPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <AppBar />
    </div>
  );
};

export default memo(IndexPage);
