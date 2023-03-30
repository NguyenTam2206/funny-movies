import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/stores";
import { setIsLogedIn } from "../stores/Common";

export const useAuth = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(setIsLogedIn(true));
    }
  }, [dispatch]);

  const isLogedIn = useSelector(
    (state: RootState) => state.commonState.isLogedIn
  );
  return {
    isLogedIn,
  };
};
