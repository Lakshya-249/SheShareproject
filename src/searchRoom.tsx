import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [location, setlocation] = useState("");
  const url = import.meta.env.VITE_DB_URL;
  const [bio, setbio] = useState("");
  const [cost, setcost] = useState("");
  const navigate = useNavigate();
  const { user } = useUser();
  // console.log(preview);
  // console.log(address);
  // console.log(location);

  const handleTextArea = (e: any) => {
    setbio(e.target.value);
    // console.log(bio);
  };
  const handleClick = async () => {
    if (bio.trim() !== "") {
      const response = await fetch(url + "api/updateUser", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userid: user?.id, interests: { bio } }),
      });
      const data = await response.json();
      console.log(data);
      navigate(`/user/searchpage?location=${location}&cost=${cost}`);
    }
  };
  return (
    <div className="flex flex-col items-stretch w-full px-10 py-6 font-sans">
      <div className="w-[50%] flex flex-col self-center text-left text-pretty max-sm:w-full">
        <p className="text-[2.5rem] font-black mb-3">Welcome!</p>
        <div>
          <textarea
            onChange={(e) => handleTextArea(e)}
            name="text"
            id="textid"
            cols={50}
            rows={5}
            className=" w-full resize-none py-5 px-10 text-gray-600 shadow-inner shadow-gray-300 rounded-xl outline-none"
            placeholder="Tell somethine about yourself....."
          ></textarea>
        </div>
        <p className="text-xl font-bold mb-5">Add your location</p>
        <select
          className="w-full outline-none border-b-2 border-gray-200 py-2 mb-10 text-gray-400 font-semibold"
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
        <input
          type="text"
          onChange={(e) => setcost(e.target.value)}
          placeholder="Enter cost limit"
          className="w-[20rem] max-sm:w-full py-2 px-5 rounded-xl font-semibold outline-none shadow-inner shadow-gray-300 mb-10"
        />
        <div>
          <button
            onClick={handleClick}
            className={`px-20 py-2  ${
              bio.trim() !== "" ? "bg-pink-500" : "bg-pink-300"
            } font-semibold text-white rounded-xl`}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
