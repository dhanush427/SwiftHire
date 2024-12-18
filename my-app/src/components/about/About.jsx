import React from "react";
import "./about.css";

const About = () => {
    return (
        <section className="about container section" id="about">
            <h1 className="aboutUs">About Us</h1>
            <span>{<br/>}</span>
            <div className="about__data grid">
                <h3 className="description">
                    SwiftHire is a web application designed to simplify the job application process by gathering information once and enabling users to apply to jobs with a single click. Inspired by the Common App for college applications, SwiftHire aims to make job hunting more efficient and accessible, eliminating the repetitive nature of filling out applications. The platform will provide features like personalized job recommendations, document management, and job search functionalities to empower both job seekers and employers.
                </h3>
                <span>{<br/>}</span>
                
            </div>
        </section>
    );
};

export default About;