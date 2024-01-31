import * as fixtures from "../../fixtures"
import { weekmeter } from "../../index"

describe("Property", () => {
	it("is", () => {
		const [property] = fixtures.getProfile.properties()
		expect(weekmeter.User.Profile.Property.is(property)).toEqual(true)
		expect(weekmeter.User.Profile.Property.is([])).toEqual(false)
	})
	it("get", () => {
		const [property] = fixtures.getProfile.properties()
		expect(weekmeter.User.Profile.Property.type.get(property)).toEqual(property)
		expect(weekmeter.User.Profile.Property.type.get({ ...property, garbage: 42 })).toEqual(property)
	})
	it("record", () => {
		const properties = fixtures.getProfile.properties()
		const result = weekmeter.User.Profile.Property.record(properties)
		properties.forEach(property => expect(result[property.name]).toEqual(property.value))
		expect(properties.length).toEqual(Object.keys(result).length)
	})
})
