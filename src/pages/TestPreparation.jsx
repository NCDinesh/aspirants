import React from 'react';
import { FaBook, FaChalkboardTeacher } from 'react-icons/fa';

const tests = [
  {
    name: 'IELTS',
    description: 'Comprehensive IELTS preparation classes with expert instructors and resources to help you achieve your desired band score.',
    img: 'https://images.unsplash.com/photo-1660927059794-152d06e11016?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWVsdHN8ZW58MHx8MHx8fDA%3D',
    icon: <FaBook className="text-3xl text-primary" />,
    link: '/test-preparation/IELTS'
  },
  {
    name: 'PTE',
    description: 'Personalized PTE coaching and practice materials to boost your English proficiency for study abroad.',
    img: 'https://i.pinimg.com/736x/de/26/08/de26083f8b105358295437a93a1221cc.jpg',
    icon: <FaChalkboardTeacher className="text-3xl text-secondary" />,
    link: '/test-preparation/PTE'
  },
];

const TestPreparation = () => (
  <div className="max-w-7xl mx-auto py-12 px-4 flex flex-col gap-12">

    <h2 class="text-3xl font-bold text-secondary  text-center">Test Preparation</h2>


    {/* Hero Section */}
    <div className="flex flex-col md:flex-row bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-xl gap-8 items-center">

      {/* Image Left */}
      <div className="w-full md:w-1/2 h-64 md:h-80 rounded-xl overflow-hidden">
        <img
          src="https://plus.unsplash.com/premium_photo-1680807869086-e08309acfb24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SUVMVFN8ZW58MHx8MHx8fDA%3D"
          alt="About Aspirants"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Right */}
      <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">

        <div>
          <h3 className="text-2xl font-bold text-primary mb-2">Why Choose Our Test Preparation?</h3>
          <p>
            We provide expert-led coaching to help you master international language tests like IELTS and PTE. Our structured programs, experienced instructors, and abundant resources ensure you achieve your target score with confidence.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-secondary mb-2">Tailored Learning Approach</h3>
          <p>
            Every student learns differently. That's why we offer personalized guidance, mock tests, interactive sessions, and progress tracking to help you improve your English proficiency and test performance effectively.
          </p>
        </div>

      </div>

    </div>

    <h2 class="text-3xl font-bold text-secondary  text-center">What we offer</h2>


    {/* Test Preparation Cards */}
<div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 items-center">
  {tests.map((test) => (
    <div key={test.name} className="group bg-white w-[400px] rounded-xl shadow-lg p-6 flex flex-col items-center text-center overflow-hidden relative transition hover:scale-105">

      {/* Sliding Background */}
      <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/90 before:to-secondary/90 before:translate-y-full group-hover:before:translate-y-0 before:transition-transform before:duration-500 before:z-0 rounded-xl"></div>

      {/* Card Content */}
      <div className="relative z-10 flex flex-col items-center ">
        <div className='bg-white rounded-full size-10 flex justify-center items-center'>
        {test.icon}
        </div>
        <img
          src={test.img}
          alt={test.name}
          className="w-32 h-32 object-cover rounded-full my-4 border-4 border-secondary group-hover:border-white transition-colors duration-300"
        />
        <h3 className="text-2xl font-bold text-secondary group-hover:text-white transition-colors duration-300 mb-2">{test.name}</h3>
        <p className="mb-4 text-gray-600 group-hover:text-white transition-colors duration-300">{test.description}</p>
        <a href={test.link} className="bg-primary text-white px-6 py-2 rounded font-semibold hover:bg-secondary hover:text-white transition mt-2">Learn More</a>
      </div>

    </div>
  ))}
</div>

</div>



);

export default TestPreparation;
