import React from "react";
import CustomInput from "@mui/material/Input";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "../styles/input.scss";
const Input = ({ isLocation, placeholder }) => {
  return (
    <>
      {isLocation ? (
        <input
          type="text"
          placeholder="search here"
          className="input-container"
        />
      ) : (
        <input type="text" placeholder="" className="location-container" />
      )}
    </>
  );
};

export default Input;
