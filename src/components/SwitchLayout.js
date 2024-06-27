// SwitchLayout.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./SwitchLayout.css";

const SwitchLayout = ({ onSwitch }) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    onSwitch();
  };

  return (
    <div className="switch-container">
      <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
        <motion.div className="handle" layout transition={spring} />
      </div>
    </div>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default SwitchLayout;
