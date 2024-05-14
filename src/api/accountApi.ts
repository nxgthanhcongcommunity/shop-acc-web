import axiosInstance from "./axiosInstance"

const accountApi = {

    async LoginWithGoogle(data: any) {
        const response = await axiosInstance({
            method: "POST",
            url: "auth/google",
            data: { ...data },
        })

        return response;
    },
}

export default accountApi;