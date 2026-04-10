import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-4xl font-bold text-pink-500 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
          Welcome to <span className="font-semibold">BookStore</span>, your number one source for all things knowledge.
          We're dedicated to giving you the very best of online courses, with a focus on
          dependability, customer service, and uniqueness.
        </p>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
          Founded in 2026, BookStore has come a long way from its beginnings. When we first
          started out, our passion for "Learn Every Day" drove us to do tons of research so
          that BookStore can offer you the world's most advanced learning platform.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default About;