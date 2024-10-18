import { useEffect, useState } from "react"

// components
import JobDetails from "../components/JobDetails"

const Home = () => {
  const [jobs, setJobs] = useState(null)

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch('/api/jobs')
      const json = await response.json()

      if (response.ok) {
        setJobs(json)
      }
    }

    fetchJobs()
  }, [])

  return (
    <div className="home">
      <div className="jobs">
        {jobs && jobs.map(job => (
          <JobDetails job={job} key={job._id} />
        ))}
      </div>
    </div>
  )
}

export default Home