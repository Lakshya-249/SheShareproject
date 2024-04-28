import { useState } from "react";
import PropTypes from "prop-types";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function Template3(props: any) {
  const url = import.meta.env.VITE_DB_URL;
  const { user } = useUser();
  const userId = props.userid;
  const [val, setval] = useState(true);
  const [review, setreview] = useState(true);
  const navigate = useNavigate();
  const available: Boolean = props.available;
  const [rating, setrating] = useState({
    name: user?.firstName,
    userid: userId,
    rating: 0,
    review: "",
  });
  //   console.log(userId);
  const setdata = (e: any, val: string) => {
    setrating({ ...rating, [val]: e.target.value });
    // console.log(rating);
  };

  const handlereview = async () => {
    const response = await fetch(`${url}api/createreview`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rating),
    });
    const data = await response.json();
    console.log(data);
    if (data.success) {
      setreview(true);
    }
  };

  const handlerefund = async () => {
    const response = await fetch(url + "api/rent?userId=" + userId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    // this.forceUpdate();
    console.log(data);
    navigate("/cart");
  };

  if (available) {
    return null;
  } else {
    return (
      <div className="w-full max-sm:h-auto max-sm:px-5 hover:cursor-pointer flex my-5 px-10 flex-wrap">
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
          <p>Rented on: {props.rentedon.split("T")[0]}</p>
          <p>Refund within 45 days of allotment.</p>
          <div className="flex justify-end space-x-10 w-full max-sm:justify-start">
            <button
              onClick={() => setval(false)}
              className="px-4 py-2 w-[5rem] text-white font-semibold rounded-xl bg-[#ffb5a7]"
            >
              Refund
            </button>
            <button
              onClick={() => setreview(false)}
              className="px-4 py-2 w-[10rem] text-white font-semibold rounded-xl bg-[#ffb5a7]"
            >
              Add Review
            </button>
          </div>
        </div>
        <div
          className={`absolute left-[50%] -translate-x-[50%] font-black rounded-xl z-10 w-[20rem] p-5 h-[18rem] ${
            val ? "hidden" : "flex"
          } flex-col text-white text-5xl justify-center bg-blue-100 shadow-xl`}
        >
          Are sure you want to refund.
          <div className="flex items-center justify-center text-sm space-x-10 mt-8">
            <button
              onClick={handlerefund}
              className="px-5 py-2.5 w-[5rem] text-white font-semibold rounded-xl bg-[#ffb5a7]"
            >
              Yes
            </button>
            <button
              onClick={() => setval(true)}
              className="px-5 py-2.5 w-[5rem] text-white font-semibold rounded-xl bg-[#ffb5a7]"
            >
              No
            </button>
          </div>
        </div>
        <div
          className={`absolute max-sm:bottom-0 left-[50%] -translate-x-[50%] font-black rounded-xl z-10 w-[20rem] p-5 h-[18rem] ${
            review ? "hidden" : "flex"
          } flex-col text-white text-2xl justify-center bg-blue-100 shadow-xl`}
        >
          <textarea
            name="text"
            onChange={(e) => setdata(e, "review")}
            id="textid"
            cols={50}
            rows={5}
            className="h-auto resize-none py-5 px-10 text-sm text-gray-600 shadow-inner shadow-gray-300 rounded-xl outline-none"
            placeholder=" Write your Review..."
          ></textarea>
          <input
            type="number"
            onChange={(e) => setdata(e, "rating")}
            min={0}
            max={10}
            placeholder="Rating"
            className="my-2 w-[5rem] text-sm text-black px-2 py-2 rounded-xl"
          />
          <div className="flex items-center justify-center text-sm space-x-10 mt-8">
            <button
              onClick={handlereview}
              className="px-5 py-2.5 w-[5rem] text-white font-semibold rounded-xl bg-[#ffb5a7]"
            >
              Post
            </button>
            <button
              onClick={() => setreview(true)}
              className="px-5 py-2.5 w-[5rem] text-white font-semibold rounded-xl bg-[#ffb5a7]"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Template3.propTypes = {
  userid: PropTypes.string,
  bio: PropTypes.string,
  image: PropTypes.string,
  house_desc: PropTypes.string,
  rent: PropTypes.number,
  available: PropTypes.bool,
  rentedon: PropTypes.string,
};

Template3.defaultProps = {
  userid: "anything",
  image:
    "http://res.cloudinary.com/dki83hf3c/image/upload/v1713703692/dsiw5ntcbzfywfabrssh.jpg",
  house_desc: "description of house is show here..",
  bio: "bio of user is show here..",
  rent: 2000,
  available: true,
  rentedon: "date",
};

export default Template3;
