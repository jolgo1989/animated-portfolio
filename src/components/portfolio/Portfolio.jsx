import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./Portfolio.scss";

// Datos para los elementos del portafolio
const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum asperiores itaque similique nisi impedit, illum architecto ratione consequatur aspernatur velit eveniet saepe! Molestias quisquam officia recusandae accusantium porro, alias dolores.",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum asperiores itaque similique nisi impedit, illum architecto ratione consequatur aspernatur velit eveniet saepe! Molestias quisquam officia recusandae accusantium porro, alias dolores.",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum asperiores itaque similique nisi impedit, illum architecto ratione consequatur aspernatur velit eveniet saepe! Molestias quisquam officia recusandae accusantium porro, alias dolores.",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum asperiores itaque similique nisi impedit, illum architecto ratione consequatur aspernatur velit eveniet saepe! Molestias quisquam officia recusandae accusantium porro, alias dolores.",
  },
  // Agregar más elementos según sea necesario
];

// Componente para un solo elemento del portafolio
const Single = ({ items }) => {
  const ref = useRef();

  // Hook para obtener el progreso del desplazamiento
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  // Transformación para animar la posición en Y según el progreso del desplazamiento
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [
      -300,
      300 /* Velocidad a la animación al momento de desplazarnos en el eje Y */,
    ]
  );

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={items.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{items.title}</h2>
            <p>{items.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Componente principal del portafolio
const Portfolio = () => {
  const ref = useRef();

  // Hook para obtener el progreso del desplazamiento
  const { scrollYProgress } = useScroll({
    // "end end" significa que la animación debe comenzar cuando el borde inferior del contenedor (referenciado por ref) coincide con el borde inferior del viewport.
    // "start start" significa que la animación debe finalizar cuando el borde superior del contenedor coincide con el borde superior del viewport.
    target: ref,
    offset: ["end end", "start start"], // La animación comienza cuando el borde inferior del contenedor coincide con el borde inferior del viewport.
  });

  // Animación de muelle para escalar la barra de progreso
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        {/* Div con animación de escala en X basada en el progreso del desplazamiento */}
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {/* Mapeo a través del array de items y renderizando cada componente Single */}
      {items.map((item) => (
        <Single items={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
