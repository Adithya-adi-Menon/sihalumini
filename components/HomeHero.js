import React from "react";

import { WelcomeHero } from "./WelcomeHero";
import News from "./News";
import Stories from "./Stories";
import Carousel from "./Carousel";

export default function HomeHero() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex  flex-wrap">
        <div className="container min-h-screen bg-gray-100 pt-0 md:ml-60 ">
          <WelcomeHero h1="Welcome, " h2="Bhuvanesh." />
          <Carousel/>
          <News />
          <Stories />
        </div>
      </div>
    </div>
  );
}
