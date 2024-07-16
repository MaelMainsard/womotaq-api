export const ResponseConstant = {
    statusCodes: {
        ok: 200,
        created: 201,
        accepted: 202,
        noContent: 204,
        badRequest: 400,
        unauthorized: 401,
        forbidden: 403,
        notFound: 404,
        internalServerError: 500,
        serviceUnavailable: 503,
    },

    success(message: string, data:any) {
        return {
            success: true,
            message,
            data,
            status: this.statusCodes.ok,
        };
    },

    error(message:string, error:any) {
        return {
            success: false,
            message,
            error,
            status: this.statusCodes.badRequest,
        };
    },

    unauthorizedError(message: string) {
        return {
            success: false,
            message,
            error: "Unauthorized",
            status: this.statusCodes.unauthorized,
        };
    },

    forbiddenError(message: string) {
        return {
            success: false,
            message,
            error: "Forbidden",
            status: this.statusCodes.forbidden,
        };
    },

    notFoundError(message: string) {
        return {
            success: false,
            message,
            error: "Not Found",
            status: this.statusCodes.notFound,
        };
    },

    internalServerError(message: string) {
        return {
            success: false,
            message,
            error: "Internal Server Error",
            status: this.statusCodes.internalServerError,
        };
    },

    serviceUnavailableError(message: string) {
        return {
            success: false,
            message,
            error: "Service Unavailable",
            status: this.statusCodes.serviceUnavailable,
        };
    },
};