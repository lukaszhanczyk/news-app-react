import {createBrowserRouter, Navigate} from "react-router-dom";
import NotFound from "./views/NotFound.jsx";
import AuthLayout from "./components/AuthLayout.jsx";
import Signup from "./views/Signup.jsx";
import Login from "./views/Login.jsx";
import MainLayout from "./components/MainLayout.jsx";
import Feed from "./views/Feed/Feed.jsx";
import Settings from "./views/Settings/Settings.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to="/feed"/>
            },
            {
                path: '/feed',
                element: <Feed/>
            },
            {
                path: '/settings',
                element: <Settings/>
            },
        ]
    },
    {
        path: '/',
        element: <AuthLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to="/signup"/>
            },
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
