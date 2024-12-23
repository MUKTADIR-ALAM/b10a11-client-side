import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const { user,signOutUser } = useContext(AuthContext);
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl">
          RunSphere
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end mr-2">
          <NavLink className={"btn btn-ghost"}>All Marathons</NavLink>
        </div>
        {/* user connection */}
        {user ? (
          <div className="dropdown dropdown-end z-10">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" referrerPolicy='no-referrer' src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to={'/addMarathon'} className="justify-between">
                  Add Marathon
                  <span className="badge">New</span>
                </NavLink>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={signOutUser}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="space-x-1">
            <Link to={"/login"} className="btn">
              Login
            </Link>
            <Link to={"/register"} className="btn">
              register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
