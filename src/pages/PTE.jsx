import React from 'react';

const PTE = () => (
  <div className="max-w-7xl mx-auto py-12 px-4 flex flex-col gap-8">

    <h1 className="text-4xl font-bold text-secondary text-center">PTE Preparation</h1>
    <p className="text-center max-w-3xl mx-auto mb-8 text-gray-600 text-xl">
      Our PTE Academic course equips you with the skills and strategies to excel in all sections of the test and secure your pathway to global opportunities.
    </p>

    <div className="flex flex-col md:flex-row bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-xl gap-8 items-center">

      {/* Image */}
      <div className="w-full md:w-1/2 h-64 md:h-80 rounded-xl overflow-hidden">
        <img
          src="https://i.pinimg.com/736x/de/26/08/de26083f8b105358295437a93a1221cc.jpg"
          alt="PTE Preparation"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">

        <div>
          <h3 className="text-2xl font-bold text-primary mb-2">Why Our PTE Program Stands Out</h3>
          <p>
            With our PTE preparation course, you'll receive expert instruction, real exam simulations, and comprehensive resources to build your English skills and confidence. Our personalized approach helps you maximize your test results.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-secondary mb-2">Program Highlights</h3>
          <ul className="list-disc list-inside text-left">
            <li>Expert trainers with extensive PTE experience</li>
            <li>Interactive sessions with real test software</li>
            <li>Detailed performance feedback after each test</li>
            <li>Flexible batch timings to suit your schedule</li>
            <li>Access to full-length practice tests and study guides</li>
          </ul>
        </div>

      </div>
    </div>

    {/* Additional Section */}
    <div className="bg-gray-50 rounded-xl p-8 flex flex-col gap-2 text-center md:text-left max-w-5xl">
      <h3 className="text-2xl font-bold text-primary">Who Benefits From Our PTE Training?</h3>
      <p>
        If you're planning to apply for overseas education, migration, or work opportunities where English proficiency is required, our PTE coaching is the ideal solution to help you succeed.
      </p>

      <h3 className="text-2xl font-bold text-secondary mt-4">Take the Next Step</h3>
      <p>
        Let us guide you towards your target PTE score. Join our program today and start your journey toward international success.
      </p>
    </div>

  </div>
);

export default PTE;
