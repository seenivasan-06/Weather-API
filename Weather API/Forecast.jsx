import React from 'react';
import ForecastCard from './ForecastCard';
/**
 * 5-day forecast horizontal strip.
 */
export default function Forecast({ days, unit }) {
  if (!days || days.length === 0) return null;
  const todayStr = new Date().toISOString().split('T')[0];
  return (
    <section className="forecast-section" aria-label="5-day forecast">
      <h2 className="section-title">5-Day Forecast</h2>
      <div className="forecast-strip">
        {days.map((day, idx) => (
          <ForecastCard
            key={day.date}
            day={day}
            unit={unit}
            isToday={day.date === todayStr}
          />
        ))}
      </div>
    </section>
  );
}