import React from 'react';
import WeatherContainer from './components/WeatherContainer';
import './App.css';

/**
 * Main App component for WeatherPulse application
 */
function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">
                <i className="fas fa-cloud-sun"></i>
              </span> 
              WeatherPulse
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="container weather-app">
          <h1 className="app-title">WeatherPulse</h1>
          <p className="app-subtitle">Your real-time weather companion</p>
          
          <div className="search-bar">
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search for a city..."
            />
            <button className="search-button">
              <i className="fas fa-search"></i>
            </button>
          </div>
          
          {/* Weather Container Component */}
          <WeatherContainer />
        </div>
      </main>
      
      <footer className="footer">
        <div className="container">
          <p>WeatherPulse &copy; {new Date().getFullYear()} | Demo Application with Animated Weather</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
