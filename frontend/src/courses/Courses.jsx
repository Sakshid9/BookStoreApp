import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course"; // Make sure this is Capital C
import Footer from "../components/Footer"; // Make sure this is Capital F

function Courses() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Course />
      </div>
      <Footer />
    </>
  );
}
export default Courses;