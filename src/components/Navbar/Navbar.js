

import React, { useState } from "react";
import {
  FaBars,
  FaBell,
  FaQuestionCircle,
  FaCog,
  FaTimes,
  FaHome,
  FaHistory,
  FaRobot,
  FaChartBar,
} from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <FaBars className="menu-icon" onClick={toggleSidebar} />
          <img
            src="https://iconape.com/wp-content/files/na/344063/png/344063.png"
            alt="Company Logo"
            className="sidebar-logo"
          />
          <span className="company-name">
            AI<span className="blue-text">Data</span>Can
          </span>
        </div>
        <div className="navbar-right">
          <FaBell className="icon" />
          <FaQuestionCircle className="icon" />
          <FaCog className="icon" />
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : "collapsed"}`}>
        <div className="sidebar-header">
          
          {isSidebarOpen && <FaTimes className="close-icon" onClick={toggleSidebar} />}
        </div>
        <ul className="sidebar-menu">
          <li>
            <FaHome className="menu-item-icon" />
            {isSidebarOpen && <span>Home</span>}
          </li>
          <li>
            <FaHistory className="menu-item-icon" />
            {isSidebarOpen && <span>Recent History</span>}
          </li>
          <li>
            <FaRobot className="menu-item-icon" />
            {isSidebarOpen && <span>Ask AIDataCan</span>}
          </li>
          <li>
            <FaChartBar className="menu-item-icon" />
            {isSidebarOpen && <span>Reports</span>}
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Navbar;

