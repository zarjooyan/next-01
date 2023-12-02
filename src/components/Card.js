import React from "react";

const Card = (props) => {
  return (
    <div id="card" className=" w-50 border border-0 rounded-1 shadow mt-5">
      {props.children}
    </div>
  );
};

export default Card;
