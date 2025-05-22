import React, { useEffect, useState } from 'react';
import './WeatherAnimations.css';

/**
 * WeatherAnimations component - Renders animations based on weather conditions
 * 
 * @param {Object} props
 * @param {string} props.condition - The weather condition (Sunny, Cloudy, Rain, etc.)
 * @returns {JSX.Element}
 */
const WeatherAnimations = ({ condition = "Cloudy" }) => {
  const [raindrops, setRaindrops] = useState([]);
  const [snowflakes, setSnowflakes] = useState([]);
  const [sunRays, setSunRays] = useState([]);

  // Generate sun rays when condition is Sunny
  useEffect(() => {
    if (condition === "Sunny") {
      const rays = [];
      for (let i = 0; i < 12; i++) {
        const rotation = i * 30;
        rays.push(
          <div 
            key={`sunray-${i}`} 
            className="sun-ray" 
            style={{
              transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
              animation: `sun-pulse ${3 + i % 2}s ease-in-out infinite`
            }}
          />
        );
      }
      setSunRays(rays);
    }
  }, [condition]);

  // Generate raindrops when condition is Rain or Thunderstorm
  useEffect(() => {
    if (condition === "Rain" || condition === "Thunderstorm") {
      const drops = [];
      const dropCount = condition === "Thunderstorm" ? 100 : 70;
      
      for (let i = 0; i < dropCount; i++) {
        const randomLeft = Math.random() * 100;
        const randomDuration = 0.5 + Math.random() * 1;
        const randomDelay = Math.random() * 2;
        
        drops.push(
          <div 
            key={`raindrop-${i}`} 
            className="raindrop" 
            style={{
              left: `${randomLeft}%`,
              animation: `rain-fall ${randomDuration}s linear ${randomDelay}s infinite`
            }}
          />
        );
      }
      setRaindrops(drops);
    } else {
      setRaindrops([]);
    }
  }, [condition]);

  // Generate snowflakes when condition is Snow
  useEffect(() => {
    if (condition === "Snow") {
      const flakes = [];
      
      for (let i = 0; i < 50; i++) {
        const size = 2 + Math.random() * 6;
        const randomLeft = Math.random() * 100;
        const randomDuration = 3 + Math.random() * 5;
        const randomDelay = Math.random() * 5;
        
        flakes.push(
          <div 
            key={`snowflake-${i}`} 
            className="snowflake" 
            style={{
              left: `${randomLeft}%`,
              width: `${size}px`,
              height: `${size}px`,
              animation: `snowfall ${randomDuration}s linear ${randomDelay}s infinite`
            }}
          />
        );
      }
      setSnowflakes(flakes);
    } else {
      setSnowflakes([]);
    }
  }, [condition]);

  return (
    <div className="weather-animation-container">
      {/* Sunny animation */}
      {condition === "Sunny" && (
        <>
          <div className="sun"></div>
          <div className="sun-rays">{sunRays}</div>
        </>
      )}

      {/* Cloudy animation */}
      {(condition === "Cloudy" || condition === "Rain" || condition === "Snow" || condition === "Thunderstorm") && (
        <>
          <div className="cloud cloud-1"></div>
          <div className="cloud cloud-2"></div>
          <div className="cloud cloud-3"></div>
        </>
      )}

      {/* Rain animation */}
      {(condition === "Rain" || condition === "Thunderstorm") && (
        <div className="rain-container">
          {raindrops}
        </div>
      )}

      {/* Thunder animation */}
      {condition === "Thunderstorm" && (
        <div className="lightning"></div>
      )}

      {/* Snow animation */}
      {condition === "Snow" && (
        <div className="snow-container">
          {snowflakes}
        </div>
      )}

      {/* Fog animation */}
      {condition === "Foggy" && (
        <div className="fog"></div>
      )}
    </div>
  );
};

export default WeatherAnimations;
