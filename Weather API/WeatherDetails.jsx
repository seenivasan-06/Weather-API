import React from 'react';
import { getWindDirection } from '../services/weatherApi';
const DETAIL_CARDS = [
  {
    key: 'humidity',
    label: 'Humidity',
    icon: '💧',
    getValue: (d) => `${d.main.humidity}%`,
    subtitle: (d) => {
      const h = d.main.humidity;
      if (h < 30) return 'Very dry';
      if (h < 60) return 'Comfortable';
      if (h < 80) return 'Humid';
      return 'Very humid';
    },
  },
  {
    key: 'wind',
    label: 'Wind Speed',
    icon: '💨',
    getValue: (d) => `${d.wind.speed} m/s`,
    subtitle: (d) => getWindDirection(d.wind.deg || 0),
  },
  {
    key: 'pressure',
    label: 'Pressure',
    icon: '🌡️',
    getValue: (d) => `${d.main.pressure} hPa`,
    subtitle: (d) => {
      const p = d.main.pressure;
      if (p < 1009) return 'Low pressure';
      if (p < 1022) return 'Normal';
      return 'High pressure';
    },
  },
  {
    key: 'visibility',
    label: 'Visibility',
    icon: '👁️',
    getValue: (d) => {
      const km = ((d.visibility || 0) / 1000).toFixed(1);
      return `${km} km`;
    },
    subtitle: (d) => {
      const km = (d.visibility || 0) / 1000;
      if (km >= 10) return 'Clear';