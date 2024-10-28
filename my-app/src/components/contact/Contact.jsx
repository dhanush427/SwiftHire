import React from "react";
import "./contact.css";

const Contact = () => {
    return (
        <section className="contact container section" id="contact">
            <h1 className="aboutUs">Get in Touch</h1>

            <span>{<br/>}</span>
            <div className="contact__data grid">
                <div className="contact__info">
                
                <p className="contact__details">
                    Please contact us if you have any questions/concerns by filling out the form below:
                </p>
                <span>{<br/>}</span>
                </div>
                <form action="" className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input type="text" className="contact__form-input" placeholder="Insert your name" />
                        </div>

                        <div className="contact__form-div">
                            <input type="email" className="contact__form-input" placeholder="Insert your email" />
                        </div>    
                    </div>

                    <div className="contact__form-div">
                            <input type="subject" className="contact__form-input" placeholder="Insert your subject" />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <textarea name="" id="" cols="30" rows="10" className="contact__form-input" placeholder="Write your message here" />
                        </div>

                        <button className="btn">Send message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact