import React from "react";
import { Card } from "./card";

import "./style.css";

import riceBowl from "../assest/rice-bowl.png";

export function Gallery() {
  return (
    <div>
      <h1>Our processing Rice Journey</h1>
      <div className="gallery-grid">
        <Card image={riceBowl} title={"sundrying (2 days)"} />
        <Card image={riceBowl} title={"Soaking (12 hours)"} />
        <Card image={riceBowl} title={"Boiling (Depends upon the rice time varies)"} />
        <Card image={riceBowl} title={"Sundrying (1 Day)"} />
        <Card image={riceBowl} title={"Dry In the Evening next day"} />
        <Card image={riceBowl} title={"Handpounding Process"} />
        <Card image={riceBowl} title={"Dust Removal , Stones , Broken Rice"} />
        <Card image={riceBowl} title={"Packing"} />
        <Card image={riceBowl} title={"Shipping"} />
      </div>
    </div>
  );
}
