const Job = require('../models/Job');

exports.createJob = async (req, res) => {
  try {
    const newJob = new Job({
      ...req.body,
      postedBy: req.user.id
    });

    const job = await newJob.save();
    res.json(job);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ isActive: true })
      .sort({ postedAt: -1 })
      .populate('postedBy', 'email');
    res.json(jobs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id)
      .populate('postedBy', 'email')
      .populate('applications.user', 'email');
    
    if (!job) {
      return res.status(404).json({ msg: 'Job not found' });
    }
    
    res.json(job);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Job not found' });
    }
    res.status(500).send('Server Error');
  }
};

exports.applyForJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    
    if (!job) {
      return res.status(404).json({ msg: 'Job not found' });
    }

    if (job.applications.some(app => app.user.toString() === req.user.id)) {
      return res.status(400).json({ msg: 'Already applied to this job' });
    }

    job.applications.unshift({
      user: req.user.id,
      status: 'Pending'
    });

    await job.save();
    res.json(job.applications);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};