import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    name: 'Pre-departure Orientation',
    img: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
    slug: 'pre-departure-orientation',
    description:
      'We provide detailed pre-departure orientation sessions to help students adapt to life abroad, covering travel tips, cultural adjustment, accommodation, and essential documentation.',
  },
  {
    name: 'Test Preparation',
    img: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80',
    slug: 'test-preparation',
    description:
      'Our expert-led test preparation programs for IELTS, PTE, and other international exams help students achieve competitive scores necessary for admission to top universities.',
  },
  {
    name: 'Student Accommodation',
    img: 'https://plus.unsplash.com/premium_photo-1724061887314-347affe7df0f?w=600&auto=format&fit=crop&q=60',
    slug: 'student-accommodation',
    description:
      'We assist students in finding safe, affordable, and comfortable accommodation options close to their university or college abroad.',
  },
  {
    name: 'Education Counseling',
    img: 'https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?w=600&auto=format&fit=crop&q=60',
    slug: 'education-counseling',
    description:
      'Our personalized education counseling sessions guide students in choosing the right country, course, and institution that align with their academic goals and career aspirations.',
  },
  {
    name: 'Scholarship Guidance',
    img: 'https://media.istockphoto.com/id/667305600/photo/young-man-filling-scholarship-application-form-on-internet.webp?a=1&b=1&s=612x612&w=0&k=20&c=XJE_cVpCLlkRaSSy1IUGzBzoAETVAIuG4rVf5L7NnrI=',
    slug: 'scholarship-guidance',
    description:
      'We help eligible students explore scholarship opportunities and provide complete assistance in the application process to reduce financial burdens.',
  },
  {
    name: 'University Admission',
    img: 'https://plus.unsplash.com/premium_photo-1682974407089-235ad9922288?w=600&auto=format&fit=crop&q=60',
    slug: 'university-admission',
    description:
      'From selecting universities to completing applications and preparing documents, our team ensures a smooth and successful admission process for students.',
  },
];

const ServicesPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Our Consultancy Services</h2>
      <p className="max-w-3xl mx-auto text-center text-lg text-gray-700 mb-12">
        Explore our comprehensive services designed to guide you through every step of your study abroad journey—from counseling to university admission.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.slug}
            className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition hover:scale-105 border-4 group"
          >
            {/* Background hover effect */}
            <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/90 before:to-secondary/90 before:translate-y-full group-hover:before:translate-y-0 before:transition-transform before:duration-500 before:z-0 rounded-xl" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-full bg-white py-4">
                <img src={service.img} alt={service.name} className="w-full h-56 object-cover" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-secondary group-hover:text-white mb-2 transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-gray-700 group-hover:text-white mb-4 flex-1">
                  {service.description}
                </p>
                <Link
                  to={`/service/${service.slug}`}
                  className="mt-auto inline-block text-secondary group-hover:text-white font-semibold transition-colors duration-300"
                >
                  <button className="group-hover:text-white bg-primary text-white group-hover:bg-secondary px-4 py-2 rounded">
                    Learn More
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

export default ServicesPage;
