import React from 'react';
import { toFahrenheit } from '../services/weatherApi';
/**
 * Individual forecast day card.
 */
export default function ForecastCard({ day, unit, isToday }) {
  const iconUrl = `https://openweathermap.org/img/wn/${day.icon}@2x.png`;
  function displayTemp(celsius) {
    if (unit === 'F') return `${Math.round(toFahrenheit(celsius))}°`;
    return `${Math.round(celsius)}°`;
  }
  const dateObj = new Date(day.date + 'T12:00:00');
  const dayName = isToday
    ? 'Today'
    : dateObj.toLocaleDateString('en-US', { weekday: 'short' });
  const dateLabel = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  return (
    <div className="forecast-card animate-fadein" aria-label={`Forecast for ${dayName}`}>
      <p className="fc-day">{dayName}</p>
      <p className="fc-date">{dateLabel}</p>
      <img
        className="fc-icon"
        src={iconUrl}
        alt={day.description}
      />
      <p className="fc-condition">{day.condition}</p>
      <p className="fc-temp">{displayTemp(day.temp)}{unit === 'F' ? 'F' : 'C'}</p>
      <div className="fc-range">
        <span className="fc-high">↑{displayTemp(day.temp_max)}</span>
        <span className="fc-low">↓{displayTemp(day.temp_min)}</span>
      </div>
    </div>
  );
}