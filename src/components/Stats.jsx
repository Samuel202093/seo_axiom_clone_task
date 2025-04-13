import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const stats = [
    { number: 93, label: 'Projects' },
    { number: 65, label: 'People' },
    { number: 10, label: 'Years' },
    { number: 15, label: 'Offices' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section">
      <div className="stats-container" ref={containerRef}>
        {stats.map((stat, index) => (
          <div className="stat-item" key={index}>
            <div className="stat-number">
              <CountUp
                start={0}
                end={stat.number}
                duration={2.5}
                separator=","
                enableScrollSpy={true}
                scrollSpyDelay={200}
              />
            </div>
            <h3>{stat.label}</h3>
          </div>
        ))}
      </div>

      <div className="stats-content">
        <div className="content-left">
          <span className="subtitle">CREATIVE SOLUTIONS</span>
          <h2>We make unique & memorable brands</h2>
        </div>
        <div className="content-right">
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque lorem in voluptate velit iusto odio dignissimos duci esse.</p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
          <a href="#" className="read-more">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default Stats;