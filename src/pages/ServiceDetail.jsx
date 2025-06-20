import { useParams } from 'react-router-dom';
const allServices = [
  {
    name: 'Pre-departure Orientation',
    slug: 'pre-departure-orientation',
    img: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80',
    description: 'Get expert guidance before you fly to your study destination. We provide insights about culture, living conditions, visa regulations, and more.',
  },
  {
    name: 'Test Preparation',
    slug: 'test-preparation',
    img: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80',
    description: 'We provide tailored preparation classes for IELTS, TOEFL, SAT, PTE and other standardized tests. Our expert instructors ensure you’re well-prepared.',
  },
  {
    name: 'Student Accommodation',
    slug: 'student-accommodation',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    description: 'Find the perfect place to live with our student accommodation support. We connect you with safe, affordable, and accessible housing near your campus.',
  },
  {
    name: 'Education Counseling',
    slug: 'education-counseling',
    img: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=800&q=80',
    description: 'Get personalized guidance from our education counselors on course selection, career goals, and choosing the right university abroad.',
  },
  {
    name: 'Scholarship Guidance',
    slug: 'scholarship-guidance',
    img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80',
    description: 'Our team helps you explore and apply for various scholarships based on merit, need, and destination-specific offers from partner universities.',
  },
  {
    name: 'University Admission',
    slug: 'university-admission',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    description: 'From choosing universities to submitting applications, we guide you throughout the university admission process to ensure a successful outcome.',
  }
];

const ServiceDetail = () => {
  const { serviceName } = useParams();
  const service = allServices.find((s) => s.slug === serviceName);

  if (!service) {
    return (
      <div className="text-center py-20 text-xl text-red-600 font-semibold">
        Service not found.
      </div>
    );
  }

return (
  <div className="max-w-6xl mx-auto px-4 py-12">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-10">

      {/* Text Content */}
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold text-secondary mb-4">{service.name}</h1>

        {/* Service Description */}
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          {service.description}
        </p>

        {/* Dynamic Supportive Message */}
        <p className="text-lg text-gray-700 leading-relaxed mb-3">
          At <span className="text-primary font-semibold">Aspirants Education Consultancy</span>, we're always ready to support you with <strong>{service.name}</strong>.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-3">
          Whether you're just starting or need expert guidance, our team is dedicated to making your journey smoother, smarter, and more successful.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          With <strong>{service.name}</strong> at the core of our expertise, we’ll walk with you every step of the way—because your future deserves the best foundation.
        </p>
      </div>

      {/* Image */}
      <div className="md:w-1/2">
        <img
          src={service.img}
          alt={service.name}
          className="w-full h-64 md:h-80 object-cover rounded-xl shadow"
        />
      </div>

    </div>
  </div>
);

};

export default ServiceDetail;
