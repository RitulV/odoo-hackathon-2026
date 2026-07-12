import React from "react";
import { Outlet, createHashRouter, useNavigate } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Error from "../components/Error";

const Home = () => {
  return (
    <div className="bg-radial from-[#282b36] to-[#01030f] text-amber-50 flex flex-col w-full h-full">
      <Header />
      <Outlet />
    </div>
  );
};

export const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
    ],
  },
]);

export default Home;
