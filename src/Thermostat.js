class Thermostat {

  constructor() {
    this.DEFAULT_TEMPERATURE = 20
    this.MINIMUM_TEMPERATURE = 10
    this.MAX_TEMP_PSM_ON = 25
    this.MAX_TEMP_PSM_OFF = 32
    this.LOW_ENERGY_USAGE_LIMIT = 18
    this.MEDIUM_ENERGY_USAGE_LIMIT = 25

    this.temperature = this.DEFAULT_TEMPERATURE
    this.powerSavingMode = true
  }

  getCurrentTemperature() {
    return this.temperature
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
    this.temperature = this.DEFAULT_TEMPERATURE
  }

  energyUsage() {
    if (this.temperature < this.LOW_ENERGY_USAGE_LIMIT) {
      return 'low-usage'
    } else if (this.temperature <= this.MEDIUM_ENERGY_USAGE_LIMIT) {
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
      return this.MAX_TEMP_PSM_ON
    } else {
      return this.MAX_TEMP_PSM_OFF
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