import React, { useState } from "react";
import "./testjob.css";

const JobList = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      company: "ABC Corp",
      description: "We are looking for a passionate software engineer to join our team. You will work on building scalable applications using React and Node.js.",
      location: "New York, NY",
      requirements: [
        "Proficient in JavaScript (React, Node.js)",
        "Experience with REST APIs",
        "Team player with excellent communication skills"
      ]
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "XYZ Ltd",
      description: "Join our frontend development team and build user-friendly interfaces. You will work closely with the design team to create responsive and interactive websites.",
      location: "San Francisco, CA",
      requirements: [
        "Proficient in HTML, CSS, JavaScript",
        "Experience with frontend frameworks like React or Angular",
        "Ability to work independently"
      ]
    },
    {
      id: 3,
      title: "Backend Developer",
      company: "Techie Inc",
      description: "Looking for an experienced backend developer to build and maintain the server-side logic and databases for our web applications.",
      location: "Remote",
      requirements: [
        "Experience with Node.js, Express, and MongoDB",
        "Understanding of RESTful APIs",
        "Experience with cloud services like AWS or GCP"
      ]
    },
    {
      id: 4,
      title: "Full Stack Developer",
      company: "Innovate Ltd",
      description: "As a full-stack developer, you will be responsible for developing both the frontend and backend of our web applications.",
      location: "Austin, TX",
      requirements: [
        "Proficient in JavaScript, React, Node.js",
        "Experience with databases like MySQL or MongoDB",
        "Understanding of modern DevOps tools"
      ]
    },
    {
      id: 5,
      title: "Product Manager",
      company: "FutureTech",
      description: "We are seeking an experienced product manager to lead our product strategy and development, collaborating with engineering, design, and marketing teams.",
      location: "Chicago, IL",
      requirements: [
        "Strong background in product management",
        "Experience with agile methodologies",
        "Excellent leadership and communication skills"
      ]
    },
    {
      id: 6,
      title: "Data Scientist",
      company: "Data Insights",
      description: "Join our data science team to analyze and interpret complex data to help drive business decisions. You will use machine learning algorithms to make predictions.",
      location: "Boston, MA",
      requirements: [
        "Proficient in Python, R, and SQL",
        "Experience with machine learning frameworks like TensorFlow or PyTorch",
        "Ability to visualize and interpret data insights"
      ]
    }
  ];

  const handleApply = (jobTitle) => {
    alert(`You have applied for the ${jobTitle} position!`);    
  };

  

  return (
    <section className="job-list container">
      <div className="job-list__container">
        <div className="job-list__sidebar">
          <h2>Job Listings</h2>
          {jobs.map((job) => (
            <div
              key={job.id}
              className={`job-list__item ${selectedJob?.id === job.id ? "job-list__item--selected" : ""}`}
              onClick={() => setSelectedJob(job)}
            >
              <h3>{job.title}</h3>
              <p>{job.company}</p>
            </div>
          ))}
        </div>

        <div className="job-list__details">
          {selectedJob ? (
            <>
              <h2>{selectedJob.title}</h2>
              <h3 className="job-list__details-company">{selectedJob.company}</h3>
              <p><strong>Location:</strong> {selectedJob.location}</p>
              <p>{selectedJob.description}</p>
              <h4 className="reqTitle">Requirements:</h4>
              <ul className="reqDesc">
                {selectedJob.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
              <button
                className="apply-btn"
                onClick={() => handleApply(selectedJob.title)}
              >
                Apply Now
              </button>
              <button
                className="apply-btn"
                onClick={() => handleApply(selectedJob.title)}
              >
                BookMark
              </button>
            </>
          ) : (
            <p>Select a job to see the details</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobList;