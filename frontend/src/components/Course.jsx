import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);

  // 1. Check if the user is logged in
  const authUser = localStorage.getItem("Users");

  useEffect(() => {
    const getBook = async () => {
      try {
        // FIXED: Changed localhost to your live Render URL
        const res = await axios.get("https://bookstoreapp-acyp.onrender.com/book");
        setBook(res.data);
      } catch (error) {
        console.log("Error fetching books:", error);
      }
    };

    if (authUser) {
      getBook();
    }
  }, [authUser]);

  // 2. THE BOUNCER: If no user, redirect to signup
  if (!authUser) {
    return <Navigate to="/signup" replace />;
  }

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
          We're delighted to have you <span className="text-pink-500">here :)</span>
        </h1>
        <p className="mt-12">
          Unlock your full potential with our premium selection of courses.
          Master the MERN stack and build your future.
        </p>
        <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        {book.map((item) => (
          <Cards key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Course;