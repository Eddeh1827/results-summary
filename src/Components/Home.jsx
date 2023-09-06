import React from "react";
import Card from "./Components/Card";
import "./css/Home.css";

export default function Home() {
  return (
    <div>
      <Card />
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <button className="btn-links">Eddie Bickham</button>.
      </div>
    </div>
  );
}
