import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Grow Your Green Friends",
      description: "Track watering schedules and care routines for all your plants",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyHezzInagqLtZlCsdY65ZkViiKTXdqLIArg&s",
      buttonText: "Get Started",
      buttonLink: "/register"
    },
    {
      id: 2,
      title: "Never Forget to Water Again",
      description: "Smart reminders keep your plants thriving",
      image: "https://png.pngtree.com/thumb_back/fh260/background/20220419/pngtree-caring-for-pepper-seedlings-in-peat-pots-watering-tips-for-healthy-plants-photo-image_27795332.jpg",
      buttonLink: "/features"
    },
    {
      id: 3,
      title: "Expert Plant Care Tips",
      description: "Learn how to care for different plant species",
      image: "https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      buttonText: "Learn More",
      buttonLink: "/blog"
    },
    {
      id: 4,
      title: "Join Our Plant Community",
      description: "Share your plant journey with fellow enthusiasts",
      image: "https://res.cloudinary.com/gimmersta-wallpaper/image/upload/c_fill,f_auto,fl_progressive,q_auto,h_500/v1716220099/articles/TR0046GR03R_product.jpg",
      buttonText: "Join Now",
      buttonLink: "/community"
    }
  ];

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-xl shadow-lg">
      {/* Slides */}
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div 
            key={slide.id}
            className="w-full flex-shrink-0 relative"
          >
            
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0  bg-opacity-30"></div>
            </div>
            
           
            <div className="relative h-[500px] flex items-center px-8 md:px-16">
              <div className="max-w-2xl text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl mb-8">{slide.description}</p>
                <a 
                  href={slide.buttonLink}
                  className="inline-block px-8 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-medium text-lg transition duration-300"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button 
        
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full shadow-md transition"
        aria-label="Previous slide"
      >
        <FaArrowLeft className="text-emerald-700" />
      </button>
      <button 
        
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full shadow-md transition"
        aria-label="Next slide"
      >
        <FaArrowRight className="text-emerald-700" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${currentSlide === index ? 'bg-emerald-500 w-6' : 'bg-white bg-opacity-50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;