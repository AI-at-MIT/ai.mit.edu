import { useState, useEffect } from 'react';

export default function EventCardLoading() {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);  

  useEffect(() => {
    let angle = 0;
    const width = 500; // card width
    const height = 500; // card height
    
    const interval = setInterval(() => {
      angle += 2 * Math.PI / 360; 

      // calculate x and y based on angle    
      const x = width / 2 + (width / 2 - 10) * Math.cos(angle); 
      const y = height / 2 + (height / 2 - 10) * Math.sin(angle);
      
      setX(x);
      setY(y);
      
    }, 3);

    return () => clearInterval(interval);

  }, []);

  return (
    <div
      className="event-card h-[4.0rem] m-1 group rounded-lg border border-transparent w-full px-5 py-3 flex flex-col" 
      style={{
        background: `radial-gradient(circle at ${x}px ${y}px,
          rgba(255, 255, 255, 0.1) 0%,
          rgba(255, 255, 255, 0.05) 100%`,
        animation: 'rotate 2s infinite'
      }}
    >
    </div>
  );
}