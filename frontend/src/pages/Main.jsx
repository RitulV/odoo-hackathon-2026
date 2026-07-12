import { Page } from "@/utils/Page";
import { LandingCards } from "@/components/layout-card";
import React from "react";

const Main = () => {
  return (
    <div>
      <LandingCards pageProp={Page.DASHBOARD} />
    </div>
  );
};

export default Main;
