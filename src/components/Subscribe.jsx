import React, { useState, useEffect } from 'react';
import { IoRocketOutline } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://seo.axiomthemes.com/wp-content/uploads/2021/09/image-1-120x120.jpg",
      name: "John Smith",
      position: "Marketing Director"
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        name: "Declan Rice",
        position: "Accountant"
      },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (agreed && email) {
      // Handle subscription logic here
      console.log('Subscribed:', email);
    }
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="subscribe-section">
      <div className="subscribe-container">
        <div className="subscribe-form">
          <h2>Subscribe for the exclusive updates!</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="subscribe-btn">
                <IoRocketOutline /> Subscribe
              </button>
            </div>
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="privacy"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <label htmlFor="privacy">
                I agree to the <a href="/privacy">Privacy Policy</a>
              </label>
            </div>
          </form>
        </div>

        <div className="testimonial-carousel">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial ${index === currentTestimonial ? 'active' : ''}`}
            >
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-nav">
                <button onClick={prevTestimonial} className="nav-btn">
                  <IoIosArrowBack />
                </button>
                <button onClick={nextTestimonial} className="nav-btn">
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscribe;