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
      // NOTE: Based on your index.js, this should be /contact, not /user/contact
      const res = await axios.post("https://bookstoreapp-acyp.onrender.com/contact", contactInfo);

      if (res.data) {
        toast.success("Message sent successfully!");
        reset(); // Clears the form fields
      }
    } catch (err) {
      if (err.response) {
        toast.error("Error: " + (err.response.data.message || "Something went wrong"));
      } else {
        toast.error("Error: Server not responding. Please try again later.");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center justify-center p-4">
        <div className="w-full max-w-md p-8 bg-white dark:bg-slate-800 shadow-lg rounded-xl border dark:border-slate-700">
          <h1 className="text-2xl font-bold mb-6 dark:text-white">Contact Us</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name Field */}
            <div className="mb-4 space-y-2">
              <label className="block dark:text-gray-300">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-700 dark:text-white dark:border-slate-600"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
            </div>

            {/* Email Field */}
            <div className="mb-4 space-y-2">
              <label className="block dark:text-gray-300">Email</label>
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-700 dark:text-white dark:border-slate-600"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
            </div>

            {/* Message Field */}
            <div className="mb-4 space-y-2">
              <label className="block dark:text-gray-300">Message</label>
              <textarea
                placeholder="How can we help you?"
                className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-700 dark:text-white dark:border-slate-600 h-32"
                {...register("message", { required: "Message is required" })}
              ></textarea>
              {errors.message && <span className="text-sm text-red-500">{errors.message.message}</span>}
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 font-semibold"
            >
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