import { useGoogleLogin } from "@react-oauth/google";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleIcon } from "../../assets/icons";
import { RootState } from "../../stores";
import { useDispatch, useSelector } from "../../stores/hooks";
import { authApi } from "../../api";
import { JwtPayload, jwtDecode } from "jwt-decode";
import { assignAuthInfo } from "../../stores/features/authSlice";

interface IDecoded extends JwtPayload {
  account: any;
}

const SignupForm = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.entity != null) {
      navigate(-1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.entity]);


  const dispatch = useDispatch();
  const login = useGoogleLogin({
    onSuccess: async (credential) => {

      const response = await authApi.LoginWithGoogle(credential);
      const { token, refreshToken } = response;

      const decoded = jwtDecode<IDecoded>(token);
      dispatch(assignAuthInfo(decoded.account));

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
