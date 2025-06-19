import React from 'react';

const countries = [
  { name: 'Australia', path: '/study-abroad/australia', flag: 'https://flagcdn.com/au.svg' },
  { name: 'UK', path: '/study-abroad/uk', flag: 'https://flagcdn.com/gb.svg' },
  { name: 'Canada', path: '/study-abroad/canada', flag: 'https://flagcdn.com/ca.svg' },
  { name: 'USA', path: '/study-abroad/usa', flag: 'https://flagcdn.com/us.svg' },
  { name: 'New Zealand', path: '/study-abroad/new-zealand', flag: 'https://flagcdn.com/nz.svg' },
  { name: 'Europe', path: '/study-abroad/europe', flag: 'https://flagcdn.com/eu.svg' },
  { name: 'Denmark', path: '/study-abroad/denmark', flag: 'https://flagcdn.com/dk.svg' },
  { name: 'Ireland', path: '/study-abroad/ireland', flag: 'https://flagcdn.com/ie.svg' },
  { name: 'Japan', path: '/study-abroad/japan', flag: 'https://flagcdn.com/jp.svg' },
  { name: 'South Korea', path: '/study-abroad/south-korea', flag: 'https://flagcdn.com/kr.svg' },
  { name: 'Germany', path: '/study-abroad/germany', flag: 'https://flagcdn.com/de.svg' },
  { name: 'France', path: '/study-abroad/france', flag: 'https://flagcdn.com/fr.svg' },
  { name: 'Switzerland', path: '/study-abroad/switzerland', flag: 'https://flagcdn.com/ch.svg' },
];

const StudyAbroad = () => (
  <div className="max-w-6xl mx-auto py-16 px-4">
    <h2 className="text-3xl font-bold text-primary mb-8">Study Abroad Destinations</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {countries.map((country) => (
        <a
          key={country.name}
          href={country.path}
          className="block bg-white rounded-lg p-6 text-center font-semibold text-lg shadow hover:bg-primary/10 transition flex flex-col items-center gap-2"
        >
          <img src={country.flag} alt={country.name + ' flag'} className="w-12 h-8 object-cover rounded shadow" />
          <span className="text-secondary">{country.name}</span>
        </a>
      ))}
    </div>
  </div>
);

export default StudyAbroad; 