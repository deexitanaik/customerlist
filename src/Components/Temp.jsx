import React from "react";
import "./Temp.css";
import { RiAnchorFill } from "react-icons/ri";
import { CgGenderFemale } from "react-icons/cg";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoGitNetworkSharp } from "react-icons/io5";
import { FaGoogle, FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
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

      <div className="info-row">
        <CgGenderFemale className="icon" />
        <div className="text-container">
          <div className="label">Gender</div>
          <div className="value">Male</div>
        </div>
      </div>

      <div className="info-row">
        <LiaBirthdayCakeSolid className="icon" />
        <div className="text-container">
          <div className="label">Birthday</div>
          <div className="value">12 August 2001</div>
        </div>
      </div>

      <div className="info-row">
        <FiPhone className="icon" />
        <div className="text-container">
          <div className="label">Phone Number</div>
          <div className="value">+62 837 356 343 23</div>
        </div>
      </div>

      <div className="info-row">
        <MdOutlineMailOutline className="icon" />
        <div className="text-container">
          <div className="label">Email</div>
          <div className="value">jeromebellingham93@mail.com</div>
        </div>
      </div>

      <div className="info-row">
        <IoGitNetworkSharp className="icon" />
        <div className="text-container">
          <div className="label">Sources</div>
          <div className="social-icons">
            <FaFacebookMessenger className="social-icon" />
            <FaGoogle className="social-icon" />
            <FaWhatsapp className="social-icon" />
          </div>
        </div>
      </div>
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