import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import TestPreparation from './pages/TestPreparation';
import Events from './pages/Events';
import IELTS from './pages/IELTS';
import PTE from './pages/PTE';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import StudyAbroadCountry from './pages/StudyAbroadCountry';
import ServiceDetail from './pages/ServiceDetail';
import ScrollToTop from './components/ScrollToTop';
import BlogPost from './pages/BlogPost';
import { useEffect, useState} from 'react';

function App() {
const [showMessage, setShowMessage] = useState(false);

//  useEffect(() => {
//     const handleContextMenu = (e) => {
//       e.preventDefault();
//       setShowMessage(true);

//       // Hide message after 2 seconds
//       setTimeout(() => {
//         setShowMessage(false);
//       }, 2000);
//     };

//     document.addEventListener("contextmenu", handleContextMenu);
//     return () => {
//       document.removeEventListener("contextmenu", handleContextMenu);
//     };
//   }, []);
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Topbar />
        <Navbar />
{/* 
        {showMessage && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white text-black text-lg px-6 py-3 rounded-xl shadow-lg">
            🚫 Right-click is disabled
          </div>
        </div>
      )} */}
        <main className="flex-1">
          <ScrollToTop></ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/study-abroad/:country" element={<StudyAbroadCountry />} />
            <Route path="/test-preparation" element={<TestPreparation />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service/:serviceName" element={<ServiceDetail />} />
            <Route path="/test-preparation/ielts" element={<IELTS />} />
            <Route path="/test-preparation/pte" element={<PTE />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
