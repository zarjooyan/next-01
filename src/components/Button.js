import React from "react";
import Loader from "../utils/Loader";


const Button = (props) => {
  return (
    <>
      <button
        type="submit"
        className={`btn btn-${props.color} w-50 py-2 mb-2`}
        disabled={props.disabled}
      >
       {props.disabled && <Loader /> || !props.disabled && "Sign Up"} 
      </button>
    </>
  );
};

export default Button;
