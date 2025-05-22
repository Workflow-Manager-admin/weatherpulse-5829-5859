// Mock weather data for the WeatherPulse application
// This file provides mock data for multiple cities that would typically come from a weather API

/**
 * Collection of weather data for multiple cities
 * Each city contains complete weather information including current conditions,
 * hourly and daily forecasts, and any weather alerts
 */
const mockWeatherData = {
  // San Francisco data (updated from original)
  "san-francisco": {
    location: {
      id: "san-francisco",
      city: "San Francisco",
      country: "USA",
      lat: 37.7749,
      lon: -122.4194,
      timezone: "America/Los_Angeles"
    },
    current: {
      temp: 18, // in Celsius
      feels_like: 17,
      humidity: 72,
      wind_speed: 4.2, // in m/s
      wind_direction: 270, // in degrees
      weather_condition: "Cloudy",
      weather_description: "Partly cloudy with occasional sun",
      weather_icon: "partly-cloudy",
      uv_index: 3,
      visibility: 7.8, // in km
      pressure: 1015, // in hPa
      updated_at: "2023-07-20T15:30:00Z"
    },
    hourly_forecast: [
      {
        time: "15:00",
        temp: 18,
        weather_condition: "Cloudy",
        weather_icon: "partly-cloudy",
        probability_of_precipitation: 20
      },
      {
        time: "16:00",
        temp: 17,
        weather_condition: "Cloudy",
        weather_icon: "partly-cloudy",
        probability_of_precipitation: 20
      },
      {
        time: "17:00",
        temp: 17,
        weather_condition: "Rain",
        weather_icon: "rain",
        probability_of_precipitation: 60
      },
      {
        time: "18:00",
        temp: 16,
        weather_condition: "Rain",
        weather_icon: "rain",
        probability_of_precipitation: 80
      },
      {
        time: "19:00",
        temp: 15,
        weather_condition: "Rain",
        weather_icon: "rain",
        probability_of_precipitation: 70
      },
      {
        time: "20:00",
        temp: 14,
        weather_condition: "Cloudy",
        weather_icon: "partly-cloudy",
        probability_of_precipitation: 30
      }
    ],
    daily_forecast: [
      {
        day: "Today",
        date: "Jul 20",
        temp_max: 19,
        temp_min: 14,
        weather_condition: "Cloudy",
        weather_icon: "partly-cloudy",
        probability_of_precipitation: 50
      },
      {
        day: "Thu",
        date: "Jul 21",
        temp_max: 20,
        temp_min: 15,
        weather_condition: "Sunny",
        weather_icon: "sunny",
        probability_of_precipitation: 10
      },
      {
        day: "Fri",
        date: "Jul 22",
        temp_max: 22,
        temp_min: 16,
        weather_condition: "Sunny",
        weather_icon: "sunny",
        probability_of_precipitation: 0
      },
      {
        day: "Sat",
        date: "Jul 23",
        temp_max: 24,
        temp_min: 17,
        weather_condition: "Sunny",
        weather_icon: "sunny",
        probability_of_precipitation: 0
      },
      {
        day: "Sun",
        date: "Jul 24",
        temp_max: 21,
        temp_min: 16,
        weather_condition: "Cloudy",
        weather_icon: "partly-cloudy",
        probability_of_precipitation: 30
      },
      {
        day: "Mon",
        date: "Jul 25",
        temp_max: 19,
        temp_min: 15,
        weather_condition: "Rain",
        weather_icon: "rain",
        probability_of_precipitation: 60
      },
      {
        day: "Tue",
        date: "Jul 26",
        temp_max: 18,
        temp_min: 14,
        weather_condition: "Rain",
        weather_icon: "rain",
        probability_of_precipitation: 70
      }
    ],
    weather_alerts: [
      {
        type: "Rain",
        severity: "Moderate",
        description: "Moderate rainfall expected later today",
        issued_at: "2023-07-20T12:00:00Z",
        expires_at: "2023-07-21T00:00:00Z"
      }
    ]
  },
  
  // New York City data
  "new-york": {
    location: {
      id: "new-york",
      city: "New York",
      country: "USA",
      lat: 40.7128,
      lon: -74.0060,
      timezone: "America/New_York"
    },
    current: {
      temp: 28,
      feels_like: 30,
      humidity: 65,
      wind_speed: 5.1,
      wind_direction: 180,
      weather_condition: "Rain",
      weather_description: "Light rain with humid conditions",
      weather_icon: "rain",
      uv_index: 4,
      visibility: 6.2,
      pressure: 1010,
      updated_at: "2023-07-20T15:30:00Z"
    },
    hourly_forecast: [
      {
        time: "15:00",
        temp: 28,
        weather_condition: "Rain",
        weather_icon: "rain",
        probability_of_precipitation: 70
      },
      {
        time: "16:00",
        temp: 27,
        weather_condition: "Rain",
        weather_icon: "rain",
        probability_of_precipitation: 80
      },
      {
        time: "17:00",
        temp: 26,
        weather_condition: "Thunderstorm",
        weather_icon: "thunderstorm",
        probability_of_precipitation: 90
      },
      {
        time: "18:00",
        temp: 25,
        weather_condition: "Thunderstorm",
        weather_icon: "thunderstorm",
        probability_of_precipitation: 90
      },
      {
        time: "19:00",
        temp: 24,
        weather_condition: "Rain",
        weather_icon: "rain",
        probability_of_precipitation: 70
      },
      {
        time: "20:00",
        temp: 23,
        weather_condition: "Cloudy",
        weather_icon: "partly-cloudy",
        probability_of_precipitation: 40
      }
    ],
    daily_forecast: [
      {
        day: "Today",
        date: "Jul 20",
        temp_max: 29,
        temp_min: 22,
        weather_condition: "Rain",
        weather_icon: "rain",
        probability_of_precipitation: 80
      },
      {
        day: "Thu",
        date: "Jul 21",
        temp_max: 30,
        temp_min: 23,
        weather_condition: "Cloudy",
        weather_icon: "partly-cloudy",
        probability_of_precipitation: 30
      },
      {
        day: "Fri",
        date: "Jul 22",
        temp_max: 31,
        temp_min: 24,
        weather_condition: "Sunny",
        weather_icon: "sunny",
        probability_of_precipitation: 10
      },
      {
        day: "Sat",
        date: "Jul 23",
        temp_max: 33,
        temp_min: 25,
        weather_condition: "Sunny",
        weather_icon: "sunny",
        probability_of_precipitation: 5
      },
      {
        day: "Sun",
        date: "Jul 24",
        temp_max: 34,
        temp_min: 26,
        weather_condition: "Sunny",
        weather_icon: "sunny",
        probability_of_precipitation: 5
      },
      {
        day: "Mon",
        date: "Jul 25",
        temp_max: 32,
        temp_min: 25,
        weather_condition: "Cloudy",
        weather_icon: "partly-cloudy",
        probability_of_precipitation: 20
      },
      {
        day: "Tue",
        date: "Jul 26",
        temp_max: 31,
        temp_min: 24,
        weather_condition: "Rain",
        weather_icon: "rain",
        probability_of_precipitation: 60
      }
    ],
    weather_alerts: [
      {
        type: "Thunderstorm",
        severity: "Moderate",
        description: "Thunderstorms expected this evening with potential for lightning",
        issued_at: "2023-07-20T14:00:00Z",
        expires_at: "2023-07-20T23:00:00Z"
      }
    ]
  },
  
  // London data
  "london": {
    location: {
      id: "london",
      city: "London",
      country: "UK",
      lat: 51.5074,
      lon: -0.1278,
      timezone: "Europe/London"
    },
    current: {
      temp: 16,
      feels_like: 15,
      humidity: 80,
      wind_speed: 6.2,
      wind_direction: 220,
      weather_condition: "Foggy",
      weather_description: "Foggy with light drizzle",
      weather_icon: "foggy",
      uv_index: 2,
      visibility: 2.5,
      pressure: 1012,
      updated_at: "2023-07-20T15:30:00Z"
    },
    hourly_forecast: [
      {
        time: "15:00",
        temp: 16,
        weather_condition: "Foggy",
        weather_icon: "foggy",
        probability_of_precipitation: 40
      },
      {
        time: "16:00",
        temp: 16,
        weather_condition: "Cloudy",
        weather_icon: "cloudy",
        probability_of_precipitation: 30
      },
      {
        time: "17:00",
        temp: 15,
        weather_condition: "Cloudy",
        weather_icon: "cloudy",
        probability_of_precipitation: 20
      },
      {
        time: "18:00",
        temp: 15,
        weather_condition: "Cloudy",
        weather_icon: "cloudy",
        probability_of_precipitation: 20
      },
      {
        time: "19:00",
        temp: 14,
        weather_condition: "Cloudy",
        weather_icon: "cloudy",
        probability_of_precipitation: 10
      },
      {
        time: "20:00",
        temp: 13,
        weather_condition: "Cloudy",
        weather_icon: "cloudy",
        probability_of_precipitation: 10
      }
    ],
    daily_forecast: [
      {
        day: "Today",
        date: "Jul 20",
        temp_max: 17,
        temp_min: 13,
        weather_condition: "Foggy",
        weather_icon: "foggy",
        probability_of_precipitation: 40
      },
      {
        day: "Thu",
        date: "Jul 21",
        temp_max: 18,
        temp_min: 13,
        weather_condition: "Cloudy",
        weather_icon: "cloudy",
        probability_of_precipitation: 30
      },
      {
        day: "Fri",
        date: "Jul 22",
        temp_max: 19,
        temp_min: 14,
        weather_condition: "Cloudy",
        weather_icon: "cloudy",
        probability_of_precipitation: 20
      },
      {
        day: "Sat",
        date: "Jul 23",
        temp_max: 21,
        temp_min: 15,
        weather_condition: "Partly-cloudy",
        weather_icon: "partly-cloudy",
        probability_of_precipitation: 10
      },
      {
        day: "Sun",
        date: "Jul 24",
        temp_max: 22,
        temp_min: 16,
        weather_condition: "Sunny",
        weather_icon: "sunny",
        probability_of_precipitation: 5
      },
      {
        day: "Mon",
        date: "Jul 25",
        temp_max: 21,
        temp_min: 16,
        weather_condition: "Cloudy",
        weather_icon: "cloudy",
        probability_of_precipitation: 20
      },
      {
        day: "Tue",
        date: "Jul 26",
        temp_max: 20,
        temp_min: 15,
        weather_condition: "Rain",
        weather_icon: "rain",
        probability_of_precipitation: 50
      }
    ],
    weather_alerts: [] // No active alerts for London
  },
  
  // Tokyo data
  "tokyo": {
    location: {
      id: "tokyo",
      city: "Tokyo",
      country: "Japan",
      lat: 35.6762,
      lon: 139.6503,
      timezone: "Asia/Tokyo"
    },
    current: {
      temp: 32,
      feels_like: 35,
      humidity: 75,
      wind_speed: 3.1,
      wind_direction: 190,
      weather_condition: "Sunny",
      weather_description: "Hot and humid with clear skies",
      weather_icon: "sunny",
      uv_index: 9,
      visibility: 9.5,
      pressure: 1008,
      updated_at: "2023-07-20T15:30:00Z"
    },
    hourly_forecast: [
      {
        time: "15:00",
        temp: 32,
        weather_condition: "Sunny",
        weather_icon: "sunny",
        probability_of_precipitation: 0
      },
      {
        time: "16:00",
        temp: 31,
        weather_condition: "Sunny",
        weather_icon: "sunny",
        probability_of_precipitation: 0
      },
      {
        time: "17:00",
        temp: 30,
        weather_condition: "Sunny",
        weather_icon: "sunny",
        probability_of_precipitation: 0
      },
      {
        time: "18:00",
        temp: 29,
        weather_condition: "Partly-cloudy",
        weather_icon: "partly-cloudy",
        probability_of_precipitation: 5
      },
      {
        time: "19:00",
        temp: 28,
        weather_condition: "Partly-cloudy",
        weather_icon: "partly-cloudy",
        probability_of_precipitation: 10
      },
      {
        time: "20:00",
        temp: 27,
        weather_condition: "Partly-cloudy",
        weather_icon: "partly-cloudy",
        probability_of_precipitation: 10
      }
    ],
    daily_forecast: [
      {
        day: "Today",
        date: "Jul 20",
        temp_max: 32,
        temp_min: 26,
        weather_condition: "Sunny",
        weather_icon: "sunny",
        probability_of_precipitation: 0
      },
      {
        day: "Thu",
        date: "Jul 21",
        temp_max: 33,
        temp_min: 26,
        weather_condition: "Sunny",
        weather_icon: "sunny",
        probability_of_precipitation: 5
      },
      {
        day: "Fri",
        date: "Jul 22",
        temp_max: 34,
        temp_min: 27,
        weather_condition: "Sunny",
        weather_icon: "sunny",
        probability_of_precipitation: 10
      },
      {
        day: "Sat",
        date: "Jul 23",
        temp_max: 33,
        temp_min: 27,
        weather_condition: "Cloudy",
        weather_icon: "cloudy",
        probability_of_precipitation: 30
      },
      {
        day: "Sun",
        date: "Jul 24",
        temp_max: 31,
        temp_min: 26,
        weather_condition: "Rain",
        weather_icon: "rain",
        probability_of_precipitation: 60
      },
      {
        day: "Mon",
        date: "Jul 25",
        temp_max: 30,
        temp_min: 25,
        weather_condition: "Rain",
        weather_icon: "rain",
        probability_of_precipitation: 70
      },
      {
        day: "Tue",
        date: "Jul 26",
        temp_max: 29,
        temp_min: 24,
        weather_condition: "Cloudy",
        weather_icon: "cloudy",
        probability_of_precipitation: 30
      }
    ],
    weather_alerts: [
      {
        type: "Heat",
        severity: "High",
        description: "Heat advisory in effect: stay hydrated and avoid prolonged sun exposure",
        issued_at: "2023-07-20T08:00:00Z",
        expires_at: "2023-07-20T20:00:00Z"
      }
    ]
  },
  
  // Sydney data
  "sydney": {
    location: {
      id: "sydney",
      city: "Sydney",
      country: "Australia",
      lat: -33.8688,
      lon: 151.2093,
      timezone: "Australia/Sydney"
    },
    current: {
      temp: 12,
      feels_like: 10,
      humidity: 60,
      wind_speed: 8.5,
      wind_direction: 160,
      weather_condition: "Rain",
      weather_description: "Light rain showers",
      weather_icon: "rain",
      uv_index: 2,
      visibility: 8.0,
      pressure: 1020,
      updated_at: "2023-07-20T15:30:00Z"
    },
    hourly_forecast: [
      {
        time: "15:00",
        temp: 12,
        weather_condition: "Rain",
        weather_icon: "rain",
        probability_of_precipitation: 60
      },
      {
        time: "16:00",
        temp: 11,
        weather_condition: "Rain",
        weather_icon: "rain",
        probability_of_precipitation: 70
      },
      {
        time: "17:00",
        temp: 11,
        weather_condition: "Rain",
        weather_icon: "rain",
        probability_of_precipitation: 80
      },
      {
        time: "18:00",
        temp: 10,
        weather_condition: "Rain",
        weather_icon: "rain",
        probability_of_precipitation: 70
      },
      {
        time: "19:00",
        temp: 10,
        weather_condition: "Cloudy",
        weather_icon: "cloudy",
        probability_of_precipitation: 40
      },
      {
        time: "20:00",
        temp: 9,
        weather_condition: "Cloudy",
        weather_icon: "cloudy",
        probability_of_precipitation: 30
      }
    ],
    daily_forecast: [
      {
        day: "Today",
        date: "Jul 20",
        temp_max: 14,
        temp_min: 9,
        weather_condition: "Rain",
        weather_icon: "rain",
        probability_of_precipitation: 70
      },
      {
        day: "Thu",
        date: "Jul 21",
        temp_max: 15,
        temp_min: 10,
        weather_condition: "Cloudy",
        weather_icon: "cloudy",
        probability_of_precipitation: 30
      },
      {
        day: "Fri",
        date: "Jul 22",
        temp_max: 16,
        temp_min: 11,
        weather_condition: "Partly-cloudy",
        weather_icon: "partly-cloudy",
        probability_of_precipitation: 20
      },
      {
        day: "Sat",
        date: "Jul 23",
        temp_max: 17,
        temp_min: 12,
        weather_condition: "Sunny",
        weather_icon: "sunny",
        probability_of_precipitation: 10
      },
      {
        day: "Sun",
        date: "Jul 24",
        temp_max: 18,
        temp_min: 12,
        weather_condition: "Sunny",
        weather_icon: "sunny",
        probability_of_precipitation: 5
      },
      {
        day: "Mon",
        date: "Jul 25",
        temp_max: 17,
        temp_min: 11,
        weather_condition: "Partly-cloudy",
        weather_icon: "partly-cloudy",
        probability_of_precipitation: 20
      },
      {
        day: "Tue",
        date: "Jul 26",
        temp_max: 15,
        temp_min: 10,
        weather_condition: "Rain",
        weather_icon: "rain",
        probability_of_precipitation: 60
      }
    ],
    weather_alerts: [
      {
        type: "Wind",
        severity: "Moderate",
        description: "Strong wind advisory for coastal areas",
        issued_at: "2023-07-20T09:00:00Z",
        expires_at: "2023-07-21T03:00:00Z"
      }
    ]
  },
  
  // Cairo data
  "cairo": {
    location: {
      id: "cairo",
      city: "Cairo",
      country: "Egypt",
      lat: 30.0444,
      lon: 31.2357,
      timezone: "Africa/Cairo"
    },
    current: {
      temp: 38,
      feels_like: 40,
      humidity: 15,
      wind_speed: 5.8,
      wind_direction: 30,
      weather_condition: "Sunny",
      weather_description: "Hot and dry with clear skies",
      weather_icon: "sunny",
      uv_index: 11,
      visibility: 10.0,
      pressure: 1007,
      updated_at: "2023-07-20T15:30:00Z"
    },
    hourly_forecast: [
      {
        time: "15:00",
        temp: 38,
        weather_condition: "Sunny",
        weather_icon: "sunny",
        probability_of_precipitation: 0
      },
      {
        time: "16:00",
        temp: 37,
        weather_condition: "Sunny",
        weather_icon: "sunny",
        probability_of_precipitation: 0
      },
      {
        time: "17:00",
        temp: 36,
        weather_condition: "Sunny",
        weather_icon: "sunny",
        probability_of_precipitation: 0
      },
      {
        time: "18:00",
        temp: 34,
        weather_condition: "Sunny",
        weather_icon: "sunny",
        probability_of_precipitation: 0
      },
      {
        time: "19:00",
        temp: 31,
        weather_condition: "Clear",
        weather_icon: "clear",
        probability_of_precipitation: 0
      },
      {
        time: "20:00",
        temp: 29,
        weather_condition: "Clear",
        weather_icon: "clear",
        probability_of_precipitation: 0
      }
    ],
    daily_forecast: [
      {
        day: "Today",
        date: "Jul 20",
        temp_max: 38,
        temp_min: 26,
        weather_condition: "Sunny",
        weather_icon: "sunny",
        probability_of_precipitation: 0
      },
      {
        day: "Thu",
        date: "Jul 21",
        temp_max: 39,
        temp_min: 27,
        weather_condition: "Sunny",
        weather_icon: "sunny",
        probability_of_precipitation: 0
      },
      {
        day: "Fri",
        date: "Jul 22",
        temp_max: 40,
        temp_min: 27,
        weather_condition: "Sunny",
        weather_icon: "sunny",
        probability_of_precipitation: 0
      },
      {
        day: "Sat",
        date: "Jul 23",
        temp_max: 41,
        temp_min: 28,
        weather_condition: "Sunny",
        weather_icon: "sunny",
        probability_of_precipitation: 0
      },
      {
        day: "Sun",
        date: "Jul 24",
        temp_max: 40,
        temp_min: 27,
        weather_condition: "Sunny",
        weather_icon: "sunny",
        probability_of_precipitation: 0
      },
      {
        day: "Mon",
        date: "Jul 25",
        temp_max: 39,
        temp_min: 26,
        weather_condition: "Sunny",
        weather_icon: "sunny",
        probability_of_precipitation: 0
      },
      {
        day: "Tue",
        date: "Jul 26",
        temp_max: 38,
        temp_min: 25,
        weather_condition: "Sunny",
        weather_icon: "sunny",
        probability_of_precipitation: 0
      }
    ],
    weather_alerts: [
      {
        type: "Heat",
        severity: "Extreme",
        description: "Extreme heat warning: Stay indoors during peak hours and stay hydrated",
        issued_at: "2023-07-20T06:00:00Z",
        expires_at: "2023-07-21T18:00:00Z"
      }
    ]
  }
};

/**
 * Returns a list of all available cities in the mock data
 * @returns {Array} Array of city objects with id, name, and country
 */
export const getCityList = () => {
  return Object.keys(mockWeatherData).map(cityId => ({
    id: cityId,
    name: mockWeatherData[cityId].location.city,
    country: mockWeatherData[cityId].location.country
  }));
};

/**
 * Find a city by name (case-insensitive partial match)
 * @param {string} searchTerm - The search term to find in city names
 * @returns {Array} Array of matching city objects
 */
export const findCityByName = (searchTerm) => {
  if (!searchTerm) return [];
  
  const normalizedSearch = searchTerm.toLowerCase();
  
  return Object.keys(mockWeatherData)
    .filter(cityId => 
      mockWeatherData[cityId].location.city.toLowerCase().includes(normalizedSearch) ||
      mockWeatherData[cityId].location.country.toLowerCase().includes(normalizedSearch)
    )
    .map(cityId => ({
      id: cityId,
      name: mockWeatherData[cityId].location.city,
      country: mockWeatherData[cityId].location.country
    }));
};

/**
 * Get weather data for a specific city by ID
 * @param {string} cityId - The ID of the city
 * @returns {Object|null} The weather data for the city or null if not found
 */
export const getWeatherDataForCity = (cityId) => {
  return mockWeatherData[cityId] || null;
};

/**
 * Get the default city data (for initial app load)
 * @returns {Object} The default city's weather data
 */
export const getDefaultCityData = () => {
  return mockWeatherData["san-francisco"];
};

// Function to simulate changing weather conditions for demo purposes
// Can be used to demonstrate the changing animations
export const getRandomWeatherCondition = () => {
  const conditions = ["Sunny", "Cloudy", "Rain", "Thunderstorm", "Snow", "Foggy"];
  const randomIndex = Math.floor(Math.random() * conditions.length);
  return conditions[randomIndex];
};

export default mockWeatherData;
