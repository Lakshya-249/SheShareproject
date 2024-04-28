import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Review() {
  const url = import.meta.env.VITE_DB_URL;
  const location = useLocation();
  const [message, setmsg] = useState("");
  const [ndata, setData] = useState([
    {
      name: "User",
      review: "",
      rating: 0,
    },
  ]);
  console.log(ndata);

  useEffect(() => {
    (async () => {
      const response = await fetch(url + "api/getreview" + location.search);
      const data = await response.json();
      console.log(data);
      if (data.success == false) {
        setmsg(data.message);
        console.log(message);
      }
      setData(data.reviews);
    })();
  }, []);
  return (
    <div className="w-full text-left space-y-10 p-10">
      <p className="text-4xl text-gray-500 font-black">Reviews</p>
      {message.trim() !== "" ? (
        <p className="font-semibold text-gray-400">{message}</p>
      ) : (
        ndata.map((value) => (
          <div className="text-lg space-y-2 font-semibold">
            <p className="text-gray-400">{value.name}</p>
            <p className="text-sm text-gray-500">{value.review}</p>
            <div className="flex space-x-2">
              {[...Array(value.rating)].map((i) => (
                <FontAwesomeIcon
                  icon={faStar}
                  size="xs"
                  style={{ color: "#FFD43B" }}
                />
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Review;
