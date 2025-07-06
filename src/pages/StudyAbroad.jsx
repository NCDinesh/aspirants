import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const countries = [
  { title: 'Study in USA', img: 'images/countries/usa.jpg', slug: "usa" },
  { title: 'Study in UK', img: 'images/countries/Uk.jpg', slug: "uk" },
  { title: 'Study in Australia', img: 'images/countries/aus.jpg', slug: "australia" },
  { title: 'Study in South Korea', img: 'images/countries/south-korea.jpg', slug: "south-korea" },
  { title: 'Study in Canada', img: 'images/countries/canada.jpg', slug: "canada" },
  { title: 'Study in New Zealand', img: 'images/countries/newzealand.webp', slug: "new-zealand" },
  { title: 'Study in Denmark', img: 'images/countries/denmark.webp', slug: "denmark" },
];

const StudyAbroad = () => {
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

  return (
    <div className="max-w-7xl mx-auto py-12 px-4" id='Topdestination'>
      <h2 className="text-3xl font-bold text-secondary mb-8 text-center flex items-center justify-center gap-2">
        Top Destinations around the world!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {countries.map((country, index) => (
          <div
            key={country.slug}
            className={`group relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition hover:scale-105 border-4 
            ${index === countries.length - 1 ? 'md:col-span-3 md:justify-self-center' : ''}`}
          >
            {/* Sliding Background */}
            <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/90 before:to-secondary/90 before:translate-y-full group-hover:before:translate-y-0 before:transition-transform before:duration-500 before:z-0 rounded-xl"></div>

            {/* Card Content */}
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-full bg-white py-4">
                <img src={country.img} alt={country.title} className="w-full h-[225px] object-contain" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-secondary group-hover:text-white mb-2 transition-colors duration-300">
                  {country.title}
                </h3>

                <Link
                  to={`/study-abroad/${country.slug}`}
                  className="mt-auto text-secondary group-hover:text-white font-semibold transition-colors duration-300"
                >
                  <button className='group-hover:text-white bg-primary text-white group-hover:bg-secondary px-4 py-2 rounded'>
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyAbroad;
