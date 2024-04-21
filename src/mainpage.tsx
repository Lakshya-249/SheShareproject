import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Mainpage() {
  const url = import.meta.env.VITE_DB_URL;
  const location = useLocation();
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

  return (
    <div className="w-full my-10 flex max-sm:flex-wrap">
      <div className="w-[50%] max-sm:w-full flex justify-center">
        <div className="w-[20rem] h-[20rem] bg-gray-200">
          <img src={data.image} alt="image" />
        </div>
      </div>
      <div className="w-[50%] max-sm:w-full text-sm font-semibold px-10 max-sm:pt-10 flex flex-col space-y-5 max-sm:mt-5 flex-wrap text-left">
        <p className="text-gray-500 text-3xl text-md text-wrap">
          {data.house_desc}
        </p>
        <p className="text-gray-500 text-2xl text-md text-wrap">{data.bio}</p>
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
          Rent: &#8377; <span className="text-green-300">{data.rent}</span>{" "}
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

        <button className="px-4 py-2 w-[5rem] text-white font-semibold rounded-xl bg-[#ffb5a7]">
          Rent
        </button>
      </div>
    </div>
  );
}

export default Mainpage;
