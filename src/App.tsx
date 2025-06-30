import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import NewsAPI from './pages/NewsAPI';

function App() {
  return (
    <Router>
        <Navbar />
        <div className="container mt-4">
            <Routes>
                <Route path="/NewsAPI" element={<NewsAPI />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
