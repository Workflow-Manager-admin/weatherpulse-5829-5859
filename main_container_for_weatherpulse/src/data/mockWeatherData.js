// Mock weather data for the WeatherPulse application
// This simulates the data that would typically come from a weather API

const mockWeatherData = {
  location: {
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
};

// Function to simulate changing weather conditions for demo purposes
// Can be used to demonstrate the changing animations
export const getRandomWeatherCondition = () => {
  const conditions = ["Sunny", "Cloudy", "Rain", "Thunderstorm", "Snow", "Foggy"];
  const randomIndex = Math.floor(Math.random() * conditions.length);
  return conditions[randomIndex];
};

export default mockWeatherData;
