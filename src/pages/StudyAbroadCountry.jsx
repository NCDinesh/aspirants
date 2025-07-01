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
    img: 'https://media.istockphoto.com/id/535455441/photo/view-of-sydney-harbour-australia.webp?a=1&b=1&s=612x612&w=0&k=20&c=ppqJgsi9-pLlVIq9UGFO0meliF-YYd4gE9ilRwxhx6I=',
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
    img: 'https://media.istockphoto.com/id/525232662/photo/new-york-empire-state-building-and-statue-of-liberty.webp?a=1&b=1&s=612x612&w=0&k=20&c=TKIO6WmJV5IPagdotl0Eo2hli29n3X4XpuZt5Uq6pA4=',
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
    img: 'https://images.unsplash.com/photo-1729048563795-b001db99209f?w=600&auto=format&fit=crop&q=60',
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
    img: 'https://images.unsplash.com/photo-1530025809667-1f4bcff8e60f?w=600&auto=format&fit=crop&q=60',
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
    img: 'https://media.istockphoto.com/id/526258817/photo/big-ben-in-sunny-day-london.webp?a=1&b=1&s=612x612&w=0&k=20&c=gD3tXFwIIz6IkAlBw7Lom8__IVqhAAGPC193v2ZIbZA=',
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
    img: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=600&auto=format&fit=crop&q=60',
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
    img: 'https://media.istockphoto.com/id/1096399496/photo/the-korean-flag-hanging-in-a-high-rise-building.webp?a=1&b=1&s=612x612&w=0&k=20&c=i1ggvzmpwqOfIg3o21YY2sTVoANSDBGGQw4DpOaZoT0=',
  },
  germany: {
    name: 'Germany',
    flag: '🇩🇪',
    flagImg: 'https://flagcdn.com/w80/de.png',
    description: 'Germany is famous for its tuition-free or low-cost education, strong engineering and science programs, and rich history.',
    highlights: [
      'No tuition fees in public universities',
      'Strong focus on engineering, tech, and research',
      'Opportunities to learn German and work during study',
      'Robust industry-academia linkage',
    ],
    img: 'https://images.unsplash.com/photo-1618259278412-2819cbdea4dc?w=600&auto=format&fit=crop&q=60',
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
