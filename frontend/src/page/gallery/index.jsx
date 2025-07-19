import React from "react";
import { Card } from "./card";

import "./style.css";

import riceBowl from "../assest/rice-bowl.png";

export function Gallery() {
  const cards = [
    { image: riceBowl, title: "sundrying (2 days)" },
    { image: riceBowl, title: "Soaking (12 hours)" },
    { image: riceBowl, title: "Boiling (Depends upon the rice time varies)" },
    { image: riceBowl, title: "Sundrying (1 Day)" },
    { image: riceBowl, title: "Dry In the Evening next day" },
    { image: riceBowl, title: "Handpounding Process" },
    { image: riceBowl, title: "Dust Removal , Stones , Broken Rice" },
    { image: riceBowl, title: "Packing" },
    { image: riceBowl, title: "Shipping" },
  ];

  return (
    <div>
      <h1>Our processing Rice Journey</h1>
      <div className="gallery-grid">
        {cards.map((card, index) => (
          <div className="gallery-item" key={index}>
            <Card image={card.image} title={card.title} />
            {index < cards.length - 1 && <div className="arrow">→</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
