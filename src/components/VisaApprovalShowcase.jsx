import React, { useState } from 'react';

const approvals = [
  {
    name: 'Anjali Sharma',
    country: 'Australia',
    university: 'University of Sydney',
    image: '/images/visagrant/test1.jpg',
  },
  {
    name: 'Ramesh Karki',
    country: 'Canada',
    university: 'University of Toronto',
    image: '/images/visagrant/test2.jpg',
  },
  {
    name: 'Priya Thapa',
    country: 'USA',
    university: 'Harvard University',
    image: '/images/visagrant/test1.jpg',
  },
  {
    name: 'Sujan Bista',
    country: 'UK',
    university: 'University of Oxford',
    image: '/images/visagrant/test1.jpg',
  },
];

const VisaApprovalShowcase = () => {
  const [current, setCurrent] = useState(0);

  const isMdScreen = window.innerWidth >= 768;
  const itemsPerSlide = isMdScreen ? 2 : 1;

  const nextSlide = () => {
    setCurrent((prev) => (prev + itemsPerSlide) % approvals.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - itemsPerSlide + approvals.length) % approvals.length);
  };

  const visibleCards = approvals.slice(current, current + itemsPerSlide);
  if (visibleCards.length < itemsPerSlide) {
    visibleCards.push(...approvals.slice(0, itemsPerSlide - visibleCards.length));
  }

  return (
    <section className="py-16 bg-white px-4" id="visa-approvals">
      <h2 className="text-3xl font-bold text-center text-secondary mb-10">
        Recently Approved Visas
      </h2>

      <div className="max-w-6xl mx-auto">
        {/* Carousel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleCards.map((student, index) => (
            <div
              key={index}
              className="group [perspective:1000px] h-96 w-full cursor-pointer"
            >
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 rounded-xl overflow-hidden shadow-xl bg-white">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/90 text-white rounded-xl p-6 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center text-center">
                  <h3 className="text-xl font-bold mb-2">{student.name}</h3>
                  <p className="text-lg">Visa Approved for</p>
                  <p className="text-2xl font-semibold">{student.country}</p>
                  <p className="mt-2 text-base">University: {student.university}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={prevSlide}
            className="bg-primary text-white px-4 py-2 rounded shadow hover:bg-primary/80"
          >
             Prev
          </button>
          <button
            onClick={nextSlide}
            className="bg-secondary text-white px-4 py-2 rounded shadow hover:bg-secondary/80"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default VisaApprovalShowcase;
