const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");
const locationButton = document.querySelector(".location-btn");
const currentWeatherDiv = document.querySelector(".current-weather");
const weatherCardsDiv = document.querySelector(".weather-cards");

// Expanded mock data for demonstration
const mockWeatherData = {
    "Theni": {
        current: {
            cityName: "New York",
            date: "2024-07-26",
            temp: 25,
            wind: 3,
            humidity: 60,
            description: "Partly Cloudy",
            icon: "04d"
        },
        forecast: [
            { date: "2024-07-27", temp: 27, wind: 4, humidity: 65, icon: "03d" },
            { date: "2024-07-28", temp: 29, wind: 5, humidity: 70, icon: "01d" },
            { date: "2024-07-29", temp: 26, wind: 3, humidity: 75, icon: "02d" },
            { date: "2024-07-30", temp: 24, wind: 2, humidity: 80, icon: "04d" },
            { date: "2024-07-31", temp: 23, wind: 4, humidity: 85, icon: "09d" }
        ]
    },
    "Salem": {
        current: {
            cityName: "London",
            date: "2024-07-26",
            temp: 18,
            wind: 5,
            humidity: 80,
            description: "Overcast",
            icon: "04d"
        },
        forecast: [
            { date: "2024-07-27", temp: 19, wind: 4, humidity: 82, icon: "04d" },
            { date: "2024-07-28", temp: 17, wind: 6, humidity: 85, icon: "03d" },
            { date: "2024-07-29", temp: 16, wind: 5, humidity: 88, icon: "02d" },
            { date: "2024-07-30", temp: 18, wind: 4, humidity: 80, icon: "04d" },
            { date: "2024-07-31", temp: 17, wind: 5, humidity: 83, icon: "09d" }
        ]
    },
    "Dindigul": {
        current: {
            cityName: "Tokyo",
            date: "2024-07-26",
            temp: 30,
            wind: 2,
            humidity: 70,
            description: "Hot",
            icon: "01d"
        },
        forecast: [
            { date: "2024-07-27", temp: 31, wind: 3, humidity: 72, icon: "01d" },
            { date: "2024-07-28", temp: 32, wind: 2, humidity: 68, icon: "01d" },
            { date: "2024-07-29", temp: 30, wind: 3, humidity: 74, icon: "02d" },
            { date: "2024-07-30", temp: 29, wind: 2, humidity: 76, icon: "01d" },
            { date: "2024-07-31", temp: 28, wind: 3, humidity: 78, icon: "03d" }
        ]
    },
    "Madurai": {
        current: {
            cityName: "Sydney",
            date: "2024-07-26",
            temp: 22,
            wind: 6,
            humidity: 65,
            description: "Clear",
            icon: "01d"
        },
        forecast: [
            { date: "2024-07-27", temp: 23, wind: 5, humidity: 63, icon: "01d" },
            { date: "2024-07-28", temp: 24, wind: 6, humidity: 60, icon: "02d" },
            { date: "2024-07-29", temp: 22, wind: 5, humidity: 67, icon: "01d" },
            { date: "2024-07-30", temp: 21, wind: 4, humidity: 70, icon: "01d" },
            { date: "2024-07-31", temp: 20, wind: 6, humidity: 72, icon: "03d" }
        ]
    },
    "Ooty": {
        current: {
            cityName: "Paris",
            date: "2024-07-26",
            temp: 20,
            wind: 4,
            humidity: 75,
            description: "Cloudy",
            icon: "03d"
        },
        forecast: [
            { date: "2024-07-27", temp: 21, wind: 3, humidity: 77, icon: "03d" },
            { date: "2024-07-28", temp: 22, wind: 4, humidity: 80, icon: "04d" },
            { date: "2024-07-29", temp: 19, wind: 5, humidity: 82, icon: "02d" },
            { date: "2024-07-30", temp: 18, wind: 4, humidity: 85, icon: "03d" },
            { date: "2024-07-31", temp: 17, wind: 3, humidity: 87, icon: "09d" }
        ]
    }
};

const createWeatherCard = (cityName, weatherItem, index) => {
    if (index === 0) { // HTML for the main weather card
        return `<div class="details">
                    <h2>${cityName} (${weatherItem.date})</h2>
                    <h6>Temperature: ${weatherItem.temp}°C</h6>
                    <h6>Wind: ${weatherItem.wind} M/S</h6>
                    <h6>Humidity: ${weatherItem.humidity}%</h6>
                </div>
                <div class="icon">
                    <img src="https://openweathermap.org/img/wn/${weatherItem.icon}@4x.png" alt="weather-icon">
                    <h6>${weatherItem.description}</h6>
                </div>`;
    } else { // HTML for the other five day forecast card
        return `<li class="card">
                    <h3>(${weatherItem.date})</h3>
                    <img src="https://openweathermap.org/img/wn/${weatherItem.icon}@4x.png" alt="weather-icon">
                    <h6>Temp: ${weatherItem.temp}°C</h6>
                    <h6>Wind: ${weatherItem.wind} M/S</h6>
                    <h6>Humidity: ${weatherItem.humidity}%</h6>
                </li>`;
    }
}

const getWeatherDetails = (cityName) => {
    // Using mock data instead of API call
    const weatherData = mockWeatherData[cityName];
    if (!weatherData) return alert("Weather data not available for this city.");

    // Clearing previous weather data
    cityInput.value = "";
    currentWeatherDiv.innerHTML = "";
    weatherCardsDiv.innerHTML = "";

    // Creating weather cards and adding them to the DOM
    currentWeatherDiv.innerHTML = createWeatherCard(cityName, weatherData.current, 0);
    weatherData.forecast.forEach((weatherItem, index) => {
        const html = createWeatherCard(cityName, weatherItem, index + 1);
        weatherCardsDiv.insertAdjacentHTML("beforeend", html);
    });
}

const getCityCoordinates = () => {
    const cityName = cityInput.value.trim();
    if (cityName === "") return;
    getWeatherDetails(cityName);
}

const getUserCoordinates = () => {
    // Mock function for demonstration, replace with actual implementation if needed
    alert("Geolocation is not supported in this mock version. Please use city input.");
}

locationButton.addEventListener("click", getUserCoordinates);
searchButton.addEventListener("click", getCityCoordinates);
cityInput.addEventListener("keyup", e => e.key === "Enter" && getCityCoordinates());
