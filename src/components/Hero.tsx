import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1920',
    title: 'Advancing Scientific Excellence',
    description: 'Join a community dedicated to pushing the boundaries of scientific discovery'
  },
  {
    image: 'https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&q=80&w=1920',
    title: 'Research that Matters',
    description: 'Our research programs address the most pressing challenges of our time'
  },
  {
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1920',
    title: 'World-Class Facilities',
    description: 'State-of-the-art laboratories and research centers at your disposal'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
            <div className="max-w-4xl px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-white">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

// const Hero = () => {
//   return (
//     <div className="relative bg-gray-50 dark:bg-gray-800">
//       <div className="absolute inset-0">
//         <img
//           className="w-full h-full object-cover"
//           src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
//           alt="IISER Campus"
//         />
//         <div className="absolute inset-0 bg-red-700 mix-blend-multiply opacity-20"></div>
//       </div>
//       <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
//         <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
//           Indian Institute of Science Education and Research
//         </h1>
//         <p className="mt-6 max-w-3xl text-xl text-gray-100">
//           Advancing the frontiers of science through innovative research and education
//         </p>
//         <div className="mt-10 flex space-x-4">
//           <a
//             href="#admissions"
//             className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
//           >
//             Apply Now
//             <ArrowRight className="ml-2 h-5 w-5" />
//           </a>
//           <a
//             href="#research"
//             className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
//           >
//             Explore Research
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;