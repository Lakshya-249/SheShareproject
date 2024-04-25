import React from "react";
import logo from "./assets/logo-black.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex items-center text-gray-700 bg-cover max-sm:flex-wrap">
      <div className="bg-[#fcd5ce] w-[50%] space-y-10 h-[30rem] max-sm:pb-10 flex flex-col justify-center max-sm:justify-end items-center">
        <div
          onClick={() => navigate("/user/profile")}
          className="w-[20rem] h-[10rem] hover:cursor-pointer hover:shadow-xl py-5 text-[2.5rem] max-sm:h-[5rem] max-sm:py-0 max-sm:text-2xl max-sm:w-[10rem] font-black p-2 rounded-xl shadow-lg"
        >
          Share your Room
        </div>
        <div className="w-[20rem] px-10 space-y-5 max-sm:w-[10rem] max-sm:text-xl text-4xl font-semibold drop-shadow-xl font-mono">
          <p>Welcome</p>
          <p>Safety</p>
        </div>
      </div>
      <img
        src={logo}
        alt="logo"
        className="w-[20rem] max-sm:w-[15rem] max-sm:rounded-full opacity-60 absolute left-[50%] top-12 max-sm:top-5 -translate-x-[50%]"
      />
      <div className="flex flex-col space-y-10 bg-[#f8edeb] max-sm:pb-10 h-[30rem] w-[50%] justify-center max-sm:justify-end items-center">
        <div
          onClick={() => navigate("/user/search")}
          className="w-[20rem] h-[10rem] hover:cursor-pointer hover:shadow-xl py-10 text-[3rem] max-sm:h-[5rem] max-sm:py-0 max-sm:text-2xl max-sm:w-[10rem] font-black p-2 rounded-xl shadow-lg "
        >
          Rent a Room
        </div>
        <div className="w-[20rem] px-10 space-y-5 max-sm:w-[10rem] max-sm:text-xl text-4xl font-semibold drop-shadow-xl font-mono">
          <p>Adventure</p>
          <p>Community</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
