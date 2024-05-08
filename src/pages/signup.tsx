import { GoogleOAuthProvider } from "@react-oauth/google";
import { LoginContainer } from "../containers";

const Signup = () => {
    return (
        <GoogleOAuthProvider clientId="231862296302-f7k64pkrnf3btno0837dv0egdt6h57hg.apps.googleusercontent.com">
            <LoginContainer />
        </GoogleOAuthProvider>
    );
}

export default Signup;