document.getElementById("convert").addEventListener("click", function() {
    // Get user input
    const temperature = parseFloat(document.getElementById("temperature").value);
    const scale = document.getElementById("scale").value;

    // Perform the conversion
    let result;
    if (scale === "celsius") {
        result = (temperature - 32) * 5/9;
    } else if (scale === "fahrenheit") {
        result = (temperature * 9/5) + 32;
    }

    // Display the result
    document.getElementById("result").textContent = `Converted temperature: ${result.toFixed(2)}° ${scale === "celsius" ? "Celsius" : "Fahrenheit"}`;
});
