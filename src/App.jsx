import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import StudyAbroad from './pages/StudyAbroad';
import TestPreparation from './pages/TestPreparation';
import Events from './pages/Events';

import Blog from './pages/Blog';
import Contact from './pages/Contact';
import StudyAbroadCountry from './pages/StudyAbroadCountry';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Topbar />
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/study-abroad" element={<StudyAbroad />} />
            <Route path="/study-abroad/:country" element={<StudyAbroadCountry />} />
            <Route path="/test-preparation" element={<TestPreparation />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service/:serviceName" element={<ServiceDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
