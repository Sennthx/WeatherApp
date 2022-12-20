class UI {
    constructor() {
        this.timeOutID = 0;
    }
    showWeatherData(data) {
        // Getting elements and inserting data
        document.querySelector("#location-name").innerText = `${data.name}, ${data.sys.country}`;
        document.querySelector("#description").innerText = `${data.weather[0].description}`;
        document.querySelector("#temperature").innerText = `${data.main.temp.toFixed(1)} C°`;
        document.querySelector("#humidity").innerText = `Relative Humidity: ${data.main.humidity}`;
        document.querySelector("#feels-like").innerText = `Feels like: ${data.main.feels_like}`;
        document.querySelector("#wind").innerText = `Wind direction: ${data.wind.deg}`;
        document.querySelector("#wind").innerText = `Wind Speed: ${data.wind.speed.toFixed(1)} m/s`;
        document.querySelector("#longitude").innerText = `Longitude: ${data.coord.lon.toFixed(3)}`;
        document.querySelector("#latitude").innerText = `Longitude: ${data.coord.lat.toFixed(3)}`;
        console.log(document.querySelector("#details").lastChild);
        //document.querySelector("#humidity").innerText = `${data.weather[0].icon}`;
        console.log(data);
    }

    showError(message) {
        clearTimeout(this.timeOutID);
        const box = document.querySelector(".error");
        box.innerText = message;
        box.style.display = "block";
        this.timeOutID = setTimeout(() => {
            box.style.display = "none";
        }, 5000);
    }

    resetForm() {
        document.querySelector("#city-input").value = "";
        document.querySelector("#country-input").value = "";
    }
}