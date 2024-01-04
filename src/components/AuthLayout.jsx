import {Navigate, Outlet} from "react-router-dom";
import {useAuthContextProvider} from "../contexts/AuthContextProvider.jsx";

function AuthLayout() {
    const {token} = useAuthContextProvider()

    if (token) {
        return <Navigate to={"/"}/>
    }

    return (
        <div>
            <Outlet/>
        </div>
    )
}

export default AuthLayout
