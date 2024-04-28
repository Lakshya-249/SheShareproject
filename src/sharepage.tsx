import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const Profile = () => {
  const [location, setlocation] = useState("");
  const [preview, setpreview] = useState("");
  const [bio, setbio] = useState("");
  const [address, setaddress] = useState("");
  const { user } = useUser();
  // console.log(typeof user?.id);

  const navigate = useNavigate();
  // console.log(preview);
  // console.log(address);
  // console.log(location);
  const url = import.meta.env.VITE_DB_URL;

  const handleFileInputChange = (e: any) => {
    const file = e.target.files[0];
    prieviewFile(file);
  };

  const prieviewFile = (file: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (reader.result) {
        setpreview(reader.result.toString());
        console.log(preview);
      }
    };
  };
  const handleTextArea = (e: any) => {
    setbio(e.target.value);
    // console.log(bio);
  };
  const handleClick = async () => {
    if (location.trim() !== "" && bio.trim() !== "" && address.trim() !== "") {
      const response = await fetch(url + "api/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          location: location,
          bio: bio,
          address: address,
          image: preview,
          userID: user?.id,
        }),
      });
      const data = await response.json();
      console.log(data);

      navigate("/user/profile2?id=" + data._id);
    }
  };
  return (
    <div className="flex flex-col items-stretch w-full px-10 py-6 font-sans">
      <div className="w-[50%] self-center text-left text-pretty max-sm:w-full">
        <p className="text-[2.5rem] font-black mb-3">
          Welcome! Let's create your profile
        </p>
        <p className="text-md font-semibold text-gray-500 mb-8">
          Let others get to Know you better!
        </p>
        <p className="text-xl font-bold mb-6">Share pics of your room</p>
        <div className="flex space-x-10 mb-[3rem] max-sm:flex-wrap max-sm:space-x-0 max-sm:space-y-5">
          <div className="flex justify-center items-center w-[10rem] h-[10rem] overflow-hidden border-gray-300 rounded-full border-dashed border-2">
            {preview ? (
              <img src={preview} alt="image" className="w-[50rem]" />
            ) : (
              <label
                htmlFor="photo"
                className="font-bold text-sm border-gray-150 px-5 py-2 hover:cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faCamera}
                  size="lg"
                  style={{ color: "#bfbfbf" }}
                />
              </label>
            )}
          </div>
          <div className="mt-5 max-sm:mt-8 space-y-7">
            <input
              type="file"
              onChange={(e) => handleFileInputChange(e)}
              name="photo"
              id="photo"
              className="hidden"
            />
          </div>
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

        <p className="text-xl font-bold mb-5">Add your address</p>
        <input
          type="text"
          className="w-full outline-none border-b-2 border-gray-200 py-2 placeholder:font-semibold mb-10"
          placeholder="Enter address"
          onChange={(e) => setaddress(e.target.value)}
        />
        <button
          onClick={handleClick}
          className={`px-20 py-2  ${
            location.trim() !== "" && address.trim() !== "" && bio.trim() !== ""
              ? "bg-pink-500"
              : "bg-pink-300"
          } font-semibold text-white rounded-xl`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Profile;
