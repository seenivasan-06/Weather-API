# 🌤️ Weather App

A simple and responsive **Weather Application** built using **HTML, CSS, and JavaScript**. The application allows users to search for a city and view its current weather information using the **OpenWeatherMap API**.

## 🚀 Features

* 🔍 Search weather by city name
* 🌡️ Display current temperature in Celsius
* 💧 Display humidity percentage
* 🌦️ Display weather description
* ☀️ Automatically display weather emojis based on weather conditions
* ❌ Error handling for invalid cities or empty input
* 📱 Simple and clean user interface
* ⚡ Fetches real-time weather data using an API

## 🛠️ Technologies Used

* **HTML5** – Structure of the application
* **CSS3** – Styling and responsive layout
* **JavaScript** – Application logic and API integration
* **OpenWeatherMap API** – Real-time weather data

## 📂 Project Structure

```text
Weather-App/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## ⚙️ How It Works

1. Enter a city name in the search box.
2. Click **Get Weather**.
3. JavaScript sends a request to the OpenWeatherMap API.
4. The application receives the weather data.
5. The following information is displayed:

   * City name
   * Temperature
   * Humidity
   * Weather description
   * Weather emoji

The application converts the API temperature from **Kelvin to Celsius** before displaying it.

## 🔑 API Configuration

This project uses the **OpenWeatherMap Current Weather API**.

In `script.js`, configure your API key:

```javascript
const apiKey = "YOUR_API_KEY";
```

You can obtain an API key from the OpenWeatherMap website.

**Important:** Do not commit your personal API key to a public GitHub repository. For a production project, use environment variables or a backend service to protect the key.

## ▶️ How to Run

### 1. Clone the repository

```bash
git clone https://github.com/your-username/weather-app.git
```

### 2. Open the project

Navigate to the project folder:

```bash
cd weather-app
```

### 3. Add your API key

Open `script.js` and replace:

```javascript
const apiKey = "YOUR_API_KEY";
```

with your OpenWeatherMap API key.

### 4. Run the application

Open `index.html` in your browser.

For the best development experience, you can use **VS Code Live Server**.

## 🌦️ Weather Conditions

The application displays different emojis based on the OpenWeatherMap weather condition ID:

| Condition         | Emoji |
| ----------------- | ----- |
| Thunderstorm      | ⛈️    |
| Drizzle           | 🌧️   |
| Rain              | 🌨️   |
| Snow              | ❄️    |
| Atmosphere / Mist | 🌫️   |
| Clear             | ☀️    |
| Clouds            | ☁️    |
| Unknown           | ❓     |

## ❌ Error Handling

The application handles:

* Empty city input
* Failed API requests
* Invalid city names
* Unavailable weather data

An error message is displayed when weather information cannot be retrieved.

## 🎯 Future Improvements

* 📍 Detect weather using the user's current location
* 📅 Add a 5-day weather forecast
* 🌙 Add dark mode
* 🌡️ Add Celsius/Fahrenheit conversion
* 💨 Display wind speed
* 🌅 Display sunrise and sunset
* 📱 Improve mobile responsiveness
* 🔐 Secure API key using a backend/environment variables

## 👨‍💻 Author

**Seenivasan O**

Computer Science Engineering Student

### ⭐ If you like this project

Give this repository a ⭐ on GitHub and feel free to contribute!
