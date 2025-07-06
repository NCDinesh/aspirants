import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { FaBookOpen, FaUserGraduate, FaChalkboardTeacher, FaPlaneDeparture, FaQuoteLeft } from 'react-icons/fa';
import UniversityLogoSlider from '../components/UniversityLogoSlider';
import StudyAbroad from './StudyAbroad';
import Accordion from '../components/FAQ';




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
    style: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
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
    style: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
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
    

    const faqs = [
  {
    question: 'What services does your consultancy offer?',
    answer: 'We offer comprehensive services including education counseling, test preparation, scholarship guidance, university admission assistance, student accommodation, and pre-departure orientation.',
  },
  {
    question: 'Do you help with scholarship applications?',
    answer: 'Yes, our scholarship guidance service assists students in identifying scholarship opportunities and completing applications effectively.',
  },
  {
    question: 'Can you help me find accommodation abroad?',
    answer: 'Absolutely! We help students find safe, affordable, and comfortable accommodation near their university or college abroad.',
  },
  {
    question: 'What test preparation programs do you provide?',
    answer: 'We offer expert-led preparation for international tests such as IELTS, PTE, and other language proficiency and admission exams.',
  },
  {
    question: 'How does the university admission process work?',
    answer: 'Our consultants assist with every step, from selecting the right university to preparing applications, documentation, and guiding you through the admission process.',
  },
];

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
              className={`absolute ${service.style} z-20 shadow-lg rounded-xl px-4 py-4 flex items-center gap-2 ${service.color} ${service.text} bg-opacity-90 backdrop-blur  border-gray-200 border-2 hover:scale-105 transition-transform hidden lg:flex`}
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


    <StudyAbroad> </StudyAbroad>

      {/* Study Abroad Grid */}
 
 {/* <section className="py-16 bg-white" id='studyabroad'>
  <h2 className="text-3xl font-bold text-center text-secondary mb-8">
    Explore The Most Preferred Country For Higher Education
  </h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
    {countries.map((country) => (
      <div
  key={country.name}
  className="group relative flex flex-col items-center justify-center bg-gray-50 rounded-lg shadow hover:shadow-lg p-4 transition h-28 sm:h-36 overflow-hidden"
>

  <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/90 before:to-secondary/90 before:translate-y-full group-hover:before:translate-y-0 before:transition-transform before:duration-500 before:z-0"></div>


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
</section> */}

  <section className="py-10 sm:py-16 bg-gray-100 px-4" id='ourservices'>

<UniversityLogoSlider> </UniversityLogoSlider>
</section>

      {/* Services Grid
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
      </section> */}

      <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Frequently Asked Questions</h2>

    <Accordion items={faqs} ></Accordion>

    </div>
  );
};

export default Home; 