import React, { useState } from "react";
import "./account.css";

const Account = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <section className="account container section" id="account">
            <h1 className="accountTitle">Account Login/Registration</h1>
            <span>{<br/>}</span>
            <p className="account-description">
                Let's get started! Sign up today, or log in if you're a returning user:
            </p>
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
                </div>
            </div>
        </section>
    );
};

export default Account;