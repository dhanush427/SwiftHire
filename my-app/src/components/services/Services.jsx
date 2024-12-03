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
        
        title: "Resume Analysis",
        description:
            "Take advantage of intelligent features to look at your resume and recommend jobs",
        link: "/"
    },
    {
        id: 3,
        
        title: "Personal Profile",
        description:
            "Have your own profile which employeers can view to see if your a good fit for a position",
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
            <span>{<br />}</span>
            <span>{<br />}</span>
            <div className="services__info">
                Try out our latest Resume Analysis & Management tool, currently in development, below!
                <span>{<br />}</span>
                Keep scrolling down to get started with this exclusive, early access feature:
            </div>
        </section>
    );
};

export default Services;
