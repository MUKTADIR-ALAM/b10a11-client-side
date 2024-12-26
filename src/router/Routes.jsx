import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import AddMarathon from "../pages/AddMarathon";
import AllMarathons from "../pages/AllMarathons";
import MarathonDetails from "../pages/MarathonDetails";
import MyMarathons from "../pages/MyMarathons";
import UpdateMarathon from "../pages/UpdateMarathon";
import MyApplications from "../pages/MyApplications";



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
            },
            {
                path:'/addMarathon',
                element: <AddMarathon/>
            },
            {
                path:'/allMarathon',
                element: <AllMarathons/>
            },
            {
                path:'/marathonDetails/:id',
                element: <MarathonDetails/>
            },
            {
                path:'/marathons/:email',
                element: <MyMarathons/>
            },
            {
                path:'/UpdateMarathon/:id',
                element: <UpdateMarathon/>
            },
            {
                path:'/applications/:email',
                element: <MyApplications/>
            },
        ]
    }
])