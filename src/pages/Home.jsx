import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { FaBookOpen, FaUserGraduate, FaChalkboardTeacher, FaPlaneDeparture, FaQuoteLeft } from 'react-icons/fa';

const countries = [
  { name: 'Australia', flag: 'https://flagcdn.com/au.svg', path: '/study-abroad/australia' },
  { name: 'USA', flag: 'https://flagcdn.com/us.svg', path: '/study-abroad/usa' },
  { name: 'New Zealand', flag: 'https://flagcdn.com/nz.svg', path: '/study-abroad/new-zealand' },
  { name: 'Canada', flag: 'https://flagcdn.com/ca.svg', path: '/study-abroad/canada' },
  { name: 'UK', flag: 'https://flagcdn.com/gb.svg', path: '/study-abroad/uk' },
  { name: 'Denmark', flag: 'https://flagcdn.com/dk.svg', path: '/study-abroad/denmark' },
  { name: 'Japan', flag: 'https://flagcdn.com/jp.svg', path: '/study-abroad/japan' },
  { name: 'South Korea', flag: 'https://flagcdn.com/kr.svg', path: '/study-abroad/south-korea' },
  { name: 'Germany', flag: 'https://flagcdn.com/de.svg', path: '/study-abroad/germany' },

];

const services = [
  {
    name: 'Pre-departure Orientation',
    img: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
    slug: 'pre-departure-orientation',
  },
  {
    name: 'Test Preparation',
    img: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80',
    slug: 'test-preparation',
  },
  {
    name: 'Student Accommodation',
    img: 'https://plus.unsplash.com/premium_photo-1724061887314-347affe7df0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN0dWRlbnQlMjBhY2NvbW9kYXRpb258ZW58MHx8MHx8fDA%3D',
    slug: 'student-accommodation',
  },
  {
    name: 'Education Counseling',
    img: 'https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWR1Y2F0aW9uJTIwY291bnNlbGxpbmd8ZW58MHx8MHx8fDA%3D',
    slug: 'education-counseling',
  },
  {
    name: 'Scholarship Guidance',
    img: 'https://media.istockphoto.com/id/667305600/photo/young-man-filling-scholarship-application-form-on-internet.webp?a=1&b=1&s=612x612&w=0&k=20&c=XJE_cVpCLlkRaSSy1IUGzBzoAETVAIuG4rVf5L7NnrI=',
    slug: 'scholarship-guidance',
  },
  {
    name: 'University Admission',
    img: 'https://plus.unsplash.com/premium_photo-1682974407089-235ad9922288?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVuaXZlcnNpdGllc3xlbnwwfHwwfHx8MA%3D%3D',
    slug: 'university-admission',
  },
];


const heroServices = [
  {
    icon: <FaQuoteLeft className="text-2xl text-sky-500" />,
    label: 'Testimonial',
    color: 'bg-white',
    text: 'text-sky-700',
    highlight: 'text-sky-700',
    style: 'top-1/2 -left-6 -translate-y-1/2 -translate-x-1/4',
    to: '/about#testimonial',
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
    style: 'top-1/2 -right-6 -translate-y-1/2 translate-x-1/4',
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
  const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);
    
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
          <div className="absolute rounded-full bg-gradient-to-br from-primary/90 to-secondary/90 w-64 h-64 md:w-96 md:h-96 z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          {/* Student Image */}
          <img src="./images/hero.png" alt="Student" className="relative z-10 w-40 md:w-60 rounded-full shadow-lg object-cover  " />
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
 <section className="py-16 bg-white" id='studyabroad'>
  <h2 className="text-3xl font-bold text-center text-secondary mb-8">
    Explore The Most Preferred Country For Higher Education
  </h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
    {countries.map((country) => (
      <div
  key={country.name}
  className="group relative flex flex-col items-center justify-center bg-gray-50 rounded-lg shadow hover:shadow-lg p-4 transition h-28 sm:h-36 overflow-hidden"
>
  {/* Sliding Gradient Background */}
  <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/90 before:to-secondary/90 before:translate-y-full group-hover:before:translate-y-0 before:transition-transform before:duration-500 before:z-0"></div>

  {/* Content Layer */}
  <a href={country.path} className="relative z-10 flex flex-col items-center">
    <img
      src={country.flag}
      alt={`${country.name} flag`}
      className="w-20 h-14 sm:w-20 sm:h-16 object-contain rounded shadow mb-2  transition-colors duration-300"
    />
    <span className="font-semibold text-secondary text-lg text-center group-hover:text-white transition-colors duration-300">
      {country.name}
    </span>
  </a>
</div>

    ))}
  </div>
</section>


      {/* Services Grid */}
      <section className="py-10 sm:py-16 bg-gray-100 px-4" id='ourservices'>
        <h2 class="text-3xl font-bold text-secondary mb-8 text-center" >Our Services</h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto ">
          {services.map((service) => (
            <Link to={`/service/${service.slug}`} key={service.name}>

              <div key={service.name} className="relative rounded-xl overflow-hidden shadow-lg group min-w-0 max-sm:w-[80%] max-sm:mx-auto">
                <img src={service.img} alt={service.name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3 sm:p-4">
                  <span className="text-white text-base sm:text-lg font-semibold">{service.name}</span>
                </div>
              </div>
            </Link>

          ))}
        </div>
      </section>
    </div>
  );
};

export default Home; 