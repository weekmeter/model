import { weekmeter } from "../.."
import * as fixtures from "../../fixtures"

describe("Changeable", () => {
	it("is", () => {
		const changeable = fixtures.getProfile.changeable()
		expect(weekmeter.User.Profile.Changeable.type.is(changeable)).toEqual(true)
		expect(weekmeter.User.Profile.Changeable.type.is({ properties: [] })).toEqual(true)
		expect(weekmeter.User.Profile.Changeable.type.is([])).toEqual(false)
	})
	it("get", () => {
		const changeable = fixtures.getProfile.changeable()
		expect(weekmeter.User.Profile.Changeable.type.get(changeable)).toEqual(changeable)
		expect(weekmeter.User.Profile.Changeable.type.get({ ...changeable, garbage: 42 })).toEqual(changeable)
		expect(weekmeter.User.Profile.Changeable.type.get({ properties: "asd" })).toEqual(undefined)
	})
})
