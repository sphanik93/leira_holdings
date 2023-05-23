import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import { Homepage } from './Home/Homepage';
import { Homepage1 } from './Home/HomeBoot';
import { BankPage } from './Home/Components/Bank_page.js';
import {Contact_Us} from './Home/Components/Contact_us.js';
import {About_us} from './Home/Components/About.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage1 />} />
          <Route exact path="/homapage" element={<Homepage />} />
          <Route exact path="/LeiraBank" element={<BankPage />} />
          <Route exact path="/ContactUs" element={<Contact_Us />} />
          <Route exact path="/AboutUs" element={<About_us />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
