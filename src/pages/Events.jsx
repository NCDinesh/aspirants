import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const events = [
  {
    name: 'Australia Education Fair',
    date: '2024-07-15',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    desc: 'Meet top Australian universities and get on-the-spot counseling.',
    link: '#',
  },
  {
    name: 'IELTS Masterclass',
    date: '2024-08-01',
    img: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=400&q=80',
    desc: 'Free IELTS tips and tricks from certified trainers.',
    link: '#',
  },
];

const Events = () => (
  <div className="max-w-5xl mx-auto py-12 px-4">
    {/* Hero Image */}
    <div className="w-full h-56 md:h-72 rounded-xl overflow-hidden mb-8">
      <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" alt="Events" className="w-full h-full object-cover" />
    </div>
    <h2 className="text-3xl font-bold text-primary mb-8 text-center">Events & Seminars</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {events.map(event => (
        <div key={event.name} className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center text-center">
          <img src={event.img} alt={event.name} className="w-40 h-32 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-bold text-secondary mb-2 flex items-center gap-2"><FaCalendarAlt className="text-primary" /> {event.name}</h3>
          <div className="text-sm text-gray-500 mb-2">{new Date(event.date).toLocaleDateString()}</div>
          <p className="mb-4">{event.desc}</p>
          <a href={event.link} className="bg-primary text-white px-6 py-2 rounded font-semibold hover:bg-secondary transition">Register</a>
        </div>
      ))}
    </div>
  </div>
);

export default Events; 