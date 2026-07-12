import { Page } from "./Page";
import { LayoutDashboard, Boxes, Users, Tags, Search } from "lucide-react";

export const data = {
  [Page.DASHBOARD]: [
    {
      title: "Dashboard",
      description: "Overview of key metrics and recent activity",
      icon: LayoutDashboard,
      to: "/dashboard",
    },
    {
      title: "Assets",
      description: "Browse, categorize, and manage tracked assets",
      icon: Boxes,
      to: "/assets",
    },
    {
      title: "Employees",
      description: "View and manage employee assets",
      icon: Users,
      to: "/employees",
    },
  ],
  [Page.ASSETS]: [
    {
      title: "Asset Categories",
      description: "Create categories for your assets",
      icon: Tags,
      to: "/assets/categories",
    },
    {
      title: "View Assets",
      description: "Search, filter, and inspect individual assets.",
      icon: Search,
      to: "/assets/search",
    },
  ],
};
