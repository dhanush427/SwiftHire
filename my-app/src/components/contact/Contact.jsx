import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const response = await axios.post("http://localhost:5000/send", formData);
            // alert(response.data.message);
        } catch (error) {
            console.error(error);
            alert("Failed to send message.");
        }
    };

    return (
        <section className="contact container section" id="contact">
            <h1 className="aboutUs">Get in Touch</h1>
            <div className="contact__data grid">
                <div className="contact__info">
                    <p className="contact__details">
                        Please contact us if you have any questions or concerns by filling out the form below. We'd love to hear your feedback!
                    </p>
                    <span>{<br />}</span>
                </div>
                <form onSubmit={handleSubmit} className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input
                                type="text"
                                name="name"
                                className="contact__form-input"
                                placeholder="Insert your name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="contact__form-div">
                            <input
                                type="email"
                                name="email"
                                className="contact__form-input"
                                placeholder="Insert your email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <input
                            type="text"
                            name="subject"
                            className="contact__form-input"
                            placeholder="Insert your subject"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <textarea
                            name="message"
                            cols="30"
                            rows="10"
                            className="contact__form-input"
                            placeholder="Write your message here"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>

                    <button className="btn" type="submit">
                        Send message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
