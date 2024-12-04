import React, { useContext } from "react";
import "./sidebar.css";
import Logo from "../../assets/logo.svg";
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaLayerGroup } from "react-icons/fa";
import { ThemeContext } from "../../ThemeContext";

const Sidebar = () => {
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

    return (
        <aside className="aside">
            {/* Dark Mode Toggle */}
            <div className="dark-mode-switch-container">
                <label className="dark-mode-switch">
                    <input
                        type="checkbox"
                        checked={isDarkMode}
                        onChange={toggleDarkMode} // Toggle the dark mode on change
                    />
                    <span className="slider"></span>
                </label>
            </div>

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
                                <FaHome />
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#team" className="nav__link">
                                <FaUser />
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <FaBriefcase />
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#account" className="nav__link">
                                <FaEnvelope />
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <FaLayerGroup />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;