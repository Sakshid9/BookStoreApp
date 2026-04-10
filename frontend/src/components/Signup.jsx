import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from 'react-hook-form';
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password
    };

    // Change this URL to your environment variable eventually!
    const API_URL = "https://bookstoreapp-acyp.onrender.com/user/signup";

    try {
      const res = await axios.post(API_URL, userInfo);

      if (res.data) {
        toast.success('Signup Successful! Redirecting...');

        // Save user to local storage
        localStorage.setItem("Users", JSON.stringify(res.data.user));

        // Delay navigation slightly so the user sees the success toast
        setTimeout(() => {
          navigate(from, { replace: true });
          window.location.reload(); // Refresh to update Navbar state
        }, 1500);
      }
    } catch (err) {
      if (err.response) {
        // Server responded with an error (e.g., 400 or 500)
        toast.error("Error: " + (err.response.data.message || "Something went wrong"));
      } else {
        // Network error or server is down
        toast.error("Network Error: Please check if backend is running");
      }
    }
  };

  return (
    <div className="flex h-screen items-center justify-center dark:bg-slate-900 dark:text-white">
      <div className="w-[600px]">
        <div className="modal-box border shadow-md dark:bg-slate-800">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button goes to home */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>

            <h3 className="font-bold text-lg">Create Your Account</h3>

            {/* Full Name */}
            <div className="mt-4 space-y-2">
              <label className="block">Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-700 dark:border-slate-600"
                {...register("fullname", { required: "Name is required" })}
              />
              {errors.fullname && <p className="text-sm text-red-500">{errors.fullname.message}</p>}
            </div>

            {/* Email */}
            <div className="mt-4 space-y-2">
              <label className="block">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-700 dark:border-slate-600"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div className="mt-4 space-y-2">
              <label className="block">Password</label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-700 dark:border-slate-600"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
            </div>

            {/* Submit & Login Link */}
            <div className="flex justify-between mt-6 items-center">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-6 py-2 hover:bg-pink-700 transition duration-300"
              >
                Signup
              </button>
              <p className="text-md">
                Already registered?{" "}
                <button
                  type="button"
                  className="underline text-blue-500 hover:text-blue-700"
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                >
                  Login
                </button>
              </p>
            </div>
          </form>

          {/* Login Modal component is hidden until triggered */}
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Signup;