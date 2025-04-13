import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BlogCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const blogs = [
    {
      category: 'MEDIA SEO',
      title: "What's trending on designers' charts this spring",
      date: 'Apr 21, 2020',
      comments: '0 Comments',
      image: 'https://seo.axiomthemes.com/wp-content/uploads/2020/04/image-9-890x664.jpg'
    },
    {
      category: 'MEDIA SEO',
      title: 'Fresh startup ideas for your digital business',
      date: 'Apr 21, 2020',
      comments: '0 Comments',
      image: 'https://seo.axiomthemes.com/wp-content/uploads/2020/04/image-11-890x664.jpg'
    },
    {
      category: 'MEDIA SEO',
      title: 'Top 5 targeting techniques to attract customers',
      date: 'Apr 21, 2020',
      comments: '0 Comments',
      image: 'https://seo.axiomthemes.com/wp-content/uploads/2020/04/image-12-890x664.jpg'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % blogs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="blog-section">
      <div className="blog-header">
        <span className="subtitle">OUR BLOG</span>
        <h2>Latest articles</h2>
      </div>

      <div className="blog-carousel">
        <div className="blog-container">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              className={`blog-card ${index === currentSlide ? 'active' : ''}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ 
                opacity: index === currentSlide ? 1 : 0.3,
                x: 0,
                scale: index === currentSlide ? 1 : 0.9
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="blog-content">
                <span className="blog-category">{blog.category}</span>
                <h3>{blog.title}</h3>
                <div className="blog-meta">
                  <span>{blog.date}</span>
                  <span>{blog.comments}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="carousel-dots">
          {blogs.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;