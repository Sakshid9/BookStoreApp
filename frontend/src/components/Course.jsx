import React, { useEffect, useState } from "react";

// import list from "../../public/list.json";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";
import axios from "axios"

function Course (){
  const[book,setBook]=useState([]);
    useEffect(()=>{
      const getBook = async()=>{
        try {
          const res = await axios.get("http://localhost:4001/book")
          console.log(res.data);
          setBook(res.data)
          
        } catch (error) {
          console.log(error);
          
        }
      };
      getBook();
    },[]);

     
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 items-centre justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">here :)</span>
          </h1>
          <p className="mt-12">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {/* {list.map((item) => ( */}
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;