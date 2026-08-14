import React from 'react';
/**
 * Displays up to 5 recently searched cities from localStorage.
 */
export default function RecentSearches({ searches, onSelect }) {
  if (!searches || searches.length === 0) return null;
  return (
    <section className="recent-section" aria-label="Recent searches">
      <h2 className="section-title">Recent Searches</h2>
      <div className="recent-list">
        {searches.map((city) => (
          <button
            key={city}
            className="recent-chip"
            onClick={() => onSelect(city)}
            aria-label={`Search ${city} again`}
          >
            <span aria-hidden="true">🕒</span>
            {city}
          </button>
        ))}
      </div>
    </section>
  );
}