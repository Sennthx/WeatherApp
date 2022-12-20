class UI {
    constructor() {
        this.timeOutID = 0;
    }
    showWeatherData(weatherData) {

    }

    showError(message) {
        clearTimeout(this.timeOutID);
        const box = document.querySelector(".error");
        box.innerText = message;
        box.style.display = "block";
        this.timeOutID = setTimeout(() => {
            box.style.display = "none";
        }, 3000);
    }

    resetForm() {
        document.querySelector("#city-input").value = "";
        document.querySelector("#country-input").value = "";
    }
}