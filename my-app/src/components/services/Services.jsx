import React from "react";
import "./services.css";
import { FaBrain, FaUserEdit, FaBriefcase, FaRocket, FaTasks, FaChalkboardTeacher } from "react-icons/fa";

const data = [
    {
        id: 1,
        icon: <FaBrain />,
        title: "AI Resume Update",
        description: "Let our AI refine your resume with industry-specific keywords.",
    },
    {
        id: 2,
        icon: <FaUserEdit />,
        title: "Customizable Profile",
        description: "Create a profile that showcases your skills and experience.",
    },
    {
        id: 3,
        icon: <FaBriefcase />,
        title: "AI Recommended Jobs",
        description: "Get job recommendations tailored to your profile.",
    },
    {
        id: 4,
        icon: <FaRocket />,
        title: "One-Click Apply",
        description: "Apply to jobs effortlessly with a single click.",
    },
    {
        id: 5,
        icon: <FaTasks />,
        title: "Job Tracking",
        description: "Manage all your applications in one convenient spot.",
    },
    {
        id: 6,
        icon: <FaChalkboardTeacher />,
        title: "1-on-1 Interview Prep",
        description: "Prepare for interviews with personalized coaching.",
    },
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h1 className="section__title">Our Services</h1>
            <span>{<br />}</span>
            <div className="services__container grid">
                {data.map(({ id, icon, title, description }) => (
                    <div className="services__card" key={id}>
                        <div className="services__icon">{icon}</div>
                        <h2 className="services__title">{title}</h2>
                        <p className="services__description">{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
