const JobDetails = ({ job }) => {

    return (
      <div className="job-details">
        <h4>{job.title}</h4>
        <p><strong>Company: </strong>{job.company}</p>
        <p><strong>Location: </strong>{job.location}</p>
        <p><strong>Annual Salary (USD): </strong>{job.annualSalary}</p>
        <p><strong>Job Type: </strong>{job.jobType}</p>
        <p><strong>Monthly Salary (USD): </strong>{job.monthSalary}</p>
        <p><strong>Job Description: </strong>{job.jobDesc}</p>
        <p>{job.createdAt}</p>
      </div>
    )
  }
  
  export default JobDetails