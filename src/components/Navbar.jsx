import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const { user, signOutUser } = useContext(AuthContext);
  return (
    <div className="navbar bg-base-100">
      {/* dropdown start */}
      <div className="dropdown z-10">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Parent</a>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      {/* dropdown ends */}

      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl">
          RunSphere
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end mr-2 lg:flex hidden">
          <NavLink to={"/"} className={"btn btn-ghost"}>
            Home
          </NavLink>
          <NavLink to={"/allMarathon"} className={"btn btn-ghost"}>
            Marathons
          </NavLink>
          <NavLink to={"/allMarathon"} className={"btn btn-ghost"}>
            Dashboard
          </NavLink>
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
                <img
                  alt="Tailwind CSS Navbar component"
                  referrerPolicy="no-referrer"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to={"/addMarathon"} className="justify-between">
                  Add Marathon
                  <span className="badge">New</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={`/marathons/${user?.email}`}>My Marathons</NavLink>
              </li>
              <li>
                <NavLink to={`/applications/${user?.email}`}>
                  My Applications
                </NavLink>
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
