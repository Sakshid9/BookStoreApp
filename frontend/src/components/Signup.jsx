import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login"
import { useForm } from 'react-hook-form'
import axios from "axios"
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
    }

    try {
      // const res = await axios.post("http://localhost:4001/user/signup", userInfo); //for local
      const res = await axios.post("https://bookstoreapp-acyp.onrender.com/user/signup", userInfo); // for render to talk
      if (res.data) {
        toast.success('Signup Successful!');
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        // Redirect to home after signup
        navigate("/");
      }
    } catch (err) {
      if (err.response) {
        toast.error("Error: " + err.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            {/* START OF SIGNUP FORM */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>

              <div className="mt-4 space-y-2">
                <span>Name</span><br />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-80 px-3 py-1 border dark:text-black rounded-md outline-none"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (<span className="text-sm text-red-500">This field is required</span>)}
              </div>

              <div className="mt-4 space-y-2">
                <span>Email</span><br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border dark:text-black rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (<span className="text-sm text-red-500">This field is required</span>)}
              </div>

              <div className="mt-4 space-y-2">
                <span>Password</span><br />
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className="w-80 px-3 py-1 border dark:text-black rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (<span className="text-sm text-red-500">This field is required</span>)}
              </div>

              <div className="flex justify-around mt-6 items-center">
                <button className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200">
                  Signup
                </button>
                <div className="text-lg">
                  Have Account?{" "}
                  <button
                    type="button"
                    className="underline text-blue-700 cursor-pointer"
                    onClick={() => document.getElementById("my_modal_3").showModal()}
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
            {/* END OF SIGNUP FORM */}

            {/* FIX: Login component is now OUTSIDE the Signup form */}
            <Login />
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;