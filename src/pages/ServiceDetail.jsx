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
    img: 'https://plus.unsplash.com/premium_photo-1724061887314-347affe7df0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN0dWRlbnQlMjBhY2NvbW9kYXRpb258ZW58MHx8MHx8fDA%3D',
    description: 'Find the perfect place to live with our student accommodation support. We connect you with safe, affordable, and accessible housing near your campus.',
  },
  {
    name: 'Education Counseling',
    slug: 'education-counseling',
    img: 'https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWR1Y2F0aW9uJTIwY291bnNlbGxpbmd8ZW58MHx8MHx8fDA%3D',
    description: 'Get personalized guidance from our education counselors on course selection, career goals, and choosing the right university abroad.',
  },
  {
    name: 'Scholarship Guidance',
    slug: 'scholarship-guidance',
    img: 'https://media.istockphoto.com/id/667305600/photo/young-man-filling-scholarship-application-form-on-internet.webp?a=1&b=1&s=612x612&w=0&k=20&c=XJE_cVpCLlkRaSSy1IUGzBzoAETVAIuG4rVf5L7NnrI=',
    description: 'Our team helps you explore and apply for various scholarships based on merit, need, and destination-specific offers from partner universities.',
  },
  {
    name: 'University Admission',
    slug: 'university-admission',
    img: 'https://plus.unsplash.com/premium_photo-1682974407089-235ad9922288?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVuaXZlcnNpdGllc3xlbnwwfHwwfHx8MA%3D%3D',
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
    <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10">

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
          className="w-full h-64 md:h-full object-cover rounded-xl shadow"
        />
      </div>

    </div>
  </div>
);

};

export default ServiceDetail;
