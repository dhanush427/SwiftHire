import requests
from typing import List, Dict

class JobAPIClient:
    def __init__(self, base_url: str, api_key: str):
        self.base_url = base_url
        self.api_key = api_key

    def fetch_job_postings(self, query: str, location: str, limit: int = 10) -> List[Dict]:
        endpoint = f"{self.base_url}/jobs"
        headers = {"Authorization": f"Bearer {self.api_key}"}
        params = {
            "q": query,
            "location": location,
            "limit": limit
        }

        response = requests.get(endpoint, headers=headers, params=params)

        if response.status_code == 200:
            return response.json().get("jobs", [])
        else:
            response.raise_for_status()


class Job:
    def __init__(self, title: str, company: str, location: str, description: str, link: str):
        self.title = title
        self.company = company
        self.location = location
        self.description = description
        self.link = link

    def __str__(self):
        return f"{self.title} at {self.company} ({self.location})\n{self.link}\n"

class JobHandler:
    @staticmethod
    def parse_jobs(job_data: List[dict]) -> List[Job]:
        return [
            Job(
                title=job["title"],
                company=job["company"],
                location=job["location"],
                description=job["description"],
                link=job["link"]
            )
            for job in job_data
        ]

if __name__ == "__main__":

    client = JobAPIClient(base_url="https://api.example.com", api_key="")
    jobs = client.fetch_job_postings(query="", location="", limit=5)
    for job in jobs:
        print(job)

    sample_data = [
        {
            "title": "Job",
            "company": "Company",
            "location": "Remote",
            "description": "Build scalable applications.",
            "link": "https://example.com/job/1"
        }
    ]

    jobs = JobHandler.parse_jobs(sample_data)
    for job in jobs:
        print(job)

