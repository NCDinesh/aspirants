import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const countries = [
  { name: 'Australia', flag: '🇦🇺', path: '/study-abroad/australia' ,src:"https://flagcdn.com/au.svg" },
  { name: 'USA', flag: '🇺🇸', path: '/study-abroad/usa', src:"https://flagcdn.com/us.svg"},
  { name: 'New Zealand', flag: '🇳🇿', path: '/study-abroad/new-zealand',src:"https://flagcdn.com/nz.svg" },
  { name: 'Canada', flag: '🇨🇦', path: '/study-abroad/canada',src:"https://flagcdn.com/ca.svg" },
  { name: 'UK', flag: '🇬🇧', path: '/study-abroad/uk' },
  { name: 'Denmark', flag: '🇩🇰', path: '/study-abroad/denmark' },
  { name: 'Ireland', flag: '🇮🇪', path: '/study-abroad/ireland' },
  { name: 'Japan', flag: '🇯🇵', path: '/study-abroad/japan' },
  { name: 'South Korea', flag: '🇰🇷', path: '/study-abroad/south-korea' },
  { name: 'Germany', flag: '🇩🇪', path: '/study-abroad/germany' },
  { name: 'France', flag: '🇫🇷', path: '/study-abroad/france' },
  { name: 'Switzerland', flag: '🇨🇭', path: '/study-abroad/switzerland' },
];

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Study Abroad', path: '/study-abroad', dropdown: true },
  { name: 'Test Preparation', path: '/test-preparation' },
  { name: 'Events', path: '/events' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const dropdownTimeout = useRef();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setDropdown(false);
    }, 150);
  };

  return (
    <nav className={`backdrop-blur bg-white/80 ${scrolled ? 'bg-white/60 shadow-lg' : 'shadow'} sticky top-0 z-50 transition-all duration-300`}>
      <div className="max-w-8xl mx-auto px-8 flex items-center justify-between h-18">
        
        <Link to="/" className="text-2xl font-bold text-primary">
        <img src="./images/transparentlogo.png" alt=""  className='size-24'/>
        </Link>
        <button className="md:hidden text-secondary" onClick={() => setOpen(!open)}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className={`md:flex gap-4 items-center ${open ? 'block' : 'hidden'} absolute md:static left-0 top-16 w-full md:w-auto bg-white/95 md:bg-transparent shadow md:shadow-none p-4 md:p-0`}>
          {navLinks.map(link =>
            link.dropdown ? (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="block py-2 px-4 text-secondary hover:text-primary font-medium flex items-center gap-1"
                  type="button"
                >
                  {link.name}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dropdown && (
                  <div className="absolute left-0 mt-2 w-[450px] bg-white rounded shadow-lg border z-50 transition-all duration-200">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-6">
                      {countries.map(country => (
                        <Link
                          key={country.name}
                          to={country.path}
                          className="flex flex-col items-center gap-1 p-2 rounded hover:bg-primary/10 transition cursor-pointer"
                          onClick={() => { setOpen(false); setDropdown(false); }}
                        >
                          <img src={country.src} alt="" />
                          <span className="text-xs sm:text-sm text-secondary font-semibold text-center">{country.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className="block py-2 px-4 text-secondary hover:text-primary font-medium"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
