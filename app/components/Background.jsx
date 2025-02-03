"use client";

import Particle from './Particle';

const Background = () => {
  return (
    <div className="background-wrapper">
      <div 
        style={{
          background: 'linear-gradient(to bottom, #000015, #000025)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      />
      <Particle />
    </div>
  );
};

export default Background; 