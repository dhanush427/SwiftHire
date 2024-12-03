import React from "react";
import "./status.css";

const JobStatusBar = () => {
  return (
    <div className="job-status-bar">
      <div className="status-item applied">
        <h3>Jobs Applied</h3>
        <p>10</p>
      </div>
      <div className="status-item rejected">
        <h3>Jobs Rejected</h3>
        <p>3</p>
      </div>
      <div className="status-item accepted">
        <h3>Jobs Accepted</h3>
        <p>2</p>
      </div>
      <div className="status-item unfinished">
        <h3>Unfinished Applications</h3>
        <p>5</p>
      </div>
    </div>
  );
};

export default JobStatusBar;
