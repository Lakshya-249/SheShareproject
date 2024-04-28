import { useEffect, useState } from "react";
import Template from "./template";
import { useLocation } from "react-router-dom";

function SearchPage() {
  const url = import.meta.env.VITE_DB_URL;
  const [nlocation, setlocation] = useState("");
  const [data, setData] = useState([
    {
      image: "imag Loading...",
      rent: 0,
      location: "location Loading...",
      house_desc: "description Loading...",
      _id: "yupp",
    },
  ]);
  const location = useLocation();
  //   console.log(location.search);
  const nurl = new URLSearchParams(location.search);
  useEffect(() => {
    (async () => {
      if (nlocation.trim() !== "") {
        nurl.set("location", nlocation);
        // console.log(location.search, nurl.toString());
        location.search = "?" + nurl.toString();
      }
      const response = await fetch(url + "api/filteruser" + location.search);
      const data = await response.json();
      console.log(data);
      setData(data);
    })();
  }, [nlocation]);

  return (
    <div className="w-full flex flex-wrap justify-center items-center my-10">
      <div>
        <select
          className="w-[15rem] max-sm:w-[10rem] absolute top-3 max-sm:left-5 right-[12rem] outline-none shadow-inner shadow-gray-300 py-2 px-5 rounded-xl mb-10 text-gray-400 font-semibold"
          onChange={(e) => setlocation(e.target.value)}
        >
          <option value="">Select State</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Bihar">Bihar</option>
          <option value="Chhattisgarh">Chhattisgarh</option>
          <option value="Goa">Goa</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Haryana">Haryana</option>
          <option value="Himachal Pradesh">Himachal Pradesh</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Kerala">Kerala</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Manipur">Manipur</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Mizoram">Mizoram</option>
          <option value="Nagaland">Nagaland</option>
          <option value="Odisha">Odisha</option>
          <option value="Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Sikkim">Sikkim</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Telangana">Telangana</option>
          <option value="Tripura">Tripura</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Uttarakhand">Uttarakhand</option>
          <option value="West Bengal">West Bengal</option>
          <option value="Andaman and Nicobar Islands">
            Andaman and Nicobar Islands
          </option>
          <option value="Chandigarh">Chandigarh</option>
          <option value="Dadra and Nagar Haveli and Daman and Diu">
            Dadra and Nagar Haveli and Daman and Diu
          </option>
          <option value="Lakshadweep">Lakshadweep</option>
          <option value="Delhi">Delhi</option>
          <option value="Puducherry">Puducherry</option>
        </select>
      </div>
      <div className="flex flex-wrap justify-center">
        {data.map((value) => (
          <Template
            key={value._id}
            image={value.image}
            house_desc={value.house_desc}
            location={value.location}
            rent={value.rent}
            userid={value._id}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
