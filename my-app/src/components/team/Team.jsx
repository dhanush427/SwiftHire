import React from "react";
import "./team.css";


const teamData = [
    {
        id: 1,
        name: "Dhanush Ananthkar",
        major: "Computer Science",
        description: "A passionate software developer specializing in full-stack development and AI solutions.",
    },
    {
        id: 2,
        name: "Sagar Sahu",
        major: "Computer Science",
        description: "Loves turning data into actionable insights. Enjoys working on big data analytics.",
    },
    {
        id: 3,
        name: "Cole Augusta",
        major: "Computer Science",
        description: "Enjoys designing user-friendly interfaces and crafting seamless user experiences.",
    },
];

const MeetTheTeam = () => {
    return (
        <section className="meet-the-team">
            <h1 className="team-title">Meet the Team</h1>
            <div className="team-container">
                {teamData.map(({ id, name, major, photo, description }) => (
                    <div className="team-card" key={id}>
                        <img src={photo} alt={`${name}'s profile`} className="team-photo" />
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
