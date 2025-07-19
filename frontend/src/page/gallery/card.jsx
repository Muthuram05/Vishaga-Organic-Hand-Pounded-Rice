import React from "react";

export function Card({ image, title }) {
  return <div>
    <img src={image} alt={title} />
    <h3>{title}</h3>
  </div>;
}
