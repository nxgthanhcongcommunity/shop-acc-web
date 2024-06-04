import { useGoogleLogin } from "@react-oauth/google";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleIcon } from "../../assets/icons";
import { RootState } from "../../stores";
import { loginWithGoogle } from "../../stores/features/authSlice";
import { useDispatch, useSelector } from "../../stores/hooks";
import { queryBalance } from "../../stores/features/balanceSlice";

const SignupForm = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.entity?.account != null) {
      return navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.entity?.account]);

  const dispatch = useDispatch();

  const login = useGoogleLogin({
    onSuccess: async (credential) => {
      const rsLogin = await dispatch(loginWithGoogle(credential));

      if (rsLogin.meta.requestStatus != "fulfilled" || rsLogin.payload == null) {
        return;
      }

      if (auth.entity.account == null) {
        return;
      }

      const rsGetBalance = await dispatch(queryBalance({ accountId: 1 }))
      console.log(rsGetBalance);

      navigate(-1);
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
