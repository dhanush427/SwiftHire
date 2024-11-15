import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [appliedJobs, setAppliedJobs] = useState([]);

  const jobListings = [
    { id: 1, title: 'Software Engineer', description: 'Develop and maintain web applications.' },
    { id: 2, title: 'Data Scientist', description: 'Analyze data and build predictive models.' },
    { id: 3, title: 'Product Manager', description: 'Oversee product development and strategy.' },
    { id: 4, title: 'UI/UX Designer', description: 'Design intuitive user interfaces and experiences.' },
    { id: 5, title: 'Marketing Specialist', description: 'Plan and execute marketing strategies.' },
  ];

  const filteredJobs = jobListings.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleApply = (jobId) => {
    if (!appliedJobs.includes(jobId)) {
      setAppliedJobs([...appliedJobs, jobId]);
    }
  };

  return (
    <div className="container">
      <h1>Job Listings</h1>
      <input
        type="text"
        className="search-bar"
        placeholder="Search for jobs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="job-list">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className={`job-card ${appliedJobs.includes(job.id) ? 'applied' : ''}`}
            >
              <h2>{job.title}</h2>
              <p>{job.description}</p>
              {appliedJobs.includes(job.id) ? (
                <button className="applied-button" disabled>
                  Applied
                </button>
              ) : (
                <button className="apply-button" onClick={() => handleApply(job.id)}>
                  Apply
                </button>
              )}
            </div>
          ))
        ) : (
          <p>No jobs found.</p>
        )}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
