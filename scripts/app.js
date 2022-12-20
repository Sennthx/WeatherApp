// init openweathermap
const openWeather = new OpenWeatherMap;
const ui = new UI;

document.querySelector("#sidebar-form").addEventListener("submit", (e) => {
    // Getting data from from inputs
    const city = document.querySelector("#city-input").value
    const country = document.querySelector("#country-input").value

    if(city === "" || country === "") {
        // Showing error
        ui.resetForm();
        ui.showError("Please don't leave the form empty!")

    }
    else {
        // Get weather data
        ui.resetForm();
    }

    e.preventDefault();
})

