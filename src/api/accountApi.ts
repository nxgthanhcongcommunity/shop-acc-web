import axiosInstance from "./axiosInstance"

const accountApi = {
    async loginWithGoogle(data: any) {
        const response = await axiosInstance({
            method: "POST",
            url: "auth/google",
            data: { ...data },
        })

        return response;
    },
}

export default accountApi;