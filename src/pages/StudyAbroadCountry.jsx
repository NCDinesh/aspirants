import React from 'react';
import { useParams } from 'react-router-dom';

const countryData = {
  australia: {
    name: 'Australia',
    flag: '🇦🇺',
    flagImg: 'https://flagcdn.com/w80/au.png',
    description: 'Australia is a top destination for international students, known for its world-class universities, vibrant cities, and beautiful landscapes. Studying in Australia offers a multicultural environment and excellent post-study work opportunities.',
    highlights: [
      'Post-study work visa opportunities',
      'Top-ranked universities like ANU and University of Melbourne',
      'Safe and welcoming multicultural environment',
      'High quality of life and stunning nature',
    ],
    img: '/images/countries/aus.jpg',
  },
  usa: {
    name: 'USA',
    flag: '🇺🇸',
    flagImg: 'https://flagcdn.com/w80/us.png',
    description: 'The USA is renowned for its diverse range of universities and programs, cutting-edge research, and global networking opportunities.',
    highlights: [
      'World-class universities and research facilities',
      'STEM OPT extension for tech students',
      'Diverse campus environments',
      'Flexible curriculum and internship opportunities',
    ],
    img: '/images/countries/usa.jpg',
  },
  'new-zealand': {
    name: 'New Zealand',
    flag: '🇳🇿',
    flagImg: 'https://flagcdn.com/w80/nz.png',
    description: 'New Zealand offers high-quality education, a safe and welcoming environment, and stunning natural beauty.',
    highlights: [
      'Innovative education system',
      'Safe, peaceful living conditions',
      'Work part-time during study',
      'Beautiful landscapes and outdoor lifestyle',
    ],
    img: '/images/countries/newzealand.webp',
  },
  canada: {
    name: 'Canada',
    flag: '🇨🇦',
    flagImg: 'https://flagcdn.com/w80/ca.png',
    description: 'Canada is known for its inclusive society, excellent education system, and opportunities for permanent residency.',
    highlights: [
      'Affordable tuition and living costs',
      'Post-graduation work permit (PGWP)',
      'Pathway to PR through education',
      'High safety standards and cultural diversity',
    ],
    img: '/images/countries/canada.jpg',
  },
  uk: {
    name: 'UK',
    flag: '🇬🇧',
    flagImg: 'https://flagcdn.com/w80/gb.png',
    description: 'The UK boasts some of the world\'s oldest and most prestigious universities.',
    highlights: [
      'Shorter course duration (3-year undergrad, 1-year master\'s)',
      'Globally recognized qualifications',
      'High visa success rate',
      'Graduate route visa for 2 years after study',
    ],
    img: "/images/countries/Uk.jpg",
  },
  denmark: {
    name: 'Denmark',
    flag: '🇩🇰',
    flagImg: 'https://flagcdn.com/w80/dk.png',
    description: 'Denmark is known for its innovative teaching methods, high standard of living, and focus on sustainability.',
    highlights: [
      'Tuition-free for EU students, scholarships for others',
      'Project-based and practical education',
      'Focus on sustainability and design thinking',
      'Excellent public services and transport',
    ],
    img: '/images/countries/denmark.webp',
  },
  japan: {
    name: 'Japan',
    flag: '🇯🇵',
    flagImg: 'https://flagcdn.com/w80/jp.png',
    description: 'Japan combines tradition and innovation, offering unique educational experiences and advanced technology.',
    highlights: [
      'Cutting-edge research and tech',
      'Strong government-funded scholarships',
      'Opportunity to learn Japanese culture and language',
      'Safe cities and efficient lifestyle',
    ],
    img: 'https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&w=1600&q=80',
  },
  'south-korea': {
    name: 'South Korea',
    flag: '🇰🇷',
    flagImg: 'https://flagcdn.com/w80/kr.png',
    description: 'South Korea is a leader in technology and education, with a vibrant culture and modern cities.',
    highlights: [
      'Affordable tuition and living expenses',
      'Strong scholarship opportunities',
      'Excellent career prospects in tech and media',
      'K-culture, safety, and innovation',
    ],
    img: '/images/countries/south-korea.jpg',
  },

};

const StudyAbroadCountry = () => {
  const { country } = useParams();
  const data = countryData[country];

  if (!data) {
    return (
      <div className="max-w-2xl mx-auto py-16 px-4 text-center text-secondary">
        Country not found.
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-100 px-4 py-6">
        <div
          className="relative h-[50vh] bg-cover bg-center max-w-5xl mx-auto rounded-lg overflow-hidden"
          style={{ backgroundImage: `url(${data.img})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">

            {/* Emoji flag for mobile */}
            <div className="text-6xl md:hidden">
              {data.flag}
            </div>

            {/* Image flag for desktop */}
            <img
              src={data.flagImg}
              alt={`${data.name} flag`}
              className="w-16 h-16 object-contain hidden md:block mb-4"
            />

            <h1 className="text-4xl md:text-5xl font-bold mt-2">
              Study in {data.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <p className="text-lg text-secondary mb-6">{data.description}</p>

        {data.highlights && (
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-primary mb-4">Why {data.name}?</h2>
            <ul className="list-disc list-inside text-secondary space-y-2">
              {data.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-primary mb-2">Aspirants Education Consultancy Pvt. Ltd. is here to help!</h2>
          <p className="text-secondary">
            Planning to study in <strong>{data.name}</strong>? Our team at <strong>Aspirants</strong> is ready to guide you through every step — from counseling, documentation, university application, to visa processing and pre-departure orientation.
          </p>
          <p className="mt-3 text-secondary">
            Let us help you turn your dream of studying in {data.name} into reality.
          </p>
          <a href="/contact" className="inline-block mt-4 bg-primary hover:bg-secondary text-white px-6 py-2 rounded shadow hover:text-white transition">
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default StudyAbroadCountry;
