import React from 'react';
import './App.css';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Navbar from './Navbar';
import Game from './Game';
import Design from './Design';
import Design2 from './Design2';
import Design3 from './Design3';
import Design5 from './Design5';
import Homepage from './Homepage';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/Navbar' exact element={<Navbar />}/>
          <Route path='/Homepage' exact element={<Homepage />}/>
          <Route path='/Game' exact element={<Game />}/>
          <Route path='/Design' exact element={<Design />}/>
          <Route path='/Design2' exact element={<Design2 />}/>
          <Route path='/Design3' exact element={<Design3 />}/>
          <Route path='/Design5' exact element={<Design5 />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
