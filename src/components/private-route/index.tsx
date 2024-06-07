import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../stores";
import { useSelector } from "../../stores/hooks";

const PrivateRoute = () => {
    const navigate = useNavigate();

    const auth = useSelector((state: RootState) => state.auth);
    const isAuthenticated = auth.entity != null

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/signup", { replace: true });
        }
    }, [isAuthenticated, navigate]);

    return (<>

    </>)
};

export default PrivateRoute;
