import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Resume from './components/pages/Resume.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './components/pages/About.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<App/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
)
