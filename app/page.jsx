
"use client";
import React, { useEffect } from 'react';
import { timelineData } from './data.js';
import './globals.css';

const TimelineItem = ({ data, index }) => {
  return (
    <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
      <div className="timeline-content">
        <span className="tag">{data.category}</span>
        <time>{data.year}</time>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        {data.image && (
          <div className="timeline-image-wrapper">
            <img 
              src={data.image} 
              alt={data.title} 
              style={{ width: '100%', borderRadius: '8px', marginTop: '15px' }} 
            />
          </div>
        )}
        <span className="circle"></span>
      </div>
    </div>
  );
};

const Timeline = () => {
  useEffect(() => {
    const items = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    items.forEach(item => observer.observe(item));

    // Cleanup observer on unmount
    return () => items.forEach(item => observer.unobserve(item));
  }, []);

  return (
    <div className="timeline-container">
      {timelineData.length > 0 && (
        <div className="timeline-wrapper">
          {timelineData.map((data, idx) => (
            <TimelineItem data={data} key={idx} index={idx} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;