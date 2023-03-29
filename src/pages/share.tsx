import { ReactElement } from "react";
import CommonLayout from "../layouts/Common";

function SharePage() {
  return <div>This is share page</div>;
}

SharePage.getLayout = function getLayout(page: ReactElement) {
  return <CommonLayout>{page}</CommonLayout>;
};

export default SharePage;
