const apiKey = 'bfd3fb90a58ea3fd66ea1e0da2762f50'; 


async function getWeather() {
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            displayWeather(data);
        } else {
            showError(data.message);
        }
    } catch (error) {
        showError('An error occurred while fetching data.');
    }
}

function displayWeather(data) {
    const weatherContainer = document.getElementById('weather-container');
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';

    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const cityName = data.name;
    const weatherIcon = data.weather[0].icon;
    const isDay = data.weather[0].icon.includes('d'); // Check if it's day or night

    // Change background color based on day or night


    const weatherHTML = `
        <h2>${cityName}</h2>
        <p>${description}</p>
        <p>Temperature: ${temperature}°C</p>
        <img src="http://openweathermap.org/img/wn/${weatherIcon}.png" alt="Weather Icon">
    `;

    weatherContainer.innerHTML = weatherHTML;
}

function showError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
}

