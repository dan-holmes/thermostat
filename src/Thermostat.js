class Thermostat {
  constructor() {
    this.temperature = 20
  }

  up() {
    this.temperature++
  }

  down() {
    if (this.temperature == 10) {
      throw new Error("The minimum temperature is 10 degrees.")
    }
    this.temperature--
  }
}