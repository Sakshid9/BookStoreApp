import React, { useEffect, useState } from "react";
import Cards from "./Cards"; // Or "../components/Cards" depending on your folder structure
import { Link, Navigate } from "react-router-dom"; // MUST import Navigate
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);

  // 1. Check if the user is logged in
  const authUser = localStorage.getItem("Users");

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    // Only bother fetching books from the database if the user is logged in
    if (authUser) {
      getBook();
    }
  }, [authUser]);

  // 2. THE BOUNCER: If no user is logged in, instantly redirect to signup!
  // This completely stops the rest of the page from rendering.
  if (!authUser) {
    return <Navigate to="/signup" replace />;
  }

  // 3. If they ARE logged in, render the courses normally
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">here :)</span>
          </h1>
          <p className="mt-12">
            Unlock your full potential with our premium selection of courses. Whether
            you are mastering the MERN stack, diving into Cloud Architecture, or
            perfecting your UI/UX design skills, we have the resources you need to succeed.
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
    </>
  );
}

export default Course;