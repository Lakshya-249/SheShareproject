import React from "react";

function Mainpage() {
  return (
    <div className="w-full my-10 flex">
      <div className="w-[50%] flex justify-center">
        <div className="w-[20rem] h-[20rem] bg-gray-200"></div>
      </div>
      <div className="w-[50%] flex flex-col space-y-5 flex-wrap text-left">
        <p className="text-gray-500 font-semibold text-md text-wrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          quas consectetur ut quam, id quis repellendus rem labore voluptatibus
          eum amet unde distinctio ipsum nemo neque itaque odio. Sit, voluptate.
        </p>
        <p className="text-gray-500 font-semibold text-md text-wrap">
          Id quis repellendus rem labore voluptatibus eum amet unde distinctio
          ipsum nemo neque itaque odio. Sit, voluptate.
        </p>
        <p>Location: Delhi Near rajaori garden sector-44</p>
        <p>Address: A-4/ Shri Ram enclave maruti kunj guru gram</p>
        <p>Rent: &#8377; 5000</p>
        <button className="px-4 py-2 w-[5rem] text-white font-semibold rounded-xl bg-[#ffb5a7]">
          Rent
        </button>
      </div>
    </div>
  );
}

export default Mainpage;
