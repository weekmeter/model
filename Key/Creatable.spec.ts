import { weekmeter } from "../index"
import * as fixtures from "./fixtures"

describe("Key.Creatable", () => {
	it("is", () => {
		const key: weekmeter.Key.Creatable = fixtures.create("manager")
		expect(weekmeter.Key.Creatable.is(key)).toEqual(true)
		expect(weekmeter.Key.Creatable.is((({ name, ...key }) => key)(key))).toEqual(false)
		expect(weekmeter.Key.Creatable.type.get(key)).toEqual(key)
		expect(weekmeter.Key.Creatable.type.get((({ name, ...key }) => key)(key))).toEqual(undefined)
	})
})
