import { memo, ReactElement } from "react";
import CommonLayout from "../layouts/Common";

function IndexPage() {
  return <div>This is index page</div>;
}

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <CommonLayout>{page}</CommonLayout>;
};

export default IndexPage;
