import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import type { TRole } from "../types/Auth.types";
import { useSetRole } from "../hooks/auth/useSetRole";

const SelectRoleModal: React.FC = () => {
    const { mutate: setRole, isPending } = useSetRole();

    const auth = useSelector((state: RootState) => state.auth);

    if (auth.isLoading ||!auth || !auth.user?.roles || auth.user?.roles.length <= 1 || auth.activeRole) return null;

    const handleSelectRole = (role: TRole) => {
        setRole(role);
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 w-96 shadow-xl">
                <h2 className="text-xl font-semibold mb-4 text-center">
                    Select Your Role
                </h2>

                <div className="flex flex-col gap-3">
                    {auth.user.roles.map((role: TRole) => (
                        <button
                            key={role}
                            onClick={() => handleSelectRole(role)}
                            disabled={isPending}
                            className="bg-green-500 hover:bg-green-600 text-black py-2 rounded-lg transition"
                        >
                            {isPending ? "Switching..." : role === "User" ? "Customer" : role.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SelectRoleModal;