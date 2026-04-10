import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("https://bookstoreapp-acyp.onrender.com/user/login", userInfo);

      if (res.data) {
        toast.success("Logged in Successfully!");

        // Close the modal
        const modal = document.getElementById("my_modal_3");
        if (modal) modal.close();

        // Save user to local storage
        localStorage.setItem("Users", JSON.stringify(res.data.user));

        // Redirect and refresh to update Navbar/UI state
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      }
    } catch (err) {
      if (err.response) {
        toast.error("Error: " + (err.response.data.message || "Invalid Credentials"));
      } else {
        toast.error("Error: Server not responding");
      }
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-800 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Close button */}
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg">Login</h3>

            {/* Email */}
            <div className="mt-4 space-y-2">
              <label className="block">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-700 dark:border-slate-600"
                {...register("email", { required: "Email is required" })}
              />
              <br />
              {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
            </div>

            {/* Password */}
            <div className="mt-4 space-y-2">
              <label className="block">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-700 dark:border-slate-600"
                {...register("password", { required: "Password is required" })}
              />
              <br />
              {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-around mt-6 items-center">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200"
              >
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() => document.getElementById("my_modal_3").close()}
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;