import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import NewsAPI from './pages/NewsAPI';
import PersonalizedNewsAPICateogy from './pages/PersonalizedNewsAPICategory';
import PersonalizedNewsAPIAuthor from './pages/PersonalizedNewsAPIAuthor';
import PersonalizedNewsAPISource from './pages/PersonalizedNewsAPISource';
import NYAPI from './pages/NYAPI';
import Home from './pages/Home';

function App() {
  return (
    <Router>
        <Navbar />
        <div className="container mt-4">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/NewsAPI" element={<NewsAPI />} />
                <Route path="/NYAPI" element={<NYAPI />} />
                <Route path="/PersonalizedNewsAPIAuthor" element={<PersonalizedNewsAPIAuthor />} />
                <Route path="/PersonalizedNewsAPICategory" element={<PersonalizedNewsAPICateogy />} />
                <Route path="/PersonalizedNewsAPISource" element={<PersonalizedNewsAPISource />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
