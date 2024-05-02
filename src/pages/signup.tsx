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
            <SignupForm />
            <Footer />
        </div>
    );
}

export default Signup;