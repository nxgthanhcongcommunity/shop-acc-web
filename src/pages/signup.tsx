import { GoogleOAuthProvider } from "@react-oauth/google";
import { MobileNavbar } from "../components";
import MenuToggle from "../components/menu-toggle";
import SignupForm from "../components/signup-form";
import { Header } from "../containers";
import Footer from "../containers/footer";

const Signup = () => {
    return (
        <div
            className="
          relative 
          text-white"
        >
            <MobileNavbar />
            <MenuToggle />
            <Header />
            <GoogleOAuthProvider clientId="231862296302-f7k64pkrnf3btno0837dv0egdt6h57hg.apps.googleusercontent.com">
                <SignupForm />
            </GoogleOAuthProvider>
            <Footer />
        </div>
    );
}

export default Signup;