import React from "react";
import "./button.css";

const CustomButton = ({ buttonText }) => {
  return (
    <>
      <button className="button my-auto">{buttonText}</button>
    </>
  );
};

export default CustomButton;
