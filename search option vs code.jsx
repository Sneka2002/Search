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


App.css

.user-profile {
  background: linear-gradient(to margin-bottom, hsl(327, 74%, 64%), #ece6dc);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 300px;
  margin: 0 auto;
}
.user-profile.profile-info.profile-image{
  size: 50%;
}
.profile-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.logo {
  width: 50px;
  height: 50px;
}

.search-bar {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 70%;
}

.profile-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.view-profile-button {
  background-color: #fa4ead;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.user-details {
  margin: 20px 0;
}

.detail {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

label {
  font-weight: bold;
  margin-right: 10px;
}

.download-button button {
  background-color: #f778be;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

App.js

import React from 'react';
import Search from './search';

function App() {
  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;

