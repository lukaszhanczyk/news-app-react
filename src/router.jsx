import {createBrowserRouter} from "react-router-dom";
import NotFound from "./views/NotFound.jsx";
import AuthLayout from "./components/AuthLayout.jsx";
import Signup from "./views/Signup.jsx";
import Login from "./views/Login.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthLayout/>,
        children: [
            {
                path: '/signup',
                element: <Signup/>
            },
            {
                path: '/login',
                element: <Login/>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    },
]);

export default router;
