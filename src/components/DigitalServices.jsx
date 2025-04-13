import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const DigitalServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const partners = [
    { name: 'Codan', logo: 'https://seo.axiomthemes.com/wp-content/uploads/2023/04/partner-1-copyright.png' },
    { name: 'Media', logo: 'https://seo.axiomthemes.com/wp-content/uploads/2023/04/partner-2-copyright.png' },
    { name: 'Orca', logo: 'https://seo.axiomthemes.com/wp-content/uploads/2023/04/partner-3-copyright.png' },
    { name: 'Minagod', logo: 'https://seo.axiomthemes.com/wp-content/uploads/2023/04/partner-4-copyright.png' },
    { name: 'BR', logo: 'https://seo.axiomthemes.com/wp-content/uploads/2023/04/partner-5-copyright.png' },
    { name: 'Arquivar', logo: 'https://seo.axiomthemes.com/wp-content/uploads/2023/04/partner-6-copyright.png' },
  ];

  return (
    <>
      <section className="digital-services" ref={ref}>
        <div className="services-content">
          <span className="subtitle">WHO WE ARE</span>
          <h2>We provide best digital services</h2>
          <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.</p>
          <button className="discover-btn">Discover Now</button>
        </div>

        <motion.div 
          className="services-images"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.img 
            src="https://seo.axiomthemes.com/wp-content/uploads/2023/03/h32r.png" 
            alt="Digital Service 1"
            className="image-main"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          
          <motion.img 
            src="https://seo.axiomthemes.com/wp-content/uploads/2023/03/h32l.png" 
            alt="Digital Service 2"
            className="image-overlay"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </section>

      <div className="partners-section">
        <div className="partners-container">
          {partners.map((partner, index) => (
            <motion.img
              key={index}
              src={partner.logo}
              alt={partner.name}
              className='partners-container-image'
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DigitalServices;