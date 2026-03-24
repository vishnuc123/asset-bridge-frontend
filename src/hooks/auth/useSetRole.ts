import { useMutation } from "@tanstack/react-query";
import { SetRole } from "../../services/authServices";
import { useDispatch } from "react-redux";
import { loginUser, setActiveRole } from "../../store/slices/Auth.slice";
import { useNavigate } from "react-router-dom";
import type { TRole } from "../../types/Auth.types";

export const useSetRole = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (role: TRole) => SetRole(role),

        onSuccess: (res, role) => {
            dispatch(setActiveRole(role));

            console.log("usesetrole", res.data)
            // dispatch(loginUser(res.data))
            switch (role) {
                case "Investor":
                    navigate("/investor/Home_page");
                    break;

                case "Property_owner":
                    navigate("/owner/Home_page");
                    break;

                case "User":
                    navigate("/admin/Home_page");
                    break;

                default:
                    navigate("/");
            }

        },
    });
};