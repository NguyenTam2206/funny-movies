import { memo } from "react";
import Button from "@mui/material/Button";

const IndexPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <Button variant="contained" className="text-black" color="primary">
        Hello World
      </Button>
    </div>
  );
};

export default memo(IndexPage);
