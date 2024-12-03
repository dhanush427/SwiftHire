import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./social.css";

const SocialMedia = () => {
    const [show, setShow] = useState(false);

    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const scrollTop = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;

        const isAtBottom = windowHeight + scrollTop >= documentHeight - 1; // Check if scrolled to the bottom
        setShow(isAtBottom);

        console.log({ windowHeight, scrollTop, documentHeight, isAtBottom }); // Debugging output
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`social-media-container ${show ? "show" : ""}`}>
            <ul className="social-media-list">
                <li>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="social-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="social-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="social-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="social-icon" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SocialMedia;


