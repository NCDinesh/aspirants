import React from 'react';
import { FaBook, FaChalkboardTeacher } from 'react-icons/fa';

const tests = [
  {
    name: 'IELTS',
    description: 'Comprehensive IELTS preparation classes with expert instructors and resources to help you achieve your desired band score.',
    img: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80',
    icon: <FaBook className="text-3xl text-primary" />, link: '/test-preparation/ielts'
  },
  {
    name: 'PTE',
    description: 'Personalized PTE coaching and practice materials to boost your English proficiency for study abroad.',
    img: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
    icon: <FaChalkboardTeacher className="text-3xl text-secondary" />, link: '/test-preparation/pte'
  },
];

const TestPreparation = () => (
  <div className="max-w-5xl mx-auto py-12 px-4">
    {/* Hero Image */}
    <div className="w-full h-56 md:h-72 rounded-xl overflow-hidden mb-8">
      <img src="https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=800&q=80" alt="Test Preparation" className="w-full h-full object-cover" />
    </div>
    <h2 className="text-3xl font-bold text-primary mb-8 text-center">Test Preparation</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {tests.map((test) => (
        <div key={test.name} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
          {test.icon}
          <img src={test.img} alt={test.name} className="w-32 h-32 object-cover rounded-full my-4 border-4 border-secondary" />
          <h3 className="text-2xl font-bold text-secondary mb-2">{test.name}</h3>
          <p className="mb-4">{test.description}</p>
          <a href={test.link} className="bg-primary text-white px-6 py-2 rounded font-semibold hover:bg-secondary transition">Learn More</a>
        </div>
      ))}
    </div>
  </div>
);

export default TestPreparation; 