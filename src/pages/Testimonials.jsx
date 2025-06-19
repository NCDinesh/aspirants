import React from 'react';
import { FaStar } from 'react-icons/fa';

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

const Testimonials = () => (
  <div className="max-w-5xl mx-auto py-12 px-4">
    <h2 className="text-3xl font-bold text-primary mb-8 text-center">Student Testimonials</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map(t => (
        <div key={t.name} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
          <img src={t.img} alt={t.name} className="w-20 h-20 rounded-full object-cover mb-2 border-4 border-primary" />
          <div className="font-bold text-secondary text-lg mb-1">{t.name}</div>
          <div className="flex gap-1 mb-2">{Array.from({ length: t.rating }).map((_, i) => <FaStar key={i} className="text-yellow-400" />)}</div>
          <p className="text-gray-600 italic">“{t.quote}”</p>
        </div>
      ))}
    </div>
  </div>
);

export default Testimonials; 