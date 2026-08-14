import React from 'react';
import SearchBar from './SearchBar';
/**
 * Application header with logo, search bar, and theme toggle.
 */
export default function Header({ onSearch, onGeolocate, unit, onUnitToggle, theme, onThemeToggle }) {
  return (
    <header className="app-header">
      <div className="header-inner">
        <div className="logo-group">
          <span className="logo-icon" aria-hidden="true">🌤️</span>
          <div className="logo-text">
            <span className="logo-title">SkyView</span>
            <span className="logo-subtitle">Weather Dashboard</span>
          </div>
        </div>
        <SearchBar
          onSearch={onSearch}
          onGeolocate={onGeolocate}
          unit={unit}
          onUnitToggle={onUnitToggle}
        />
        <button
          className="theme-toggle"
          onClick={onThemeToggle}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title="Toggle theme"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
}