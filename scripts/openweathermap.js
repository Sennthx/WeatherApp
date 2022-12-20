class OpenWeatherMap {
    async getWeather(cityName, countryCode) {
        // Making request to get the latitude and longitude coordinates
        const geoResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${countryCode}&appid=47a3685684a22ec71539149e46bcb137`)

        const geoData = await geoResponse.json();
        
        // Making request to get weather data with geo location
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geoData[0].lat}&lon=${geoData[0].lon}&units=metric&appid=47a3685684a22ec71539149e46bcb137`);
        const weatherData = await response.json();
        
        return {
            weatherData
        }
    }
}