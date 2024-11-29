import React, { useState } from 'react';
import axios from 'axios';

const ResumeMatch = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [suggestedJobs, setSuggestedJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setResumeFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!resumeFile) {
      alert("Please upload a resume file.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("resume", resumeFile);

    try {
      const keywordsResponse = await axios.post(
        "http://localhost:5000/api/resume/extract",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      const keywords = keywordsResponse.data.keywords;

      const jobsResponse = await axios.post("http://localhost:5000/api/jobs/match", {
        keywords,
      });

      setSuggestedJobs(jobsResponse.data.jobs);
    } catch (error) {
      console.error("Error processing resume:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="resume-match-container">
      <h1>Resume Match Suggestions</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".txt,.pdf,.docx" onChange={handleFileChange} />
        <button type="submit" disabled={loading}>
          {loading ? "Processing..." : "Find Matching Jobs"}
        </button>
      </form>

      {suggestedJobs.length > 0 && (
        <div className="suggested-jobs">
          <h2>Suggested Jobs</h2>
          <ul>
            {suggestedJobs.map((job) => (
              <li key={job.id}>
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                <a href={job.link} target="_blank" rel="noopener noreferrer">
                  View Job
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResumeMatch;