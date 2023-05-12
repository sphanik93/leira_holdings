import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import { Homepage } from './Home/Homepage';
import { Homepage1 } from './Home/HomeBoot';

function App() {
  return (
    <div className="App">
       <Router> 
        <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/homeboot" element={<Homepage1 />} />
              </Routes>
              </Router>
      
    </div>
  );
}

export default App;
