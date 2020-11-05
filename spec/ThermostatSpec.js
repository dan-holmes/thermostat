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
    thermostat.temperature = 10
    error = "The minimum temperature is 10 degrees."
    expect(function () { thermostat.down() }).toThrow(new Error(error))
    expect(thermostat.temperature).toEqual(10)
  })
  it("if power saving mode is on, the maximum temperature is 25 degrees", function () {
    thermostat.powerSavingOn()
    thermostat.temperature = 25
    error = "The maximum temperature is 25 degrees when power saving mode is on."
    expect(function () { thermostat.up() }).toThrow(new Error(error))
    expect(thermostat.temperature).toEqual(25)
  })
  it("if power saving mode is off, the maximum temperature is 32 degrees", function () {
    thermostat.powerSavingOff()
    thermostat.temperature = 32
    error = "The maximum temperature is 32 degrees when power saving mode is off."
    expect(function () { thermostat.up() }).toThrow(new Error(error))
    expect(thermostat.temperature).toEqual(32)
  })
  it("power saving mode is on by default but can also be turned off", function () {
    expect(thermostat.powerSavingMode).toEqual(true)
    thermostat.powerSavingOff()
    expect(thermostat.powerSavingMode).toEqual(false)
  })
  it("you can reset the temperature to 20 with a reset function", function () {
    thermostat.up()
    thermostat.reset()
    expect(thermostat.temperature).toEqual(20)
  })
  describe("energy usage", function () {
    it("reports low usage below 18 degrees", function () {
      thermostat.temperature = 17
      expect(thermostat.energyUsage()).toEqual('low-usage')
    })
    it("reports medium usage between 18 and 25 degrees", function () {
      thermostat.temperature = 20
      expect(thermostat.energyUsage()).toEqual('medium-usage')
    })
    it("reports high usage above 25 degrees", function () {
      thermostat.temperature = 26
      expect(thermostat.energyUsage()).toEqual('high-usage')
    })
  })
})