$(document).ready(function () {
  var thermostat = new Thermostat
  refreshTemp()
  getCurrentTemperature("London")

  $("#up").click(function () {
    thermostat.up()
    refreshTemp()
  })

  $("#down").click(function () {
    thermostat.down()
    refreshTemp()
  })

  $("#reset").click(function () {
    thermostat.reset()
    refreshTemp()
  })

  $("#powersave-onoff").click(function () {
    thermostat.powerSavingOnOff()
    refreshPowerSavingStatus()
  })

  $("#select-city").submit(function (event) {
    event.preventDefault();
    var city = $("#city").val()
    getCurrentTemperature(city)
  })

  function refreshTemp() {
    $("#current-temperature").text(thermostat.getCurrentTemperature())
    $("#current-temperature").attr('class', thermostat.energyUsage())
  }

  function refreshPowerSavingStatus() {
    $("#power-saving-status").text(thermostat.powerSavingText())
  }

  function getCurrentTemperature(location) {
    var apiKey = "db803530098d8c8e981d226ca689c6b4"
    var apiAddress = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}&units=metric`
    $.get(apiAddress, function (data) {
      displayOutsideTemp(data.main.temp)
    })
  }

  function displayOutsideTemp(temperature) {
    var text = `The current outside temperature is ${temperature}.`
    $("#outside-temp").text(text)
  }
})

