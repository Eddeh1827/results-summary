import React from "react";
import "../css/card.css";
import memory from "../assets/images/icon-memory.svg";
import verbal from "../assets/images/icon-verbal.svg";
import visual from "../assets/images/icon-visual.svg";

function Card(props) {
  const { data } = props;
  return (
    <div id="main">
      <div className="card-left">
        <div>
          <h3>Your Result</h3>
        </div>
        <div className="circle">
          <p className="centered-text">
            <span className="percent">76</span>of 100
          </p>
        </div>
        <div className="lower-section">
          <span>Great</span>You scored higher than 65% of the people who have
          taken these tests.
        </div>
      </div>
      <div className="card-right">
        <div>
          <h3>Summary</h3>
        </div>
        <div className="cards">
          <div className="card">
            <img src={data[0].icon} alt="lightning bolt"></img>
            <span id="react">{data[0].category}</span>
            <span className="sum-bold">{data[0].score}</span> / 100
          </div>
          <div className="card">
            <img src={memory} alt="brain"></img>
            <span id="memory">Memory</span>
            <span className="sum-bold">92</span> / 100
          </div>
          <div className="card">
            <img src={verbal} alt="message box"></img>
            <span id="verbal">Verbal</span>
            <span className="sum-bold">61</span> / 100
          </div>
          <div className="card">
            <img src={visual} alt="eye"></img>
            <span id="visual">Visual</span>
            <span className="sum-bold">72</span> / 100
          </div>
        </div>
        <button className="continue">Continue</button>
      </div>
    </div>
  );
}

export default Card;
