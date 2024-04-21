import React from "react";
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
        path: "sign-in",
        element: <SignInPage />,
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
