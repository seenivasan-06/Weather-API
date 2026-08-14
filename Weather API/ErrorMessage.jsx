import React from 'react';
/**
 * Displays user-facing error messages.
 * @param {{ message: string }} props
 */
export default function ErrorMessage({ message }) {
  return (
    <div className="error-container" role="alert" aria-live="assertive">
      <span className="error-icon" aria-hidden="true">⚠️</span>
      <p className="error-text">{message}</p>
    </div>
  );
}