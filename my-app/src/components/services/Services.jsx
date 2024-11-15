import React from "react";
import "./services.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
    {
        id: 1,
        image: Image1,
        title: "Job Searching",
        description:
            "Easily look for and apply to trending and relevant job postings with an up-to-date list of new jobs",
        link: "/searchJobs"
    },
    {
        id: 2,
        image: Image2,
        title: "AI-Powered Tools",
        description:
            "Take advantage of intelligent features like document management and resume optimizations",
        link: "/"
    },
    {
        id: 3,
        image: Image3,
        title: "Job Posting",
        description:
            "Expand your network and post new jobs to meet potential employees and candidates based on your criteria",
        link: "/postJob",
    }
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h1 className="section__title">Our Services</h1>
            <span>{<br/>}</span>
            <div className="services__container grid">
                {data.map(({id, image, title, description}) => {
                    return (
                         <div className="services__card" key={id}>
                            <img src={image} alt="" className="services__img" />
                            <h3 className="services__title"><a href={link}>{title}</a></h3>
                            <p className="services__description">{description}</p>
                         </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Services