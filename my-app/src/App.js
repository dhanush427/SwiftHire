import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Account from './components/account/Account';
import Team from './components/team/Team';
import Search from './components/search/Search';
import JobPost from './pages/postJob';
import UserProfile from './pages/userProfile';

const App = () => {
  return (
    <>
    <Sidebar/>
    <main className='main'>
      <Home />
      <Search />
      <About />
      <Team />
      <Services />
      <Contact />
      <Account />
      
      {/* <UserProfile /> */}
    </main>
    {/* <Router>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/postJob" element={<JobPost />}/>
        <Route path="/searchJobs" element={<App />}/>
        <Route path="/profile" element={<ProfileDashboard />} />
      </Routes>
    </Router> */}
    </>
  )
}

export default App;
