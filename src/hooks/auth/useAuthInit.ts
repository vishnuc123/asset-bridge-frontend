import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { TloginUserResponse, TRole } from "../../types/Auth.types";
import { axiosInstance } from "../../services/axiosInstance";
import { loginUser, setActiveRole, setLoading, } from "../../store/slices/Auth.slice";
import toast from "react-hot-toast";
import type { RootState } from "../../store/store";

// export const useAuthInit = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const init = async () => {
//       try {
//         const res = await axiosInstance.get<TloginUserResponse>("/api/user/me");

//         console.log("user restored:", res.data);

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
  const hasRun = useRef(false);
  // const auth = useSelector((s:RootState) => s.auth)


  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;
    // dispatch(setLoading(true))

    // console.log("useuathinit running")
    toast.success("refreashed")
    const init = async () => {
      try {
        const res = await axiosInstance.get<TloginUserResponse>("/api/user/me");

        console.log("user restored:", res.data);

        dispatch(loginUser(res.data));

        const user = res.data.data;
        // const savedRole = localStorage.getItem("activeRole")as TRole
        const savedRole = user.activeRole
        // console.log("savedRole",savedRole)
        console.log("roles.include", user.roles)

        if (user.roles.length <= 1) {
          dispatch(setActiveRole(user.roles[0]));
        } else if (user.roles.length > 1 && savedRole && user.roles.includes(savedRole)) {
          dispatch(setActiveRole(savedRole))
        }
        // } else if(savedRole && roles.includes(savedRole)){
        //   dispatch(setActiveRole(savedRole))
        // }
      } catch (err) {
        // toast.error("error while refreashing")
        console.log("error while refreashing:authinit");
      } finally {
        dispatch(setLoading(false));
      }
    };

    init();
  }, [dispatch]);
};