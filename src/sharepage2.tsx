import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import pic1 from "./assets/no-smoking.png";
import pic2 from "./assets/no-animals.png";
import pic3 from "./assets/credit-card.png";
// import { useUser } from "@clerk/clerk-react";

const Sharepage2 = () => {
  const location = useLocation();
  const userid = new URLSearchParams(location.search).get("id");
  const navigate = useNavigate();
  const url = import.meta.env.VITE_DB_URL;
  let yourDate = new Date();
  let date = yourDate.toISOString().split("T")[0];
  const [interests, setFormData] = useState({
    drinking_smoking: true,
    house_desc: "",
    pets: true,
    rent: 0,
    rentFrom: date,
    rentTo: "",
    week: 1,
    available: true,
  });

  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);
  const setData = (data: any, value: any) => {
    setFormData({ ...interests, [data]: value });
    // console.log(interests);
  };
  const handleClick = (ref: any, ref2: any, ref3: any) => {
    if (ref.current?.className.endsWith("bg-pink-500")) {
      ref.current.className = ref.current.className.replace("bg-pink-500", "");
      ref.current.className = ref.current.className.replace(
        "border-pink-500",
        "border-gray-400"
      );
      ref2.current.className += " hidden";
      ref3.current.className = ref3.current.className.replace(
        "border-pink-500",
        "border-gray-200"
      );
      // console.log(ref.current.className);
      return;
    }
    ref3.current.className = ref3.current.className.replace(
      "border-gray-200",
      "border-pink-500"
    );
    ref.current.className += " bg-pink-500";
    ref2.current.className = ref2.current.className.replace("hidden", "");
    ref.current.className = ref.current.className.replace(
      "border-gray-400",
      "border-pink-500"
    );
  };

  const handleClick2 = async () => {
    const response = await fetch(url + "api/updateUser", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userid: userid, interests }),
    });
    const data = await response.json();
    console.log(data);
    // console.log(interests);

    navigate("/user/profile3?userid=" + userid);
  };
  return (
    <div className="flex flex-col items-stretch w-full px-10 py-6 font-sans">
      <div className="flex space-x-10 max-sm:mb-5 max-sm:w-full max-sm:justify-between">
        <div
          className="px-5 max-sm:px-7 py-5 flex items-center bg-gray-100 rounded-xl hover:cursor-pointer"
          onClick={() => navigate("/user/profile")}
        >
          <div className="w-2 h-2 border-b-2 border-l-2 border-gray-500 rotate-45"></div>
        </div>
      </div>
      <p className="text-[2.5rem] font-bold mb-3">Select your preferences</p>
      <p className="text-md font-semibold text-gray-500">
        Select the options that best describe you. Don't worry you can explore
        other options later.
      </p>
      <div className="flex max-sm:flex-wrap max-sm:h-auto max-sm:w-full max-sm:justify-center max-sm:space-x-0 max-sm:space-y-5 self-center space-x-5 mt-[5rem]">
        <div
          ref={ref7}
          className="flex flex-col items-center justify-end w-[18rem] h-[16rem] rounded-xl border-2 border-gray-200 px-5"
        >
          <div className="space-y-2 mb-5">
            <div className="w-[10rem] mx-auto">
              <img src={pic1} />
            </div>
            <p className="text-md font-bold mb-6">Smoking and Drinking</p>
            <p
              ref={ref4}
              className="text-sm font-semibold text-gray-400 hidden"
            >
              Smoking and drinking should be prohibited within the premises and
              will not be tolerated.
            </p>
            <div>
              <button
                ref={ref}
                onClick={() => {
                  handleClick(ref, ref4, ref7);
                  setData("drinking_smoking", !interests.drinking_smoking);
                }}
                className="w-5 h-5 rounded-full border-[1px] border-gray-400"
              >
                <div className="w-1.5 h-2 border-b-2 border-r-2 border-white rotate-45 mb-1 mx-auto"></div>
              </button>
            </div>
          </div>
        </div>
        <div
          ref={ref8}
          className="flex flex-col items-center justify-end w-[18rem] h-[16rem] rounded-xl border-2 border-gray-200 px-5"
        >
          <div className="space-y-2 mb-5">
            <div className="w-[10rem] mx-auto">
              <img src={pic2} />
            </div>
            <p className="text-md font-bold mb-6">Pets</p>
            <p
              ref={ref5}
              className="text-sm font-semibold text-gray-400 hidden"
            >
              Pets are not allowed in the premises and should not be brought by
              any.
            </p>
            <div>
              <button
                ref={ref2}
                onClick={() => {
                  handleClick(ref2, ref5, ref8);
                  setData("pets", !interests.pets);
                }}
                className="w-5 h-5 rounded-full border-[1px] border-gray-400"
              >
                <div className="w-1.5 h-2 border-b-2 border-r-2 border-white rotate-45 mb-1 mx-auto"></div>
              </button>
            </div>
          </div>
        </div>
        <div
          ref={ref9}
          className="flex flex-col items-center justify-end w-[18rem] h-[16rem] rounded-xl border-2 border-gray-200 px-5"
        >
          <div className="space-y-2 mb-5">
            <div className="w-[12rem] mx-auto">
              <img src={pic3} className="w-[10rem] mx-auto mb-5" />
              <div
                ref={ref3}
                onClick={() => {
                  handleClick(ref3, ref6, ref9);
                }}
                className="w-full flex items-center font-semibold p-[1px] rounded-xl"
              >
                &#8377;&nbsp;
                <input
                  onChange={(e) => setData("rent", e.target.value)}
                  type="text"
                  className="w-full rounded-xl shadow-inner shadow-gray-300 px-3 py-1 outline-none"
                  placeholder="Enter the rent..."
                />
              </div>
            </div>
            <p
              ref={ref6}
              className="text-sm font-semibold text-gray-400 hidden"
            >
              The person renting the premises should pay this amount as rent to
              live here.
            </p>
          </div>
        </div>
      </div>
      <div className="p-5 flex justify-center max-sm:flex-wrap max-sm:space-x-0 max-sm:space-y-5 space-x-5 mt-5">
        <textarea
          onChange={(e) => setData("house_desc", e.target.value)}
          name="text"
          id="textid"
          cols={50}
          rows={5}
          className="h-auto resize-none py-5 px-10 text-gray-600 shadow-inner shadow-gray-300 rounded-xl outline-none"
          placeholder="Give your house discription..."
        ></textarea>
        <div className="w-[18rem] h-[16rem] rounded-xl space-y-5 flex flex-wrap justify-between border-2 border-gray-200 font-semibold self-center p-5">
          <p className="text-xl font-bold">Select rental period</p>
          <input
            type="number"
            min={1}
            placeholder="1 Week..."
            className="w-full outline-none px-3 shadow-inner rounded-xl shadow-gray-300 py-2 "
            onChange={(e) => setData("week", parseInt(e.target.value))}
          />
          <input
            placeholder={date}
            type="text"
            onChange={(e) => setData("rentFrom", e.target.value)}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            min={date}
            className="w-full outline-none px-3 shadow-inner rounded-xl shadow-gray-300 py-2 "
          />
          <input
            placeholder="to"
            type="text"
            min={date}
            onChange={(e) => setData("rentTo", e.target.value)}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            className="w-full outline-none px-3 shadow-inner rounded-xl shadow-gray-300 py-2 "
          />
        </div>
      </div>

      <div className="mt-14">
        <p className="text-md font-bold mb-5">
          Anything else? You can choose multiple
        </p>
        <button
          onClick={handleClick2}
          className={`px-20 py-2  ${
            interests.rent === 0 || interests.rentTo == ""
              ? "bg-pink-300"
              : "bg-pink-500"
          } font-semibold text-white rounded-xl mb-2`}
        >
          Finish
        </button>
        <p className="text-xs font-bold text-gray-400 max-sm:mb-5">
          or Press RETURN
        </p>
      </div>
    </div>
  );
};

export default Sharepage2;
