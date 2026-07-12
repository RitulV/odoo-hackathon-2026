import React from "react";
import { Page } from "@/assets/Page";
import { LandingCards } from "@/components/layout-card";

const Assets = () => {
  return (
    <div>
      <LandingCards pageProp={Page.ASSETS} />
    </div>
  );
};

export default Assets;
