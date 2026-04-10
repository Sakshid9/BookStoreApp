import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";

function Freebook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        // Fetching from your live Render backend
        const res = await axios.get("https://bookstoreapp-acyp.onrender.com/book");

        // Filter only the free books
        const data = res.data.filter((item) => item.category === "Free");
        console.log("Free books data:", data); // Check your console to see if data arrives
        setBook(data);
      } catch (error) {
        console.log("Error fetching free books:", error);
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
      <p>
        Explore our curated list of completely free courses and books. Start your
        journey into coding, design, and cloud computing without spending a dime!
      </p>

      <div className="mt-6 pb-14">
        {book.length > 0 ? (
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item._id} />
            ))}
          </Slider>
        ) : (
          <p className="text-gray-500 italic mt-4">Loading free courses...</p>
        )}
      </div>
    </div>
  );
}

export default Freebook;