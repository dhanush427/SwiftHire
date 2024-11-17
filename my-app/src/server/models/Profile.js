const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  personalInfo: {
    fullName: String,
    phone: String,
    location: String
  },
  experience: [{
    title: String,
    company: String,
    location: String,
    from: Date,
    to: Date,
    current: Boolean,
    description: String
  }],
  education: [{
    school: String,
    degree: String,
    fieldOfStudy: String,
    from: Date,
    to: Date,
    graduated: Boolean
  }],
  skills: [String],
  documents: {
    resume: {
      url: String,
      filename: String
    },
    coverLetter: {
      url: String,
      filename: String
    }
  }
});

module.exports = mongoose.model('Profile', ProfileSchema);