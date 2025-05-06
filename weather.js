document.getElementById('fetchWeatherBtn').addEventListener('click', function () {
    var location = document.getElementById('locationInput').value.trim();
    var date = document.getElementById('dateInput').value;

    if (location === '') {
        alert('Please enter a location.');
        return;
    }

    // Fetch weather from OpenWeatherMap API
    var apiKey = '1814755da2ba1530cb656bfc1ab77121'; // Replace with your real API key
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + apiKey + '&units=metric';

    fetch(apiUrl)
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Weather data not found.');
            }
            return response.json();
        })
        .then(function (data) {
            var temp = data.main.temp;
            var description = data.weather[0].description;
            var humidity = data.main.humidity;
            var wind = data.wind.speed;

            document.getElementById('weatherDetails').innerHTML = 
                'Temperature: ' + temp + ' °C<br>' +
                'Condition: ' + description + '<br>' +
                'Humidity: ' + humidity + '%<br>' +
                'Wind Speed: ' + wind + ' m/s';

            var suggestions = '';

            if (description.includes('rain')) {
                suggestions += '- Delay watering crops.<br>';
            } else {
                suggestions += '- Proceed with normal watering.<br>';
            }

            if (temp > 32) {
                suggestions += '- Provide shade for sensitive plants.<br>';
            }

            if (wind > 8) {
                suggestions += '- Secure tall plants or structures.<br>';
            }

            if (humidity > 80) {
                suggestions += '- Watch for fungal diseases.<br>';
            }

            document.getElementById('activitySuggestions').innerHTML = suggestions;
        })
        .catch(function (error) {
            console.error(error);
            document.getElementById('weatherDetails').textContent = 'Failed to fetch weather data.';
            document.getElementById('activitySuggestions').textContent = 'No suggestions available.';
        });
});