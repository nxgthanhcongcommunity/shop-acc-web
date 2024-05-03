import React from "react";
import { GoogleIcon } from "../../assets/icons";
// import { MailIcon, LockClosedIcon } from '@heroicons/react/outline';

const SignupForm = () => {
  return (
    <div className="grid h-screen place-content-center">
      <div className="text-md flex w-[400px] cursor-pointer items-center justify-center gap-x-4 rounded-md border border-slate-800 p-4">
        <GoogleIcon className="h-12 w-12" /> Login with google
      </div>
    </div>
  );
};

export default SignupForm;
