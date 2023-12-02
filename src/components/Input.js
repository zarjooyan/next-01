import React from "react";

const Input = ({ register, required, type, id, error, name, className }) => {
  return (
    <div className="col-sm-12 col-lg-6">
      <label htmlFor={id} className="form-label">
        {name}
        {required ? <span className="text-danger"> *</span> : ""}
      </label>
      <input
        id={id}
        className="form-control"
        {...className}
        type={type}
        {...register(id, { required })}
      />
      <p className="text-danger mt-1">{error}</p>
    </div>
  );
};

export default Input;
