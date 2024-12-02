const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
        user: 'your_email@gmail.com',
        pass: 'your_email_password',
    },
});

app.post('/send', (req, res) => {
    const { name, email, subject, message } = req.body;

    const mailOptions = {
        from: email, 
        to: 'your_email@gmail.com',
        subject: `Contact Form: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ message: 'Failed to send message' });
        }
        res.status(200).json({ message: 'Message sent successfully' });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
