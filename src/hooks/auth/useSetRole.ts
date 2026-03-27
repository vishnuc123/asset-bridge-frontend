import { useMutation } from "@tanstack/react-query";
import { SetRole } from "../../services/authServices";
import { useDispatch } from "react-redux";
import { loginUser, setActiveRole } from "../../store/slices/Auth.slice";
import { useNavigate } from "react-router-dom";
import type { TRole } from "../../types/Auth.types";
import toast from "react-hot-toast";
import type { ICustomError } from "../../types/Custom.types";

export const useSetRole = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (role: TRole) => SetRole(role),

        onSuccess: (res, role) => {
            dispatch(setActiveRole(role));

            // const normalizedRole = role.toLowerCase() as TRole
            // console.log("usesetrole", res.data)
            // const role = res.data.roles
            // console.log("setrole",role);

            localStorage.setItem("activeRole", role)
            toast.success(`Switched to ${role}`);
            // dispatch(loginUser(res.data))
            switch (role) {
                case "Investor":
                    navigate("/investor/Home_page");
                    break;

                case "Property_owner":
                    navigate("/owner/Home_page");
                    break;

                case "User":
                    navigate("/user/Home_page");
                    break;

                default:
                    navigate("/");
            }

        },
        onError: (err: ICustomError) => {
            toast.error(err?.message || "something went wrong")

        }
    });
};