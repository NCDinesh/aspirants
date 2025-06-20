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
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Universities', path: '/universities' },
  { name: 'Resources', path: '/resources' },
  { name: 'Events', path: '/events' },
  { name: 'Contact', path: '/contact' },
  { name: 'Learning Center', path: '/learning-center' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'News & Offer', path: '/news' },
  { name: 'Testimonials & Reviews', path: '/testimonials' },
  { name: 'Success Stories', path: '/success-stories' },
  { name: 'Interviews', path: '/interviews' },
  { name: 'OHSC', path: '/ohsc' },
  { name: 'FAQs', path: '/faqs' },
];

const usefulDocs = [
  'Experience Letter',
  'Affidavit / Sponsorship Certificate',
  'Recommendation Letter',
  'Sample Documents',
];

const Footer = () => (
  <footer className="bg-gradient-to-br from-primary/90 to-secondary/90 text-white pt-12 pb-4 mt-16">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Left: Logo & Contact */}
      <div className="flex flex-col gap-4 items-center justify-center">
     
        <div className=' flex justify-center gap-4'>
        <img src="/images/logo.png" alt="Aspirants Logo" className="w-28 mb-2 " />

        <div className='flex flex-col gap-3'>
        <p className="text-sm flex items-center gap-2">
          <FaPhoneAlt /> +977 9811111111, 01-5971526
        </p>
        <p className="text-sm flex items-center gap-2">
          <FaEnvelope /> info@aspirants.edu.np
        </p>
        <p className="text-sm flex items-center gap-2">
          <FaMapMarkerAlt /> Aspirants Avenue, Putalisadak, Kathmandu, Nepal
        </p>
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
              <Link to={link.path} className=" text-white hover:text-secondary">{link.name}</Link>
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

    <div className="text-center text-xs text-white/70 mt-8">
      &copy; {new Date().getFullYear()} Aspirants Education Consultancy Pvt. Ltd. All rights reserved.
    </div>
  </footer>
);

export default Footer;
