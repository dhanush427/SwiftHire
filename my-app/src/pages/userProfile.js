import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('applied');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleEditProfile = () => {
    alert('Edit Profile functionality coming soon!');
  };

  return (
    <div className="profile-container">
      {/* Profile Section */}
      <div className="profile-header">
        <img
          src="https://via.placeholder.com/150" // Placeholder image
          alt="User Profile"
          className="profile-image"
        />
        <div className="profile-details">
          <h2>John Doe</h2>
          <p><strong>Address:</strong> 123 Main St, Springfield</p>
          <p><strong>Email:</strong> john.doe@example.com</p>
          <p><strong>Phone:</strong> +1 (555) 555-5555</p>
          <p><strong>Major:</strong> Computer Science</p>
          <p><strong>School:</strong> Springfield University</p>
          <p><strong>GPA:</strong> 3.8</p>
          <p><strong>Looking for:</strong> Software Development Internship</p>
          <button className="edit-button" onClick={handleEditProfile}>
            Edit Profile
          </button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="tabs">
        <button
          className={activeTab === 'applied' ? 'tab active' : 'tab'}
          onClick={() => handleTabClick('applied')}
        >
          Jobs Applied
        </button>
        <button
          className={activeTab === 'saved' ? 'tab active' : 'tab'}
          onClick={() => handleTabClick('saved')}
        >
          Jobs Saved
        </button>
        <button
          className={activeTab === 'toApply' ? 'tab active' : 'tab'}
          onClick={() => handleTabClick('toApply')}
        >
          Jobs to Apply
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'applied' && (
          <div>
            <h3>Jobs Applied</h3>
            <table>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Position</th>
                  <th>Date Applied</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Google</td>
                  <td>Software Engineer</td>
                  <td>2024-01-15</td>
                </tr>
                <tr>
                  <td>Facebook</td>
                  <td>Frontend Developer</td>
                  <td>2024-01-20</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {activeTab === 'saved' && (
          <div>
            <h3>Jobs Saved</h3>
            <table>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Amazon</td>
                  <td>Data Analyst</td>
                </tr>
                <tr>
                  <td>Microsoft</td>
                  <td>Backend Developer</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {activeTab === 'toApply' && (
          <div>
            <h3>Jobs to Apply</h3>
            <table>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Position</th>
                  <th>Deadline</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Netflix</td>
                  <td>DevOps Engineer</td>
                  <td>2024-02-01</td>
                </tr>
                <tr>
                  <td>OpenAI</td>
                  <td>AI Researcher</td>
                  <td>2024-03-15</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
