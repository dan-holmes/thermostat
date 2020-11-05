$(document).ready(function () {
  thermostat = new Thermostat
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

})

var refreshTemp = function () {
  $("#current-temperature").text(thermostat.getCurrentTemperature())
}

var refreshPowerSavingStatus = function () {
  $("#power-saving-status").text(thermostat.powerSavingText())
}