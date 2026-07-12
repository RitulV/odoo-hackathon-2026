import React, { useDebugValue, useEffect } from "react";
import { Outlet, createHashRouter, useNavigate } from "react-router-dom";
Header
import Main from "./Main";
import Dashboard from "./Dashboard";
import Assets from "./Assets";
import AssetCategories from "./AssetCategories";
import ViewAssets from "./ViewAssets";
import Employees from "./Employees";
import Header from "../components/Header";
import Error from "../components/Error";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home")
  },[])
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <div className="bg-radial from-[#282b36] to-[#01030f] text-amber-50 min-h-screen flex flex-col">
          <Header />
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: "home",
        element: <Main />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "assets",
        element: <Assets />,
      },
      {
        path: "assets/categories",
        element: <AssetCategories />,
      },
      {
        path: "assets/search",
        element: <ViewAssets />,
      },
      {
        path: "employees",
        element: <Employees />,
      },
    ],
  },
]);

export default Home;
