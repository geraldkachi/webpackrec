import React from "react";
import "./styles.css";

const WhichofThese = ({ nextStep }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const BackCon = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <div>
      <p className="para"></p>
      <div>
        <select value="" name="">Pick up</select>
            <option name="pickup" value="pickup">Drop off</option>
            <option name="dropoff" value="dropoff">Drop off</option>
            <option name="dropoff" value="dropoff">None of the above</option>
      </div>
      <a onClick={Continue}>Next</a>
      <a onClick={BackCon}>Back</a>
    </div>
  );
};

export default WhichofThese;
