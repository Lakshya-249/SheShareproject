import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

function Header() {
  const path = useLocation();
  const navigate = useNavigate();
  const pathname = path.pathname;
  return (
    <div
      className={`${
        pathname === "/" ? "absolute" : ""
      } w-full flex justify-between py-3 px-10 max-sm:px-5 items-start`}
    >
      {/* <img src={logo} alt="logo" className="w-[12rem]" /> */}
      <p className="font-[Forte] text-4xl text-gray-700">She Share</p>
      <div className="flex space-x-5 items-center">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
        <SignedOut>
          <p
            onClick={() => navigate("/sign-in")}
            className="font-semibold text-md hover:cursor-pointer hover:text-gray-700 text-gray-500"
          >
            Login
          </p>
          <button
            onClick={() => navigate("/sign-up")}
            className="rounded-xl p-2 bg-pink-500 hover:bg-pink-400 font-semibold text-white"
          >
            Sign up
          </button>
        </SignedOut>
      </div>
    </div>
  );
}

export default Header;
