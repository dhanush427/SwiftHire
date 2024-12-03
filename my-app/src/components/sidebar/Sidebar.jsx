import React from "react";
import "./sidebar.css";
import Logo from "../../assets/logo.svg";
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaLayerGroup } from "react-icons/fa";

const Sidebar = () => {
    return (
        <aside className="aside">
            <div className="logo-container">
                <a href="#home" className="nav__logo">
                    <img src={Logo} alt="Logo" />
                </a>
            </div>

            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#home" className="nav__link">
                            <FaHome className="nav__icon" />
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <FaUser className="nav__icon" />
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#services" className="nav__link">
                            <FaBriefcase className="nav__icon" />
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <FaEnvelope className="nav__icon" />
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#account" className="nav__link">
                            <FaLayerGroup className="nav__icon" />
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
