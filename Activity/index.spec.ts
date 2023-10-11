import * as fixtures from "../fixtures"
import { weekmeter } from "../index"

describe("activity", () => {
	it("is", () => {
		const activity = fixtures.getActivity()
		expect(weekmeter.Activity.is(activity)).toEqual(true)
		expect(weekmeter.Activity.is((({ name, ...activity }) => activity)(activity))).toEqual(false)
		expect(weekmeter.Activity.is({ ...activity, from: "Test" })).toEqual(false)
	})
})
