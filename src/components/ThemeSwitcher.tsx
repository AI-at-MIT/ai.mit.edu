"use client"
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

import {
  faMoon,
  faSun
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";

const SunIcon = ({ size = 30, color = 'currentColor', isRotated = false }) => {

  // Define the transformation values for rotated state
  const rayTransforms = [
    'rotate(0 15 15)',
    'rotate(45 15 15)',
    'rotate(90 15 15)',
    'rotate(135 15 15)',
    'rotate(180 15 15)',
    'rotate(225 15 15)',
    'rotate(270 15 15)',
    'rotate(315 15 15)',
  ];

  return (
    <button
      style={{ border: 'none', background: 'none', cursor: 'pointer' }}
    >
      <svg width={size} height={size}>
        <circle 
          cx={size / 2} 
          cy={size / 2} 
          r={size / 5} 
          className="sun-center fill-color-1"

          
          style={isRotated ? {} : { transform: 'scale(2)' }} // Scale with the correct origin
        />
        {/* Render rays with animations */}
        {rayTransforms.map((transform, index) => (
          <line
            key={index}
            className={`ray ${isRotated ? 'rotate' : 'reset'}`} // Apply classes based on rotation state
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            x1={size / 2}
            y1="1"
            x2={size / 2}
            y2="4"
            transform={isRotated ? transform : 'rotate(0 15 15)'}
          />
        ))}
      </svg>
    </button>
  );
};


const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)


  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  
  const handleThemeChange = () => {
    if (theme=="light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <div suppressHydrationWarning>
      <div className="">
      <button onClick={() => handleThemeChange()}> 
        <div className="theme-button w-10 h-10 flex align-center items-center justify-center sponsor  ">
        <SunIcon isRotated={theme!="light"}/>

        </div>
        </button>

      </div>

    </div>
  )
}

export default ThemeChanger;