import React from 'react';
/**
 * Loading spinner shown while API requests are in flight.
 */
export default function Loading() {
  return (
    <div className="loading-container" role="status" aria-live="polite">
      <div className="loading-spinner">
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
      </div>
      <p className="loading-text">Loading weather data…</p>
    </div>
  );
}