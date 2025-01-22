import React from "react";

function Cards({ item }) {
  // here u can acess directly
  // function Cards(item) {  //to assess this use item.
  console.log(item);

  return (
    <>
      <div className="mt-4 p-3 ">
        <div className="card bg-base-100 w-92  shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark-border">
          <figure>
            <img src={item.image} alt="Shoes" />
            {/* <img src={item.item.image} alt="Shoes" /> */}
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              {/* {item.item.name} */}
              <div className="badge badge-secondary">
                {item.category}
                {/* {item.item.category} */}
              </div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">
                ${item.price}
                {/* ${item.item.price} */}
              </div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] badge badge-outline hover:bg-pink-500 hover:text-white duration-200">
                Products
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
