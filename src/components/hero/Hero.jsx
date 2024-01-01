import React from "react";
import "./hero.scss";
import Sidebar from "../sidebar/Sidebar";
import {
  FaSquareXTwitter,
  FaSquareFacebook,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="hero">
      <Sidebar />
      <div className="wrapper">
        <div className="social">
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaSquareFacebook />
          </a>
          <a href="#">
            <FaSquareXTwitter />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
        </div>

        <div className="textContainer">
          <h1>MADES </h1>
          <h2>ETNOEDUCACIÓN DESDE EL TERRITORIO</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            atque nobis illum, consequuntur excepturi voluptatum voluptates.
            Maiores ut voluptatum impedit quod.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
