import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBookOpen, FaUserGraduate, FaChalkboardTeacher, FaPlaneDeparture, FaQuoteLeft } from 'react-icons/fa';

const countries = [
  { name: 'Australia', flag: 'https://flagcdn.com/au.svg', path: '/study-abroad/australia' },
  { name: 'USA', flag: 'https://flagcdn.com/us.svg', path: '/study-abroad/usa' },
  { name: 'New Zealand', flag: 'https://flagcdn.com/nz.svg', path: '/study-abroad/new-zealand' },
  { name: 'Canada', flag: 'https://flagcdn.com/ca.svg', path: '/study-abroad/canada' },
  { name: 'UK', flag: 'https://flagcdn.com/gb.svg', path: '/study-abroad/uk' },
  { name: 'Denmark', flag: 'https://flagcdn.com/dk.svg', path: '/study-abroad/denmark' },
  { name: 'Ireland', flag: 'https://flagcdn.com/ie.svg', path: '/study-abroad/ireland' },
  { name: 'Japan', flag: 'https://flagcdn.com/jp.svg', path: '/study-abroad/japan' },
  { name: 'South Korea', flag: 'https://flagcdn.com/kr.svg', path: '/study-abroad/south-korea' },
  { name: 'Germany', flag: 'https://flagcdn.com/de.svg', path: '/study-abroad/germany' },
  { name: 'France', flag: 'https://flagcdn.com/fr.svg', path: '/study-abroad/france' },
  { name: 'Switzerland', flag: 'https://flagcdn.com/ch.svg', path: '/study-abroad/switzerland' },
];

const services = [
  { name: 'Pre-departure Orientation', img: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80' },
  { name: 'Test Preparation', img: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80' },
  { name: 'Student Accommodation', img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80' },
  { name: 'Education Counseling', img: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=400&q=80' },
  { name: 'Scholarship Guidance', img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80' },
  { name: 'University Admission', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
];

const heroServices = [
  {
    icon: <FaQuoteLeft className="text-2xl text-sky-500" />,
    label: 'Testimonial',
    color: 'bg-white',
    text: 'text-sky-700',
    highlight: 'text-sky-700',
    style: 'top-1/2 left-0 -translate-y-1/2 -translate-x-1/4',
    to: '/testimonials',
  },
  {
    icon: <FaChalkboardTeacher className="text-2xl text-orange-500" />,
    label: 'Student Counseling',
    color: 'bg-white',
    text: 'text-orange-700',
    highlight: 'text-orange-700',
    style: '-top-8 left-1/2 -translate-x-1/2 -translate-y-1/2',
    to: '/about',
  },
  {
    icon: <FaUserGraduate className="text-2xl text-gray-600" />,
    label: 'Test Preparation',
    color: 'bg-white',
    text: 'text-gray-700',
    highlight: 'text-gray-700',
    style: 'top-1/2 right-0 -translate-y-1/2 translate-x-1/4',
    to: '/test-preparation',
  },
  {
    icon: <FaPlaneDeparture className="text-2xl text-secondary" />,
    label: 'Abroad Studies',
    color: 'bg-white',
    text: 'text-secondary',
    highlight: 'text-secondary',
    style: '-bottom-8 left-1/2 -translate-x-1/2 translate-y-1/2',
    to: '/study-abroad',
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-12 md:py-20 flex flex-col md:flex-row items-center justify-center px-4 sm:px-24 gap-8 overflow-hidden">
        {/* Left: Headline & CTA */}
        <div className="flex-1 max-w-xl z-10 pr-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            <span className="text-primary">Aspirants</span> Global: <br />What's <span className="text-secondary">Next?</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 text-secondary">
            Aspirants looks ahead with an expanded vision to be students' lifelong launch pad for realizing their highest potential—whether through education abroad, skilled careers or migration.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg">
            Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
        {/* Right: Student Image & Floating Cards */}
        <div className="flex-1 flex items-center justify-center relative min-h-[340px] md:min-h-[420px]">
          {/* Circular BG */}
          <div className="absolute rounded-full bg-[#74ac94] w-64 h-64 md:w-96 md:h-96 z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          {/* Student Image */}
          <img src="./images/hero.png" alt="Student" className="relative z-10 w-40 md:w-60 rounded-full shadow-lg object-cover" />
          {/* Floating Service Cards at border */}
          {heroServices.map((service) => (
            <button
              key={service.label}
              className={`absolute ${service.style} z-20 shadow-lg rounded-xl px-4 py-4 flex items-center gap-2 ${service.color} ${service.text} bg-opacity-90 backdrop-blur border border-gray-100 hover:scale-105 transition-transform hidden lg:flex`}
              style={{ minWidth: '170px' }}
              onClick={() => navigate(service.to)}
              type="button"
            >
              {service.icon}
              <span className="font-semibold">
                {service.label.split(' ').map((word, i) =>
                  i === 1 ? <span key={i} className={service.highlight}> {word}</span> : ' ' + word
                )}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Study Abroad Grid */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-secondary mb-8">Explore The Most Preferred Country For Higher Education</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {countries.map((country) => (
            <div key={country.name} className="flex flex-col items-center bg-gray-50 rounded-lg shadow hover:shadow-lg p-4 transition">
              <img src={country.flag} alt={country.name + ' flag'} className="w-12 h-8 object-cover rounded shadow mb-2" />
              <span className="font-semibold text-secondary text-lg">{country.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 sm:py-16 bg-gray-100">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-secondary mb-6 sm:mb-8">Our Services</h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div key={service.name} className="relative rounded-xl overflow-hidden shadow-lg group min-w-0">
              <img src={service.img} alt={service.name} className="w-full h-40 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3 sm:p-4">
                <span className="text-white text-base sm:text-lg font-semibold">{service.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home; 