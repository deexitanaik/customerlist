import React from "react";
import "./Temp.css";
import { RiAnchorFill } from "react-icons/ri";
import { CgGenderFemale } from "react-icons/cg";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoGitNetworkSharp } from "react-icons/io5";
import { FaGoogle, FaFacebookMessenger, FaWhatsapp,FaCircle } from "react-icons/fa";
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
    <div className="box2">
      <div className="main2">Appointment Schedule</div>

      <div className="timeline">
     
        <div className="appointment">
          <div className="date1">
            <FaCircle className="circle active" />
            <span>12 Oct 2023</span>
          </div>
          <div className="appointment-box">
            <div className="title">Prosthetic Tooth Fabrication</div>
            <div className="doctor">
              <span className="dot blue"></span> Drg. Wade Warren
            </div>
          </div>
        </div>

        
        <div className="appointment">
          <div className="date2">
            <FaCircle className="circle active" />
            <span>12 Sep 2023</span>
          </div>
          <div className="appointment-box">
            <div className="title">Post-Surgical Care</div>
            <div className="doctor">
              <span className="dot red"></span> Drg. Marvin McKinney
            </div>
          </div>
        </div>

       
        <div className="appointment">
          <div className="date3">
            <FaCircle className="circle active" />
            <span>12 Aug 2023</span>
          </div>
          <div className="appointment-box">
            <div className="title">Implant Placement</div>
            <div className="doctor">
              <span className="dot green"></span> Drg. Floyd Miles
            </div>
          </div>
        </div>

       
        
          </div>
        </div>
      </div>
      </div>
     
     
      



    );
};
export default Temp;