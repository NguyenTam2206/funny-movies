import { ReactElement, useEffect } from "react";
import ShareSection from "../components/ShareSection";
import CommonLayout from "../layouts/Common";
import { useRouter } from "next/router";

function SharePage() {
  const router = useRouter();
  useEffect(() => {
    const isLogedIn =
      localStorage.getItem("user") && localStorage.getItem("token");
    if (!isLogedIn) {
      router.push("/");
    }
  }, [router]);

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
