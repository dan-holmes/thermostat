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
})