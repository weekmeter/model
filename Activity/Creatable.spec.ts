import { fixtures } from "../fixtures"
import { weekmeter } from "../index"

describe("Activity.Creatable", () => {
	it("is", () => {
		const creatable = fixtures.activity.creatable()
		expect(weekmeter.Activity.Creatable.is(creatable)).toEqual(true)
		expect(weekmeter.Activity.Creatable.is((({ name, ...creatable }) => creatable)(creatable))).toEqual(false)
		expect(weekmeter.Activity.Creatable.is({ ...creatable, name: 123 })).toEqual(false)
	})

	it("get", () => {
		const creatable = { ...fixtures.activity.creatable(), from: "TEsting" }
		expect(weekmeter.Activity.Creatable.type.get(creatable)).toEqual(fixtures.activity.creatable())
		expect(weekmeter.Activity.Creatable.type.get({ name: "asd" })).toEqual(undefined)
	})
	it("key", () => {
		const activity = fixtures.activity()
		expect(weekmeter.Activity.Creatable.key(activity)).toEqual("------o0|------c0|------p0|------a0")
	})
})
