import React, { useState } from "react";
import PropTypes from "prop-types";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function Template2(props: any) {
  const url = import.meta.env.VITE_DB_URL;
  const { user } = useUser();
  const userId = props.userid;
  const navigate = useNavigate();
  //   console.log(userId);

  const handledelete = async () => {
    const response = await fetch(url + "api/deletecart?userId=" + user?.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ reviewId: userId }),
    });
    const data = await response.json();
    // this.forceUpdate();
    console.log(data);
    // window.location.reload();
  };

  const handlerent = async () => {
    const response = await fetch(url + "api/rent?userId=" + userId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    // this.forceUpdate();
    console.log(data);
    navigate("/rent");
    // window.location.reload();
  };

  const available: Boolean = props.available;

  if (!available) {
    return null;
  } else {
    return (
      <div
        onClick={() => navigate("/user/profile3?userid=" + userId)}
        className="w-full max-sm:h-auto max-sm:px-5 hover:cursor-pointer flex my-5 px-10 flex-wrap"
      >
        <div className="w-[20%] bg-gray-200 h-full max-sm:h-auto rounded-xl max-sm:w-full">
          <img
            src={props.image}
            alt="image Loading..."
            className="w-full h-full max-sm:h-auto rounded-xl "
          />
        </div>
        <div className="w-[80%] p-10 text-left text-sm font-light space-y-4 max-sm:w-full max-sm:p-2">
          <p className="text-xl overflow-hidden">{props.house_desc}</p>
          <p className="text-gray-400 overflow-hidden">{props.bio}</p>
          <p>
            Rent: <span className="font-semibold">&#8377; {props.rent}</span>{" "}
            month
          </p>
          <div className="flex justify-end space-x-10 w-full max-sm:justify-start">
            <button
              onClick={handlerent}
              className="px-4 py-2 w-[5rem] text-white font-semibold rounded-xl bg-[#ffb5a7]"
            >
              Rent
            </button>
            <button
              onClick={handledelete}
              className="px-3 py-2 border-2 border-red-300 text-red-300 rounded-xl"
            >
              Remove from Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Template2.propTypes = {
  userid: PropTypes.string,
  bio: PropTypes.string,
  image: PropTypes.string,
  house_desc: PropTypes.string,
  rent: PropTypes.number,
  available: PropTypes.bool,
};

Template2.defaultProps = {
  userid: "anything",
  image:
    "http://res.cloudinary.com/dki83hf3c/image/upload/v1713703692/dsiw5ntcbzfywfabrssh.jpg",
  house_desc: "description of house is show here..",
  bio: "bio of user is show here..",
  rent: 2000,
  available: true,
};

export default Template2;
