document.addEventListener("DOMContentLoaded", function () {
    var convertButton = document.querySelector(".converter button");
    var celsiusInput = document.querySelector(".converter input");
    var converter = document.querySelector(".converter");

    var result = document.createElement("div");

    converter.addEventListener("submit", function (e) {
        e.preventDefault();
    });

    convertButton.addEventListener("click", function () {
        celsiusInput.classList.remove("invalid", "required", "number");

        if (celsiusInput.value.trim().length === 0) {
            celsiusInput.classList.add("invalid", "required");

            celsiusInput.value = "";
            result.innerHTML = "";

            return;
        }

        var celsiusDegrees = Number(celsiusInput.value);

        if (isNaN(celsiusDegrees)) {
            celsiusInput.classList.add("invalid", "number");
            
            result.innerHTML = "";

            return;
        }
            
        result.innerHTML = "<h3>Result:</h3>";

        var kelvinResult = document.createElement("div");
        var fahrenheitResult = document.createElement("div");

        kelvinResult.textContent = celsiusDegrees + 273.15 + " °K";
        fahrenheitResult.textContent = celsiusDegrees * 9 / 5 + 32 + " °F";

        result.appendChild(kelvinResult);
        result.appendChild(fahrenheitResult);
    });

    converter.appendChild(result);
});