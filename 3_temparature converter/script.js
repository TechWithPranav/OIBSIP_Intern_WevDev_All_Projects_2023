function convertTemperature() {
    var temperatureInput = document.getElementById('temperature').value;
    var unitInput = document.getElementById('unit').value;
    var resultElement = document.getElementById('result');

    // Validate input ------------------------
    if (isNaN(temperatureInput) || temperatureInput === "") {
        resultElement.innerText = "Please enter a valid temperature.";
        return;
    }

    var temperature = parseFloat(temperatureInput);

    //  conversion ----------------------------
    var convertedTemperature;
    var unit;

    if (unitInput === 'celsius') {
        convertedTemperature = (temperature * 9/5) + 32;
        unit = 'Fahrenheit';
    } else if (unitInput === 'fahrenheit') {
        convertedTemperature = (temperature - 32) * 5/9;
        unit = 'Celsius';
    } else if (unitInput === 'kelvin') {
        convertedTemperature = temperature + 273.15;
        unit = 'Kelvin';
    }

    // Display result -------------------------
    resultElement.innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${unit}`;
}
