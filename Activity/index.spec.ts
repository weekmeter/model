import * as fixtures from "../fixtures"
import { weekmeter } from "../index"

describe("activity", () => {
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
