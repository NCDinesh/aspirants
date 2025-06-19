import React from 'react';
import { FaBullseye, FaEye, FaUsers } from 'react-icons/fa';

const team = [
  { name: 'Suman Shrestha', role: 'Founder & CEO', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Anita Gurung', role: 'Senior Counselor', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Ramesh Karki', role: 'Test Prep Head', img: 'https://randomuser.me/api/portraits/men/65.jpg' },
];

const About = () => (
  <div className="max-w-5xl mx-auto py-12 px-4">
    {/* Hero Image */}
    <div className="w-full h-56 md:h-72 rounded-xl overflow-hidden mb-8">
      <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" alt="About Aspirants" className="w-full h-full object-cover" />
    </div>
    {/* Mission & Vision */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <div className="flex flex-col items-center text-center">
        <FaBullseye className="text-4xl text-primary mb-2" />
        <h3 className="text-xl font-bold text-primary mb-2">Our Mission</h3>
        <p>Empowering students with the knowledge, skills, and confidence to pursue global education opportunities and achieve their dreams.</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <FaEye className="text-4xl text-secondary mb-2" />
        <h3 className="text-xl font-bold text-secondary mb-2">Our Vision</h3>
        <p>To be Nepal's most trusted and innovative international education consultancy, guiding students to success worldwide.</p>
      </div>
    </div>
    {/* Team Section */}
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-center text-primary mb-6 flex items-center justify-center gap-2"><FaUsers className="inline-block" /> Meet Our Team</h3>
      <div className="flex flex-wrap justify-center gap-8">
        {team.map(member => (
          <div key={member.name} className="flex flex-col items-center bg-white rounded-xl shadow p-4 w-48">
            <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-2 border-4 border-primary" />
            <div className="font-bold text-secondary text-lg">{member.name}</div>
            <div className="text-sm text-gray-500">{member.role}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default About; 