import React, { useState } from 'react';
import { FaProjectDiagram, FaCalendarAlt, FaUserAlt, FaInfoCircle, FaSignOutAlt } from 'react-icons/fa';
import { RxDashboard } from "react-icons/rx";
import { FaPlane } from "react-icons/fa6";
import { GrUserWorker } from "react-icons/gr";
import { SiMessenger } from "react-icons/si";
import './Sidebar.css';
import logo from '../../assets/cooking.jpg';
import { CiLogout } from "react-icons/ci";
import supportimg from '../../assets/supportimg.jpg'
const Sidebar = () => {
  const [lihover,setLihover]=useState(false);
  const handleClick=()=>{
    console.log("li clicked");
    setLihover(true);
    console.log({lihover});
    }
  return (
    <div className="sidebar">
      <img src={logo} alt="Logo" id="sidebar-img" />
      <div className="menu">
        <ul className="lii">
        <li>
            <RxDashboard /> Dashboard
          </li>
          <li>
            <FaProjectDiagram /> Projects
          </li>
          <li>
            <FaCalendarAlt /> Calendar
          </li>
          <li>
            <FaPlane/> Vacations
          </li>
          <li>
            <FaUserAlt /> Employees
          </li>
          <li>
            <SiMessenger/> Messenger
          </li>
          <li >
            <FaInfoCircle /> Info Portal
          </li>
          
        </ul>
      </div>
      <div className="supportdiv">
        <img src={supportimg} alt="" />
        </div>
        <div className="logoutbutton">
        <CiLogout/>
        <h3>Logout</h3>
        </div>
    </div>
  );
};

export default React.memo(Sidebar); // Performance optimization using React.memo
