import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import MoreDetails from "../pages/MoreDetails";
import PrivateRoute from "./PrivateRoute";


const Router = createBrowserRouter ([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Navigate to={"/category/01"}></Navigate>
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: ({params}) => 
                    fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: "/news/:id",
        element: 
        <PrivateRoute>
            <MoreDetails></MoreDetails>
        </PrivateRoute>,
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/signIn",
                element: <Login></Login>
            },
            {
                path: "/auth/signUp",
                element: <SignUp></SignUp>,
            },
        ],
    },
    {
        path: "/*",
        element: <h1>ERROR</h1>
    },
])

export default Router;