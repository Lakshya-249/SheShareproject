import { useEffect, useState } from "react";
import Template2 from "./template2";
import { useUser } from "@clerk/clerk-react";

const Cart = () => {
  const url = import.meta.env.VITE_DB_URL;
  const { user } = useUser();
  const [data, setdata] = useState([
    {
      image: "image Loading...",
      rent: 0,
      location: "location Loading...",
      house_desc: "description Loading...",
      _id: "none",
      bio: "bio",
      available: true,
    },
  ]);
  useEffect(() => {
    const fetchval = async () => {
      const res = await fetch(`${url}api/getcart?userId=${user?.id}`);
      const data = await res.json();
      if (res.status >= 400) {
        console.log(data);
        // setTimeout(fetchval, 2000);
        return;
      }
      setdata(data);
      // console.log(data);
      // console.log(data.length);
    };
    fetchval();
  }, [user]);
  return (
    <div className="w-full flex flex-col items-center px-5 my-5">
      {data.length == 0 ? (
        <div>Oops nothing added to cart.</div>
      ) : (
        data.map((value) => (
          <Template2
            key={value._id}
            image={value.image}
            house_desc={value.house_desc}
            bio={value.bio}
            rent={value.rent}
            userid={value._id}
            available={value.available}
          />
        ))
      )}
      {}
    </div>
  );
};

export default Cart;
