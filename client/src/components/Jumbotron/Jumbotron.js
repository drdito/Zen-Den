import React from "react";
import "./jumbotron.css";

const Jumbotron = ({ children }) => (
  <div className="jumbotron" id="headers">
    {children}
  </div>
);

export default Jumbotron;
