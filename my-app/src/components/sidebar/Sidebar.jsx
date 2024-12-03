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
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <i className="icon-home"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#team" className="nav__link">
                                <i className="icon-user"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="icon-note"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#account" className="nav__link">
                                <i className="icon-layers"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i className="icon-notebook"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;
