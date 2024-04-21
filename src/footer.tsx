import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faPinterest,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="w-full text-md font-md text-gray-600 px-[5rem] max-sm:px-[2rem] font-sans max-sm:text-center bg-pink-50 text-left">
      <div className="flex max-sm:flex-wrap space-x-5 py-[4rem] max-sm:space-x-0 max-sm:space-y-10 justify-evenly max-sm:justify-center border-b-gray-300 border-b-[1px]">
        <div className="space-y-2 w-[20%] max-sm:w-full">
          <p className="text-pink-500 font-[Forte] text-4xl">she share</p>
          <p>About US</p>
          <p>Careers</p>
          <p>Contact Us</p>
          <div className="flex space-x-4 max-sm:justify-center items-center">
            <p>Follow Us</p>
            <FontAwesomeIcon icon={faDribbble} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faPinterest} />
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-black font-bold">Support</p>
          <p>FAQs</p>
          <p>Cancelation Policy</p>
        </div>
        <div className="space-y-2">
          <p className="text-black font-bold">Become a Host</p>
          <p>Hosting Resources</p>
          <p>Hosting Responsibility</p>
          <p>Share a Room</p>
          <p>Pets</p>
        </div>
        <div className="space-y-2">
          <p className="text-black font-bold">Terms & Privacy</p>
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div className="w-full flex justify-between text-gray-400 text-sm font-semibold py-5 max-sm:space-x-4">
        <p>&#169; 2023 She Travels. All rights reserved.</p>
        <div className="flex items-center space-x-2">
          <p>
            <span className="text-black font-bold">501,853</span> Followers
          </p>
          <FontAwesomeIcon
            icon={faDribbble}
            size="xl"
            style={{ color: "#ee5ddb" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
