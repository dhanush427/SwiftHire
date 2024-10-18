const mongoose = require('mongoose')

const Schema = mongoose.Schema

const jobSchema = new Schema({
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
  annualSalary: {
    type: Number,
    required: true
  },
  // not required
  monthSalary: {
    type: Number,
    required: false
  },
  // in-person, online, or hybrid
  jobtype: {
    type: String,
    required: true
  },
  // job description
  jobDesc: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Job', jobSchema)