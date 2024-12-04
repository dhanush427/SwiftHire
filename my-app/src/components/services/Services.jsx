import React from "react";
import "./services.css";
import { FaBrain, FaUserEdit, FaBriefcase, FaRocket, FaTasks, FaChalkboardTeacher } from "react-icons/fa";

const data = [
    {
        id: 1,
        icon: <FaBrain />,
        title: "Curated Job Postings",
        description: "Browse through a collection of jobs, new and old, and search for specific companies and roles, while keeping track of active/inactive applications.",
    },
    {
        id: 2,
        
        title: "Resume Analysis/Management",
        description:
            "Take advantage of intelligent features to look at your resume by uploading a file and recommending jobs based on experience and other factors.",
        link: "/"
    },
    {
        id: 3,
        
        title: "Personal Profile",
        description:
            "Have your own profile which employeers can view to see if you are a good fit for a particular position.",
        link: "/"
    }
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h1 className="section__title">Our Services</h1>
            <span>{<br />}</span>
            <span>{<br />}</span>
            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt="" className="services__img" />
                            <p className="services__title">{title}</p>
                            <p className="services__description">{description}</p>
                        </div>
                    );
                })}
            </div>
            
            <span>{<br/>}</span>
            <div className="services__info">
                Please visit our GitHub: <h2 className="services__info-link">https://github.com/dhanush427/SwiftHire</h2>
                <span>{<br/>}</span>
                2024 SwiftHire. All rights reserved. Please contact rcos.swifthire@gmail.com with any inquiries.
            </div>
        </section>
    );
};

export default Services;
