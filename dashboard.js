// Weather API
const apiKey = 'YOUR_API_KEY'; // Replace this with your real API Key
const weatherInfo = document.getElementById('weatherInfo');
const cityInput = document.getElementById('cityInput');
const citySearchButton = document.getElementById('citySearchButton');

// Default city to load
let currentCity = 'Dhaka';

// Function to fetch weather
async function fetchWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (data.cod === 200) {
            weatherInfo.innerHTML = `${city}: ${data.weather[0].description} 🌤️ ${data.main.temp}°C`;
        } else {
            weatherInfo.innerHTML = 'City not found 🌧️';
        }
    } catch (error) {
        weatherInfo.innerHTML = 'Error fetching weather ❌';
    }
}

// Load default weather
fetchWeather(currentCity);

// Search new city
citySearchButton.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        fetchWeather(city);
    }
});

// Optional: allow pressing "Enter" key too
cityInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const city = cityInput.value.trim();
        if (city) {
            fetchWeather(city);
        }
    }
});

// Display current date and
