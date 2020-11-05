class Thermostat {

  constructor() {
    this.temperature = 20
    this.powerSavingMode = true
    this.MINIMUM_TEMPERATURE = 10
    this.MAXIMUM_TEMPERATURE = 25
  }

  up() {
    this._checkMaximumTemperature()
    this.temperature++
  }

  down() {
    this._checkMinimumTemperature()
    this.temperature--
  }

  powerSavingOn() {
    this.powerSavingMode = true
  }

  _checkMaximumTemperature() {
    if (this.temperature == this.MAXIMUM_TEMPERATURE) {
      error = `The maximum temperature is ${this.MAXIMUM_TEMPERATURE} degrees when power saving mode is ${this._powerSavingText()}.`
      throw new Error(error)
    }
  }

  _checkMinimumTemperature() {
    if (this.temperature == this.MINIMUM_TEMPERATURE) {
      error = `The minimum temperature is ${this.MINIMUM_TEMPERATURE} degrees.`
      throw new Error(error)
    }
  }

  _powerSavingText() {
    if (this.powerSavingMode) {
      return 'on'
    } else {
      return 'off'
    }
  }
}