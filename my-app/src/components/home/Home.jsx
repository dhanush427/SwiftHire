import React from "react";
import "./home.css";
import Me from "../../assets/avatar-1.svg";

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home__img" />
                <h1 className="home__name">
                    <span className="typewriter">Welcome to SwiftHire!</span>
                </h1>
                <span className="home__education">RCOS Fall 2024</span>
                <span>{<br />}</span>
                <span>{<br />}</span>
                <a href="#account" className="btn">
                    Get Started
                </a>
            </div>
        </section>
    );
};

export default Home;