import * as fixtures from "../fixtures"
import { weekmeter } from "../index"

describe("Activity", () => {
	it("is", () => {
		const activity = fixtures.getActivity()
		expect(weekmeter.Activity.is(activity)).toEqual(true)
		expect(weekmeter.Activity.is((({ name, ...activity }) => activity)(activity))).toEqual(false)
		expect(weekmeter.Activity.is({ ...activity, name: 123 })).toEqual(false)
	})

	it("get", () => {
		const activity = { ...fixtures.getActivity(), from: "TEsting" }
		expect(weekmeter.Activity.type.get(activity)).toEqual(fixtures.getActivity())
		expect(weekmeter.Activity.type.get({ name: "asd" })).toEqual(undefined)
	})
})

describe("Creatable", () => {
	it("is", () => {
		const creatable = fixtures.getActivity.creatable()
		expect(weekmeter.Activity.Creatable.is(creatable)).toEqual(true)
		expect(weekmeter.Activity.Creatable.is((({ name, ...creatable }) => creatable)(creatable))).toEqual(false)
		expect(weekmeter.Activity.Creatable.is({ ...creatable, name: 123 })).toEqual(false)
	})

	it("get", () => {
		const creatable = { ...fixtures.getActivity.creatable(), from: "TEsting" }
		expect(weekmeter.Activity.Creatable.type.get(creatable)).toEqual(fixtures.getActivity.creatable())
		expect(weekmeter.Activity.Creatable.type.get({ name: "asd" })).toEqual(undefined)
	})
})
