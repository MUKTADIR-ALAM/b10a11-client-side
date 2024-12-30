import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet";

export default function Register() {
  const {
    createUserWithemailPass,
    setUser,
    updateUserProfile,
    signInWithGoogle,
  } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const hadleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        navigate(location?.state ? location?.state : "/");
        toast.success("Successfully Registerd!");
      })
      .catch((error) => {
        setErrorMessage(err.message);
        toast.error(err.message);
      });
  };
  const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  const navigate = useNavigate();
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photoUrl = form.get("photo-url");
    const password = form.get("password");
    setErrorMessage("");
    if (!regex.test(password)) {
      setErrorMessage(
        "Must have an Uppercase and a Lowercase also length must be at least 6 character in the password "
      );
      toast.error("chose strong password");
      return;
    }
    createUserWithemailPass(email, password)
      .then((res) => {
        setUser(res.user);
        updateUserProfile({ displayName: name, photoURL: photoUrl })
          .then((res) =>
            setUser((prevUser) => {
              return { ...prevUser, displayName: name, photoURL: photoUrl };
            })
          )
          .catch((err) => toast.error(err.message));
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error.message);
        toast.error(error.message);
      });
  };

  return (
    <>
    <Helmet>
        <title>Register | Runner</title>
    </Helmet>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-8 p-2">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegisterSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo-url"
              placeholder="photo-url"
              className="input input-bordered"
              required
            />
          </div>
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
              className="w-fit btn btn-xs absolute top-[55%] right-[5%]"
            >
              {showPassword ? <FaEye size={15} /> : <FaEyeSlash size={15} />}
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary bg-primary border-none">
              Register
            </button>
            <div className="mt-3">
              <div onClick={hadleGoogleLogin} className="btn w-full">
                Sign in with Google <FcGoogle size={20} />
              </div>
            </div>
          </div>
        </form>
        {errorMessage && (
          <p className="text-red-500 font-semibold text-sm text-center">
            {errorMessage}
          </p>
        )}
        <p className="p-5 text-center">
          Allready have an account please{" "}
          <Link className="font-bold underline" to={"/login"}>
            login
          </Link>
        </p>
      </div>
    </>
  );
}
