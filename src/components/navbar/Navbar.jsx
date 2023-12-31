import React from "react";
import "./navbar.scss";
import {
  FaSquareXTwitter,
  FaSquareFacebook,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}

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
    </div>
  );
};

export default Navbar;
