const API_KEY = "SECRET";
function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weatherContainer = document.getElementById("weather-container");
        const weather = weatherContainer.querySelector("span:first-child");
        const temperature = weatherContainer.querySelector("span:nth-child(2)");
        const humidity = weatherContainer.querySelector("span:nth-child(3)");
        const location = weatherContainer.querySelector("span:last-child");
        weather.innerText = `날씨: ${data.weather[0].main}`;
        temperature.innerText = `최저온도:${data.main.temp_min}℃ ~ 최고온도:${data.main.temp_max}℃`;
        humidity.innerText = `습도: ${data.main.humidity}%`;
        location.innerText = `위치: ${data.name}`;
    })
}

function onGeoError() {
    alert("Cannot find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);