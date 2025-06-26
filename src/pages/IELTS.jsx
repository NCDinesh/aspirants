import React from 'react';

const IELTS = () => (
  <div className="max-w-7xl mx-auto py-12 px-4 flex flex-col gap-8">

    <h1 className="text-4xl font-bold text-secondary text-center">IELTS Preparation</h1>
    <p className="text-center max-w-3xl mx-auto mb-8 text-gray-600 text-xl ">
      Join our internationally recognized IELTS training program designed to help you secure the scores you need for studying, working, or migrating abroad.
    </p>

    <div className="flex flex-col md:flex-row bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-xl gap-8 items-center">

      {/* Image */}
      <div className="w-full md:w-1/2 h-64 md:h-80 rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1660927059794-152d06e11016?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWVsdHN8ZW58MHx8MHx8fDA%3D"
          alt="IELTS Preparation"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">

        <div>
          <h3 className="text-2xl font-bold text-primary mb-2">Why Choose Our IELTS Program?</h3>
          <p>
            Our IELTS preparation course is led by experienced trainers who provide step-by-step guidance to help you master all four modules: Listening, Reading, Writing, and Speaking. We focus on practical strategies, time management, and confidence-building.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-secondary mb-2">Key Features</h3>
          <ul className="list-disc list-inside text-left">
            <li>Certified, experienced instructors with proven results</li>
            <li>Small batch sizes for personalized attention</li>
            <li>Regular mock tests with performance analysis</li>
            <li>Flexible class schedules (morning/evening/weekend)</li>
            <li>Complete study materials and practice resources</li>
          </ul>
        </div>

      </div>
    </div>
  
    {/* Additional Section */}
    <div className="bg-gray-50 rounded-xl p-8 flex flex-col gap-2 text-center md:text-left max-w-5xl">
      <h3 className="text-2xl font-bold text-primary">Who Should Take This Course?</h3>
      <p>
        Whether you are a student planning to study abroad, a professional looking for migration, or an individual needing English language certification, our IELTS course prepares you to achieve your goals effectively.
      </p>

      <h3 className="text-2xl font-bold text-secondary mt-4">Get Started Today</h3>
      <p>
        Enroll now and take the first step toward your international education or migration journey with confidence.
      </p>
    </div>

  </div>
);

export default IELTS;
