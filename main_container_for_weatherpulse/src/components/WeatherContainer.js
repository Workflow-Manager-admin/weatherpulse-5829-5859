import React, { useState, useEffect } from 'react';
import WeatherAnimations from './animations/WeatherAnimations';
import WeatherDetails from './WeatherDetails';
import WeatherForecast from './WeatherForecast';
import mockWeatherData, { getRandomWeatherCondition } from '../data/mockWeatherData';
import './WeatherContainer.css';

/**
 * WeatherContainer component - Main container for the WeatherPulse application
 * 
 * @returns {JSX.Element}
 */
const WeatherContainer = () => {
  // Initial state from mock data
  const [weatherData, setWeatherData] = useState(mockWeatherData);
  
  // State for the current condition (for demo/animation purposes)
  const [currentCondition, setCurrentCondition] = useState(weatherData.current.weather_condition);

  // For demo: Allow changing the weather condition to see different animations
  const handleConditionChange = (e) => {
    const newCondition = e.target.value;
    setCurrentCondition(newCondition);
    
    // Update the mock data with the new condition
    setWeatherData(prev => ({
      ...prev,
      current: {
        ...prev.current,
        weather_condition: newCondition,
        weather_description: `${newCondition} weather condition`,
      }
    }));
  };

  // Get CSS class based on weather condition for background styling
  const getContainerClass = () => {
    const condition = currentCondition.toLowerCase();
    if (condition.includes('sun')) return 'sunny';
    if (condition.includes('cloud')) return 'cloudy';
    if (condition.includes('rain')) return 'rain';
    if (condition.includes('thunder')) return 'thunderstorm';
    if (condition.includes('snow')) return 'snow';
    if (condition.includes('fog')) return 'foggy';
    return 'cloudy'; // default
  };

  return (
    <div className={`weather-container ${getContainerClass()}`}>
      {/* Weather animations based on current condition */}
      <div className="weather-animation-backdrop">
        <WeatherAnimations condition={currentCondition} />
      </div>
      
      <div className="weather-content">
        {/* Demo controls - for changing weather conditions */}
        <div className="weather-controls">
          <select 
            className="weather-condition-selector"
            value={currentCondition}
            onChange={handleConditionChange}
          >
            <option value="Sunny">Sunny</option>
            <option value="Cloudy">Cloudy</option>
            <option value="Rain">Rain</option>
            <option value="Thunderstorm">Thunderstorm</option>
            <option value="Snow">Snow</option>
            <option value="Foggy">Foggy</option>
          </select>
        </div>
        
        {/* Current weather details */}
        <WeatherDetails 
          current={weatherData.current}
          location={weatherData.location}
        />
        
        {/* Weather forecasts */}
        <WeatherForecast 
          hourlyForecast={weatherData.hourly_forecast}
          dailyForecast={weatherData.daily_forecast}
        />
      </div>
    </div>
  );
};

export default WeatherContainer;
