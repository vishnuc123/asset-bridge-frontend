import { useEffect } from "react";
import { useDispatch } from "react-redux";
import type { TloginUserResponse } from "../../types/Auth.types";
import { axiosInstance } from "../../services/axiosInstance";
import { loginUser, setLoading, } from "../../store/slices/Auth.slice";

export const useAuthInit = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const init = async () => {
      try {
        const res = await axiosInstance.get<TloginUserResponse>("/api/user/me");

        console.log("✅ user restored:", res.data);

        dispatch(loginUser(res.data));
        // dispatch(setLoading(false))
      } catch (err) {
        console.log("❌ not logged in");
      } finally {
        dispatch(setLoading(false));
      }
    };

    init();
  }, []);
};