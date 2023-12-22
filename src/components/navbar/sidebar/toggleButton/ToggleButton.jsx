import React from "react";

const ToggleButton = ({ setOpen }) => {
  // Maneja el clic del botón y cambia el estado del componente padre.
  return <button onClick={() => setOpen((prev) => !prev)}>Button</button>;
};

export default ToggleButton;
