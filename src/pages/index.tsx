import { memo, ReactElement } from "react";
import MovieListing from "../components/MovieListing";
import CommonLayout from "../layouts/Common";

function IndexPage() {
  return (
    <div>
      <MovieListing />
    </div>
  );
}

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <CommonLayout>{page}</CommonLayout>;
};

export default IndexPage;
