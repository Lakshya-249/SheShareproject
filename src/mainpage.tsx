import { useUser } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Review from "./review";

function Mainpage() {
  const url = import.meta.env.VITE_DB_URL;
  const location = useLocation();
  const { user } = useUser();
  const navigate = useNavigate();
  const [data, setData] = useState({
    userid: "random",
    image: "imageurl",
    location: "state",
    address: "state address",
    bio: "user_bio",
    drinking_smoking: false,
    rentFrom: "2024-04-21",
    house_desc: "home description",
    pets: true,
    rent: 4000,
    rentTo: "2024-04-25",
    week: 3,
    _id: "num",
    available: true,
  });
  console.log(location.search);
  useEffect(() => {
    (async () => {
      const response = await fetch(url + "api/getuser" + location.search);
      const data = await response.json();
      console.log(data);
      setData(data);
    })();
  }, []);

  const handlecart = async () => {
    const response = await fetch(url + "api/addcart?userId=" + user?.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        review: data?._id,
      }),
    });
    const data1 = await response.json();
    console.log(data1);
    navigate("/cart");
  };

  return (
    <div className="w-full my-10 flex flex-col max-sm:flex-wrap">
      <div className="flex w-full">
        <div className="w-[50%] max-sm:w-full flex justify-center">
          <div className="w-[20rem] h-[20rem] bg-gray-200">
            <img src={data.image} alt="image" />
          </div>
        </div>
        <div className="w-[50%] max-sm:w-full px-10 max-sm:pt-10 flex flex-col text-sm space-y-5 max-sm:mt-5 flex-wrap text-left">
          <p className="text-xl text-md text-wrap">{data.house_desc}</p>
          <p className="text-gray-500 text-md text-md text-wrap">{data.bio}</p>
          <p>Location: {data.location}</p>
          <p>Address: {data.address}</p>
          <p>
            Availibilty:{" "}
            <span className="text-gray-500">
              {data.rentFrom.split("T")[0]} - {data.rentTo.split("T")[0]}
            </span>
          </p>
          <p>Rental Period: {data.week} weeks</p>
          <p>
            Rent: <span className="font-semibold">&#8377; {data.rent}</span>{" "}
            month
          </p>
          <p className="text-gray-500">Other Formalities: </p>
          <p className="text-gray-500">
            {data.drinking_smoking == false
              ? "Drinking and Smoking is Prohiibited within in the premises"
              : null}
          </p>
          <p className="text-gray-500">
            {data.pets == false ? "Pets are Not allowed in the primises" : null}
          </p>
          <div className="flex">
            <button
              onClick={handlecart}
              className={`px-3 py-2 border-2 ${
                data.available ? "" : "hidden"
              } border-yellow-200 text-yellow-200 rounded-xl`}
            >
              Add to Cart
            </button>
            <p
              className={`text-sm ${
                data.available ? "hidden" : ""
              } font-semibold text-red-300`}
            >
              !Not available Right now...
            </p>
          </div>
        </div>
      </div>
      <Review />
    </div>
  );
}

export default Mainpage;
