import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Account from './components/account/Account';

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
    </>
  )
}

export default App;
