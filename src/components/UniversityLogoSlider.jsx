import React, { useEffect, useRef, useState } from 'react';

const logos = [
  '/images/universities/BPP-university.png',
  '/images/universities/Coventry-university.png',
  '/images/universities/Brimingham.png',
  '/images/universities/curtin-university.png',
  '/images/universities/eastlondon.png',
  '/images/universities/HSU-university.png',
  '/images/universities/huddersfield-university.png',
  '/images/universities/Latrobe-university.png',
  '/images/universities/LMU-university.png',
  '/images/universities/MIT-university.png',
  '/images/universities/notredame-university.png',
  '/images/universities/Ravensbourne-university.png',
  '/images/universities/saibt-university.png',
  '/images/universities/sunderland-university.png',
  '/images/universities/VIT-university.png',
  '/images/universities/westlondon.png',
  '/images/universities/leedstrinity.png',
  '/images/universities/greenwich.png',
  '/images/universities/wolverhamptom.jpeg',
  '/images/universities/chester.png',
  '/images/universities/porthsmouth.png',
  '/images/universities/york.png',
  
];

const UniversityLogoSlider = () => {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    let animationFrame;
    let position = 0;

    const slide = () => {
      if (isPaused) {
        animationFrame = requestAnimationFrame(slide);
        return;
      }
      position -= 0.6; // Speed control
      const resetPoint = -(container.scrollWidth / 2);
      if (position <= resetPoint) {
        position = 0; // Reset to start when end reached
      }
      container.style.transform = `translateX(${position}px)`;
      animationFrame = requestAnimationFrame(slide);
    };

    animationFrame = requestAnimationFrame(slide);

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <div
      className="overflow-hidden relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

                  <h2 className="text-3xl font-bold text-secondary mb-8 text-center flex items-center justify-center gap-2">
        Universities we offer
      </h2>
      <div
        ref={containerRef}
        className="flex"
        style={{ willChange: 'transform', display: 'flex' }}
      >


        {logos.concat(logos).map((logo, index) => (
          <div
            key={index}
            className="min-w-[150px] mx-4 flex justify-center items-center"
          >
            <img
              src={logo}
              alt="University Logo"
              className="h-20 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversityLogoSlider;
