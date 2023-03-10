class OpenWeatherMap {
    async getWeather(cityName, countryCode) {
        // Making request to get the latitude and longitude coordinates
        const geoResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${countryCode}&appid=${process.env.OPENWEATHERMAP_API_KEY}`);

        const geoData = await geoResponse.json();
        // Checking if geoData is exist
        if(geoData.length > 0) {
            // Making request to get weather data with geo location
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geoData[0].lat}&lon=${geoData[0].lon}&units=metric&appid=${process.env.OPENWEATHERMAP_API_KEY}`);
            const weatherData = await response.json();
            return {
                weatherData
            }
        }
        return -1;
    }
}
