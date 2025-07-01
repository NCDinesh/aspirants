import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube
} from 'react-icons/fa';
import { TbBrandX } from 'react-icons/tb'; // Modern X (Twitter) icon

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Test Preparation', path: '/test-preparation' },
  { name: 'IELTS', path: '/test-preparation/IELTS' },
  { name: 'PTE', path: '/test-preparation/PTE' },
  { name: 'Contact', path: '/contact' },
  { name: 'Blog', path: '/blog' },
  { name: 'Testimonials & Reviews', path: '/about#testimonial' },
  { name: 'Study Abroad', path: '/#studyabroad' },
];

const usefulDocs = [
  'Experience Letter',
  'Affidavit / Sponsorship Certificate',
  'Recommendation Letter',
  'Sample Documents',
];

const Footer = () => (
  <footer className="bg-gradient-to-br from-primary/90 to-secondary/90 text-white pt-12 pb-4">

    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-[2fr_1.5fr_1fr] gap-8">

      {/* Left: Logo & Contact */}
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <img src="/images/logo.png" alt="Aspirants Logo" className="w-28 mb-2" />
          <div className="flex flex-col gap-3 text-sm">
            <p className="flex items-center gap-2"><FaPhoneAlt /> +977 9840502886, +977 9865365009</p>
            <p className="flex items-center gap-2"><FaEnvelope /> info@aspirants.edu.np</p>
            <p className="flex items-center gap-2"><FaMapMarkerAlt /> Lakhechaur Marg-10 , Thapagaoun, New Baneshwor</p>
          </div>
        </div>
        <div className="flex gap-3 mt-2 text-2xl">
          <a href="#" className="hover:text-secondary text-white" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" className="hover:text-secondary  text-white" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" className="hover:text-secondary  text-white" aria-label="X"><TbBrandX /></a>
          <a href="#" className="hover:text-secondary  text-white" aria-label="TikTok"><FaTiktok /></a>
          <a href="#" className="hover:text-secondary  text-white" aria-label="YouTube"><FaYoutube /></a>
        </div>
      </div>

      {/* Center: Quick Links */}
      <div>
        <h4 className="font-bold text-lg mb-3">Quick Links</h4>
        <ul className="grid grid-cols-2 gap-y-2 gap-x-6 text-sm">
          {quickLinks.map(link => (
            <li key={link.name}>
              <Link to={link.path} className="hover:text-secondary text-white">{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Useful Documents */}
      <div>
        <h4 className="font-bold text-lg mb-3">Useful Documents</h4>
        <ul className="space-y-4 text-sm leading-4">
          {usefulDocs.map(doc => (
            <li key={doc}>{doc}</li>
          ))}
        </ul>
      </div>

    </div>

    {/* Bottom Text */}
    <div className="text-center text-xs text-white/70 mt-8">
      &copy; {new Date().getFullYear()} Aspirants Education Consultancy Pvt. Ltd. All rights reserved.
    </div>

  </footer>

);

export default Footer;
