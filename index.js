function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById('main-unit').value);
    const unitInput = document.querySelector('.main-unit-options').value;
    const resultArea = document.getElementById('result');
    let convertedTemperature;
    
    if (unitInput === 'Celsius') {
      convertedTemperature = temperatureInput;
    } else if (unitInput === 'Fahrenheit') {
      convertedTemperature = (temperatureInput - 32) * 5/9;
    } else if (unitInput === 'Kelvin') {
      convertedTemperature = temperatureInput - 273.15;
    }
    
    resultArea.innerHTML = `${temperatureInput.toFixed(2)} ${unitInput} is ${convertedTemperature.toFixed(2)} ${getConvertedUnit(unitInput)}`;
  }
  
  function getConvertedUnit(originalUnit) {
    if (originalUnit === 'Celsius') {
      return 'Fahrenheit';
    } else if (originalUnit === 'Fahrenheit') {
      return 'Celsius';
    } else if (originalUnit === 'Kelvin') {
      return 'Celsius';
    }
  }
  