import React from "react";
import Timer from "./Timer";
import "./coming.css";
import rocket from "../../assets/images/rocket.png";
import { FaFacebookSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
const Coming = () => {
  return (
    <div className="grid-container">
      <div className="item">
        <h4 className="siteName">Train Lead Consult</h4>
      </div>

      <img src={rocket} className="item" alt="We are almost here" />

      <div className="item">
        <h4>Coming Soon</h4>
        <div className="mid-container">
          <Timer />
        </div>
        <p className="something">Something is coming …Together we can lead</p>
        <form>
          <input type="email" placeholder="Enter your email address" />
          <button className="cbtn" type="button">Subscribe</button>
        </form>
        <div className="social">
          <a href="/#">
            <FaFacebookSquare />{" "}
          </a>
          <a href="/#">
            <FaLinkedin />{" "}
          </a>
          <a href="/#">
            <FaTwitter />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Coming;
