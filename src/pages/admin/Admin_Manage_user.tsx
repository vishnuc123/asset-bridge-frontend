import { useEffect, useState } from 'react'
import AdminSidebar from '../../components/sidebar/admin/SideBar'
import Header from '../../components/header/user/header'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import { Table, } from '../../components/tables/admin/Table'
import { useGetAllUsers } from '../../hooks/admin/useGetallUsers'
import type { TSortOption } from '../../types/Custom.types'
import { Roles } from '../../constants/Roles'
import { ArrowDownAz, ArrowUpAz, Clock, Search } from 'lucide-react'
import { userColumns } from '../../components/tables/admin/Coloumn'
import CustomSort from '../../components/common/CustomSort'


const Admin_Manage_user = () => {
    const authStatus = useSelector((s: RootState) => s.auth.isAuthenticated)
    const [page, setPage] = useState(1)
    const [sortOption, setSortOption] = useState<TSortOption>({ firstname: 'ascending' })
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [debouncedValue, SetDebouncedValue] = useState<string>('');
    const limit = 10
    const { data: userdata, isLoading } = useGetAllUsers(page, limit, Roles.admin_role, debouncedValue, sortOption)
    // console.log("userdata query", userdata)

    useEffect(() => {
        const searchinput = setTimeout(() => {
            SetDebouncedValue(searchTerm)
        }, 500);

        return () => clearTimeout(searchinput)
    }, [searchTerm])

    if (isLoading) {
        return <div>Loading....</div>
    }

    const totalPages = userdata?.data?.pagination?.totalPages ?? 1;


    const handleNext = () => {
        if (page < totalPages) {
            setPage((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (page > 1) {
            setPage((prev) => prev - 1);
        }
    };

    const sortOptions = [
        {
            name: "Name (A → Z)",
            tooltip: "Sort alphabetically ascending",
            onClickHandler: () => {
                setPage(1);
                setSortOption({ firstname: 'ascending' });
            },
            icon: ArrowUpAz,
        },
        {
            name: "Name (Z → A)",
            tooltip: "Sort alphabetically descending",
            onClickHandler: () => {
                setPage(1);
                setSortOption({ firstname: 'descending' });
            },
            icon: ArrowDownAz,
        },
        {
            name: "Recently Updated",
            tooltip: "Sort by last updated date",
            onClickHandler: () => {
                setPage(1);
                setSortOption({ updatedAt: 'descending' })
            },
            icon: Clock,
        },
    ];





    return (
        <div className="h-screen flex flex-col">

            <Header isAuthenticated={authStatus} />

            <div className="flex flex-1 overflow-hidden">

                <AdminSidebar collapsed={false} />

                <div className="flex-1 p-6 bg-gray-100 overflow-auto">

                    <div className="relative w-full p-2 ">
                        <Search className="ml-3 absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-800" />
                        <input
                            type="text"
                            placeholder={`Search ${Roles.user_role}s...`}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            value={searchTerm}
                            className="p-2 pl-10 w-full text-gray-800 placeholder:text-gray-800 placeholder:italic  rounded-full border-gray-300 bg-white"
                        />
                    </div>
                    <CustomSort data={sortOptions} />

                    <Table
                        columns={userColumns} data={userdata?.data?.users ?? []}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                    />

                </div>
            </div>
        </div>
    )

}

export default Admin_Manage_user
