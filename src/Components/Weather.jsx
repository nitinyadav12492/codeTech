import React, { useEffect, useState } from 'react';
import './Weather.css';

const DEFAULT_COORDS = { latitude: 40.7128, longitude: -74.0060 }; // New York

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async (lat, lon) => {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        );
        if (!res.ok) throw new Error('Weather fetch failed');
        const data = await res.json();
        setWeather(data.current_weather);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => fetchWeather(pos.coords.latitude, pos.coords.longitude),
        () => fetchWeather(DEFAULT_COORDS.latitude, DEFAULT_COORDS.longitude)
      );
    } else {
      fetchWeather(DEFAULT_COORDS.latitude, DEFAULT_COORDS.longitude);
    }
  }, []);

  if (loading) return <div className="weather-card">Loading weather…</div>;
  if (error) return <div className="weather-card">Weather error: {error}</div>;
  if (!weather) return <div className="weather-card">No weather data</div>;

  return (
    <div className="weather-card">
      <div className="weather-temp">{Math.round(weather.temperature)}°C</div>
      <div className="weather-desc">Wind: {weather.windspeed} km/h</div>
      <div className="weather-time">Last update: {new Date().toLocaleTimeString()}</div>
    </div>
  );
}
