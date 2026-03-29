import type { TUserData } from "../../../types/Auth.types";
import type { Column } from "./Table";

export const getUserColumns = (
    handleToggleStatus: (user: TUserData) => void
): Column<TUserData>[] => [
        {
            header: "User ID",
            accessor: "userId",
        },
        {
            header: "Name",
            render: (row) => `${row.firstname} ${row.lastname}`,
        },
        {
            header: "Email",
            accessor: "email",
        },
        {
            header: "Role",
            accessor: "roles",
        },
        {
            header: "Joined",
            accessor: "createdAt",
            render: (row) => {
                return new Date(row.createdAt).toLocaleDateString();
            },
        },
        {
            header: "Status",
            render: (row) => {
                const statusStyles: any = {
                    active: "bg-green-100 text-green-600",
                    pending: "bg-yellow-100 text-yellow-600",
                    banned: "bg-red-100 text-red-600",
                };

                return (
                    <span
                        className={`px-2 py-1 rounded-full text-xs ${statusStyles[row.status]}`}
                    >
                        {row.status}
                    </span>
                );
            },
        },
        {
            header: "Actions",
            render: (row) => {
                return (
                    <div className="flex gap-2">
                        <button className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200">
                            View
                        </button>

                        <button
                            onClick={() => handleToggleStatus(row)} // ✅ NOW WORKS
                            className={`px-2 py-1 text-xs rounded-md ${row.isBlocked === true
                                    ? "bg-green-100 text-green-600 hover:bg-green-200"
                                    : "bg-red-100 text-red-600 hover:bg-red-200"
                                }`}
                        >
                            {row.isBlocked === true ? "Unblock" : "Block"}
                        </button>
                    </div>
                );
            },
        },
    ];