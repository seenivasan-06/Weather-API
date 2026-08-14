import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import CurrentWeather from './components/CurrentWeather';
import WeatherDetails from './components/WeatherDetails';
import Forecast from './components/Forecast';
import RecentSearches from './components/RecentSearches';
import Loading from './components/Loading';
import ErrorMessage from './components/ErrorMessage';
import {
  getCurrentWeather,
  getWeatherByCoordinates,
  getForecast,
  getForecastByCoordinates,
  processForecast,
} from './services/weatherApi';
// ─── Constants ────────────────────────────────────────────────────────────────
const DEFAULT_CITY = 'Chennai';
const MAX_RECENT = 5;
const LS_THEME = 'skyview_theme';
const LS_RECENT = 'skyview_recent';
// Map OWM main condition → CSS background class
const BG_MAP = {
  Clear: 'bg-clear',
  Clouds: 'bg-clouds',
  Rain: 'bg-rain',
  Drizzle: 'bg-rain',
  Thunderstorm: 'bg-storm',
  Snow: 'bg-snow',
  Mist: 'bg-fog',
  Smoke: 'bg-fog',
  Haze: 'bg-fog',
  Dust: 'bg-fog',
  Fog: 'bg-fog',
  Sand: 'bg-fog',
  Ash: 'bg-fog',
  Squall: 'bg-storm',
  Tornado: 'bg-storm',
};
// ─── Error message helper ─────────────────────────────────────────────────────
function friendlyError(code) {
  switch (code) {
    case 'CITY_NOT_FOUND':
      return 'City not found. Please enter a valid city name.';