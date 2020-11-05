class Thermostat {
  constructor() {
    this.temperature = 20
  }

  up() {
    if (this.temperature == 25) {
      error = "The maximum temperature is 25 degrees when power saving mode is on."
      throw new Error(error)
    }
    this.temperature++
  }

  down() {
    if (this.temperature == 10) {
      throw new Error("The minimum temperature is 10 degrees.")
    }
    this.temperature--
  }

  powerSavingOn() {
    this.powerSavingMode = true
  }
}