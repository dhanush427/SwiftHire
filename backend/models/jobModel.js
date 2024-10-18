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
  }
}, { timestamps: true })

module.exports = mongoose.model('Job', jobSchema)