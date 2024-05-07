import React from "react";
import { GoogleIcon } from "../../assets/icons";
import { Link } from "react-router-dom";
import { GoogleLogin, GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import { accountApi } from "../../api";

const SignupForm = () => {

  const login = useGoogleLogin({
    onSuccess: async ({ access_token }) => {
      const response = await accountApi.loginWithGoogle({
        token: access_token,
      })

      console.log('ggresponse: ', response);
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

/*

<div className="grid h-screen place-content-center">
        <Link to={"http://localhost:3003/api/v1/auth/google"}>
          <div className="text-md flex w-[400px] cursor-pointer items-center justify-center gap-x-4 rounded-md border border-slate-800 p-4">
            <GoogleIcon className="h-12 w-12" /> Login with google
          </div>
        </Link>
      </div>
      
      */