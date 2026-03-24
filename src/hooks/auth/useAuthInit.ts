import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import type { TloginUserResponse } from "../../types/Auth.types";
import { axiosInstance } from "../../services/axiosInstance";
import { loginUser, setActiveRole, setLoading, } from "../../store/slices/Auth.slice";

// export const useAuthInit = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const init = async () => {
//       try {
//         const res = await axiosInstance.get<TloginUserResponse>("/api/user/me");

//         console.log("✅ user restored:", res.data);

//         dispatch(loginUser(res));
//         // dispatch(setLoading(false))
//       } catch (err) {
//         console.log("session expired or not logged in");
//       } finally {
//         dispatch(setLoading(false));
//       }
//     };

//     init();
//   }, []);
// };


export const useAuthInit = () => {
  const dispatch = useDispatch();
  const hasRun = useRef(false); // ✅ prevent multiple calls

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const init = async () => {
      try {
        const res = await axiosInstance.get<TloginUserResponse>("/api/user/me");

        console.log("✅ user restored:", res.data);

        dispatch(loginUser(res.data));

        const roles = res.data.user.roles;

        if (roles.length === 1) {
          dispatch(setActiveRole(roles[0]));
        } 

      } catch (err) {
        console.log("session expired or not logged in");
      } finally {
        dispatch(setLoading(false));
      }
    };

    init();
  }, [dispatch]); 
};