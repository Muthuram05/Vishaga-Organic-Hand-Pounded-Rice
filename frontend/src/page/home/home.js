import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  Link,
} from "react-router-dom";
import ImageUpload from "../admin/create.product";
import riceBowl from "../assest/rice-bowl.png";

import "./home.css";
export function Home() {
  return (
    <div>
      <section className="hero-content">
        <div className="hero-text">
          <h1>
            Rooted in Tradition, Hand-
            <br />
            Pounded by Nature, Grown by Farmers.
          </h1>
          <Link to={"/products"}>Shop Now</Link>
        </div>
        <img src={riceBowl} alt="Rice Bowl" className="hero-image" />
      </section>

      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To empower local farmers and to guarantee that the finest quality
            rice is available.The toxic-free hand-pounded rice.
          </p>
        </div>
        <div className="vision">
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

      <footer className="footer">
        <p>© 2025 Company Name</p>
      </footer>
    </div>
  );
}
