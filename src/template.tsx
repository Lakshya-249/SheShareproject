// import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function Template(props: any) {
  const navigate = useNavigate();
  const userid = props.userid;
  return (
    <div
      onClick={() => navigate("/user/profile3?userid=" + userid)}
      className={`w-[20rem] h-[20rem] ${
        props.location == "State" ? "hidden" : "flex"
      } flex-col m-10 pb-5 hover:cursor-pointer`}
    >
      <div className="w-full mb-2">
        <img
          src={props.image}
          alt="image Loading..."
          className="h-[12rem] w-full rounded-xl"
        />
      </div>
      <div className="px-3 space-y-1 text-left text-md font-semibold">
        <p className="h-[3rem] overflow-hidden">{props.house_desc}</p>
        <p className="font-light">{props.location}</p>
        <p className="font-light">
          {props.fromto} - {props.onto}
        </p>
        <p className="">
          &#8377; {props.rent} <span className="font-light">month</span>
        </p>
      </div>
      {/* <div className="flex space-x-10 px-5">
        <button className="px-4 py-2 w-[5rem] text-white font-semibold rounded-xl bg-[#ffb5a7]">
          Rent
        </button>
        <button className="px-2 py-2 w-[5rem] text-white font-semibold rounded-xl bg-yellow-200">
          Review
        </button>
      </div> */}
    </div>
  );
}

Template.propTypes = {
  userid: PropTypes.string,
  image: PropTypes.string,
  house_desc: PropTypes.string,
  location: PropTypes.string,
  rent: PropTypes.number,
  fromto: PropTypes.string,
  onto: PropTypes.string,
};

Template.defaultProps = {
  userid: "anything",
  image: "img",
  house_desc: "description of house is show here..",
  location: "State",
  rent: 2000,
  fromto: "2004-02-01",
  onto: "2004-02-05",
};

export default Template;
