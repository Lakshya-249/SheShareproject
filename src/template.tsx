import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function Template(props: any) {
  const navigate = useNavigate();
  const userid = props.userid;
  return (
    <div
      onClick={() => navigate("/user/profile3?userid=" + userid)}
      className="w-[18rem] h-[16rem] font-serif flex flex-col m-5 hover:cursor-pointer shadow-lg hover:shadow-xl"
    >
      <div className="w-full mb-2">
        <img
          src={props.image}
          alt="image Loading..."
          className="h-[8rem] w-full"
        />
      </div>
      <div className="px-3 text-left text-md font-semibold text-gray-500">
        <p>{props.house_desc}</p>
        <p className="font-light">{props.location}</p>
        <p className="text-gray-300 text-lg">
          &#8377; <span className="text-green-300">{props.rent}</span>{" "}
        </p>
      </div>
    </div>
  );
}

Template.propTypes = {
  userid: PropTypes.string,
  image: PropTypes.string,
  house_desc: PropTypes.string,
  location: PropTypes.string,
  rent: PropTypes.number,
};

Template.defaultProps = {
  userid: "anything",
  image:
    "http://res.cloudinary.com/dki83hf3c/image/upload/v1713703692/dsiw5ntcbzfywfabrssh.jpg",
  house_desc: "description of house is show here..",
  location: "State",
  rent: 2000,
};

export default Template;
