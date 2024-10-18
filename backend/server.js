require('dotenv').config()

const express = require('express')
const jobRoutes = require('./routes/jobs')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/jobs', jobRoutes)

// listen for requests
app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT)
})