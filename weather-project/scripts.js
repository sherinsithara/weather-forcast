document.addEventListener('DOMContentLoaded', () => {
    const weatherData = {
        'salem': { condition: 'Hot', temperature: '35°C', humidity: '40%', img: 'https://image.shutterstock.com/image-vector/sun-vector-isolated-260nw-519399271.jpg' },
        'ooty': { condition: 'Cloudy', temperature: '20°C', humidity: '60%', img: 'https://img.icons8.com/?size=48&id=MVj2tmasj0Pp&format=png' },
        'kodaikanal': { condition: 'Rainy', temperature: '15°C', humidity: '70%', img: 'https://img.icons8.com/?size=40&id=51467&format=png' },
        '': { condition: 'Stormy', temperature: '30°C', humidity: '80%', img: 'https://img.icons8.com/?size=48&id=15340&format=png' },
    };

    const searchBtn = document.getElementById('search-btn');
    const cityInput = document.getElementById('city-input');
    const weatherDetails = document.getElementById('weather-details');

    searchBtn.addEventListener('click', () => {
        const city = cityInput.value.trim();
        displayWeather(city);
    });

    window.displayWeather = (city) => {
        if (weatherData[city]) {
            const data = weatherData[city];
            weatherDetails.innerHTML = `
                <div class="weather-card">
                    <img src="${data.img}" alt="${data.condition}">
                    <div class="weather-info">
                        <h3>${data.condition}</h3>
                        <p>Temperature: ${data.temperature}</p>
                        <p>Humidity: ${data.humidity}</p>
                    </div>
                </div>
            `;
        } else {
            weatherDetails.innerHTML = '<p>Weather data not available for this city.</p>';
        }
    };
});
const weatherData = {
    Madurai: {
        temperature: '75°F (24°C)',
        condition: 'Partly Cloudy',
        humidity: '60%',
        windSpeed: '10 mph'
    },
    Dindigul: {
        temperature: '80°F (27°C)',
        condition: 'Sunny',
        humidity: '50%',
        windSpeed: '12 mph'
    },
    Chennai: {
        temperature: '85°F (29°C)',
        condition: 'Humid and Cloudy',
        humidity: '70%',
        windSpeed: '8 mph'
    },
    Coimbatore: {
        temperature: '78°F (26°C)',
        condition: 'Clear',
        humidity: '55%',
        windSpeed: '15 mph'
    }
};

function displayWeather(city) {
    const weather = weatherData[city];
    document.getElementById('weather-details').innerHTML = `
        <h3>${city}</h3>
        <p><strong>Temperature:</strong> ${weather.temperature}</p>
        <p><strong>Condition:</strong> ${weather.condition}</p>
        <p><strong>Humidity:</strong> ${weather.humidity}</p>
        <p><strong>Wind Speed:</strong> ${weather.windSpeed}</p>
    `;
}