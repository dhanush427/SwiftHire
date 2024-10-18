const JobDetails = ({ job }) => {

    return (
      <div className="job-details">
        <h4>{job.title}</h4>
        <p><strong>Company: </strong>{job.company}</p>
        <p><strong>Location: </strong>{job.location}</p>
        <p><strong>Annual Salary (USD): </strong>{job.annualSalary}</p>
        <p>{job.createdAt}</p>
      </div>
    )
  }
  
  export default JobDetails