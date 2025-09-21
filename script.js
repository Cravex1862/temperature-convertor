function convert(){
    let fromUnit = document.getElementById("cars").value; // Use the correct id from HTML
    let toUnit = document.getElementById("convertor").value;
    let input = parseFloat(document.getElementById("input").value);
    let output = document.getElementById("Result");
    let result;

    if (fromUnit === "celsius") {
        if (toUnit === "farenheit") {
            result = (input * 9/5) + 32;
        } else if (toUnit === "kelvin") {
            result = input + 273.15;
        } else {
            result = input;
        }
    } else if (fromUnit === "farenheit") {
        if (toUnit === "celsius") {
            result = (input - 32) * 5/9;
        } else if (toUnit === "kelvin") {
            result = ((input - 32) * 5/9) + 273.15;
        } else {
            result = input;
        }
    } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            result = input - 273.15;
        } else if (toUnit === "farenheit") {
            result = ((input - 273.15) * 9/5) + 32;
        } else {
            result = input;
        }
    } else {
        result = "Invalid unit";
    }

    output.innerHTML = result;

}
