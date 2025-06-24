import React, { useEffect } from 'react';
import { FaBullseye, FaEye, FaUsers } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';


const team = [
  { name: 'Madan Raj Joshi', role: 'Founder/CEO', img: '/images/Team/CEO.png', contact: '+977 9840502886' },
  { name: 'Ashok Upadhyaya', role: 'Business Development Manager/ Counselor ', img: '/images/Team/CEO.png', contact: '+977 9865843990' },
  { name: 'Dashrath Singh ', role: 'Managing Director/ Counselor', img: '/images/Team/CEO.png', contact: '+977 9865365009' },
  { name: 'Sher Singh Dhami', role: 'Admission Officer ', img: '/images/Team/CEO.png', contact: '+977 9702657574' },
  { name: 'Aaradhya Bhatta', role: 'Administrative Assistant ', img: '/images/Team/CEO.png', contact: '+977 9818235355' },
];

const testimonials = [
  {
    name: 'Sita Sharma',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: 'Aspirants helped me achieve my dream of studying in Australia. The counselors were supportive and the process was smooth!',
    rating: 5,
  },
  {
    name: 'Bikash Thapa',
    img: 'https://randomuser.me/api/portraits/men/43.jpg',
    quote: 'The IELTS classes were top-notch and I got my desired band score. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Anju K.C.',
    img: 'https://randomuser.me/api/portraits/women/22.jpg',
    quote: 'Great experience with Aspirants! The team guided me at every step for my Canada application.',
    rating: 4,
  },
];


const About = () => {
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
    <div className="max-w-7xl mx-auto py-8 px-4">


      <h2 class="text-3xl font-bold text-secondary mb-8 text-center">About Us</h2>

      <div className='flex md:gap-16 gap-10 relative bg-gradient-to-br from-primary/10 to-secondary/10 p-8 max-w-7xl flex-col md:flex-row'>
        {/* Hero Image */}
        <div className="w-full h-56 md:h-80 rounded-xl overflow-hidden mb-8 flex justify-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3VyJTIwdGVhbXxlbnwwfHwwfHx8MA%3D%3D"
            alt="About Aspirants"
            className=" w-full h-full object-cover"
          />
        </div>

        {/* Mission & Vision */}
        <div className="flex flex-col gap-4 mb-10">
          <div className="flex flex-col items-center ">
            <FaBullseye className="text-4xl text-primary mb-2" />
            <h3 className="text-xl font-bold text-primary mb-2">Our Mission</h3>
            <p>
              Empowering students with the knowledge, skills, and confidence to pursue global education opportunities and achieve their dreams.
            </p>
          </div>
          <div className="flex flex-col items-center ">
            <FaEye className="text-4xl text-secondary mb-2" />
            <h3 className="text-xl font-bold text-secondary mb-2">Our Vision</h3>
            <p>
              To be Nepal's most trusted and innovative international education consultancy, guiding students to success worldwide.
            </p>
          </div>
        </div>

      </div>

      {/* Team Section */}
      <div className="mb-8">
        <h2 class="text-3xl font-bold text-secondary my-8 text-center">Meet our Team</h2>
        <div className="flex flex-wrap justify-center gap-10 ">
          {team.map((member) => (
            <div key={member.name} className="group relative flex flex-col items-center bg-gradient-to-br from-primary/10 to-secondary/10 p-4 w-[350px] h-[300px] rounded-xl shadow-lg hover:border-4 justify-center overflow-hidden">

              {/* Sliding gradient background */}
              <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/90 before:to-secondary/90 before:translate-y-full group-hover:before:translate-y-0 before:transition-transform before:duration-500 before:z-0"></div>

              {/* Content on top */}
              <div className="relative z-10 flex flex-col items-center justify-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-contain mb-2 border-4 border-secondary group-hover:border-white transition-colors duration-300"
                />
                <div className="font-bold text-secondary text-lg group-hover:text-white transition-colors duration-300">{member.name}</div>
                <div className="text-sm text-gray-500 font-bold group-hover:text-white transition-colors duration-300">{member.role}</div>
                <div className="text-sm text-gray-500 group-hover:text-white transition-colors duration-300">{member.contact}</div>
              </div>

            </div>

          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-5xl mx-auto py-12 px-4" id="testimonial">
        <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Student Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:border-4"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover mb-2 border-4 border-secondary"
              />
              <div className="font-bold text-secondary text-lg mb-1">{t.name}</div>
              <div className="flex gap-1 mb-2">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 italic">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
