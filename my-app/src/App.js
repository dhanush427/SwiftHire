import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Account from './components/account/Account';
import JobPost from './pages/postJob';
import searchJobs from './pages/searchJobs';
import App from './pages/index_job';

const App = () => {
  return (
    <>
    <Sidebar/>
    <main className='main'>
      <Home />
      <About />
      <Services />
      <Contact />
      <Account />
    </main>
    <Router>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/postJob" element={<JobPost />}/>
        <Route path="/searchJobs" element={<App />}/>
        <Route path="/profile" element={<ProfileDashboard />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
