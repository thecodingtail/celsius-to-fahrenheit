function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    const SuperValue = document.getElementById("outputCelsius").innerHTML = (valNum + 32) * 1.8;
    console.log(SuperValue)
  }
  