import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Cartoon from './components/Cartoon';
import Cardview from './components/Cardview';
import Tab from './components/Tab'
import Team from './components/Team'
import Smallcardcontainer from './components/Smallcardcontainer';
import End from './components/End'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App vw-100">
      <Navbar />
      <Header />
      <Cartoon />
      <Cardview />
      <Tab />
      <Team />
      <Smallcardcontainer />
       <End />
       <Footer />
    </div>
  );
}


export default App;
