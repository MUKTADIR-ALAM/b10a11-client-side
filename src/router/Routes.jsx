import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";



export const Routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>,
            },
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/register',
                element: <Register/>
            }
        ]
    }
])