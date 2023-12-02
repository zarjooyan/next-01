import React from "react";

const Successful = ({ setShow }) => {

  return (
    <div className="d-grid">
      <h4 className="text-center mt-4">Sign up successfully</h4>
      <button className="btn btn-primary text-center mx-auto my-4" onClick={() => {setShow(false)}} >Ok</button>
    </div>
  );
};

export default Successful;
