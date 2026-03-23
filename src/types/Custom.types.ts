import type { IUser } from "../interfaces/auth.interfaces";

export type TApiErrorResponse = {
    success: boolean,
    message: string,
    statusCode: number,
}

export interface ICustomError extends Error {
    response: {
        data: TApiErrorResponse,
    }
}


export type TSortOption = {
    [key: string]: 'ascending' | 'descending',
}

export type TPagination = {
    currentPage: number,
    pageSize: number,
    totalData: number,
    totalPages: number,
}
export type TGetUsersData<T = any | null> = {
    success:{}
    data: {
        users: IUser[];
        pagination: {
            page: number;
            limit: number;
            totalData: number;
            totalPages: number;
        };

    }
};

export type TGetAllUsersParams = {
    page: number;
    limit: number;
    role?: string;
    search?: string;
    sortField?: string;
    sortOrder?: 'ascending' | 'descending';
}