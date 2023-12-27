import React, { useRef } from "react";
import "./Services.scss";
import { motion, useInView } from "framer-motion";

// Definición de las variantes de animación para el componente Services
const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

// Componente funcional Services
const Services = () => {
  // Referencia para el contenedor principal del componente
  const ref = useRef();

  // Hook useInView para determinar si el componente está en la vista
  const isInView = useInView(ref, { margin: "-100px" });

  // Renderización del componente Services con animaciones
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // whileInView="animate" //Metodo para cuando se haca scroll la animation se active
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Lorem ipsum dolor sit amet, consectetur <br />
          adipisicing elit.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>

        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For your</motion.b>{" "}
            Business
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
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
      </motion.div>
    </motion.div>
  );
};

export default Services;
