import React from "react";
import "./team.css";


const teamData = [
    {
        id: 1,
        name: "Dhanush Ananthkar",
        major: "Computer Science, 2025",
        description: "A passionate software developer specializing in full-stack development and AI solutions.",
    },
    {
        id: 2,
        name: "Sagar Sahu",
        major: "Computer Science, 2026",
        description: "Undergraduate junior who is learning about new software engineering practices. Passionate about backend and frontend development.",
    },
    {
        id: 3,
        name: "Cole Augusta",
        major: "Computer Science, 2026",
        description: "Enjoys designing user-friendly interfaces and crafting seamless user experiences.",
    },
];

const MeetTheTeam = () => {
    return (
        <section className="meet-the-team" id="team">
            <h1 className="team-title">About Us</h1>

            <div className="about__data grid">
                <h3 className="description">
                    SwiftHire is a full-stack web app designed to simplify the job application process by gathering information once and enabling users to apply to jobs with a single click. Inspired by the Common App for college applications, SwiftHire aims to make job hunting more efficient and accessible, eliminating the repetitive nature of filling out applications. The platform will provide features like personalized job recommendations, document management, and job search functionalities to empower both job seekers and employers. We hope you like it!
                </h3>
                <span>{<br/>}</span>
                
            </div>
            <span>{<br/>}</span>
            <span>{<br/>}</span>
            <div className="team-container">
                {teamData.map(({ id, name, major, photo, description }) => (
                    <div className="team-card" key={id}>
                        
                        <h2 className="team-name">{name}</h2>
                        <p className="team-major">{major}</p>
                        <p className="team-description">{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MeetTheTeam;
