import React, { useState, useEffect } from 'react';
import { MdAnalytics } from "react-icons/md";
import { FaSearch, FaFolder } from "react-icons/fa";

const ServicesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      icon: <MdAnalytics />,
      title: "Marketing Analysis",
      description: "Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae.",
      bgColor: "#e8e9ff"
    },
    {
      icon: <FaSearch />,
      title: "SEO Optimization",
      description: "Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae.",
      bgColor: "#ddf5ff"
    },
    {
      icon: <FaFolder />,
      title: "Content Strategy",
      description: "Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae.",
      bgColor: "#e8fff8"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="services-carousel">
      <div className="carousel-container">
        {services.map((service, index) => (
          <div 
            key={index}
            className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundColor: service.bgColor }}
          >
            <div className="service-icon">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesCarousel;