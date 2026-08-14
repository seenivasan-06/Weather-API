import React, { useState } from 'react';
/**
 * Search bar with text input, geolocation button, and unit toggle.
 * @param {{ onSearch, onGeolocate, unit, onUnitToggle }} props
 */
export default function SearchBar({ onSearch, onGeolocate, unit, onUnitToggle }) {
  const [value, setValue] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = value.trim();
    if (trimmed) {
      onSearch(trimmed);
      setValue('');
    }
  }
  function handleKeyDown(e) {
    if (e.key === 'Enter') handleSubmit(e);
  }
  return (
    <div className="search-bar-wrapper">
      <form className="search-form" onSubmit={handleSubmit} role="search">
        <div className="search-input-group">
          <span className="search-icon" aria-hidden="true">🔍</span>
          <input
            id="city-search"
            type="text"
            className="search-input"
            placeholder="Search city…"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="City name"
            autoComplete="off"
            spellCheck="false"
          />
          <button
            type="submit"
            className="search-btn"
            aria-label="Search weather"
          >