import React from "react";
import "./simpleButtonStyle.css";

const Button = ({ text = "Add", icon, buttonStyle = {} }) => {
  return (
    <button className="buttonStyle" style={{ ...buttonStyle }}>
      {text}
      {icon && <i className="button-icon">{icon}</i>}
    </button>
  );
};

export default Button;
