import React from "react";
import { LandingCards } from "@/components/layout-card";
import { Page } from "@/utils/Page";

const Assets = () => {
  return (
    <div>
      <LandingCards pageProp={Page.ASSETS} />
    </div>
  );
};

export default Assets;
