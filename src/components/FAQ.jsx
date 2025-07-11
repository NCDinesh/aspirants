import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4 mb-8 p-4">
      {items.map((item, index) => (
        <div key={index} className="border border-secondary rounded-xl overflow-hidden">
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center p-4 bg-gradient-to-br from-primary/10 to-secondary/10 text-secondary font-semibold focus:outline-none"
          >
            {item.question}
            <span>{openIndex === index ? '-' : '+'}</span>
          </button>
          {openIndex === index && (
            <div className="p-4 text-gray-700 bg-white border-t">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
