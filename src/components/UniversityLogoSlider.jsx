import React, { useEffect, useRef, useState } from 'react';

const logos = [
  '/images/universities/University-of-Idaho-1024x283.webp',
  '/images/universities/university-of-chicago.jpg',
  '/images/universities/australian-catholic-university.png',
  '/images/universities/university-of-westernaustralia.png',
  '/images/universities/university-of-newcastleaustralia.png',
'/images/universities/University-of-Idaho-1024x283.webp',
  '/images/universities/university-of-chicago.jpg',
  '/images/universities/australian-catholic-university.png',
  '/images/universities/university-of-westernaustralia.png',
  '/images/universities/university-of-newcastleaustralia.png',
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
