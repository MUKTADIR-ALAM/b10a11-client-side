import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import {Helmet} from "react-helmet";


export default function Login() {
  const { logInUser, signInWithGoogle } = useContext(AuthContext);

  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    logInUser(email, password)
      .then((res) => {
        navigate(location?.state ? location?.state : "/");
      })
      .catch((err) => {
        setErrorMessage(err.message);
        toast.error(err.message);
      });
  };

  const hadleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        navigate(location?.state ? location?.state : "/");
        toast.success("Successfully login");
      })
      .catch((error) => {
        setErrorMessage(err.message);
        toast.error(err.message);
      });
  };

  return (
    <>
    <Helmet>
        <title>Login | Runner</title>
    </Helmet>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-8 p-2">
      <h2 className="text-2xl font-semibold text-center">Login your account</h2>
      <form onSubmit={handleLoginSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="w-fit btn btn-xs absolute top-[56%] right-[5%]"
          >
            {showPassword ? <FaEye size={15} /> : <FaEyeSlash size={15} />}
          </div>
          {/* <label className="label">
            <Link to={"/forgetpass"} className="label-text-alt link link-hover">
              Forgot password?
            </Link>
          </label> */}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-primary border-none">
            Login
          </button>
        </div>
        <div>
          <div onClick={hadleGoogleLogin} className="btn w-full">
            Sign in with Google <FcGoogle size={20} />
          </div>
        </div>
      </form>
      {errorMessage && (
        <p className="text-red-500 font-semibold text-sm text-center">
          {errorMessage}
        </p>
      )}
      <p className="p-5 text-center">
        New to this website please{" "}
        <Link className="font-bold underline" to={"/register"}>
          Register
        </Link>
      </p>
    </div>
    </>
  );
}
