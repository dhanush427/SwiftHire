import React, { useState } from "react";
import "./status.css";

const JobStatusBar = () => {
  const [selectedStatus, setSelectedStatus] = useState(null);

  // Sample data for jobs
  const jobDetails = {
    applied: ["Company A", "Company B", "Company C"],
    rejected: ["Company D", "Company E", "Company F"],
    accepted: ["Company G", "Company H"],
    unfinished: ["Company I", "Company J", "Company K"],
  };

  const handleStatusClick = (status) => {
    // Toggle the selected status
    setSelectedStatus(selectedStatus === status ? null : status);
  };

  return (
    <div className="job-status-bar">
      <div className="status-item applied" onClick={() => handleStatusClick("applied")}>
        <h3>Jobs Applied</h3>
        <p>10</p>
      </div>
      <div className="status-item rejected" onClick={() => handleStatusClick("rejected")}>
        <h3>Jobs Rejected</h3>
        <p>3</p>
      </div>
      <div className="status-item accepted" onClick={() => handleStatusClick("accepted")}>
        <h3>Jobs Accepted</h3>
        <p>2</p>
      </div>
      <div className="status-item unfinished" onClick={() => handleStatusClick("unfinished")}>
        <h3>Unfinished Applications</h3>
        <p>5</p>
      </div>

      {selectedStatus && (
        <div className="popup">
          <h4>{selectedStatus.charAt(0).toUpperCase() + selectedStatus.slice(1)} Jobs</h4>
          <ul>
            {jobDetails[selectedStatus].map((job, index) => (
              <li key={index}>{job}</li>
            ))}
          </ul>
          <button onClick={() => setSelectedStatus(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default JobStatusBar;
