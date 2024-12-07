import React, { useState } from "react";
import "./interview.css";

const mockQuestions = {
    "Software Engineer": [
        "Can you explain a challenging project you worked on and how you overcame obstacles?",
        "How would you approach debugging a critical issue in a production system?",
        "Explain the concept of polymorphism in object-oriented programming."
    ],
    "Product Manager": [
        "How do you prioritize features in a product roadmap?",
        "Describe a time you managed conflicts between stakeholders.",
        "How do you measure the success of a product launch?"
    ],
    "Data Analyst": [
        "What steps would you take to clean a messy dataset?",
        "Describe a project where your analysis significantly impacted business decisions.",
        "How do you communicate technical insights to non-technical stakeholders?"
    ]
};

const InterviewPrep = () => {
    const [role, setRole] = useState("");
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});

    const handleRoleChange = (e) => {
        const selectedRole = e.target.value;
        setRole(selectedRole);
        setQuestions(mockQuestions[selectedRole] || []);
        setAnswers({});
    };

    const handleAnswerChange = (index, answer) => {
        setAnswers({ ...answers, [index]: answer });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your answers have been submitted for feedback!");
    };

    return (
        <section className="interview-prep container">
            <h1 className="section__title">Interview Preparation</h1>
            <form className="role-form">
                <label htmlFor="role">Select the role you'd like to practice:</label>
                <select id="role" value={role} onChange={handleRoleChange}>
                    <option value="">-- Select Role --</option>
                    {Object.keys(mockQuestions).map((role) => (
                        <option key={role} value={role}>
                            {role}
                        </option>
                    ))}
                </select>
            </form>

            {questions.length > 0 && (
                <div className="questions-section">
                    <h2 className="interview__title">Mock Interview Questions</h2>
                    {questions.map((question, index) => (
                        <div key={index} className="question-card">
                            <p className="question-question">{question}</p>
                            <textarea
                                placeholder="Type your answer here..."
                                value={answers[index] || ""}
                                onChange={(e) => handleAnswerChange(index, e.target.value)}
                            />
                        </div>
                    ))}
                    <button className="submit-btn" onClick={handleSubmit}>
                        Submit Answers
                    </button>
                </div>
            )}
        </section>
    );
};

export default InterviewPrep;