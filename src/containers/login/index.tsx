import { useGoogleLogin } from "@react-oauth/google";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleIcon } from "../../assets/icons";
import { RootState } from "../../stores";
import { loginWithGoogle } from "../../stores/features/authSlice";
import { useDispatch, useSelector } from "../../stores/hooks";

const SignupForm = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  console.log(auth);

  useEffect(() => {
    if (auth.entity?.account != null) {
      return navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.entity?.account]);

  const dispatch = useDispatch();

  const login = useGoogleLogin({
    onSuccess: async (credential) => {
      dispatch(loginWithGoogle(credential));
    },
  });

  return (
    <div className="grid h-screen place-content-center">
      <div
        onClick={() => login()}
        className="text-md flex w-[400px] cursor-pointer items-center justify-center gap-x-4 rounded-md border border-slate-800 p-4"
      >
        <GoogleIcon className="h-12 w-12" /> Login with google
      </div>
    </div>
  );
};

export default SignupForm;
