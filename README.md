# 🌤️ SkyView — Weather Dashboard

A **portfolio-quality, fully responsive React Weather Application** built with Vite, React 18, and the OpenWeatherMap API.

![SkyView Screenshot](https://via.placeholder.com/900x500/0f172a/60a5fa?text=SkyView+Weather+Dashboard)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔍 City Search | Search any city with Enter-key + button support |
| 📍 Geolocation | "My Location" button using browser GPS |
| 🌡️ Current Weather | Temperature, feels-like, min/max, condition |
| 💧 Weather Details | Humidity, wind, pressure, visibility, cloudiness |
| 🌅 Sunrise & Sunset | Accurate local time conversion |
| 📅 5-Day Forecast | Daily cards with icon, temp range, condition |
| 🕒 Recent Searches | Saves last 5 cities in localStorage |
| °C / °F Toggle | Client-side conversion, no extra API call |
| 🌙 Dark / Light Mode | Persisted in localStorage |
| 🎨 Dynamic Background | Animated blobs change colour by weather condition |
| 📱 Responsive Design | Desktop → Tablet → Mobile |
| ♿ Accessible | ARIA labels, semantic HTML, focus management |

---

## 🛠️ Technology Stack

- **React 18** with Hooks (`useState`, `useEffect`, `useCallback`)
- **Vite 6** (blazing-fast dev server & build tool)
- **Vanilla CSS** (glassmorphism, CSS custom properties, animations)
- **OpenWeatherMap API** (current weather + 5-day forecast)
- **Fetch API** (no extra HTTP libraries needed)
- **localStorage** (theme and recent-searches persistence)

---

## 🚀 Getting Started

### 1. Prerequisites

- Node.js 18+ and npm

### 2. Clone / navigate to the project

```bash
cd weather-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Obtain your free API key

1. Go to [https://openweathermap.org/](https://openweathermap.org/)
2. Click **Sign In / Sign Up** → create a free account
3. Go to **API Keys** in your account dashboard
4. Copy the default key (or generate a new one)
5. ⚠️ New keys may take up to 2 hours to activate

### 5. Set up the environment variable

Create a `.env` file in the project root (same level as `package.json`):

```
VITE_WEATHER_API_KEY=your_api_key_here
```

> **Security:** `.env` is already listed in `.gitignore` so your key will never be pushed to GitHub.

### 6. Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧪 Testing

| Test | Steps |
|---|---|
| City Search | Type any city name → press Enter or click Search |
| Geolocation | Click 📍 My Location → allow browser permission |
| Unit Toggle | Click °C \| °F in the header |
| Dark/Light | Click 🌙/☀️ in the top-right corner |
| Recent Searches | Search 2–3 cities, see chips appear; click one |
| Error State | Search `xyzinvalidcity` to see error message |

---

## 📁 Project Structure

```
weather-app/
├── index.html               # HTML entry point with meta tags
├── .env                     # API key (not committed to git)
├── .gitignore
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx             # React DOM entry
    ├── App.jsx              # Root component — state & data flow
    ├── index.css            # All styles (glassmorphism, dark/light, responsive)
    ├── components/
    │   ├── Header.jsx       # Logo + SearchBar + theme toggle
    │   ├── SearchBar.jsx    # Input, geo button, unit toggle
    │   ├── CurrentWeather.jsx  # Main weather card
    │   ├── WeatherDetails.jsx  # 6-card detail grid
    │   ├── Forecast.jsx     # 5-day forecast section
    │   ├── ForecastCard.jsx # Individual day card
    │   ├── RecentSearches.jsx  # Last-5 city chips
    │   ├── Loading.jsx      # Animated spinner
    │   └── ErrorMessage.jsx # Error display
    └── services/
        └── weatherApi.js    # All API calls + utility functions
```

---

## 🏗️ Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

Preview the production build locally:

```bash
npm run preview
```

---

## 🚢 Deploy to Vercel

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. When asked for environment variables, add:

```
VITE_WEATHER_API_KEY = your_api_key_here
```

### Option B — Vercel Dashboard

1. Push the project to GitHub (without `.env` — it's gitignored)
2. Go to [https://vercel.com/new](https://vercel.com/new)
3. Import your repo
4. Under **Environment Variables**, add `VITE_WEATHER_API_KEY`
5. Click **Deploy**

### Custom Domain

In the Vercel project dashboard go to **Settings → Domains** and add your custom domain.

---

## 🔮 Future Improvements

- [ ] Hourly forecast (next 24 h)
- [ ] Air Quality Index (AQI)
- [ ] UV Index
- [ ] Interactive weather map
- [ ] Multiple saved locations
- [ ] PWA support with offline caching
- [ ] Weather alerts & notifications
- [ ] Animated weather icons (Lottie)
- [ ] Share weather card as image

---

## 👤 Author

Built with ❤️ as a portfolio project.

- **API:** [OpenWeatherMap](https://openweathermap.org/)
- **Stack:** React 18 + Vite + Vanilla CSS

---

## 📄 License

MIT
