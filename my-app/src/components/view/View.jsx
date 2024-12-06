import React, { useState } from "react";
import "./view.css";

const ProfileViewsButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Mock data for users who viewed the profile
  const profileViews = [
    { name: "Alice Johnson", role: "Recruiter at Google" },
    { name: "Bob Smith", role: "Software Engineer at Amazon" },
    { name: "Charlie Davis", role: "Data Scientist at Meta" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="profile-views-container">
      <button className="profile-views-btn" onClick={toggleDropdown}>
        👁 Views on Your Profile
      </button>
      {isOpen && (
        <div className="profile-views-dropdown">
          <h4>Who viewed your profile</h4>
          <ul>
            {profileViews.length > 0 ? (
              profileViews.map((viewer, index) => (
                <li key={index}>
                  <strong>{viewer.name}</strong>
                  <br />
                  <span>{viewer.role}</span>
                </li>
              ))
            ) : (
              <li>No views yet</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileViewsButton;
