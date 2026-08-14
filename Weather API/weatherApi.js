const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';
/**
 * Fetch current weather data for a city name.
 * @param {string} city
 * @returns {Promise<Object>} OpenWeatherMap current weather response
 */
export async function getCurrentWeather(city) {
  const response = await fetch(
    `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
  );
  if (!response.ok) {
    if (response.status === 404) throw new Error('CITY_NOT_FOUND');
    throw new Error('FETCH_FAILED');
  }
  return response.json();
}
/**
 * Fetch current weather data by geographic coordinates.
 * @param {number} lat
 * @param {number} lon
 * @returns {Promise<Object>} OpenWeatherMap current weather response
 */
export async function getWeatherByCoordinates(lat, lon) {
  const response = await fetch(
    `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
  if (!response.ok) throw new Error('FETCH_FAILED');
  return response.json();
}
/**
 * Fetch 5-day / 3-hour forecast for a city name.
 * @param {string} city
 * @returns {Promise<Object>} OpenWeatherMap forecast response
 */
export async function getForecast(city) {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
  );
  if (!response.ok) {