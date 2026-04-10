import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 p-3">
        {/* FIX: Changed w-92 to w-full so the slider doesn't go blank */}
        <div className="card bg-base-100 w-full shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark-border">
          <figure className="h-52 w-full">
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-300">{item.title}</p>

            <div className="card-actions justify-between mt-4">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-3 py-1 rounded-full border-[2px] badge badge-outline hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;