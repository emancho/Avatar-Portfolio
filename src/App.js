//== React Libs
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//== Components
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import PlayRoom from './components/PlayRoom';
import ResumePopup from './components/ResumePopup';
//== CSS page
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/*== The Main Page ==*/}
          <Route path="/" element={
            <div>
              <About />
              <Work />
              <Contact />
            </div>
          } />
          {/*== The Play Room ==*/}
          <Route path="/playroom" element={<PlayRoom />} />
        </Routes>
        <ResumePopup />
      </div>
    </Router>
  );
}

export default App;
