import React from 'react';

/**
 * WeatherDetails component - Displays current weather details
 * 
 * @param {Object} props
 * @param {Object} props.current - Current weather data
 * @param {Object} props.location - Location data
 * @returns {JSX.Element}
 */
const WeatherDetails = ({ current, location }) => {
  if (!current || !location) return null;

  // Helper function to format time from ISO string
  const formatTime = (isoString) => {
    try {
      const date = new Date(isoString);
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch (e) {
      return "Unknown";
    }
  };

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
    <div className="weather-details">
      <div className="location">
        <h2>{location.city}, {location.country}</h2>
        <p className="updated-time">Updated at {formatTime(current.updated_at)}</p>
      </div>
      
      <div className="current-weather">
        <div className="temperature-container">
          <h1 className="temperature">{current.temp}°C</h1>
          <p className="feels-like">Feels like {current.feels_like}°C</p>
        </div>
        
        <div className="condition-container">
          <i className={`weather-icon ${getWeatherIconClass(current.weather_condition)}`}></i>
          <p className="condition">{current.weather_condition}</p>
          <p className="description">{current.weather_description}</p>
        </div>
      </div>
      
      <div className="details-grid">
        <div className="detail-item">
          <i className="fas fa-wind"></i>
          <div>
            <p className="detail-label">Wind</p>
            <p className="detail-value">{current.wind_speed} m/s</p>
          </div>
        </div>
        
        <div className="detail-item">
          <i className="fas fa-tint"></i>
          <div>
            <p className="detail-label">Humidity</p>
            <p className="detail-value">{current.humidity}%</p>
          </div>
        </div>
        
        <div className="detail-item">
          <i className="fas fa-eye"></i>
          <div>
            <p className="detail-label">Visibility</p>
            <p className="detail-value">{current.visibility} km</p>
          </div>
        </div>
        
        <div className="detail-item">
          <i className="fas fa-sun"></i>
          <div>
            <p className="detail-label">UV Index</p>
            <p className="detail-value">{current.uv_index}</p>
          </div>
        </div>
      </div>
      
      {/* Weather alerts if any */}
      {location.alerts?.length > 0 && (
        <div className="weather-alerts">
          <h3>Weather Alerts</h3>
          {location.alerts.map((alert, index) => (
            <div key={index} className="alert-item">
              <i className="fas fa-exclamation-triangle"></i>
              <div>
                <p className="alert-title">{alert.type} - {alert.severity}</p>
                <p className="alert-description">{alert.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherDetails;
