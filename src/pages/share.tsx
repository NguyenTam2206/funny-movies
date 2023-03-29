import { ReactElement } from "react";
import ShareSection from "../components/ShareSection";
import CommonLayout from "../layouts/Common";

function SharePage() {
  return (
    <div className="mt-16">
      <div className="m-auto w-max">
        <ShareSection />
      </div>
    </div>
  );
}

SharePage.getLayout = function getLayout(page: ReactElement) {
  return <CommonLayout>{page}</CommonLayout>;
};

export default SharePage;
