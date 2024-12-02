import React, { useState } from 'react';
import './ResumeSection.css';

function ResumeSection() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (file) {
      console.log('File uploaded:', file);
      alert(`File "${file.name}" uploaded successfully!`);
      setFile(null);
    } else {
      alert('Please select a file first.');
    }
  };

  return (
    <section className="resume-section">
      <div className="resume-header">
        <h1>Upload your resume here!</h1>
        <span>{<br/>}</span>
        <p>Discover how SwiftHire simplifies your job applications with easy resume upload. Add your file and gain insight on jobs to apply for based on your credentials and experience.</p>
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
        <button className="upload-button" onClick={handleFileUpload}>
          Upload
        </button>
      </div>
    </section>
  );
}

export default ResumeSection;