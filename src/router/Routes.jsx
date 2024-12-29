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
import ApplicationUpdate from "../pages/ApplicationUpdate";
import Registration from "../pages/Registration";
import Dashboard from "../pages/Dashboard";
import DashboardContent from "../pages/DashboardContent";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
          {
            path: "/dashboard",
            element: <DashboardContent />,
          },
          {
            path: "/dashboard/add",
            element: <AddMarathon />,
          },
          {
            path: "/dashboard/marathons/:email",
            element: <MyMarathons />,
          },
          {
            path: "/dashboard/applications/:email",
            element: <MyApplications />,
          },
        ],
      },
      {
        path: "/allMarathon",
        element: <PrivateRoute><AllMarathons /></PrivateRoute>,
      },
      // {
      //   path: "/addMarathon",
      //   element: <AddMarathon />,
      // },
      {
        path: "/marathonDetails/:id",
        element: <PrivateRoute><MarathonDetails /></PrivateRoute>,
      },
      // {
      //   path: "/marathons/:email",
      //   element: <MyMarathons />,
      // },

      // {
      //   path: "/UpdateMarathon/:id",
      //   element: <UpdateMarathon />,
      // },

      // {
      //   path: "/applications/:email",
      //   element: <MyApplications />,
      // },

      // {
      //   path: "/UpdateApplication/:id",
      //   element: <ApplicationUpdate />,
      // },

      {
        path: "/registration/:id",
        element: <PrivateRoute><Registration /></PrivateRoute>,
      },
    ],
  },
]);
