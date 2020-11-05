$(document).ready(function () {
  var thermostat = new Thermostat
  refreshTemp()

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

  function refreshTemp() {
    $("#current-temperature").text(thermostat.getCurrentTemperature())
    $("#current-temperature").attr('class', thermostat.energyUsage())
  }

  function refreshPowerSavingStatus() {
    $("#power-saving-status").text(thermostat.powerSavingText())
  }
})

