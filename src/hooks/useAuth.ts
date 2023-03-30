import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/stores";
import { setIsLogedIn, setUser } from "../stores/Common";

export const useAuth = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(setIsLogedIn(true));
    }
    if (localStorage.getItem("user")) {
      dispatch(setUser(localStorage.getItem("user") || ""));
    }
  }, [dispatch]);

  const isLogedIn = useSelector(
    (state: RootState) => state.commonState.isLogedIn
  );
  return {
    isLogedIn,
  };
};
