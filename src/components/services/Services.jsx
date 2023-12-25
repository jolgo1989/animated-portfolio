import React from "react";
import "./Services.scss";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <p>
          Lorem ipsum dolor sit amet, consectetur <br />
          adipisicing elit.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <b>Unique</b> Ideas
          </h1>
        </div>

        <div className="title">
          <h1>
            <b>For your</b> Business
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <div className="listContainer">
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            cupiditate doloremque, sunt ipsam ullam, consectetur voluptate sequi
            aspernatur explicabo repudiandae quisquam assumenda laudantium ad,
            blanditiis facilis voluptates minus sint doloribus.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            cupiditate doloremque, sunt ipsam ullam, consectetur voluptate sequi
            aspernatur explicabo repudiandae quisquam assumenda laudantium ad,
            blanditiis facilis voluptates minus sint doloribus.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            cupiditate doloremque, sunt ipsam ullam, consectetur voluptate sequi
            aspernatur explicabo repudiandae quisquam assumenda laudantium ad,
            blanditiis facilis voluptates minus sint doloribus.
          </p>
          <button>Go</button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
