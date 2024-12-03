import React, { useState } from "react";
import "./account.css";
import { FaGoogle, FaGithub, FaApple } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Account = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <section className="account container section" id="account">
            <h1 className="accountTitle">Account Login & Registration</h1>
            <span>{<br />}</span>
            <p className="account-description">
                Let's get started! Create an account today, or log in here if you're a returning user:
            </p>
            <span>{<br />}</span>
            <div className="account-container">
                <div className="form-container">
                    <h2>{isSignUp ? "Create Account" : "Sign In"}</h2>
                    {isSignUp ? (
                        <form className="signup-form">
                            <input type="text" placeholder="Username" className="input-field" />
                            <input type="email" placeholder="Email" className="input-field" />
                            <input type="password" placeholder="Password" className="input-field" />
                            <button type="button" className="form-button">Sign Up</button>
                            <p className="toggle-text">
                                Already have an account? <span onClick={toggleForm} className="toggle-link">Sign In</span>
                            </p>
                        </form>
                    ) : (
                        <form className="signin-form">
                            <input type="email" placeholder="Email" className="input-field" />
                            <input type="password" placeholder="Password" className="input-field" />
                            <button type="button" className="form-button">Sign In</button>
                            <p className="toggle-text">
                                Don't have an account? <span onClick={toggleForm} className="toggle-link">Sign Up</span>
                            </p>
                        </form>
                    )}
                    <div className="social-signup">
                        <p>Or sign in using:</p>
                        <div className="social-icons">
                            <button className="social-btn google">
                                <FaGoogle /> Google
                            </button>
                            <button className="social-btn email">
                                <MdEmail /> School Email
                            </button>
                            <button className="social-btn github">
                                <FaGithub /> GitHub
                            </button>
                            <button className="social-btn apple">
                                <FaApple /> Apple ID
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Account;
