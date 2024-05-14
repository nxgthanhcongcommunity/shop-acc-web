import { useGoogleLogin } from '@react-oauth/google';
import { accountApi } from "../../api";
import { GoogleIcon } from "../../assets/icons";

const SignupForm = () => {

    const login = useGoogleLogin({
        onSuccess: async (credential) => {

            console.log(credential);

            const response = await accountApi.LoginWithGoogle(credential)

            // console.log(response);
        },
    });

    return (
        <div className="grid h-screen place-content-center">
            <div onClick={() => login()} className="text-md flex w-[400px] cursor-pointer items-center justify-center gap-x-4 rounded-md border border-slate-800 p-4">
                <GoogleIcon className="h-12 w-12" /> Login with google
            </div>
        </div>
    );
};

export default SignupForm;
