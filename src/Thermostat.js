class Thermostat {

  constructor() {
    this.temperature = 20
    this.powerSavingMode = true
    this.MINIMUM_TEMPERATURE = 10
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

  powerSavingOff() {
    this.powerSavingMode = false
  }

  reset() {
    this.temperature = 20
  }

  energyUsage() {
    if (this.temperature < 18) {
      return 'low-usage'
    } else if (this.temperature <= 25) {
      return 'medium-usage'
    } else {
      return 'high-usage'
    }
  }

  _checkMaximumTemperature() {
    if (this.temperature == this._maximumTemperature()) {
      error = `The maximum temperature is ${this._maximumTemperature()} degrees when power saving mode is ${this._powerSavingText()}.`
      throw new Error(error)
    }
  }

  _checkMinimumTemperature() {
    if (this.temperature == this.MINIMUM_TEMPERATURE) {
      error = `The minimum temperature is ${this.MINIMUM_TEMPERATURE} degrees.`
      throw new Error(error)
    }
  }

  _maximumTemperature() {
    if (this.powerSavingMode) {
      return 25
    } else {
      return 32
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