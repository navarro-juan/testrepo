function showweatherDetails(event) {
    event.preventDefault();

    // Get the city and construct the API call inside the function
    const city = document.getElementById('city').value;
    const apiKey = '5bead9189301bd63be07023658d1d5b5'; // Use your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Convert Celsius to Fahrenheit
            const tempInCelsius = data.main.temp;
            const tempInFahrenheit = (tempInCelsius * 9/5) + 32;

            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                    <p>Temperature: ${tempInFahrenheit.toFixed(2)} &#8457;</p>
                                    <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Could not fetch weather data. Please try again later.</p>`;
        });
}

// Add event listener
document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);