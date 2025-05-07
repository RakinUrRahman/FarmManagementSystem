// ===== Weather API =====
const apiKey = 'YOUR_API_KEY'; // Replace with your real API Key
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

// Search button click
citySearchButton.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        fetchWeather(city);
    }
});

// Press Enter key in city input
cityInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const city = cityInput.value.trim();
        if (city) {
            fetchWeather(city);
        }
    }
});

// ===== Show Current Date =====
const currentDate = document.getElementById('currentDate');
const now = new Date();
currentDate.textContent = now.toDateString();

// ===== Dashboard Customization Modal =====
const customizeButton = document.getElementById('customizeButton');
const modal = document.getElementById('customizeModal');
const closeModal = document.getElementById('closeModal');
const saveSettings = document.getElementById('saveSettings');

const sections = [
    { checkboxId: 'toggleCropHealth', cardId: 'cropHealthCard' },
    { checkboxId: 'toggleResourceUsage', cardId: 'resourceUsageCard' },
    { checkboxId: 'toggleWeatherUpdates', cardId: 'weatherUpdatesCard' },
    { checkboxId: 'toggleLivestock', cardId: 'livestockCard' },
    { checkboxId: 'toggleRevenue', cardId: 'revenueCard' },
    { checkboxId: 'toggleAlerts', cardId: 'alertsCard' }
];

// Open modal
customizeButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Save customization
saveSettings.addEventListener('click', () => {
    sections.forEach(section => {
        const checkbox = document.getElementById(section.checkboxId);
        const card = document.getElementById(section.cardId);
        card.style.display = checkbox.checked ? 'block' : 'none';
    });
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
// Crop Distribution Chart
const ctx = document.getElementById('cropChart').getContext('2d');

const cropChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Rice', 'Wheat', 'Vegetables', 'Fruits'],
        datasets: [{
            label: 'Crop Distribution',
            data: [40, 25, 20, 15],
            backgroundColor: ['#66BB6A', '#FFA726', '#29B6F6', '#AB47BC'],
            borderColor: '#ffffff',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});
// Example notifications
const notifications = [
    "Your water supply is low 💧.",
    "Check soil moisture levels for irrigation 🌱.",
    "Your revenue has increased by 10% this month 💰."
];

// Notification Modal Elements
const notificationModal = document.getElementById('notificationModal');
const notificationList = document.getElementById('notificationList');
const closeNotificationModal = document.getElementById('closeNotificationModal');

// Function to show notifications
function showNotifications() {
    // Clear previous notifications
    notificationList.innerHTML = '';

    // Add each notification to the list
    notifications.forEach(notification => {
        const listItem = document.createElement('li');
        listItem.textContent = notification;
        notificationList.appendChild(listItem);
    });

    // Display the modal
    notificationModal.style.display = 'block';
}

// Close the notification modal
closeNotificationModal.addEventListener('click', () => {
    notificationModal.style.display = 'none';
});

// Show notifications after login (this is triggered on page load)
window.addEventListener('load', showNotifications);

