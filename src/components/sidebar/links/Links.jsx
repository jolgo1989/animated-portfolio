import React from "react";
import { motion } from "framer-motion";

// Variantes de animación para el componente motion.div
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },

  closed: {
    transition: {
      staggerChildren: 0.05,
      staggereDirection: -1,
    },
  },
};

// Variantes de animación para el componente motion.a
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },

  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = [
    "Inicio",
    "Quienes Somos",
    "Noticias",
    "Proyectos",
    "Contactenos",
  ];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          //Componentes de framer-motion
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
