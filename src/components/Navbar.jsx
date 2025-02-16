import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const { user, signOutUser } = useContext(AuthContext);

  const [darkmode, setdarkmode] = useState();
  const setDarkMode = () => {
    document.querySelector("html").setAttribute("data-theme", "light");
  };
  const setLightMode = () => {
    document.querySelector("html").setAttribute("data-theme", "dark");
  };
  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 p-4 px-8">
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
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/allMarathon"}>Marathons</NavLink>
          </li>
          <li>
            <NavLink to={"/aboutUs"}>About Us</NavLink>
          </li>
          <li>
            <NavLink to={"/contactUs"}>Contact Us</NavLink>
          </li>
          {user && (
            <li>
              <NavLink to={"/dashboard"}>Dashboard</NavLink>
            </li>
          )}
        </ul>
      </div>
      {/* dropdown ends */}

      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl">
          Runner
        </Link>
      </div>
      <div className="flex-none">

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/allMarathon"}>Marathons</NavLink>
            </li>
            <li>
              <NavLink to={"/aboutUs"}>About Us</NavLink>
            </li>
            <li>
              <NavLink to={"/contactUs"}>Contact Us</NavLink>
            </li>
            {user && (
              <li>
                <NavLink to={"/dashboard"}>Dashboard</NavLink>
              </li>
            )}
          </ul>
        </div>

        {/* user connection */}
        {user ? (
          <div className="flex justify-center items-center">
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
                {/* <li>
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
              </li> */}
                <li>{user?.displayName}</li>
                <li>
                  <button onClick={signOutUser}>Logout</button>
                </li>
              </ul>
            </div>
            <input
              onClick={toggleTheme}
              type="checkbox"
              className="toggle ml-2"
            />
          </div>
        ) : (
          <div className="space-x-1 flex justify-center items-center">
            <Link to={"/login"} className="btn">
              Login
            </Link>
            <Link to={"/register"} className="btn">
              register
            </Link>
            <input onClick={toggleTheme} type="checkbox" className="toggle" />
          </div>
        )}
      </div>
    </div>
  );
}
