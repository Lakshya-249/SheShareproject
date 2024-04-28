// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./home.tsx";
import Sharepage from "./sharepage.tsx";
import Layout from "./layout.tsx";
import Sharepage2 from "./sharepage2.tsx";
import SignInPage from "./sign-in.tsx";
import SignUpPage from "./sign-up.tsx";
import Mainpage from "./mainpage.tsx";
import Search from "./searchRoom.tsx";
import SearchPage from "./searchPage.tsx";
import Errorpage from "./errorpage.tsx";
import Cart from "./cart.tsx";
import Refund from "./refund.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "rent",
        element: <Refund />,
      },
      {
        path: "sign-in",
        element: <SignInPage />,
        children: [
          {
            path: "sso-callback",
            element: <Errorpage />,
          },
        ],
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
      {
        path: "user/",
        element: <Layout />,
        children: [
          {
            path: "profile",
            element: <Sharepage />,
          },
          {
            path: "profile2",
            element: <Sharepage2 />,
          },
          {
            path: "profile3",
            element: <Mainpage />,
          },
          {
            path: "search",
            element: <Search />,
          },
          {
            path: "searchpage",
            element: <SearchPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
