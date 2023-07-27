import { useEffect } from 'react';

function updateGradient() {

    const currentTime = new Date().getTime();
    const centerX = (Math.sin(currentTime / 2000) ) * 80; // Adjust the speed and range of the center movement
    const centerY = (Math.cos(currentTime / 2000) ) * 80; // Adjust the speed and range of the center movement
    document.documentElement.style.setProperty('--b-x-offset', `${centerX}%`);
    document.documentElement.style.setProperty('--b-y-offset', `${centerY}%`);
  }


export default function BackgroundAnimation() {
  useEffect(() => {
    const interval = setInterval(updateGradient, 100); // Adjust the interval value for faster or slower color changes

    return () => {
      clearInterval(interval);
    };
  }, []);
}