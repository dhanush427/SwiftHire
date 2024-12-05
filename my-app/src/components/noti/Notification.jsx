import React, { useState } from "react";
import "./notification.css";

const NotificationsBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const notifications = [
        "New job posted: Software Engineer at Google",
        "Your application for Data Analyst has been viewed",
        "Reminder: Complete your profile to increase visibility",
    ];

    const toggleNotifications = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`notifications-bar ${isOpen ? "open" : ""}`}>
            <button className="toggle-btn" onClick={toggleNotifications}>
                {isOpen ? "▼ Close Notifications" : "▲ Open Notifications"}
            </button>
            {isOpen && (
                <ul className="notifications-list">
                    {notifications.map((notification, index) => (
                        <li key={index} className="notification-item">
                            {notification}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NotificationsBar;
