import React from 'react';
import { useParams } from 'react-router-dom';

const countryData = {
  australia: {
    name: 'Australia',
    flag: '🇦🇺',
    description: 'Australia is a top destination for international students, known for its world-class universities, vibrant cities, and beautiful landscapes. Studying in Australia offers a multicultural environment and excellent post-study work opportunities.'
  },
  usa: {
    name: 'USA',
    flag: '🇺🇸',
    description: 'The USA is renowned for its diverse range of universities and programs, cutting-edge research, and global networking opportunities. It is a popular choice for students seeking academic excellence and career advancement.'
  },
  'new-zealand': {
    name: 'New Zealand',
    flag: '🇳🇿',
    description: 'New Zealand offers high-quality education, a safe and welcoming environment, and stunning natural beauty. It is ideal for students looking for a balanced lifestyle and innovative learning.'
  },
  canada: {
    name: 'Canada',
    flag: '🇨🇦',
    description: 'Canada is known for its inclusive society, excellent education system, and opportunities for permanent residency. It is a favorite among students for its quality of life and academic reputation.'
  },
  uk: {
    name: 'UK',
    flag: '🇬🇧',
    description: 'The UK boasts some of the world\'s oldest and most prestigious universities. It offers a rich cultural experience, diverse programs, and strong global recognition for its degrees.'
  },
  denmark: {
    name: 'Denmark',
    flag: '🇩🇰',
    description: 'Denmark is known for its innovative teaching methods, high standard of living, and focus on sustainability. It is a great choice for students interested in research and creativity.'
  },
  ireland: {
    name: 'Ireland',
    flag: '🇮🇪',
    description: 'Ireland offers a friendly atmosphere, strong academic programs, and a growing tech industry. It is an attractive destination for students seeking a dynamic and supportive environment.'
  },
  japan: {
    name: 'Japan',
    flag: '🇯🇵',
    description: 'Japan combines tradition and innovation, offering unique educational experiences and advanced technology. It is ideal for students interested in culture, science, and technology.'
  },
  'south-korea': {
    name: 'South Korea',
    flag: '🇰🇷',
    description: 'South Korea is a leader in technology and education, with a vibrant culture and modern cities. It is perfect for students looking for high-quality education and exciting urban life.'
  },
  germany: {
    name: 'Germany',
    flag: '🇩🇪',
    description: 'Germany is famous for its tuition-free or low-cost education, strong engineering and science programs, and rich history. It attracts students from all over the world.'
  },
  france: {
    name: 'France',
    flag: '🇫🇷',
    description: 'France offers world-class education, a rich cultural heritage, and opportunities to learn the French language. It is a top choice for students interested in arts, business, and humanities.'
  },
  switzerland: {
    name: 'Switzerland',
    flag: '🇨🇭',
    description: 'Switzerland is known for its high standard of living, excellent universities, and beautiful landscapes. It is ideal for students interested in hospitality, finance, and international relations.'
  }
};

const StudyAbroadCountry = () => {
  const { country } = useParams();
  const data = countryData[country];

  if (!data) {
    return <div className="max-w-2xl mx-auto py-16 px-4 text-center text-secondary">Country not found.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 text-center">
      <div className="flex flex-col items-center mb-6">
        <span className="text-6xl mb-2">{data.flag}</span>
        <h1 className="text-3xl font-bold text-primary mb-2">Study in {data.name}</h1>
      </div>
      <p className="text-lg text-secondary mb-8">{data.description}</p>
      {/* Add more visuals, images, and info here for a richer experience */}
    </div>
  );
};

export default StudyAbroadCountry; 