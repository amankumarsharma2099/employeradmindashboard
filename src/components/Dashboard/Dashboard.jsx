import React from 'react';
import { CiSearch } from 'react-icons/ci';
import './Dashboard.css';
import profileimage from '../../assets/profile.png';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="search-bar">
          <CiSearch className="search-icon" />
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        <div className="profile-section">
          <div className="notification-icon">🔔</div>
          <div className="profile-info">
            <img src={profileimage} alt="Profile" className="profile-pic" />
            <span className="profile-name">Evan Yates</span>
          </div>
        </div>
      </div>
      <div className="welcome-section">
        <h3>Welcome back, Evan!</h3>
        <div className="date-section">
          <span>📅 Nov 16, 2020 - Dec 16, 2020</span>
        </div>
      </div>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
