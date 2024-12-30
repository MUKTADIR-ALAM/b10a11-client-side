import React from "react";
import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet";

export default function Dashboard() {
  const { user, signOutUser } = useContext(AuthContext);
  return (
    <>
    <Helmet>
        <title>Dashboard | Runner</title>
    </Helmet>
    <div className="lg:grid grid-cols-12 gap-3">
      <div className="col-span-2">
        <ul tabIndex={0} className="space-y-2">
          <li>
            <NavLink to={"/dashboard/add"} className={({ isActive }) => 
                isActive ? "btn w-full bg-blue-500 text-white border-none" : "btn w-full"
              }>
              Add Marathon
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/dashboard/marathons/${user?.email}`}
              className={({ isActive }) => 
                isActive ? "btn w-full bg-blue-500 text-white border-none" : "btn w-full"
              }
            >
              My Marathons
            </NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard/applications/${user?.email}`} className={({ isActive }) => 
                isActive ? "btn w-full bg-blue-500 text-white border-none" : "btn w-full"
              }>My applications</NavLink>
          </li>
        </ul>
      </div>
      <div className=" col-span-10">
        <Outlet />
      </div>
    </div>
    </>
  );
}
