import React from 'react';
import { toFahrenheit, formatTime } from '../services/weatherApi';
/**
 * Main weather card displaying city, temperature, icon, and condition.
 */
export default function CurrentWeather({ data, unit }) {
  if (!data) return null;
  const { name, sys, main, weather, timezone } = data;
  const condition = weather[0];
  const iconUrl = `https://openweathermap.org/img/wn/${condition.icon}@2x.png`;
  function displayTemp(celsius) {
    if (unit === 'F') return `${Math.round(toFahrenheit(celsius))}°F`;
    return `${Math.round(celsius)}°C`;
  }
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const sunrise = formatTime(sys.sunrise, timezone);
  const sunset = formatTime(sys.sunset, timezone);
  return (
    <div className="current-weather-card animate-fadein">
      {/* Location */}
      <div className="cw-location">
        <h1 className="cw-city">
          {name}, <span className="cw-country">{sys.country}</span>
        </h1>
        <p className="cw-date">{dateStr}</p>
      </div>
      {/* Icon + Temperature */}
      <div className="cw-main">
        <div className="cw-icon-wrap">
          <img
            className="cw-icon animate-float"
            src={iconUrl}