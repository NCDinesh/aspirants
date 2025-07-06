import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

const countries = [
  // { name: 'Australia', flag: '🇦🇺', path: '/study-abroad/australia', src: 'https://flagcdn.com/au.svg' },
  // { name: 'USA', flag: '🇺🇸', path: '/study-abroad/usa', src: 'https://flagcdn.com/us.svg' },
  // { name: 'New Zealand', flag: '🇳🇿', path: '/study-abroad/new-zealand', src: 'https://flagcdn.com/nz.svg' },
  // { name: 'Canada', flag: '🇨🇦', path: '/study-abroad/canada', src: 'https://flagcdn.com/ca.svg' },
  // { name: 'UK', flag: '🇬🇧', path: '/study-abroad/uk', src: 'https://flagcdn.com/gb.svg' },
  // { name: 'Denmark', flag: '🇩🇰', path: '/study-abroad/denmark', src: 'https://flagcdn.com/dk.svg' },
  // { name: 'South Korea', flag: '🇰🇷', path: '/study-abroad/south-korea', src: 'https://flagcdn.com/kr.svg' },
];

const studyabroaddropdown = [
  { name: "Top Destinations", path: '/#Topdestination' },
  { name: "Test Preparation", path: '/test-preparation' },
  { name: "Services", path: '/services' },

]

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Study Abroad', path: '/study-abroad', dropdown: true },
  // { name: 'Test Preparation', path: '/test-preparation' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const dropdownTimeout = useRef();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
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

  useEffect(() => {
    if (open && isMobile) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [open, isMobile]);

  return (
    <nav className={`backdrop-blur bg-white/80 ${scrolled ? 'bg-white/60 shadow-lg' : 'shadow'} sticky top-0 z-50 transition-all duration-300`}>
      <div className="max-w-8xl mx-auto md:px-8 px-2 flex items-center justify-between h-18">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary">
          <img src="/images/transparentlogo.png" alt="Logo" className="size-24" />
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-secondary" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          {open ? (
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <div className={`md:flex lg:gap-4 items-center ${open ? 'block' : 'hidden'} absolute md:static left-0 top-16 w-full md:w-auto bg-white/95 md:bg-transparent shadow md:shadow-none p-4 md:p-0 md:gap-1 max-md:mt-4 z-50`}>

          {navLinks.map(link =>
            link.dropdown ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => !isMobile && handleMouseEnter()}
                onMouseLeave={() => !isMobile && handleMouseLeave()}
              >
                <button
                  className="py-2 px-4 text-secondary hover:text-primary font-medium flex items-center gap-1 border-b-2 border-white hover:border-primary w-full"
                  type="button"
                  onClick={() => isMobile && setDropdown(!dropdown)}
                >
                  {link.name}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {dropdown && (
                  <div
                    className={`bg-white rounded shadow-lg border z-50 transition-all duration-200 ${isMobile ? 'static mt-2 w-[350px] overflow-x-hidden' : 'absolute left-0 mt-2 w-[250px]'
                      }`}
                  >
                    <div className="flex flex-col">
                      {studyabroaddropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => {
                            setOpen(false);
                            setDropdown(false);
                          }}
                          className="group flex flex-col items-center gap-1 p-2 rounded cursor-pointer overflow-hidden transition"
                        >
                          <span className="text-secondary font-semibold group-hover:text-primary transition-colors duration-300">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            ) : (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-2 px-4 font-medium border-b-2 transition
                  ${isActive ? 'text-primary border-primary' : 'text-secondary border-white'}
                  hover:text-primary md:hover:border-primary hover:border-white w-max`
                }
              >
                {link.name}
              </NavLink>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
