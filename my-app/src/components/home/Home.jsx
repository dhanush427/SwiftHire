import React from "react";
import "./home.css";
import Me from "../../assets/avatar-1.svg";

const Home = () => {
    return (
        <section className= "home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home__img" />
                <h1 className="home__name">
                    Welcome to SwiftHire!
                </h1>
                <span className="home__education">
                    RCOS Fall 2024
                </span>
                <span>{<br/>}</span>
                <span>{<br/>}</span>
                <a hfref="#contact" className="btn">
                    Get Started
                </a>
            </div>
        </section>
    )
}

export default Home