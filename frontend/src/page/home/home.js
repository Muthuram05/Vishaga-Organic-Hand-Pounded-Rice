import React from "react";
import { Link } from "react-router-dom";
import ImageUpload from "../admin/create.product";
import riceBowl from "../assest/rice-bowl.png";
import mission from "../assest/mission.png";
import vision from "../assest/vision.png";

import "./home.css";
export function Home() {
  return (
    <div>
      <section className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Rooted in Tradition, Hand-
            <br />
            Pounded by Nature, Grown by Farmers.
          </h1>
          <Link to={"/products"} className="hero-button">Shop Now</Link>
        </div>
      </section>

      <section className="mission-vision">
        <div className="mission">
          <img src={mission} alt="mission-img" className="mission-image" width={"100"} height={"100"}/>
          <h2>Our Mission</h2>
          <p>
            To empower local farmers and to guarantee that the finest quality
            rice is available.The toxic-free hand-pounded rice.
          </p>
        </div>
        <div className="vision">
          <img src={vision} alt="vision-img" className="vision-image" width={"100"} height={"100"}/>
          <h2>Our Vision</h2>
          <p>
            To maintain life through nutrient-rich rice that is traditionally
            hand-pounded.
          </p>
        </div>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="products-grid">
          <div className="product-card">
            <img src={riceBowl} alt="Long Grain" />
            <h3>Long Grain</h3>
          </div>
          <div className="product-card">
            <img src={riceBowl} alt="Brown Rice" />
            <h3>Brown Rice</h3>
          </div>
          <div className="product-card">
            <img src={riceBowl} alt="Organic Select" />
            <h3>Organic Select</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
