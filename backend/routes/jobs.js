const express = require('express')

const router = express.Router()

// GET all jobs
router.get('/', (req, res) => {
  res.json({mssg: 'GET all job'})
})

// GET a single job
router.get('/:id', (req, res) => {
  res.json({mssg: 'GET a single job'})
})

// POST a new job
router.post('/', (req, res) => {
  res.json({mssg: 'POST a new job'})
})

// DELETE a job
router.delete('/:id', (req, res) => {
  res.json({mssg: 'DELETE a job'})
})

// UPDATE a job
router.patch('/:id', (req, res) => {
  res.json({mssg: 'UPDATE a job'})
})

module.exports = router