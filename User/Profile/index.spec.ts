import { fixtures } from "../../fixtures"
import { weekmeter } from "../../index"

describe("Profile", () => {
	it("is", () => {
		const profile = fixtures.user.profile()
		expect(weekmeter.User.Profile.is(profile)).toEqual(true)
		expect(weekmeter.User.Profile.is((({ properties, ...profile }) => profile)(profile))).toEqual(false)
		expect(weekmeter.User.Profile.is({ ...profile, properties: [] })).toEqual(true)
		expect(weekmeter.User.Profile.is({ ...profile, email: "" })).toEqual(false)
	})
	it("get", () => {
		const profile = fixtures.user.profile()
		expect(weekmeter.User.Profile.type.get(profile)).toEqual(profile)
		expect(weekmeter.User.Profile.type.get({ ...profile, garbage: "asd" })).toEqual(profile)
		expect(weekmeter.User.Profile.type.get({ ...profile, email: "" })).toEqual(undefined)
	})
})
