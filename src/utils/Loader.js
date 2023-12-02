import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Loader = () => {
  return (
    <div className="spinner-border spinner-border-sm" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Loader;
