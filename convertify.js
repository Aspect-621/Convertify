function changePick() {
    document.getElementById('parentClassHome').style.visibility = "hidden";
    document.getElementById('convertParent').style.visibility = "hidden";

    document.getElementById('lengthConvert').style.visibility = "hidden";
    document.getElementById('massConvert').style.visibility = "hidden";
    document.getElementById('timeConvert').style.visibility = "hidden";
    document.getElementById('temperatureConvert').style.visibility = "hidden";
    document.getElementById('pickParentClass').style.visibility = "visible";

}

function changeToConverter(x) {
    
    document.getElementById('pickParentClass').style.visibility = "hidden";
    document.getElementById('convertParent').style.visibility = "visible";

    switch (x) {
        case 1:
            document.getElementById('convertParent').style.backgroundColor = "none";
            document.getElementById('lengthConvert').style.visibility = "visible";

            break;
        case 2:
            document.getElementById('convertParent').style.backgroundColor = "blue";
            document.getElementById('massConvert').style.visibility = "visible";
            break;
        case 3:
            document.getElementById('convertParent').style.backgroundColor = "green";
            document.getElementById('timeConvert').style.visibility = "visible";

            break;
        case 4:
            document.getElementById('convertParent').style.backgroundColor = "pink";
            document.getElementById('temperatureConvert').style.visibility = "visible";
            break;
        default:
            alert(x);
            break;
    }
}


function convertLength() {
    let value = parseFloat(document.getElementById('inputValueLength').value);
    let unit = document.getElementById('inputUnitLength').value;
    let millimeters, centimeters, meters, kilometers, inches, feet, yards, miles;

    if (isNaN(value)) {
        alert('Please enter a valid number');
        return;
    }

    switch (unit) {
        case 'millimeters':
            millimeters = value;
            centimeters = value / 10;
            meters = value / 1000;
            kilometers = value / 1000000;
            inches = value * 0.0393701;
            feet = value * 0.00328084;
            yards = value * 0.00109361;
            miles = value * 0.000000621371;
            break;
        case 'centimeters':
            millimeters = value * 10;
            centimeters = value;
            meters = value / 100;
            kilometers = value / 100000;
            inches = value * 0.393701;
            feet = value * 0.0328084;
            yards = value * 0.0109361;
            miles = value * 0.00000621371;
            break;
        case 'meters':
            millimeters = value * 1000;
            centimeters = value * 100;
            meters = value;
            kilometers = value / 1000;
            inches = value * 39.3701;
            feet = value * 3.28084;
            yards = value * 1.09361;
            miles = value * 0.000621371;
            break;
        case 'kilometers':
            millimeters = value * 1000000;
            centimeters = value * 100000;
            meters = value * 1000;
            kilometers = value;
            inches = value * 39370.1;
            feet = value * 3280.84;
            yards = value * 1093.61;
            miles = value * 0.621371;
            break;
        case 'inches':
            millimeters = value * 25.4;
            centimeters = value * 2.54;
            meters = value * 0.0254;
            kilometers = value * 0.0000254;
            inches = value;
            feet = value * 0.0833333;
            yards = value * 0.0277778;
            miles = value * 0.000015783;
            break;
        case 'feet':
            millimeters = value * 304.8;
            centimeters = value * 30.48;
            meters = value * 0.3048;
            kilometers = value * 0.0003048;
            inches = value * 12;
            feet = value;
            yards = value * 0.333333;
            miles = value * 0.000189394;
            break;
        case 'yards':
            millimeters = value * 914.4;
            centimeters = value * 91.44;
            meters = value * 0.9144;
            kilometers = value * 0.0009144;
            inches = value * 36;
            feet = value * 3;
            yards = value;
            miles = value * 0.000568182;
            break;
        case 'miles':
            millimeters = value * 1609344;
            centimeters = value * 160934.4;
            meters = value * 1609.34;
            kilometers = value * 1.60934;
            inches = value * 63360;
            feet = value * 5280;
            yards = value * 1760;
            miles = value;
            break;
        default:
            return;
    }

    document.getElementById('resultsLength').innerHTML = `
        <p>${value} ${unit} is:</p>
        <ul>
            <li>${millimeters.toFixed(2)} millimeters</li>
            <li>${centimeters.toFixed(2)} centimeters</li>
            <li>${meters.toFixed(2)} meters</li>
            <li>${kilometers.toFixed(2)} kilometers</li>
            <li>${inches.toFixed(2)} inches</li>
            <li>${feet.toFixed(2)} feet</li>
            <li>${yards.toFixed(2)} yards</li>
            <li>${miles.toFixed(2)} miles</li>
        </ul>
    `;
}

function convertTemperature() {
    let value = parseFloat(document.getElementById('inputValueTemp').value);
    let unit = document.getElementById('inputUnitTemp').value;
    let celsius, fahrenheit, kelvin;

    if (isNaN(value)) {
        alert('Please enter a valid number');
        return;
    }

    switch (unit) {
        case 'Celsius':
            celsius = value;
            fahrenheit = (value * 9/5) + 32;
            kelvin = value + 273.15;
            break;
        case 'Fahrenheit':
            celsius = (value - 32) * 5/9;
            fahrenheit = value;
            kelvin = (value - 32) * 5/9 + 273.15;
            break;
        case 'Kelvin':
            celsius = value - 273.15;
            fahrenheit = (value - 273.15) * 9/5 + 32;
            kelvin = value;
            break;
        default:
            return;
    }

    document.getElementById('resultsTemp').innerHTML = `
        <p>${value} ${unit} is:</p>
        <ul>
            <li>${celsius.toFixed(2)} Celsius</li>
            <li>${fahrenheit.toFixed(2)} Fahrenheit</li>
            <li>${kelvin.toFixed(2)} Kelvin</li>
        </ul>
    `;
}


function convertMass() {
    let value = parseFloat(document.getElementById('inputValueMass').value);
    let unit = document.getElementById('inputUnitMass').value;
    let grams, kilograms, milligrams, pounds, ounces, metricTons, stones;

    if (isNaN(value)) {
        alert('Please enter a valid number');
        return;
    }

    switch (unit) {
        case 'grams':
            grams = value;
            kilograms = value / 1000;
            milligrams = value * 1000;
            pounds = value / 453.59237;
            ounces = value / 28.34952;
            metricTons = value / 1000000;
            stones = value / 6350.29318;
            break;
        case 'kilograms':
            grams = value * 1000;
            kilograms = value;
            milligrams = value * 1000000;
            pounds = value * 2.20462;
            ounces = value * 35.274;
            metricTons = value / 1000;
            stones = value * 0.157473;
            break;
        case 'milligrams':
            grams = value / 1000;
            kilograms = value / 1000000;
            milligrams = value;
            pounds = value / 453592.37;
            ounces = value / 28349.5231;
            metricTons = value / 1000000000;
            stones = value / 6350293.18;
            break;
        case 'pounds':
            grams = value * 453.59237;
            kilograms = value / 2.20462;
            milligrams = value * 453592.37;
            pounds = value;
            ounces = value * 16;
            metricTons = value / 2204.62262;
            stones = value * 0.0714286;
            break;
        case 'ounces':
            grams = value * 28.34952;
            kilograms = value / 35.274;
            milligrams = value * 28349.5231;
            pounds = value / 16;
            ounces = value;
            metricTons = value / 35273.9619;
            stones = value * 0.00446429;
            break;
        case 'metrictons':
            grams = value * 1000000;
            kilograms = value * 1000;
            milligrams = value * 1000000000;
            pounds = value * 2204.62262;
            ounces = value * 35273.9619;
            metricTons = value;
            stones = value * 157.473;
            break;
        case 'stones':
            grams = value * 6350.29318;
            kilograms = value * 6.35029;
            milligrams = value * 6350293.18;
            pounds = value * 14;
            ounces = value * 224;
            metricTons = value * 0.00635029;
            stones = value;
            break;
        default:
            return;
    }

    document.getElementById('resultsMass').innerHTML = `
        <p>${value} ${unit} is:</p>
        <ul>
            <li>${grams.toFixed(2)} grams</li>
            <li>${kilograms.toFixed(2)} kilograms</li>
            <li>${milligrams.toFixed(2)} milligrams</li>
            <li>${pounds.toFixed(2)} pounds</li>
            <li>${ounces.toFixed(2)} ounces</li>
            <li>${metricTons.toFixed(2)} metric tons</li>
            <li>${stones.toFixed(2)} stones</li>
        </ul>
    `;
}
function convertTime() {
    let value = parseFloat(document.getElementById('inputValueTime').value);
    let unit = document.getElementById('inputUnitTime').value;
    let seconds, minutes, hours, days, weeks, milliseconds;
  
    if (isNaN(value)) {
      alert('Please enter a valid number');
      return;
    }
  
    switch (unit) {
      case 'seconds':
        seconds = value;
        minutes = value / 60;
        hours = value / 3600;
        days = value / 86400;
        weeks = value / (7 * 86400); 
        milliseconds = value * 1000;
        break;
      case 'minutes':
        seconds = value * 60;
        minutes = value;
        hours = value / 60;
        days = value / 1440;
        weeks = value / (7 * 1440); 
        milliseconds = value * 60 * 1000;
        break;
      case 'hours':
        seconds = value * 3600;
        minutes = value * 60;
        hours = value;
        days = value / 24;
        weeks = value / (7 * 24); 
        milliseconds = value * 60 * 60 * 1000;
        break;
      case 'days':
        seconds = value * 86400;
        minutes = value * 1440;
        hours = value * 24;
        days = value;
        weeks = value / 7;
        milliseconds = value * 24 * 60 * 60 * 1000;
        break;
      case 'weeks':
        seconds = value * 7 * 86400;
        minutes = value * 7 * 1440;
        hours = value * 7 * 24;
        days = value * 7;
        weeks = value;
        milliseconds = value * 7 * 24 * 60 * 60 * 1000;
        break;
      case 'milliseconds':
        seconds = value / 1000;
        minutes = value / (60 * 1000);
        hours = value / (3600 * 1000);
        days = value / (86400 * 1000);
        weeks = value / (7 * 86400 * 1000); 
        milliseconds = value;
        break;
    }
    document.getElementById('resultsTime').innerHTML = `
  <p>${value} ${unit} is:</p>
  <ul>
    <li>${seconds.toFixed(2)} seconds</li>
    <li>${minutes.toFixed(2)} minutes</li>
    <li>${hours.toFixed(2)} hours</li>
    <li>${days.toFixed(2)} days</li>
    <li>${weeks.toFixed(2)} weeks (approximate)</li>
    <li>${milliseconds.toFixed(2)} milliseconds</li>
  </ul>
`;

  }
