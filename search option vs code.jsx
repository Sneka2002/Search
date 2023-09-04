import React from 'react';
// Import your CSS file

const Search = () => {
  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src="path/to/logo.png" alt="Logo" className="logo" />
        <input type="text" placeholder="Search" className="search-bar" />
      </div>
      <div className="profile-info">
        <img src="path/to/profile-image.png" alt="Profile" className="profile-image" />
        <button className="view-profile-button">View Profile</button>
      </div>
      <div className="user-details">
        <div className="detail">
          <label>ID:</label>
          <span>__________</span>
        </div>
        <div className="detail">
          <label>Location:</label>
          <span>____________</span>
        </div>
      </div>
      <div className="download-button">
        <label> Medical Prescription:</label>
        <button>Download as PDF</button>
      </div>
    </div>
  );
};

export default Search;
