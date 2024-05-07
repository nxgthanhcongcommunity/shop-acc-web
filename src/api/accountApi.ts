import axios from "axios"

const accountApi = {
    async loginWithGoogle(data: any) {
        const response = await axios({
            method: "POST",
            url: "auth/google",
            data: { ...data },
        })

        return response;
    },
}

export default accountApi;