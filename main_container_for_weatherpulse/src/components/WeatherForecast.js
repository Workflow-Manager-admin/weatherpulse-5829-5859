import React from 'react';

/**
 * WeatherForecast component - Displays hourly and daily weather forecasts
 * 
 * @param {Object} props
 * @param {Array} props.hourlyForecast - Array of hourly forecast data
 * @param {Array} props.dailyForecast - Array of daily forecast data
 * @returns {JSX.Element}
 */
const WeatherForecast = ({ hourlyForecast = [], dailyForecast = [] }) => {
  // Helper function to get weather icon class
  const getWeatherIconClass = (condition) => {
    if (!condition) return 'fas fa-cloud'; // Default icon if condition is undefined
    
    switch (condition.toLowerCase()) {
      case 'sunny':
        return 'fas fa-sun';
      case 'cloudy':
      case 'partly-cloudy':
        return 'fas fa-cloud';
      case 'rain':
        return 'fas fa-cloud-rain';
      case 'thunderstorm':
        return 'fas fa-bolt';
      case 'snow':
        return 'fas fa-snowflake';
      case 'foggy':
        return 'fas fa-smog';
      default:
        return 'fas fa-cloud';
    }
  };

  return (
    <div className="weather-forecast">
      {/* Hourly forecast */}
      {hourlyForecast && hourlyForecast.length > 0 && (
        <div className="hourly-forecast">
          <h3>Hourly Forecast</h3>
          <div className="forecast-scroll">
            {hourlyForecast.map((hour, index) => (
              <div key={index} className="forecast-item hourly-item">
                <p className="forecast-time">{hour.time}</p>
                <i className={`forecast-icon ${getWeatherIconClass(hour.weather_condition)}`}></i>
                <p className="forecast-temp">{hour.temp}°C</p>
                <p className="forecast-pop">{hour.probability_of_precipitation}%</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Daily forecast */}
      {dailyForecast && dailyForecast.length > 0 && (
        <div className="daily-forecast">
          <h3>7-Day Forecast</h3>
          <div className="forecast-list">
            {dailyForecast.map((day, index) => (
              <div key={index} className="forecast-item daily-item">
                <div className="day-info">
                  <p className="forecast-day">{day.day}</p>
                  <p className="forecast-date">{day.date}</p>
                </div>
                
                <i className={`forecast-icon ${getWeatherIconClass(day.weather_condition)}`}></i>
                
                <div className="temp-range">
                  <p className="forecast-temp-high">{day.temp_max}°</p>
                  <p className="forecast-temp-low">{day.temp_min}°</p>
                </div>
                
                <div className="pop-container">
                  <i className="fas fa-tint pop-icon"></i>
                  <p className="forecast-pop">{day.probability_of_precipitation}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherForecast;
