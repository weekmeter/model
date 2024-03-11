import { fixtures } from "../fixtures"
import { weekmeter } from "../index"

describe("Key.Creatable", () => {
	it("is", () => {
		const key: weekmeter.Key.Creatable = fixtures.key("manager")
		expect(weekmeter.Key.Creatable.is(key)).toEqual(true)
		expect(weekmeter.Key.Creatable.is((({ name, ...key }) => key)(key))).toEqual(false)
		expect(weekmeter.Key.Creatable.type.get(key)).toEqual(key)
		expect(weekmeter.Key.Creatable.type.get((({ name, ...key }) => key)(key))).toEqual(undefined)
	})
})
