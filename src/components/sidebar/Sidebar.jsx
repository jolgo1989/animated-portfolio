import React, { useState } from "react";
import "./Sidebar.scss";
import ToggleButton from "./toggleButton/TogglrButton";
import Links from "./links/Links";
import { motion } from "framer-motion";

/**
 * Componente Sidebar con animaciones utilizando framer-motion.
 *
 * Este componente representa un sidebar con capacidad de animación al abrir y cerrar.
 *
 */
// Variantes de animación para el componente motion.div
const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  // Estado para controlar si el sidebar está abierto o cerrado
  const [open, setOpen] = useState(false);

  return (
    // Componente motion.div con animación basada en el estado 'open'
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      {/* Contenido del sidebar con animación de fondo */}
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>

      {/* Botón de alternancia para abrir/cerrar el sidebar */}
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
