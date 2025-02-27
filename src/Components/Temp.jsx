import React from "react";
import "./Temp.css";

import { FaTooth } from "react-icons/fa";
import { PiGreaterThan } from "react-icons/pi";

// import { } from "react-icons/fa";
  

export const Temp = () => {
    return (
      <div className="box">
        <div className="head">
        <a className="dental"><FaTooth size={15} color="blue" /></a>

        
        <div className="listcust"></div>
        <span>List Customer</span>
        <div className="arrow"><PiGreaterThan /></div>
        <div className="name"></div>
        <span>Jerome Bellingham</span>
        </div>
        
        </div>
      



    );
};
export default Temp;