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
