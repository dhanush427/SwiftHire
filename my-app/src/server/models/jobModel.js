const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  requirements: [{
    type: String
  }],
  salary: {
    min: Number,
    max: Number,
    currency: String
  },
  jobType: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Contract', 'Internship'],
    required: true
  },
  experienceLevel: {
    type: String,
    enum: ['Entry', 'Mid-Level', 'Senior', 'Executive'],
    required: true
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  applications: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    status: {
      type: String,
      enum: ['Pending', 'Reviewed', 'Interviewed', 'Offered', 'Rejected'],
      default: 'Pending'
    },
    appliedAt: {
      type: Date,
      default: Date.now
    }
  }],
  postedAt: {
    type: Date,
    default: Date.now
  },
  deadline: Date,
  isActive: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Job', JobSchema);