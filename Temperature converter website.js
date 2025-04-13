        function convertTemp() {
          const temp = parseFloat(document.getElementById("tempInput").value);
          const unit = document.querySelector('input[name="unit"]:checked').value;
          const result = document.getElementById("result");
    
          if (isNaN(temp)) {
            result.innerText = "Please enter a valid number!";
            return;
          }
    
          let converted = "";
          switch (unit) {
            case "C":
              converted = `Fahrenheit: ${(temp * 9/5 + 32).toFixed(2)} °F\nKelvin: ${(temp + 273.15).toFixed(2)} K`;
              break;
            case "F":
              converted = `Celsius: ${((temp - 32) * 5/9).toFixed(2)} °C\nKelvin: ${(((temp - 32) * 5/9) + 273.15).toFixed(2)} K`;
              break;
            case "K":
              converted = `Celsius: ${(temp - 273.15).toFixed(2)} °C\nFahrenheit: ${((temp - 273.15) * 9/5 + 32).toFixed(2)} °F`;
              break;
          }
    
          result.innerText = converted;
        }
      