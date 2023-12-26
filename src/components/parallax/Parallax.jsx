import React, { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Componente de Parallax.
 *
 * Este componente utiliza Framer Motion para crear efectos de parallax
 * basados en el desplazamiento del usuario.
 *
 * @component
 * @param {string} type - Tipo de parallax, puede ser "services" o cualquier otro valor.
 * @returns {JSX.Element} - Elemento de Parallax con efectos visuales.
 */
const Parallax = ({ type }) => {
  // Ref para el elemento de parallax
  const ref = useRef();

  // useScroll: Hook de Framer Motion para obtener el progreso del desplazamiento
  const { scrollYProgress } = useScroll({
    target: ref,
    //El primer valor, "start start", indica que la animación debería comenzar cuando el borde superior del contenedor (referenciado por ref) coincide con el borde superior del viewport.

    //El segundo valor, "end start", indica que la animación debería finalizar cuando el borde superior del contenedor coincide con el borde inferior del viewport.
    offset: ["start start", "end start"],
  });

  // Transformación para animar el desplazamiento vertical del texto
  const yText = useTransform(scrollYProgress, [0, 1], ["0", "500%"]);

  // Transformación para animar el desplazamiento vertical del fondo
  const yBg = useTransform(scrollYProgress, [0, 1], ["0", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? " linear-gradient(180deg,#111132,#0c0c1d)"
            : "linear-gradient(180deg,#111132,#505064)",
      }}
    >
      {/* Título animado con desplazamiento vertical */}
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "what we Do" : "what we did"}
      </motion.h1>

      {/* Elemento de montañas (posiblemente debería tener contenido real) */}
      <motion.div className="mountains"></motion.div>

      {/* Elemento de planetas o sol con desplazamiento vertical */}
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>

      {/* Elemento de estrellas con desplazamiento horizontal */}
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
