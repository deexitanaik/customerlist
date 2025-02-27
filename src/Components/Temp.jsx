import React from "react";
import "./Temp.css";
import { RiAnchorFill } from "react-icons/ri";

// import { FaTooth } from "react-icons/fa";
// import { PiGreaterThan } from "react-icons/pi";

// import { } from "react-icons/fa";
  

export const Temp = () => {
    return (
      <div className="main-box">
        <div className="head-box">
          <div className="profile-pic">
          <img src="https://i.pinimg.com/474x/a2/de/27/a2de27bbe8182ed687fb59b7590663a6.jpg" alt="Profile" width="30" height="30" style={{ borderRadius: "50%" }}  />
             </div>
            <div className="name">Jerome Bellingham</div>
            <div className="btn"><button>MEMBER</button></div>
            <div className="logo">
            <RiAnchorFill size={12} /></div>
            <div className="subname">Joined Since : 12 March 2023</div>
        </div>
        <div className="boxes">
        <div className="box1">
          <div className="main">Basic Informational</div>
          
          <div className="gender">Gender</div>
          <h5>Male</h5>
          <div className="gender">Birthday</div>
          <h5>12 Agust 2001</h5>
          <div className="gender">Phone Number</div>
          <h5>+62 837 356 343 23</h5>
          <div className="gender">Email</div>
          <h5>jeromebellingham93@gmail.com</h5>
          <div className="gender">Sources</div>
        </div>
        <div className="box2"></div>
       </div>
      </div>
      /* // <div className="box">
      //   <div className="head">
      //   <div className="profile-pic">
      //   <img src="https://i.pinimg.com/474x/a2/de/27/a2de27bbe8182ed687fb59b7590663a6.jpg" alt="Profile" width="30" height="30" style={{ borderRadius: "50%" }}  />
      //   </div>
      //   <div className="name"><span>Jerome Bellingham</span>
      //     <button>MEMBER</button> 
          
         
      //     </div>
      //   <span className="ship"><RiAnchorFill /> Joined Since : 12 March 2023</span>

      // </div>

      // <div className="mini-box1">
      //   <div className="main-hedding">Basic Information</div>
      //   <div className="sub">
      //     <a className="gender">
      //       <span>Male</span>
      //     </a>
      //     <a className="gender">
      //       <span>Birtday</span>
      //     </a>
      //     <a className="gender">
      //       <span>+62 837 356 343 23</span>
      //     </a>
      //     <a className="gender">
      //       <span>jeromebellingham93@gmail.com</span>
      //     </a>
      //     <a className="gender"></a>

      //   </div>
      //   <div className="mini-box2">
      //     <div className="sub2">
            
      //     </div>
      //   </div>
      // </div>
      // </div>
      // <div className="box">
      //   <div className="head">
      //   <a className="dental"><FaTooth size={15} color="blue" /></a>

        
      //   <div className="listcust"></div>
      //   <span>List Customer</span>
      //   <div className="arrow"><PiGreaterThan /></div>
      //   <div className="name"></div>
      //   <span>Jerome Bellingham</span>
      //   </div>

      //   <div className="side-bar">
      //     <a className="widdels"></a>
      //     <a className="paste"></a>
      //     <a className="person"></a>
      //     <a className="calender"></a>
      //     <a className="shield"></a>
      //     <a className="cut"></a>
      //     <a className="question"></a>
      //     <a className="setting"></a>
      //   </div>
        
      //   </div> */
      



    );
};
export default Temp;