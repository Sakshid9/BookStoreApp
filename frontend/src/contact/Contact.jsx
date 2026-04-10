import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const contactInfo = {
      fullname: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      // Ensure this matches your backend port (4001)
      const res = await axios.post("http://localhost:4001/contact", contactInfo);
      if (res.data) {
        toast.success("Message sent successfully!");
        reset();
      }
    } catch (err) {
      if (err.response) {
        toast.error("Error: " + err.response.data.message);
      } else {
        toast.error("Error: Server not responding");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center justify-center">
        <div className="w-full max-w-md p-6 bg-white dark:bg-slate-900 shadow-md rounded-xl border dark:border-slate-700">
          <h1 className="text-2xl font-bold mb-6 dark:text-white">Contact Us</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 space-y-2">
              <label className="block dark:text-gray-300">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-800 dark:text-white"
                {...register("name", { required: true })}
              />
              {errors.name && <span className="text-sm text-red-500">Required</span>}
            </div>

            <div className="mb-4 space-y-2">
              <label className="block dark:text-gray-300">Email</label>
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-800 dark:text-white"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-sm text-red-500">Required</span>}
            </div>

            <div className="mb-4 space-y-2">
              <label className="block dark:text-gray-300">Message</label>
              <textarea
                placeholder="Type your message"
                className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-800 dark:text-white h-32"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message && <span className="text-sm text-red-500">Required</span>}
            </div>

            <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;