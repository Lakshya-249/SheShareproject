import { Outlet, useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";

function Layout() {
  const navigate = useNavigate();
  const { isSignedIn, user, isLoaded } = useUser();
  useEffect(() => {
    const checklog = () => {
      if (!isSignedIn) {
        console.log(user);
        navigate("/sign-in");
      }
    };
    checklog();
  }, []);

  console.log(user);

  return <Outlet />;
}

export default Layout;
