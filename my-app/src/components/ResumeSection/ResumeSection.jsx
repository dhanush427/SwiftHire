import React, { useState } from "react";
import "./ResumeSection.css";

function ResumeSection() {
  const [file, setFile] = useState(null);
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    if (!company || !position) {
      alert("Please enter both company and position details.");
      return;
    }

    console.log("File uploaded:", file);
    console.log("Target company:", company);
    console.log("Target position:", position);

    alert(
      `File "${file.name}" uploaded successfully!\nTarget Company: ${company}\nTarget Position: ${position}`
    );

    // Reset state
    setFile(null);
    setCompany("");
    setPosition("");
  };

  return (
    <section className="resume-section">
      <div className="resume-header">
        <h1 className="res-title">Upload Your Resume</h1>
        <span>{<br />}</span>
        <p>
          Discover how SwiftHire simplifies your job applications with easy
          resume uploads. Add your file, specify your target company and
          position, and gain insights into tailored job recommendations.
        </p>
      </div>

      <div className="upload-container">
        <input
          id="file-upload"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="file-input"
        />
        {file && <p className="file-name">Selected File: {file.name}</p>}

        <div className="target-inputs">
          <input
            type="text"
            placeholder="Target Company (e.g., Google)"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Target Position (e.g., Software Engineer)"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="input-field"
          />
        </div>

        <button className="upload-button" onClick={handleFileUpload}>
          Upload
        </button>
      </div>
    </section>
  );
}

export default ResumeSection;
