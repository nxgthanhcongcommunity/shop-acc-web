import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../stores";
import { useSelector } from "../../stores/hooks";

interface IPrivateRouteProps {
    preUrl?: string;
}

const PrivateRoute = (props: IPrivateRouteProps) => {

    const { preUrl } = props;

    const navigate = useNavigate();

    const auth = useSelector((state: RootState) => state.auth);
    const isAuthenticated = auth.entity != null

    useEffect(() => {
        if (!isAuthenticated) {
            navigate(`/signup?preurl=${preUrl}`, { replace: true });
        }
    }, [isAuthenticated, navigate]);

    return (<>

    </>)
};

export default PrivateRoute;
