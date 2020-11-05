describe("Thermostat", function () {
  var thermostat

  beforeEach(function () {
    thermostat = new Thermostat
  })
  it("starts with a temperature of 20 degrees", function () {
    expect(thermostat.temperature).toEqual(20)
  })
  it("can increase the temperature with an up function", function () {
    thermostat.up()
    expect(thermostat.temperature).toEqual(21)
  })
  it("can decrease the temperature with a down function", function () {
    thermostat.down()
    expect(thermostat.temperature).toEqual(19)
  })
  it("has a minimum temperature of 10 degrees", function () {
    for (i = 0; i < 10; i++) {
      thermostat.down()
    }
    error = "The minimum temperature is 10 degrees."
    expect(function () { thermostat.down() }).toThrow(new Error(error))
    expect(thermostat.temperature).toEqual(10)
  })
  it("if power saving mode is on, the maximum temperature is 25 degrees", function () {
    thermostat.powerSavingOn()
    for (i = 0; i < 5; i++) {
      thermostat.up()
    }
    error = "The maximum temperature is 25 degrees when power saving mode is on."
    expect(function () { thermostat.up() }).toThrow(new Error(error))
    expect(thermostat.temperature).toEqual(25)
  })
})