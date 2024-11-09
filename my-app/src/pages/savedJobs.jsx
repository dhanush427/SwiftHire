const mongoose = require("mongoose");
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

app.use(express.json());

const savedJobSchema = new mongoose.Schema({
    jobId: { type: String, required: true },
    userId: { type: String, required: true },
    jobTitle: { type: String, required: true },
    company: { type: String, required: true },
    reminderDays: { type: Number, default: null },
    applied: { type: Boolean, default: false },
    savedDate: { type: Date, default: Date.now },
});

const SavedJob = mongoose.model("SavedJob", savedJobSchema);

// NodeMailer setup for sending reminders
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "your-email@gmail.com",
        pass: "your-password"
    }
});

// Function to send reminder email
const sendReminderEmail = (email, job) => {
    const mailOptions = {
        from: "your-email@gmail.com",
        to: email,
        subject: `Reminder: Apply to ${job.jobTitle} at ${job.company}`,
        text: `Don't forget to apply to ${job.jobTitle} at ${job.company}.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Error sending email:", error);
        } else {
            console.log("Reminder email sent:", info.response);
        }
    });
};

// API Route to Save a Job with Reminder
app.post("/api/save-job", async (req, res) => {
    try {
        const { jobId, userId, jobTitle, company, reminderDays, userEmail } = req.body;

        const savedJob = new SavedJob({
            jobId,
            userId,
            jobTitle,
            company,
            reminderDays
        });

        await savedJob.save();

        // Schedule reminder if reminderDays is set
        if (reminderDays) {
            setTimeout(async () => {
                const job = await SavedJob.findOne({ jobId, userId });
                if (job && !job.applied) {
                    sendReminderEmail(userEmail, job);
                }
            }, reminderDays * 24 * 60 * 60 * 1000);
        }

        res.status(201).send({ message: "Job saved with reminder!" });
    } catch (error) {
        res.status(500).send({ message: "Error saving job", error });
    }
});

// API Route to Mark a Job as Applied
app.put("/api/apply-job/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const job = await SavedJob.findById(id);
        if (!job) {
            return res.status(404).send({ message: "Job not found" });
        }

        job.applied = true;
        await job.save();

        res.send({ message: "Job marked as applied!" });
    } catch (error) {
        res.status(500).send({ message: "Error marking job as applied", error });
    }
});

// MongoDB Connection (
mongoose.connect("mongodb://localhost:27017/jobApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
}).catch((error) => {
    console.log("MongoDB connection error:", error);
});